(() => {
  const config = window.SITE_CONFIG || {};
  const imageRoot = 'public/images/portfolio/';
  const portfolio = [
    {
      id: 'elefante-flores',
      image: 'elefante-flores.webp',
      title: 'Elefante com flores',
      description: 'Elefante de traço fino integrado a uma composição floral.',
      alt: 'Tatuagem de elefante em traço fino cercado por flores',
      categories: ['floral', 'ilustrativa'],
      categoryLabel: 'Floral · Ilustrativa',
      width: 1229,
      height: 1536,
      layout: 'gallery-elephant',
      position: 'center 34%'
    },
    {
      id: 'no-ordinary-love',
      image: 'no-ordinary-love.webp',
      title: 'No ordinary love',
      description: 'Lettering delicado ao longo das costas.',
      alt: 'Frase No ordinary love escrita ao longo das costas',
      categories: ['delicada', 'lettering'],
      categoryLabel: 'Lettering',
      width: 1152,
      height: 1536,
      layout: 'gallery-script',
      position: 'center 35%'
    },
    {
      id: 'lobo-flores',
      image: 'lobo-flores.webp',
      title: 'Lobo e flores',
      description: 'Retrato de lobo em traço fino acompanhado por flores.',
      alt: 'Retrato de lobo em traço fino acompanhado por flores',
      categories: ['floral', 'ilustrativa'],
      categoryLabel: 'Floral · Ilustrativa',
      width: 1152,
      height: 1536,
      layout: 'gallery-wolf',
      position: 'center 38%'
    },
    {
      id: 'figura-ornamental',
      image: 'figura-ornamental.webp',
      detail: 'detalhe-ornamental.webp',
      title: 'Figura ornamental',
      description: 'Figura clássica com ornamentos, geometria e escrita.',
      alt: 'Figura clássica com os olhos vendados, ornamentos, geometria e escrita',
      detailAlt: 'Detalhe de linhas geométricas e lettering na composição ornamental',
      categories: ['ornamental'],
      categoryLabel: 'Ornamental',
      width: 1152,
      height: 1536,
      layout: 'gallery-ornamental',
      position: 'center 40%'
    },
    {
      id: 'flor-geometrica',
      image: 'flor-geometrica.webp',
      title: 'Flor e eixo geométrico',
      description: 'Flor de traço fino atravessada por um eixo vertical.',
      alt: 'Flor de traço fino atravessada por um eixo geométrico vertical',
      categories: ['floral', 'ornamental'],
      categoryLabel: 'Floral · Ornamental',
      width: 1152,
      height: 1536,
      layout: 'gallery-lotus',
      position: 'center 48%'
    },
    {
      id: 'pequeno-principe',
      image: 'pequeno-principe.webp',
      title: 'Pequeno Príncipe',
      description: 'Pequeno Príncipe sentado sobre um planeta com estrelas ao redor.',
      alt: 'Pequeno Príncipe sentado sobre um planeta com estrelas ao redor',
      categories: ['ilustrativa', 'delicada'],
      categoryLabel: 'Ilustrativa',
      width: 1152,
      height: 1536,
      layout: 'gallery-prince',
      position: 'center 45%'
    },
    {
      id: 'um-doce',
      image: 'mini-tattoo.webp',
      title: 'Um doce',
      description: 'Rosto estilizado com óculos escuros e lettering.',
      alt: 'Pequeno rosto estilizado com óculos escuros e a frase um doce',
      categories: ['delicada', 'lettering'],
      categoryLabel: 'Mini tattoo · Lettering',
      width: 1152,
      height: 1536,
      layout: 'gallery-mini',
      position: 'center 42%'
    },
    {
      id: 'composicao-floral',
      image: 'composicao-floral.webp',
      title: 'Composição floral',
      description: 'Detalhe de flores em linhas delicadas e pontilhismo.',
      alt: 'Detalhe aproximado de flores tatuadas com linhas e pontilhismo',
      categories: ['floral'],
      categoryLabel: 'Floral',
      width: 1536,
      height: 864,
      layout: 'gallery-flower',
      position: 'center 50%'
    }
  ];

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menuButton.setAttribute('aria-label', open ? 'Abrir menu' : 'Fechar menu');
    nav.classList.toggle('is-open', !open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
    nav.classList.remove('is-open');
  }));

  const gallery = document.querySelector('#gallery');
  const galleryNavigation = document.querySelector('#gallery-navigation');
  const galleryPosition = document.querySelector('#gallery-position');
  const previousWorkButton = document.querySelector('#gallery-previous');
  const nextWorkButton = document.querySelector('#gallery-next');
  const savedGallery = document.querySelector('#saved-gallery');
  const galleryCount = document.querySelector('#gallery-count');
  const galleryEmpty = document.querySelector('#gallery-empty');
  const savedCount = document.querySelector('#saved-count');
  const collection = document.querySelector('#saved-collection');
  const collectionToggle = document.querySelector('#collection-toggle');
  const collectionEmpty = document.querySelector('#collection-empty');
  const storageNote = document.querySelector('#storage-note');
  const filters = [...document.querySelectorAll('.filter-button')];
  let activeFilter = 'all';
  let activeWorkId = portfolio[0].id;
  let storageAvailable = true;
  let savedIds = [];

  try {
    const stored = JSON.parse(localStorage.getItem('hemily-saved-work') || '[]');
    if (Array.isArray(stored)) savedIds = stored.filter(id => portfolio.some(work => work.id === id));
  } catch {
    storageAvailable = false;
    storageNote.textContent = 'O navegador não permitiu acessar a coleção salva.';
  }

  function makeCard(work, savedView = false) {
    const article = document.createElement('article');
    article.className = `gallery-item ${work.layout}`;
    article.dataset.category = work.categories.join(' ');
    article.dataset.workId = work.id;
    const openButton = document.createElement('button');
    openButton.className = 'gallery-open';
    openButton.type = 'button';
    openButton.setAttribute('aria-label', `Ampliar tatuagem: ${work.title}`);
    openButton.dataset.openWork = work.id;
    const image = document.createElement('img');
    image.src = imageRoot + work.image;
    image.alt = work.alt;
    image.width = work.width;
    image.height = work.height;
    image.loading = 'lazy';
    image.style.objectPosition = work.position;
    image.addEventListener('error', () => {
      image.hidden = true;
      openButton.disabled = true;
      openButton.setAttribute('aria-label', `Imagem indisponível: ${work.title}`);
      const unavailable = document.createElement('span');
      unavailable.className = 'gallery-image-error';
      unavailable.textContent = 'Não foi possível carregar esta imagem.';
      openButton.append(unavailable);
    }, { once: true });
    const caption = document.createElement('span');
    caption.className = 'gallery-caption';
    caption.append(document.createTextNode(work.title));
    const category = document.createElement('small');
    category.textContent = work.categoryLabel;
    caption.append(category);
    openButton.append(image, caption);
    const saveButton = document.createElement('button');
    const isSaved = savedIds.includes(work.id);
    saveButton.className = 'gallery-save';
    saveButton.type = 'button';
    saveButton.dataset.saveWork = work.id;
    saveButton.setAttribute('aria-pressed', String(isSaved));
    saveButton.setAttribute('aria-label', `${isSaved ? 'Remover' : 'Salvar'} ${work.title} ${isSaved ? 'da' : 'na'} coleção`);
    saveButton.textContent = savedView ? 'Remover' : isSaved ? 'Salvo' : 'Salvar';
    if (savedView) saveButton.classList.add('is-saved-view');
    article.append(openButton, saveButton);
    return article;
  }

  function currentWorks() {
    return activeFilter === 'all'
      ? portfolio
      : portfolio.filter(work => work.categories.includes(activeFilter));
  }

  function updateGalleryOrbit(works) {
    const activeIndex = works.findIndex(work => work.id === activeWorkId);
    const total = works.length;
    if (!total) {
      galleryPosition.textContent = '';
      previousWorkButton.disabled = true;
      nextWorkButton.disabled = true;
      galleryNavigation.hidden = true;
      return;
    }

    works.forEach((work, index) => {
      let offset = (index - activeIndex + total) % total;
      if (offset > total / 2) offset -= total;

      const card = gallery.children[index];
      const selected = offset === 0;
      card.dataset.orbitPosition = String(offset);
      card.setAttribute('aria-label', `${index + 1} de ${total}: ${work.title}`);
      card.setAttribute('aria-hidden', String(!selected));
      card.querySelector('.gallery-open').tabIndex = selected ? 0 : -1;
      card.querySelector('.gallery-save').hidden = !selected;
    });

    galleryPosition.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
    galleryPosition.setAttribute('aria-label', `Trabalho ${activeIndex + 1} de ${total}: ${works[activeIndex].title}`);
    previousWorkButton.disabled = total < 2;
    nextWorkButton.disabled = total < 2;
    galleryNavigation.hidden = total === 0;
  }

  function renderGallery() {
    const works = currentWorks();
    if (!works.some(work => work.id === activeWorkId)) activeWorkId = works[0]?.id || '';
    gallery.replaceChildren(...works.map(work => makeCard(work)));
    gallery.hidden = works.length === 0;
    galleryEmpty.hidden = works.length > 0;
    galleryCount.textContent = `${works.length} ${works.length === 1 ? 'trabalho' : 'trabalhos'}`;
    updateGalleryOrbit(works);
    renderSaved();
  }

  function moveGallery(direction) {
    const works = currentWorks();
    if (works.length < 2) return;
    const restoreCardFocus = gallery.contains(document.activeElement);
    const index = works.findIndex(work => work.id === activeWorkId);
    activeWorkId = works[(index + direction + works.length) % works.length].id;
    updateGalleryOrbit(works);
    if (restoreCardFocus) gallery.querySelector(`[data-work-id="${activeWorkId}"] .gallery-open`)?.focus();
  }

  function renderSaved() {
    const works = savedIds.map(id => portfolio.find(work => work.id === id)).filter(Boolean);
    savedCount.textContent = String(works.length);
    collectionEmpty.hidden = works.length > 0;
    savedGallery.hidden = works.length === 0;
    savedGallery.replaceChildren(...works.map(work => makeCard(work, true)));
  }

  filters.forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    renderGallery();
  }));

  previousWorkButton.addEventListener('click', () => moveGallery(-1));
  nextWorkButton.addEventListener('click', () => moveGallery(1));
  gallery.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    moveGallery(event.key === 'ArrowRight' ? 1 : -1);
  });

  function toggleSaved(id, savedView = false) {
    savedIds = savedIds.includes(id)
      ? savedIds.filter(savedId => savedId !== id)
      : [...savedIds, id];
    try {
      localStorage.setItem('hemily-saved-work', JSON.stringify(savedIds));
      storageAvailable = true;
      storageNote.textContent = '';
    } catch {
      storageAvailable = false;
      storageNote.textContent = 'A coleção está disponível nesta visita, mas o navegador não conseguiu salvá-la para depois.';
    }
    renderGallery();
    const restoredButton = savedView
      ? savedGallery.querySelector(`[data-save-work="${id}"]`) || collectionToggle
      : gallery.querySelector(`[data-save-work="${id}"]`);
    restoredButton?.focus();
    if (!storageAvailable) storageNote.textContent = 'A coleção está disponível nesta visita, mas o navegador não conseguiu salvá-la para depois.';
  }

  document.addEventListener('click', event => {
    const saveButton = event.target.closest('[data-save-work]');
    if (saveButton) {
      toggleSaved(saveButton.dataset.saveWork, Boolean(saveButton.closest('#saved-gallery')));
      return;
    }
    const openButton = event.target.closest('[data-open-work]');
    if (openButton) openWork(openButton.dataset.openWork);
  });

  collectionToggle.addEventListener('click', () => {
    const open = collectionToggle.getAttribute('aria-expanded') === 'true';
    collectionToggle.setAttribute('aria-expanded', String(!open));
    collection.hidden = open;
    if (!open) collection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
  document.querySelector('#collection-close').addEventListener('click', () => {
    collection.hidden = true;
    collectionToggle.setAttribute('aria-expanded', 'false');
    collectionToggle.focus();
  });

  const dialog = document.querySelector('#lightbox');
  const lightboxImage = document.querySelector('#lightbox-image');
  const lightboxCaption = document.querySelector('#lightbox-caption');
  const lightboxDescription = document.querySelector('#lightbox-description');
  const detailButton = document.querySelector('.lightbox-detail');
  let activeWorks = [];
  let activeIndex = 0;
  let showingDetail = false;

  function setLightboxWork(work) {
    showingDetail = false;
    lightboxImage.src = imageRoot + work.image;
    lightboxImage.alt = work.alt;
    lightboxImage.width = work.width;
    lightboxImage.height = work.height;
    lightboxCaption.textContent = work.title;
    lightboxDescription.textContent = work.description;
    detailButton.hidden = !work.detail;
    detailButton.textContent = 'Ver detalhe da composição';
  }

  function showItem(index) {
    if (!activeWorks.length) return;
    activeIndex = (index + activeWorks.length) % activeWorks.length;
    setLightboxWork(activeWorks[activeIndex]);
  }

  function openWork(id) {
    activeWorks = currentWorks();
    activeIndex = activeWorks.findIndex(work => work.id === id);
    if (activeIndex < 0) return;
    if (gallery.querySelector(`[data-work-id="${id}"]`)) {
      activeWorkId = id;
      updateGalleryOrbit(activeWorks);
    }
    setLightboxWork(activeWorks[activeIndex]);
    if (!dialog.open) dialog.showModal();
  }

  document.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
  document.querySelector('.lightbox-prev').addEventListener('click', () => showItem(activeIndex - 1));
  document.querySelector('.lightbox-next').addEventListener('click', () => showItem(activeIndex + 1));
  detailButton.addEventListener('click', () => {
    const work = activeWorks[activeIndex];
    if (!work?.detail) return;
    showingDetail = !showingDetail;
    lightboxImage.src = imageRoot + (showingDetail ? work.detail : work.image);
    lightboxImage.alt = showingDetail ? work.detailAlt : work.alt;
    lightboxImage.width = work.width;
    lightboxImage.height = work.height;
    detailButton.textContent = showingDetail ? 'Voltar à composição' : 'Ver detalhe da composição';
  });
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  document.addEventListener('keydown', event => {
    if (!dialog.open) return;
    if (event.key === 'ArrowRight') showItem(activeIndex + 1);
    if (event.key === 'ArrowLeft') showItem(activeIndex - 1);
  });

  document.querySelectorAll('.faq-list details').forEach(detail => detail.addEventListener('toggle', () => {
    if (detail.open) document.querySelectorAll('.faq-list details').forEach(other => { if (other !== detail) other.open = false; });
  }));

  const form = document.querySelector('#booking-form');
  const formStatus = document.querySelector('#form-status');
  const formSteps = [...form.querySelectorAll('.form-step')];
  const progressItems = [...form.querySelectorAll('.form-progress li')];
  const summary = document.querySelector('#request-summary');
  const whatsappFallback = document.querySelector('#whatsapp-fallback');
  let activeStep = 0;

  function showStep(index) {
    activeStep = index;
    formSteps.forEach((step, stepIndex) => { step.hidden = stepIndex !== index; });
    progressItems.forEach((item, stepIndex) => {
      if (stepIndex === index) item.setAttribute('aria-current', 'step');
      else item.removeAttribute('aria-current');
      item.classList.toggle('is-complete', stepIndex < index);
    });
    formStatus.textContent = '';
    whatsappFallback.hidden = true;
  }

  function validateStep(index) {
    const requiredFields = [...formSteps[index].querySelectorAll('[required]')];
    const invalidField = requiredFields.find(field => !field.checkValidity());
    if (!invalidField) return true;
    invalidField.reportValidity();
    invalidField.focus();
    return false;
  }

  function formatDate(value) {
    if (!value) return '';
    const [year, month, day] = value.split('-');
    return `${day}/${month}/${year}`;
  }

  function formValues() {
    const values = Object.fromEntries(new FormData(form).entries());
    values.date = formatDate(values.date);
    return values;
  }

  function renderSummary() {
    const values = formValues();
    const rows = [
      ['Nome', values.name],
      ['Telefone', values.phone],
      ['Ideia', values.idea],
      ['Local do corpo', values.bodyLocation],
      ['Tamanho aproximado', values.size],
      ['Estilo ou referência', values.style],
      ['Data de preferência', values.date]
    ].filter(([, value]) => value);
    summary.replaceChildren();
    rows.forEach(([label, value]) => {
      const term = document.createElement('dt');
      const detail = document.createElement('dd');
      term.textContent = label;
      detail.textContent = value;
      summary.append(term, detail);
    });
  }

  form.querySelectorAll('.step-next').forEach(button => button.addEventListener('click', () => {
    if (!validateStep(activeStep)) return;
    if (activeStep === 1) renderSummary();
    showStep(Math.min(activeStep + 1, formSteps.length - 1));
    formSteps[activeStep].querySelector('input, textarea, button')?.focus();
  }));
  form.querySelectorAll('.step-back').forEach(button => button.addEventListener('click', () => {
    showStep(Math.max(activeStep - 1, 0));
    formSteps[activeStep].querySelector('input, textarea, button')?.focus();
  }));
  form.addEventListener('input', () => { formStatus.textContent = ''; });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (activeStep !== 2) return;
    if (!validateStep(0) || !validateStep(1)) {
      const firstInvalidStep = formSteps.findIndex(step => [...step.querySelectorAll('[required]')].some(field => !field.checkValidity()));
      showStep(firstInvalidStep);
      formSteps[firstInvalidStep].querySelector('[required]:invalid')?.focus();
      return;
    }
    const values = formValues();
    const messageParts = [
      `Olá! Meu nome é ${values.name}.`,
      `Meu contato: ${values.phone}.`,
      `Minha ideia: ${values.idea}.`,
      values.bodyLocation && `Local do corpo: ${values.bodyLocation}.`,
      values.size && `Tamanho aproximado: ${values.size}.`,
      values.style && `Estilo/referência: ${values.style}.`,
      values.date && `Data de preferência: ${values.date}.`
    ].filter(Boolean);
    const message = messageParts.join('\n');
    const number = (config.whatsappNumber || '').replace(/\D/g, '');
    if (number) {
      const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
      whatsappFallback.href = url;
      whatsappFallback.hidden = false;
      window.open(url, '_blank', 'noopener,noreferrer');
      formStatus.textContent = 'A mensagem está pronta no WhatsApp. Revise e envie por lá. Se a nova aba não abriu, use o link abaixo.';
      return;
    }
    if (navigator.share) {
      try {
        await navigator.share({ title: 'Pedido de orçamento, Hemily Christie Tattoo', text: message });
        formStatus.textContent = 'Mensagem compartilhada. Nenhum dado foi enviado ao site.';
        return;
      } catch (error) {
        if (error.name === 'AbortError') return;
      }
    }
    try {
      await navigator.clipboard.writeText(message);
      formStatus.textContent = 'Mensagem copiada. Cole-a no canal de contato para continuar a conversa.';
    } catch {
      formStatus.textContent = 'Não foi possível compartilhar ou copiar a mensagem neste navegador.';
    }
  });

  if (!config.whatsappNumber) {
    document.querySelector('#form-help').textContent = 'Você revisará a mensagem antes de compartilhá-la. O canal oficial de contato ainda precisa ser configurado.';
  }
  document.querySelector('#year').textContent = new Date().getFullYear();
  renderGallery();
})();
