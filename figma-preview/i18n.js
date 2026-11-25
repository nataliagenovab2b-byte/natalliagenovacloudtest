const language = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'ru';
const languageSwitch = document.querySelector('.lang-switch');
if (languageSwitch) {
  languageSwitch.textContent = language === 'en' ? 'RU' : 'EN';
  languageSwitch.href = language === 'en' ? '?lang=ru' : '?lang=en';
  languageSwitch.lang = language === 'en' ? 'ru' : 'en';
  languageSwitch.setAttribute('aria-label', language === 'en' ? 'Переключить на русский' : 'Switch to English');
}
if (language === 'en') {
  document.documentElement.lang = 'en';
  const set = (selector, value, html = false) => {
    const element = document.querySelector(selector);
    if (element) element[html ? 'innerHTML' : 'textContent'] = value;
  };
  const setMany = (selector, values) => document.querySelectorAll(selector).forEach((element, index) => { if (values[index] !== undefined) element.textContent = values[index]; });
  setMany('.main-nav a', ['Areas of support', 'My approach', 'About me', 'My services', 'Client stories']);
  setMany('.mobile-nav a', ['Areas of support', 'My approach', 'About me', 'My services', 'Client stories', 'Contact']);
  set('.footer-brand strong', 'Natallia Genova');
  set('.footer-brand p', 'Your trusted person in German medicine');
  setMany('.footer-main nav:first-of-type a', ['Areas of support', 'My approach', 'About me', 'My services', 'Patient stories']);
  setMany('.footer-bottom p', [
    'Mentioned services cover organisation and coordination only. Diagnosis, the prescribing of treatment and other medical decisions are handled by doctors and medical institutions.',
    '© 2009-2026 Natallia Genova · Private Medical Guidance'
  ]);
  if (document.body.dataset.page === 'home') {
    document.title = 'Natallia Genova — Your private medical guidance in Germany';
    set('#hero-title', 'Your private medical guidance in Germany');
    set('.hero-copy > p', 'Independent guidance based on your needs. Help finding the right specialists and arranging medical care in Germany, with one person to turn to throughout the process.');
    setMany('.hero-copy .button, .contact .button', ['Ask me on WA ↗', 'Message on WhatsApp →']);
    setMany('main .eyebrow', ['01 / Areas of support','02 / My approach','04 / How I work','05 / About me','06 / Services','07 / Client stories','08 / Contact']);
    set('#services-title', 'Common reasons for help');
    setMany('.service-grid h3', ['Diagnostics and Preventive Care','Second Opinions','Treatment and Rehabilitation','Comprehensive Care Coordination']);
    setMany('.service-grid p', [
      'Health check-ups, risk assessments and programmes focused on prevention and longevity.',
      'Finding an appropriate specialist to review a diagnosis or proposed treatment.',
      'Finding suitable specialists and clinics, and arranging consultations and the different stages of care.',
      'Helping coordinate complex medical arrangements, including healthcare needs involving several family members.'
    ]);
    set('#approach-title', 'Personal support at every step');
    const approach = [
      '<strong>Independent Guidance</strong> I explore options based on your needs, rather than limiting the search to a single clinic.',
      '<strong>First-hand knowledge of the system</strong> Over 15 years of experience working with international patients, including leading a clinic’s international department.',
      '<strong>Dedicated point of contact</strong> I coordinate the agreed arrangements and communication, so you don’t have to manage everything on your own.'
    ];
    document.querySelectorAll('.approach-points p').forEach((p,i)=>p.innerHTML=approach[i]);
    set('#process-title', 'How I guide you through the process');
    setMany('.process-steps h3', ['Understanding your situation','Planning the next steps','Arranging and coordinating']);
    setMany('.process-steps p', [
      'You tell me what you need help with. I clarify your goals, any constraints and the information or materials required.',
      'I identify the types of specialists and medical facilities to consider, and the sequence of steps.',
      'I coordinate the agreed consultations, examinations and communication with specialists.'
    ]);
    set('#about-title', 'On your side, every step of the way');
    set('.about-copy h3', 'Natallia Genova');
    setMany('.about-copy > p:not(.eyebrow):not(.education)', [
      'My name is Natallia Genova. I personally support individuals and families with healthcare matters in Germany, from prevention and diagnostics to treatment and rehabilitation.',
      'My role is to make the healthcare process easier to navigate: to understand your situation, work out the next steps and arrange them in a calm, considered way.',
      'I have worked with international patients and German medical institutions since 2009. Leading a clinic’s international department gave me first-hand insight into how consultations, examinations and treatment are organised in Germany.',
      'I work personally, with individuals and families, helping them assess the available options, find the appropriate specialists and coordinate communication. Diagnoses and treatment decisions remain the responsibility of doctors.'
    ]);
    set('.education', 'Working in international healthcare since 2009');
    set('#formats-title', 'Guidance tailored to your needs');
    setMany('.format-grid h3', ['Initial review','Personal support','Family support']);
    setMany('.format-grid p', [
      'I help you understand the possible next steps, without identifying specific doctors or clinics or arranging treatment.',
      'I identify suitable specialists and clinics, arrange medical care and personally coordinate the agreed stages.',
      'One dedicated point of contact to coordinate the agreed healthcare matters of several family members.'
    ]);
    set('.formats-note', 'Three straightforward options, from guidance on the next steps to personal coordination of medical care.');
    set('#stories-title', 'Stories built on trust');
    setMany('.story-person', ['Ekaterina','Anna','Anatoly','Alexey']);
    setMany('.story-grid h3', ['From caring for herself to caring for the whole family','From crutches to a world record','One point of contact for different healthcare needs','Two operations. No unnecessary hassle.']);
    setMany('.story-grid p', [
      'Ekaterina from Hungary first came to me for help arranging preventive health check-ups in Germany. Over time, our work together extended to her family: she began visiting Germany for medical consultations with her children. I helped find suitable specialists, arrange examinations and coordinate the schedule so the family could address several healthcare needs in a single trip. In 2026, we marked ten years of working together.',
      'After a serious injury, Anna needed treatment and rehabilitation in Germany. Drawing on my years of experience working with German doctors and knowledge of their specialties, I was able to recommend a suitable orthopaedic specialist and arrange further treatment. Anna returned to competitive sport, became a world champion in 2023 and 2025, and set a world record in a multi-discipline event. Credit for Anna’s sporting achievements belongs to Anna, her coaches and her team.',
      'Anatoly from Prague is over 70. Since 2018, I have helped him with healthcare matters in Germany, arranging orthopaedic surgery, dental treatment, vein surgery and preventive examinations. We also found a specialist to address a complex ENT problem. Anatoly has regular eye examinations and orders customised eyewear. When planning treatment, I take his age, overall health and medical history into account. Years later, he continues to put his trust in me.',
      'Alexey came to me twice to organize operations in Germany. Clear communication, agreed steps and the opportunity to avoid wasting time on endless calls and coordination were important to him.'
    ]);
    setMany('.story-grid a', ['Read the story','Read the story','Read the story','Read the story']);
    set('.all-stories', 'All patient stories and articles');
  } else if (document.body.dataset.page === 'stories') {
    document.title = 'Stories built on trust — Natallia Genova';
    set('.stories-page > .eyebrow', '07 / Client stories');
    set('.stories-page > h1', 'Stories built on trust');
    set('.stories-intro', 'Every client comes to me with a different healthcare concern. My role is to help find the right specialist and arrange what comes next.');
    setMany('.story-detail .eyebrow', ['Anna','Alexey','Ekaterina','Anatoly']);
    setMany('.story-detail h2', ['From crutches to a world record','Two operations. No unnecessary hassle.','From caring for herself to caring for the whole family','One point of contact for different healthcare needs']);
    setMany('.anna .story-detail-copy > p:not(.eyebrow)', [
      'After a serious injury, Anna needed treatment and rehabilitation in Germany. Drawing on my years of experience working with German doctors and knowledge of their specialties, I was able to recommend a suitable orthopaedic specialist and arrange further treatment.',
      'Anna returned to competitive sport, became a world champion in 2023 and 2025, and set a world record in a multi-discipline event.',
      'Credit for Anna’s sporting achievements belongs to Anna, her coaches and her team.'
    ]);
    set('#alexey > p:not(.eyebrow)', 'Alexey came to me twice to organize operations in Germany. Clear communication, agreed steps and the opportunity to avoid wasting time on endless calls and coordination were important to him.');
    setMany('#ekaterina > div:first-child > p:not(.eyebrow)', [
      'Ekaterina from Hungary first came to me for help arranging preventive health check-ups in Germany. Over time, our work together extended to her family: she began visiting Germany for medical consultations with her children.',
      'I helped find suitable specialists, arrange examinations and coordinate the schedule so the family could address several healthcare needs in a single trip.',
      'In 2026, we marked ten years of working together.'
    ]);
    setMany('#anatoly > div:first-child > p:not(.eyebrow)', [
      'Anatoly from Prague is over 70. Since 2018, I have helped him with healthcare matters in Germany, arranging orthopaedic surgery, dental treatment, vein surgery and preventive examinations.',
      'We also found a specialist to address a complex ENT problem. Anatoly has regular eye examinations and orders customised eyewear. When planning treatment, I take his age, overall health and medical history into account. Years later, he continues to put his trust in me.',
      '',
      '',
      ''
    ]);
    set('.future-articles .eyebrow', 'Materials and analysis');
    set('.future-articles h2', 'Articles about medicine');
    set('.future-articles p:last-child', 'A space for future articles on diagnosis, prevention, second opinions and navigating medical care in Germany. New articles will appear as they are prepared.');
  }
  set('.contact .eyebrow', '08 / Contact');
  set('.contact h2', 'Tell me about your case');
  set('.contact p:not(.eyebrow)', 'Describe what you need help with. Let’s discuss the most suitable way of working together and the next steps. Personal and medical information is handled confidentially and used only in connection with your enquiry.');
  set('.contact .button', 'Message on WhatsApp →');
  document.querySelectorAll('a[href^="stories.html#"]').forEach(a=>a.href=a.href.replace('stories.html#','stories.html?lang=en#'));
  document.querySelectorAll('a[href="stories.html"]').forEach(a=>a.href='stories.html?lang=en');
  document.querySelectorAll('a[href^="index.html#"]').forEach(a=>a.href=a.href.replace('index.html#','index.html?lang=en#'));
  set('.all-stories', 'All patient stories and articles');
}
