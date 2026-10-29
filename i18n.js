(() => {
  const translations = {
    'Idioma': ['Language', '言語'], 'Idioma do site': ['Website language', 'サイトの言語'], 'Escolher idioma': ['Choose language', '言語を選択'], 'Escolha seu idioma': ['Choose your language', '言語を選択'], 'Pular para o conteúdo': ['Skip to content', '本文へ移動'], 'Abrir menu': ['Open menu', 'メニューを開く'], 'Fechar menu': ['Close menu', 'メニューを閉じる'], 'Navegação principal': ['Main navigation', 'メインナビゲーション'], 'Filtrar trabalhos por estilo': ['Filter work by style', 'スタイルで作品を絞り込む'], 'Navegar pelos trabalhos': ['Browse the work', '作品を閲覧'], 'Ver trabalho anterior': ['View previous work', '前の作品を見る'], 'Ver próximo trabalho': ['View next work', '次の作品を見る'], 'Trabalhos de Hemily Christie': ['Work by Hemily Christie', 'Hemily Christie の作品'], 'Fechar imagem': ['Close image', '画像を閉じる'], 'Imagem anterior': ['Previous image', '前の画像'], 'Próxima imagem': ['Next image', '次の画像'], 'Visualização ampliada da tatuagem': ['Enlarged tattoo view', 'タトゥーの拡大表示'], 'Hemily Christie Tattoo, início': ['Hemily Christie Tattoo, home', 'Hemily Christie Tattoo、トップ'],
    'Portfólio': ['Portfolio', '作品'], 'Sobre': ['About', 'プロフィール'], 'Processo': ['Process', '制作の流れ'], 'Dúvidas': ['FAQ', 'よくある質問'], 'Conversar': ['Get in touch', '相談する'],
    'Tatuagem autoral': ['Custom tattoos', 'オーダーメイドタトゥー'], 'Uma história sua.': ['Your story.', 'あなたの物語。'], 'Uma arte na pele.': ['Art on your skin.', '肌に刻むアート。'],
    'Ideias, símbolos e sentimentos encontram forma em uma tatuagem pensada para acompanhar você.': ['Ideas, symbols, and feelings take shape in a tattoo made to be part of your story.', 'アイデアやシンボル、想いを、あなたと歩むタトゥーに。'],
    'Vamos conversar sobre sua ideia': ["Let's talk about your idea", 'アイデアについて相談する'], 'Explorar trabalhos': ['Explore the work', '作品を見る'], 'TRAÇO · FORMA · SIGNIFICADO': ['LINE · FORM · MEANING', '線 · かたち · 意味'], 'PORTFÓLIO AUTORAL': ['ORIGINAL WORK', 'オリジナル作品'],
    'Uma ideia, muitos caminhos.': ['One idea, many possibilities.', 'ひとつのアイデアから広がる可能性。'], 'Trabalho autoral': ['Original work', 'オリジナル作品'], 'O que fica com você': ['What stays with you', 'あなたに残るもの'], 'Mais do que um desenho,': ['More than a drawing,', 'ただの絵ではなく、'], 'uma forma de se expressar.': ['a way to express yourself.', '自分を表現するかたち。'], 'Cada traço começa com uma conversa. O significado é seu; a composição, feita para contar essa história na pele.': ['Every line begins with a conversation. The meaning is yours; the design is made to tell that story on your skin.', 'すべての線は会話から始まります。意味はあなたのもの。その物語を肌に描くデザインを一緒に作ります。'],
    'Um recorte do meu trabalho': ['A selection of my work', '作品の一部をご紹介'], 'Feitas para': ['Made to', 'ずっと'], 'ficar.': ['stay.', '残る。'], 'Peças autorais que partem de referências, memórias e pequenos detalhes.': ['Original pieces inspired by references, memories, and little details.', '参考にしたいイメージや思い出、小さなディテールから生まれる作品。'],
    'Todos': ['All', 'すべて'], 'Floral': ['Floral', '植物'], 'Ornamental': ['Ornamental', 'オーナメンタル'], 'Ilustrativa': ['Illustrative', 'イラスト'], 'Delicada': ['Fine line', '繊細なライン'], 'Lettering': ['Lettering', 'レタリング'], 'Minha coleção': ['My collection', 'お気に入り'], 'Fechar coleção': ['Close collection', 'お気に入りを閉じる'], 'Referências que você guardou': ['Your saved references', '保存した参考作品'], 'Você ainda não salvou nenhum trabalho. Use “Salvar” em uma peça para guardá-la aqui.': ['You haven’t saved any work yet. Select “Save” on a piece to keep it here.', '保存した作品はまだありません。作品の「保存」を選ぶと、ここに追加されます。'], 'Use as setas para percorrer as peças. Amplie a peça central ou guarde-a na sua coleção.': ['Use the arrows to browse. Enlarge the center piece or save it to your collection.', '矢印で作品を閲覧できます。中央の作品を拡大したり、お気に入りに保存したりできます。'],
    'Linguagens que se encontram': ['Styles that come together', '交わるスタイル'], 'Um traço para': ['A style for', 'アイデアに合わせた'], 'cada ideia.': ['every idea.', 'ひとつの線。'], 'O ponto de partida é o que você quer levar consigo. A forma nasce desse encontro.': ['It starts with what you want to carry with you. The design grows from there.', 'あなたが大切にしたいものから始まり、そこからデザインが生まれます。'], 'Floral e botânica': ['Floral and botanical', 'フローラル・ボタニカル'], 'Formas orgânicas, pétalas e composições que acompanham o corpo.': ['Organic shapes, petals, and compositions designed to flow with the body.', '有機的な形や花びらを、身体の流れに沿う構図に。'], 'Ver trabalhos florais': ['View floral work', 'フローラル作品を見る'], 'Detalhe de tatuagem floral': ['Floral tattoo detail', 'フローラルタトゥーのディテール'], 'Geometria, símbolos e linhas que se organizam em uma composição única.': ['Geometry, symbols, and lines arranged in a one-of-a-kind composition.', '幾何学やシンボル、ラインを組み合わせた一点ものの構図。'], 'Ver trabalhos ornamentais': ['View ornamental work', 'オーナメンタル作品を見る'], 'Detalhe de tatuagem ornamental': ['Ornamental tattoo detail', 'オーナメンタルタトゥーのディテール'], 'Personagens, animais e referências transformados em imagem na pele.': ['Characters, animals, and references brought to life on skin.', 'キャラクターや動物、イメージを肌の上のアートに。'], 'Ver trabalhos ilustrativos': ['View illustrative work', 'イラスト作品を見る'], 'Detalhe de tatuagem ilustrativa de lobo': ['Illustrative wolf tattoo detail', 'オオカミのイラストタトゥー'], 'Pequenos símbolos e palavras com espaço para respirar.': ['Small symbols and words with room to breathe.', '余白を大切にした小さなシンボルや言葉。'], 'Ver trabalhos delicados': ['View fine-line work', '繊細なラインの作品を見る'], 'Detalhe de lettering delicado': ['Fine-line lettering detail', '繊細なレタリングのディテール'],
    'Um espaço para a sua ideia': ['A space for your idea', 'あなたのアイデアをかたちに'], 'A arte de transformar': ['The art of turning', 'アイデアを線にする'], 'ideias em traços.': ['ideas into lines.', 'アート。'], 'Cada tatuagem começa com uma ideia. Meu trabalho é explorar essa ideia com cuidado, entender o que ela representa para você e transformar referências e significados em uma composição que faça sentido na sua pele.': ['Every tattoo begins with an idea. I take the time to understand what it means to you, then turn your references and story into a composition that feels right on your skin.', 'すべてのタトゥーはアイデアから始まります。その意味を丁寧に伺い、参考イメージや想いを、あなたの肌に馴染む構図へと仕上げます。'], 'Tatuadora responsável pelos trabalhos do estúdio': ['Tattoo artist', 'タトゥーアーティスト'], 'Do primeiro contato à sessão': ['From first contact to your session', 'お問い合わせから施術まで'], 'Vamos por': ["Let's take it", '一歩ずつ'], 'etapas.': ['step by step.', '進めましょう。'], 'Você não precisa chegar com tudo decidido. A conversa ajuda a organizar a ideia.': ['You don’t need to have everything figured out. We’ll shape the idea together.', 'すべてを決めてから来なくても大丈夫。お話ししながら一緒に整理します。'], 'Ideia e referências': ['Idea and references', 'アイデアと参考イメージ'], 'Conte o que imaginou, onde gostaria de tatuar e o tamanho aproximado. Uma referência ajuda, mas não precisa estar pronta.': ['Tell me what you have in mind, where you’d like the tattoo, and the approximate size. References help, but they’re not required.', 'イメージや場所、おおよそのサイズをお聞かせください。参考画像があれば役立ちますが、なくても大丈夫です。'], 'Alinhamento da proposta': ['Planning the design', 'デザインのご相談'], 'Conversamos sobre a composição e os detalhes necessários para que a ideia funcione na pele.': ['We’ll discuss the composition and details needed to make the idea work on skin.', 'アイデアが肌に映えるよう、構図や必要なディテールを一緒に考えます。'], 'Agendamento e sessão': ['Booking and session', 'ご予約と施術'], 'Com a proposta alinhada, você recebe as informações para combinar o atendimento.': ['Once the design is agreed on, you’ll get the details to arrange your session.', 'デザインが決まったら、施術日程のご案内をお送りします。'],
    'Com atenção em cada etapa': ['Care at every step', 'すべてのステップを丁寧に'], 'Uma experiência': ['An experience that feels', '丁寧で穏やかな'], 'cuidadosa e tranquila.': ['considered and calm.', '体験を。'], 'A sua ideia merece tempo e escuta. Por isso, cada atendimento começa com uma conversa clara sobre a proposta e os próximos passos.': ['Your idea deserves time and care. Every appointment begins with a clear conversation about the design and what comes next.', 'あなたのアイデアに、時間をかけて耳を傾けます。施術の内容と次のステップを、まず丁寧にご説明します。'], 'Entenda como funciona': ['See how it works', '詳しく見る'], 'Antes de começar': ['Before we begin', 'ご相談の前に'], 'Dúvidas que': ['Questions you', 'よくある'], 'podem surgir.': ['may have.', 'ご質問'], 'Se ainda faltar alguma resposta, podemos conversar sobre a sua ideia.': ['If you still have questions, let’s talk about your idea.', 'ほかにもご質問があれば、アイデアについてぜひご相談ください。'],
    'Como faço para pedir um orçamento?': ['How do I request a quote?', '見積もりを依頼するには？'], 'Conte a ideia, o local do corpo e o tamanho aproximado pelo formulário. A conversa ajuda a entender os detalhes da proposta.': ['Share your idea, placement, and approximate size using the form. We’ll discuss the details together.', 'フォームからアイデアや場所、おおよそのサイズをお知らせください。詳細はご相談しながら決めていきます。'], 'Posso enviar referências?': ['Can I share references?', '参考画像を送れますか？'], 'Sim. Você pode compartilhar imagens que ajudem a explicar o que imaginou. Elas servem como ponto de partida para uma criação autoral.': ['Yes. Images can help explain what you have in mind. They’re a starting point for an original design.', 'はい。イメージを伝える画像をお送りいただけます。オリジナルデザインを作るための参考にします。'], 'Como escolho o local e o tamanho?': ['How do I choose the placement and size?', '場所やサイズはどう決めますか？'], 'Se ainda não souber, tudo bem. Podemos conversar sobre a ideia e pensar na composição em conjunto.': ['That’s okay if you’re not sure yet. We can talk it through and plan the composition together.', 'まだ決まっていなくても大丈夫です。アイデアをお聞きしながら、一緒に構図を考えましょう。'], 'Como funciona o agendamento?': ['How does booking work?', '予約の流れを教えてください。'], 'Depois de alinhar a proposta, combinamos os próximos passos e a data do atendimento diretamente.': ['Once the design is agreed on, we’ll arrange the next steps and session date directly.', 'デザインが決まったら、次のステップと施術日を直接ご相談します。'], 'Como me preparo para a sessão?': ['How should I prepare for my session?', '施術前に準備することは？'], 'As orientações de preparação são compartilhadas antes do atendimento, de acordo com a proposta conversada.': ['Preparation guidance will be shared before your appointment, based on your design.', 'デザインに合わせた準備について、施術前にご案内します。'], 'Como recebo os cuidados posteriores?': ['How will I get aftercare instructions?', '施術後のケアについて教えてもらえますか？'], 'As orientações para depois da sessão são passadas no atendimento para que você saiba como cuidar da tatuagem.': ['You’ll receive aftercare instructions at your appointment so you know how to care for your tattoo.', '施術当日に、タトゥーのケア方法をご案内します。'],
    'Uma conversa pode começar aqui': ['Start a conversation here', 'ここからご相談ください'], 'Sua próxima tattoo': ['Your next tattoo', '次のタトゥーは'], 'começa com uma ideia.': ['starts with an idea.', 'アイデアから。'], 'Conte um pouco do que está imaginando. A gente conversa sobre os detalhes, sem pressa.': ['Tell me a little about what you have in mind. We’ll talk through the details, with no rush.', 'イメージしていることをお聞かせください。急がず、一緒に詳細を考えていきます。'], 'Etapas do pedido': ['Request steps', 'ご相談のステップ'], 'Contato': ['Contact', '連絡先'], 'Ideia': ['Idea', 'アイデア'], 'Revisão': ['Review', '確認'], 'Como podemos falar com você?': ['How can I reach you?', 'ご連絡先を教えてください'], 'Seu nome': ['Your name', 'お名前'], 'Como podemos chamar você?': ['What should I call you?', 'お名前を入力'], 'Telefone para contato': ['Phone number', '電話番号'], 'Continuar com a ideia': ['Continue with your idea', 'アイデアを続ける'], 'Conte um pouco do que imaginou.': ['Tell me a little about your idea.', 'アイデアをお聞かせください'], 'Sua ideia': ['Your idea', 'アイデア'], 'O que você gostaria de tatuar?': ['What would you like to get tattooed?', 'どんなタトゥーを入れたいですか？'], 'Local do corpo': ['Placement', '場所'], 'Ex.: braço, costela': ['e.g. arm, ribs', '例：腕、肋骨'], 'Tamanho aproximado': ['Approximate size', 'おおよそのサイズ'], 'Ex.: 8 cm': ['e.g. 8 cm', '例：8 cm'], 'Estilo ou referência': ['Style or reference', 'スタイル・参考イメージ'], 'Ex.: floral, lettering': ['e.g. floral, lettering', '例：フローラル、レタリング'], 'Data de preferência': ['Preferred date', 'ご希望の日程'], 'opcional': ['optional', '任意'], 'Voltar': ['Back', '戻る'], 'Revisar pedido': ['Review request', '内容を確認'], 'Revise antes de abrir o WhatsApp.': ['Review before opening WhatsApp.', 'WhatsAppを開く前に内容をご確認ください'], 'Voltar e editar': ['Go back and edit', '戻って編集'], 'Abrir WhatsApp para enviar': ['Open WhatsApp to send', 'WhatsAppで送信'], 'Abrir a conversa no WhatsApp': ['Open WhatsApp conversation', 'WhatsAppで会話を開く'], 'Você revisará a mensagem no WhatsApp antes de enviá-la. O pedido não confirma um agendamento.': ['You’ll review the message in WhatsApp before sending. This request does not confirm an appointment.', '送信前にWhatsAppでメッセージを確認できます。ご相談の送信は予約確定ではありません。'], 'Atendimento presencial': ['In-person appointments', '対面での施術'], 'Vamos combinar': ["Let's arrange", '場所を'], 'o encontro.': ['a meeting.', '相談しましょう。'], 'O endereço e a localização são compartilhados durante a conversa de agendamento.': ['The address and location are shared during the booking conversation.', '住所と場所は、ご予約の相談時にお知らせします。'], 'Perguntar sobre localização': ['Ask about location', '場所について問い合わせる'], 'Links do rodapé': ['Footer links', 'フッターリンク'], 'Vamos conversar': ["Let's talk", '相談する'], 'Uma história sua.': ['Your story.', 'あなたの物語。'], 'Uma arte na pele.': ['Art on your skin.', '肌に刻むアート。'], 'Voltar ao início': ['Back to top', 'トップへ戻る'], 'Idioma do site': ['Website language', 'サイトの言語'], 'Traços delicados': ['Fine lines', '繊細なライン'], 'Nenhum trabalho nesta categoria. Escolha outro filtro para continuar.': ['No work in this category. Choose another filter to continue.', 'このカテゴリーに作品はありません。別のフィルターをお選びください。'], 'Referências que você guardou': ['References you saved', '保存した参考作品'], 'Fechar coleção': ['Close collection', 'お気に入りを閉じる'], 'Trabalhos salvos': ['Saved work', '保存した作品'], 'Hemily Christie, tatuadora responsável pelos trabalhos do estúdio': ['Hemily Christie, tattoo artist behind the studio’s work', 'スタジオの作品を手がけるタトゥーアーティスト、Hemily Christie'], 'Alinhamento da proposta': ['Planning the design', 'デザインのご相談'], 'Composição floral em traço fino, fotografada de perto': ['Close-up photo of a fine-line floral tattoo composition', '繊細なラインで描かれたフローラルタトゥーのクローズアップ'], 'Detalhe de uma tatuagem de lobo com flores': ['Detail of a wolf tattoo with flowers', '花とオオカミのタトゥーのディテール'],
    'Imagens do seu dispositivo': ['Images from your device', '端末から画像を追加'],
    'As imagens serão compartilhadas pelo aparelho e não serão enviadas ao site.': ['Images are shared from your device and are not uploaded to this website.', '画像は端末から共有され、このサイトにはアップロードされません。'],
    'Autorizo o envio das respostas escritas ao Google para tradução em português.': ['I agree to send my written answers to Google for translation into Portuguese.', '入力した回答をポルトガル語に翻訳するためGoogleに送信することに同意します。'],
    'A mensagem será preparada em português do Brasil. Confira a tradução antes de compartilhar.': ['Your message will be prepared in Brazilian Portuguese. Review the translation before sharing.', 'メッセージはブラジルポルトガル語で作成されます。共有前に翻訳をご確認ください。'],
    'Referências anexadas': ['Attached references', '添付する参考画像']
  };

  const originalText = new WeakMap();
  const originalAttrs = new WeakMap();
  const picker = document.querySelector('#language-picker');
  const languageButtons = [...picker.querySelectorAll('[data-language]')];
  const languageMeta = {
    'pt-BR': { flag: '🇧🇷', name: 'Português (Brasil)', code: 'PT' },
    'en-US': { flag: '🇺🇸', name: 'English (US)', code: 'EN' },
    ja: { flag: '🇯🇵', name: '日本語', code: 'JA' }
  };
  let locale = 'pt-BR';

  function translate(root = document) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const source = originalText.get(node);
      const original = source.trim();
      if (!original) continue;
      const value = locale === 'pt-BR' ? original : translations[original]?.[locale === 'en-US' ? 0 : 1] || original;
      node.nodeValue = source.replace(original, value);
    }
    root.querySelectorAll?.('[placeholder], [aria-label], img[alt]').forEach(el => {
      if (!originalAttrs.has(el)) originalAttrs.set(el, { placeholder: el.getAttribute('placeholder'), aria: el.getAttribute('aria-label'), alt: el.getAttribute('alt') });
      const attrs = originalAttrs.get(el);
      for (const [attr, key] of [['placeholder','placeholder'],['aria-label','aria'],['alt','alt']]) {
        const value = attrs[key];
        if (!value) continue;
        const translated = locale === 'pt-BR' ? value : translations[value]?.[locale === 'en-US' ? 0 : 1] || value;
        el.setAttribute(attr, translated);
      }
    });
    document.documentElement.lang = locale;
    document.title = locale === 'pt-BR' ? 'Hemily Christie Tattoo — Uma história sua, uma arte na pele' : locale === 'en-US' ? 'Hemily Christie Tattoo — Your story, art on your skin' : 'Hemily Christie Tattoo — あなたの物語を肌に刻む';
    const pageMeta = {
      'pt-BR': ['Tatuagens autorais de Hemily Christie. Fine line, composições florais e ornamentais feitas a partir da sua história.', 'Hemily Christie Tattoo — uma história sua, uma arte na pele', 'Um portfólio de tatuagens autorais, pensadas com cuidado para acompanhar a sua história.'],
      'en-US': ['Original tattoos by Hemily Christie. Fine-line, floral, and ornamental compositions shaped around your story.', 'Hemily Christie Tattoo — Your story, art on your skin', 'A portfolio of original tattoos, thoughtfully designed to be part of your story.'],
      ja: ['Hemily Christieによるオリジナルタトゥー。あなたの物語から生まれる、繊細なラインやフローラル、オーナメンタルのデザイン。', 'Hemily Christie Tattoo — あなたの物語を肌に刻む', 'あなたの物語に寄り添う、丁寧にデザインされたオリジナルタトゥーのポートフォリオ。']
    }[locale];
    document.querySelector('meta[name="description"]').content = pageMeta[0];
    document.querySelector('meta[property="og:title"]').content = pageMeta[1];
    document.querySelector('meta[property="og:description"]').content = pageMeta[2];
  }

  window.siteLocale = () => locale;
  window.tattooTranslate = translate;
  let savedLanguage = 'pt-BR';
  try { savedLanguage = localStorage.getItem('hemily-language') || savedLanguage; } catch {}
  locale = ['pt-BR', 'en-US', 'ja'].includes(savedLanguage) ? savedLanguage : 'pt-BR';

  function updatePicker() {
    const { flag, name, code } = languageMeta[locale];
    picker.querySelector('.language-current-flag .language-flag').textContent = flag;
    picker.querySelector('.language-name').textContent = name;
    picker.querySelector('.language-current-code').textContent = code;
    languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === locale)));
  }

  updatePicker();
  languageButtons.forEach(button => button.addEventListener('click', () => {
    locale = button.dataset.language;
    updatePicker();
    picker.open = false;
    try { localStorage.setItem('hemily-language', locale); } catch {}
    translate();
    window.dispatchEvent(new Event('site-language-change'));
  }));
  document.addEventListener('click', event => {
    if (picker.open && !picker.contains(event.target)) picker.open = false;
  });
  picker.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      picker.open = false;
      picker.querySelector('summary').focus();
    }
  });
  document.addEventListener('DOMContentLoaded', () => translate());
})();
