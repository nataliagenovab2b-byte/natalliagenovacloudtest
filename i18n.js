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
  setMany('.main-nav a', ['Services', 'Approach', 'About me', 'Formats', 'Contact me']);
  setMany('.mobile-nav a', ['Services', 'Approach', 'About me', 'Formats', 'Stories', 'Contact']);
  set('.footer-brand strong', 'Natallia Genova');
  set('.footer-brand p', 'Your guide to German medicine');
  setMany('.footer-main nav:first-of-type a', ['Services', 'Approach', 'About me', 'Formats', 'Patient stories']);
  setMany('.footer-bottom p', [
    'Services are organizational and coordination services. Medical diagnosis, treatment prescriptions and medical decisions are the responsibility of doctors and medical institutions.',
    '© 2009–2026 Natallia Genova · Private Medical Guidance'
  ]);
  if (document.body.dataset.page === 'home') {
    document.title = 'Natallia Genova — Your guide to German medicine';
    set('#hero-title', 'Your guide<br>to German medicine', true);
    set('.hero-copy > p', 'Looking for the right doctor, a second opinion or treatment in Germany? I help you understand your options, find suitable specialists and organize the next steps. Personally and independently.');
    setMany('.hero-copy .button, .contact .button', ['Write to me', 'Write to me']);
    setMany('main .eyebrow', ['01 / Services','02 / Approach','03 / Process','04 / About me','05 / Ways to work together','06 / Client stories','07 / Contact']);
    set('#services-title', 'What people come to me for');
    setMany('.service-grid h3', ['Diagnosis and prevention','Second medical opinion','Treatment and rehabilitation','Family health']);
    setMany('.service-grid p', [
      'Investigating symptoms, clarifying diagnoses, comprehensive checkups and preventive programs.',
      'An assessment of a diagnosis or proposed treatment by a relevant specialist in Germany.',
      'Finding a doctor and clinic, organizing treatment and recovery.',
      'Checkups, consultations and medical needs of several family members.'
    ]);
    set('#approach-title', 'Knowing the system from within.<br>Being on your side.', true);
    const approach = [
      '<strong>Independent choice.</strong> Rather than a list of partner clinics, I look for a doctor whose specialization and experience fit the specific medical need.',
      '<strong>Understanding internal processes.</strong> Building and leading the international department of a German clinic gave me insight usually hidden from view: how to direct an inquiry, coordinate departments and organize a complex medical journey.',
      '<strong>Trust built over years.</strong> Many clients return with new questions and later entrust me with the care of their loved ones.'
    ];
    document.querySelectorAll('.approach-points p').forEach((p,i)=>p.innerHTML=approach[i]);
    set('#process-title', 'How I work');
    setMany('.process-steps h3', ['Understanding your situation','Proposing next steps','Organizing and coordinating']);
    setMany('.process-steps p', [
      'An initial conversation, review of available documents and clarification of the task.',
      'Suitable medical fields, specialists and a clear sequence of actions.',
      'Coordination of consultations, examinations and treatment. When needed, assistance with medical visa documents and travel arrangements.'
    ]);
    set('#about-title', 'Always on your side');
    set('.about-copy h3', 'Organizing medical care since 2009');
    setMany('.about-copy > p:not(.eyebrow):not(.education)', [
      'Since 2009, I have organized medical care in Germany for private clients and families.',
      'In 2017, I was entrusted with building the international department of a German clinic from the ground up. By then, I had eight years of experience with international patients and a Master of Health Business Administration (MHBA).',
      'The task was to bring patients’ expectations together with the clinic’s capabilities, integrate the new department into existing processes and establish cooperation between departments. I led the department for seven years.',
      'Today, this experience helps me see both sides: understand the client’s needs and know how a clinic works internally. It helps me address doctors more precisely, choose suitable specialists and organize care independently, in the client’s interest.'
    ]);
    set('.education', '<strong>Education:</strong> MHBA · bachelor’s degrees in English and Italian · sports and tourism management', true);
    set('#formats-title', 'A format that fits your needs');
    setMany('.format-grid h3', ['Medical inquiry consultation','Personal medical guidance','Family support']);
    setMany('.format-grid p', [
      'A professional review of your medical inquiry and possible next steps, without selecting particular doctors or organizing treatment.',
      'Selection of specialists and clinics, organization of medical care and personal coordination of agreed stages. Visa documents and travel support when needed.',
      'One personal contact for the medical needs of several family members, with their history and individual needs in mind.'
    ]);
    set('.formats-note', 'The scope and cost of work are agreed in advance.');
    set('#stories-title', 'Every inquiry has its own story');
    setMany('.story-person', ['Ekaterina','Anna','Alexey','Anatoly']);
    setMany('.story-grid h3', ['Ten years of trust','From crutches to a world record','Two operations. No unnecessary hassle.','One contact, different medical needs']);
    setMany('.story-grid p', [
      'It began with preventive checkups and grew into care for the children and the whole family. In 2026, Ekaterina and I reached ten years of working together.',
      'After an injury, Anna found a specialist orthopaedist and arranged treatment in Germany. She returned to sport, became a two-time world champion and set a world record. Her sporting success belongs to her and her team.',
      'Two shoulder operations, consultations and recovery. The main task was to coordinate the medical and practical stages.',
      'Since 2018, Anatoly has returned with different questions, from orthopaedics and dentistry to ENT care and prevention. Knowing his history helps plan each new inquiry.'
    ]);
    set('.story-grid article:nth-child(2) p', 'After an injury, Anna found a specialist orthopaedist and arranged treatment in Germany. She returned to sport, became a two-time world champion and set a world record.<span class="achievement-attribution"> Her sporting success belongs to her and her team.</span>', true);
    setMany('.story-grid a', ['Read the story','Read the story','Read the story','Read the story']);
    set('.all-stories', 'All patient stories and articles');
  } else if (document.body.dataset.page === 'stories') {
    document.title = 'Patient stories and articles — Natallia Genova';
    set('.stories-page > .eyebrow', 'Practice / real stories');
    set('.stories-page > h1', 'Patient stories and articles');
    set('.stories-intro', 'Medical needs differ. Here are real stories of personal support, from finding a specialist to organizing examinations and treatment in Germany.');
    setMany('.story-detail .eyebrow', ['Anna’s story','Real story','Real story','Real story']);
    setMany('.story-detail h2', ['From crutches to a world record','Two operations. No unnecessary hassle.','From caring for herself to caring for the whole family','One contact, different medical needs']);
    setMany('.anna .story-detail-copy > p:not(.eyebrow)', [
      'After a serious injury, Anna needed treatment and rehabilitation in Germany. With years of experience working with German doctors and knowledge of their specializations, I recommended a suitable orthopaedist and organized the next steps.',
      'Anna returned to competitive sport, became a world champion in 2023 and 2025 and set a world record in the combined event.',
      'Her sporting achievements belong to Anna, her coaches and her team.'
    ]);
    set('#alexey > p:not(.eyebrow)', 'Alexey came to me twice to organize operations in Germany. Clear communication, agreed steps and time saved on endless calls and coordination mattered to him.');
    setMany('#ekaterina > div:first-child > p:not(.eyebrow)', [
      'Ekaterina from Hungary first contacted me for help organizing preventive examinations in Germany. Over time, our cooperation became a family matter: she began visiting for medical consultations with her children.',
      'I helped select suitable specialists, coordinate examinations and plan the schedule so the family could address several medical questions in one trip.',
      'At the time of our interview in 2024, we had already worked together for eight years.'
    ]);
    setMany('#anatoly > div:first-child > p:not(.eyebrow)', [
      'Anatoly from Prague is over seventy. He has contacted me since 2018, and during this time we have addressed many different medical needs.',
      'I helped him choose specialists and organize treatment in Germany: orthopaedic operations, complex dental procedures, vein surgery and regular preventive examinations.',
      'A complex ENT condition was another challenge. We found a suitable specialist and an effective solution. Anatoly also has regular eye examinations and orders glasses tailored to his vision in Germany.',
      'With age, it becomes especially important to consider overall health and previous medical history when choosing specialists and planning treatment.',
      'Anatoly continues to entrust me with his medical questions after many years of working together.'
    ]);
    set('.future-articles .eyebrow', 'Materials and analysis');
    set('.future-articles h2', 'Articles about medicine');
    set('.future-articles p:last-child', 'A space for future articles on diagnosis, prevention, second opinions and navigating medical care in Germany. New articles will appear as they are prepared.');
  }
  set('.contact .eyebrow', '07 / Contact');
  set('.contact h2', 'Let’s write your story');
  set('.contact p:not(.eyebrow)', 'Tell me about the medical need you are facing. I will personally review your inquiry and suggest where to begin.');
  set('.contact .button', 'Write to me');
  document.querySelectorAll('a[href^="stories.html#"]').forEach(a=>a.href=a.href.replace('stories.html#','stories.html?lang=en#'));
  document.querySelectorAll('a[href="stories.html"]').forEach(a=>a.href='stories.html?lang=en');
  document.querySelectorAll('a[href^="index.html#"]').forEach(a=>a.href=a.href.replace('index.html#','index.html?lang=en#'));
  set('.all-stories', 'All patient stories and articles');
}
