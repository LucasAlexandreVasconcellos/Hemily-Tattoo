const fields = ['idea', 'bodyLocation', 'size', 'style'];

function reply(res, status, payload) {
  return res.status(status).json(payload);
}

function decodeHtml(value) {
  return value.replace(/&(?:amp|lt|gt|quot|#39);/g, entity => ({
    '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'"
  })[entity]);
}

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return reply(res, 405, { error: 'method_not_allowed' });
  }
  if (Number(req.headers['content-length']) > 8192) return reply(res, 413, { error: 'request_too_large' });
  if (!String(req.headers['content-type'] || '').includes('application/json')) return reply(res, 415, { error: 'json_required' });

  const origin = req.headers.origin;
  if (origin && origin !== `https://${req.headers.host}` && origin !== `http://${req.headers.host}`) {
    return reply(res, 403, { error: 'origin_not_allowed' });
  }

  const body = req.body;
  if (!body || typeof body !== 'object' || Array.isArray(body)) return reply(res, 400, { error: 'invalid_request' });
  const input = {};
  for (const field of fields) {
    const value = body[field] ?? '';
    if (typeof value !== 'string' || value.length > 1000) return reply(res, 400, { error: 'invalid_request' });
    input[field] = value.trim();
  }
  if (!input.idea) return reply(res, 400, { error: 'idea_required' });
  if (!process.env.GOOGLE_TRANSLATE_API_KEY) return reply(res, 503, { error: 'translation_unavailable' });

  const nonEmptyFields = fields.filter(field => input[field]);
  try {
    const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${encodeURIComponent(process.env.GOOGLE_TRANSLATE_API_KEY)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ q: nonEmptyFields.map(field => input[field]), target: 'pt-BR', format: 'text' })
    });
    if (!response.ok) return reply(res, 502, { error: 'translation_failed' });
    const result = await response.json();
    const translations = result?.data?.translations;
    if (!Array.isArray(translations) || translations.length !== nonEmptyFields.length || translations.some(item => typeof item?.translatedText !== 'string')) {
      return reply(res, 502, { error: 'translation_failed' });
    }
    const translatedFields = Object.fromEntries(fields.map(field => [field, '']));
    nonEmptyFields.forEach((field, index) => { translatedFields[field] = decodeHtml(translations[index].translatedText); });
    return reply(res, 200, { translations: translatedFields });
  } catch {
    return reply(res, 502, { error: 'translation_failed' });
  }
};
