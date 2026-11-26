const WA = 'https://wa.me/491777868304';
const copy = {
  ru: {
    nav:['Направления','Подход','Обо мне','Форматы','Связаться ↗'], header:'Обсудить ситуацию',
    title:'Ваш человек<br>в немецкой<br>медицине',
    lead:'Независимый взгляд на вашу ситуацию.<br>Подходящие специалисты. Организация медицинской помощи в Германии — с одним личным контактом.',
    help:'Как я могу помочь', ask:'Задать вопрос в WA ↗',
    inquiries:'С какими вопросами ко мне обращаются', inquiriesTag:'01 / Направления',
    services:[
      ['Диагностика и профилактика','Check-up, оценка рисков, профилактические программы и Longevity.'],
      ['Второе медицинское мнение','Поиск профильного эксперта для оценки диагноза или предложенного лечения.'],
      ['Лечение и реабилитация','Подбор специалистов и клиник, организация консультаций и этапов медицинской помощи.'],
      ['Комплексное сопровождение','Координация сложных медицинских маршрутов и вопросов здоровья семьи.']
    ],
    approachTag:'02 / Подход', approach:'Личное участие в каждом маршруте', approachIntro:'Вашу ситуацию разбираю индивидуально и работаю с вами лично.',
    approachCards:[
      ['Независимая перспектива','Подбираю варианты под задачу клиента, не ограничиваясь предложениями одной клиники.'],
      ['Знаю систему изнутри','15+ лет работы с международными пациентами и опыт руководства международным отделом клиники.'],
      ['Один личный контакт','Я координирую согласованные этапы и коммуникацию, чтобы вам не приходилось собирать всё самостоятельно.']
    ],
    approachEnd:'Когда вопрос касается здоровья, важно не количество контактов, а понимание того, к кому, зачем и в какой последовательности обращаться.',
    optionsTag:'03 / Возможности', options:'Не просто найти клинику.<br>Разобраться в возможностях.', optionsIntro:'Когда вопрос касается здоровья, важно не количество контактов, а понимание того, к кому, зачем и в какой последовательности обращаться.',
    optionsCards:[
      ['Ясность и спокойствие','Вы понимаете ситуацию и следующие шаги, что происходит сейчас, что будет дальше и к кому обратиться с вопросом.'],
      ['Целостность','Вам не приходится каждый раз начинать сначала: я знаю контекст вашей ситуации и веду процесс дальше.'],
      ['Индивидуальный план','У вас есть понятный маршрут вместо хаотичного поиска и несвязанных действий. Организационная работа остаётся за кадром.']
    ],
    processTag:'04 / Как я работаю', process:'Как я работаю', processIntro:'Я помогаю собрать отдельные этапы в понятный процесс — от первого запроса до организации консультаций, обследований, лечения или профилактической программы.',
    steps:[
      ['Знакомлюсь с ситуацией','Вы рассказываете о задаче. Я уточняю цели, ограничения и необходимые материалы.'],
      ['Предлагаю маршрут','Определяю профиль специалистов, возможные учреждения и последовательность действий.'],
      ['Организую и сопровождаю','Координирую согласованные консультации, обследования и взаимодействие со специалистами.']
    ],
    aboutTag:'05 / Обо мне', about:'Наталья Генова', aboutSub:'Всегда на вашей стороне',
    aboutText:[
      'Меня зовут Наталья Генова. Я сопровождаю частных клиентов и семьи в медицинских вопросах в Германии — от профилактики и диагностики до лечения и реабилитации.',
      'Моя задача — сделать медицинский процесс понятнее: спокойно разобраться в ситуации, определить следующие шаги и организовать их.',
      'Работаю с международными пациентами и немецкими медицинскими учреждениями с 2009 года. Руководство международным отделом клиники дало мне практическое понимание того, как организуются консультации, обследования и лечение в Германии.',
      'Я сопровождаю частных клиентов и семьи лично: помогаю оценить доступные варианты, подобрать профильных специалистов и организовать взаимодействие. Диагнозы и лечебные решения остаются в компетенции врачей.'
    ],
    since:'С 2009 года', sinceSub:'в международной медицине',
    formatsTag:'06 / Форматы работы', formats:'Форматы работы — под вашу задачу',
    formatsCards:[
      ['Первичный разбор ситуации','Помогаю понять возможные следующие шаги. Без подбора конкретных врачей и клиник и без организации лечения.'],
      ['Персональное сопровождение','Подбираю специалистов и клиники, организую медицинскую помощь и лично координирую согласованные этапы.'],
      ['Сопровождение семьи','Единый личный контакт для координации согласованных медицинских вопросов нескольких членов семьи.']
    ],
    formatsEnd:'Три понятных формата — от рекомендации по дальнейшим шагам до личной координации медицинской помощи.',
    storiesTag:'07 / Истории моих клиентов', stories:'Несколько историй доверия',
    storiesIntro:'У каждого клиента свой медицинский вопрос. Моя работа — помочь выбрать подходящего специалиста и организовать дальнейшие шаги.',
    caseNames:['Екатерина','Анна','Анатолий'],
    caseTitles:['От заботы о себе — к заботе о всей семье','От костылей — к мировому рекорду','Один контакт — разные медицинские задачи'],
    caseText:[
      'Екатерина из Венгрии впервые обратилась ко мне за помощью в организации профилактических обследований в Германии. Со временем наше сотрудничество стало семейным: она начала приезжать на медицинские консультации вместе с детьми. Я помогала подбирать подходящих специалистов, согласовывать обследования и выстраивать график так, чтобы за одну поездку семья могла решить несколько медицинских вопросов. В 2026 году нашему сотрудничеству исполнилось 10 лет.',
      'После серьёзной травмы Анне предстояло лечение и восстановление в Германии. Благодаря многолетнему опыту работы с немецкими врачами и знанию их специализаций я смогла порекомендовать Анне подходящего ортопеда и организовать дальнейшее лечение. Анна вернулась в большой спорт, стала чемпионкой мира в 2023 и 2025 годах и установила мировой рекорд в многоборье. Спортивные достижения — заслуга самой Анны, её тренеров и команды.',
      'Анатолию из Праги больше 70 лет. С 2018 года я помогаю ему решать медицинские вопросы в Германии: организовывать ортопедические операции, стоматологическое лечение, хирургию вен и профилактические обследования. Мы также нашли специалиста для решения сложной ЛОР-проблемы. Анатолий регулярно проверяет зрение и заказывает индивидуальную оптику. При планировании лечения я учитываю его возраст, состояние здоровья и медицинскую историю. Спустя годы он продолжает доверять мне.'
    ],
    allStories:'Все истории пациентов и статьи',
    contactTag:'08 / Контакты', contact:'Расскажите мне о вашей ситуации',
    contactText:'Опишите ваш запрос в WhatsApp. Я ознакомлюсь с ним, после чего мы обсудим возможный формат работы и следующие шаги.',
    confidential:'Личная и медицинская информация обрабатывается конфиденциально и используется только для работы с вашим запросом.',
    wa:'Написать в WhatsApp →', navTitle:'Навигация', contacts:'Контакты', descriptor:'Ваш человек в немецкой медицине', storyLink:'Истории пациентов', impressum:'Impressum', privacy:'Datenschutz',
    disclaimer:'Услуги носят организационный и координационный характер. Медицинская диагностика, назначение лечения и медицинские решения осуществляются врачами и медицинскими учреждениями.',
    cookieTitle:'Мы используем cookies', cookieText:'Они помогают сайту работать корректно и запоминать ваш выбор.', essential:'Только необходимые', accept:'Принять',
    storyPageTitle:'Истории пациентов и статьи', storyPageIntro:'Медицинские задачи бывают разными. Здесь собраны реальные истории персонального сопровождения: от выбора специалиста до организации обследований и лечения в Германии.',
    articleTitle:'Статьи о медицине', articleText:'Раздел для будущих материалов о диагностике, профилактике, втором мнении и медицинской навигации в Германии. Публикации добавляются по мере подготовки.'
  },
  en: {
    nav:['Areas of support','My approach','About me','My services','Contact ↗'],header:'Discuss your situation',
    title:'Your private medical<br>guidance in Germany',
    lead:'Independent guidance based on your needs.<br>Help finding the right specialists and arranging medical care in Germany, with one person to turn to throughout the process.',
    help:'How can I help you?',ask:'Ask me on WA ↗',
    inquiries:'Common reasons for help',inquiriesTag:'01 / Areas of support',
    services:[
      ['Diagnostics and Preventive Care','Health check-ups, risk assessments and programmes focused on prevention and longevity.'],
      ['Second Opinions','Finding an appropriate specialist to review a diagnosis or proposed treatment.'],
      ['Treatment and Rehabilitation','Finding suitable specialists and clinics, and arranging consultations and the different stages of care.'],
      ['Comprehensive Care Coordination','Helping coordinate complex medical arrangements, including healthcare needs involving several family members.']
    ],
    approachTag:'02 / My approach',approach:'Personal support at every step',approachIntro:'I approach every situation individually and provide personal guidance throughout.',
    approachCards:[
      ['Independent Guidance','I explore options based on your needs, rather than limiting the search to a single clinic.'],
      ['First-hand knowledge of the system','Over 15 years of experience working with international patients, including leading a clinic’s international department.'],
      ['Dedicated point of contact','I coordinate the agreed arrangements and communication, so you don’t have to manage everything on your own.']
    ],
    approachEnd:'When it comes to health, it’s not about how many contacts you have. It’s about knowing who to turn to, why and in what order.',
    optionsTag:'03 / Your options',options:'More than finding a clinic.<br>Understanding your options.',optionsIntro:'When it comes to health, it’s not about how many contacts you have. It’s about knowing who to turn to, why and in what order.',
    optionsCards:[
      ['Clarity and peace of mind','You know where things stand, what comes next and who to contact if you have questions.'],
      ['Continuity','No need to explain everything from scratch each time. I know the background of your situation and keep the process moving forward.'],
      ['A personalised plan','You have a clear path forward instead of a confusing search and disconnected steps. Whole coordination is behind the scenes.']
    ],
    processTag:'04 / How I work',process:'How I guide you through the process',processIntro:'I bring the different stages together into one clear process, from your first enquiry to arranging consultations, examinations, treatment or a preventive healthcare program.',
    steps:[
      ['Understanding your situation','You tell me what you need help with. I clarify your goals, any constraints and the information or materials required.'],
      ['Planning the next steps','I identify the types of specialists and medical facilities to consider, and the sequence of steps.'],
      ['Arranging and coordinating','I coordinate the agreed consultations, examinations and communication with specialists.']
    ],
    aboutTag:'05 / About me',about:'Natallia Genova',aboutSub:'On your side, every step of the way',
    aboutText:[
      'My name is Natallia Genova. I personally support individuals and families with healthcare matters in Germany, from prevention and diagnostics to treatment and rehabilitation.',
      'My role is to make the healthcare process easier to navigate: to understand your situation, work out the next steps and arrange them in a calm, considered way.',
      'I have worked with international patients and German medical institutions since 2009. Leading a clinic’s international department gave me first-hand insight into how consultations, examinations and treatment are organised in Germany.',
      'I work personally, with individuals and families, helping them assess the available options, find the appropriate specialists and coordinate communication. Diagnoses and treatment decisions remain the responsibility of doctors.'
    ],
    since:'since 2009',sinceSub:'Working in international healthcare',
    formatsTag:'06 / My services',formats:'Guidance tailored to your needs',
    formatsCards:[
      ['Initial review','I help you understand the possible next steps, without identifying specific doctors or clinics or arranging treatment.'],
      ['Personal support','I identify suitable specialists and clinics, arrange medical care and personally coordinate the agreed stages.'],
      ['Family support','One dedicated point of contact to coordinate the agreed healthcare matters of several family members.']
    ],
    formatsEnd:'Three straightforward options, from guidance on the next steps to personal coordination of medical care.',
    storiesTag:'07 / Client stories',stories:'Stories built on trust',
    storiesIntro:'Every client comes to me with a different healthcare concern. My role is to help find the right specialist and arrange what comes next.',
    caseNames:['Ekaterina','Anna','Anatoly'],
    caseTitles:['From caring for herself to caring for the whole family','From crutches to a world record','One point of contact for different healthcare needs'],
    caseText:[
      'Ekaterina from Hungary first came to me for help arranging preventive health check-ups in Germany. Over time, our work together extended to her family: she began visiting Germany for medical consultations with her children. I helped find suitable specialists, arrange examinations and coordinate the schedule so the family could address several healthcare needs in a single trip. In 2026, we marked ten years of working together.',
      'After a serious injury, Anna needed treatment and rehabilitation in Germany. Drawing on my years of experience working with German doctors and knowledge of their specialties, I was able to recommend a suitable orthopaedic specialist and arrange further treatment. Anna returned to competitive sport, became a world champion in 2023 and 2025, and set a world record in a multi-discipline event. Credit for Anna’s sporting achievements belongs to Anna, her coaches and her team.',
      'Anatoly from Prague is over 70. Since 2018, I have helped him with healthcare matters in Germany, arranging orthopaedic surgery, dental treatment, vein surgery and preventive examinations. We also found a specialist to address a complex ENT problem. Anatoly has regular eye examinations and orders customised eyewear. When planning treatment, I take his age, overall health and medical history into account. Years later, he continues to put his trust in me.'
    ],
    allStories:'All patient stories and articles',
    contactTag:'08 / Contact',contact:'Tell me about your case',
    contactText:'Describe what you need help with. Let’s discuss the most suitable way of working together and the next steps.',
    confidential:'Personal and medical information is handled confidentially and used only in connection with your enquiry.',
    wa:'Message on WhatsApp →',navTitle:'Site map',contacts:'Contact',descriptor:'Your private medical guidance in Germany',storyLink:'Patient stories',impressum:'Impressum',privacy:'Privacy policy',
    disclaimer:'Mentioned services cover organisation and coordination only. Diagnosis, the prescribing of treatment and other medical decisions are handled by doctors and medical institutions.',
    cookieTitle:'We use cookies',cookieText:'Cookies help the website function properly and remember your choices.',essential:'Essential cookies only',accept:'Accept',
    storyPageTitle:'Patient stories and articles',storyPageIntro:'Every healthcare journey is different. These are real stories of personal guidance, from finding specialists to arranging examinations and treatment in Germany.',
    articleTitle:'Articles about healthcare',articleText:'Future articles about diagnostics, prevention, second opinions and navigating healthcare in Germany.'
  }
};
const page = document.body.dataset.page || 'home';
const requestedLanguage = new URLSearchParams(location.search).get('lang');
let lang = requestedLanguage === 'en' || (requestedLanguage !== 'ru' && localStorage.getItem('ng-language') === 'en') ? 'en' : 'ru';
if (requestedLanguage === 'en' || requestedLanguage === 'ru') localStorage.setItem('ng-language', lang);
const asset = name => 'assets/' + name;
const cards = (items, cls='') => items.map(([title,body],i)=>`<article class="${cls}"><h3>${title}</h3><p>${body}</p></article>`).join('');
const sectionTitle = (tag,title,intro='') => `<p class="eyebrow">${tag}</p><h2>${title}</h2>${intro ? `<p class="section-intro">${intro}</p>` : ''}`;
function header(t){
  const links=['#services','#approach','#about','#formats','#contact'];
  return `<a class="skip" href="#main">Skip to content</a><header class="header"><div class="header-inner"><a class="brand" href="index.html" aria-label="Home"><img src="${asset('logo.png')}" alt="Natallia Genova"></a><nav aria-label="Main navigation">${t.nav.map((n,i)=>`<a href="index.html${links[i]}">${n}</a>`).join('')}</nav><div class="header-actions"><div class="languages" role="group" aria-label="Language"><button type="button" data-lang="ru" aria-pressed="${lang==='ru'}">RU</button><button type="button" data-lang="en" aria-pressed="${lang==='en'}">EN</button></div><a class="btn header-cta" href="${WA}" target="_blank" rel="noopener">${t.header}</a></div></div></header>`;
}
function footer(t){
  return `<section id="contact" class="contact"><div class="wrap contact-grid"><div>${sectionTitle(t.contactTag,t.contact)}<p>${t.contactText}</p><p>${t.confidential}</p></div><a class="wa-cta" href="${WA}" target="_blank" rel="noopener">${t.wa}</a></div></section><footer class="footer"><div class="wrap footer-grid"><div class="footer-brand"><img src="${asset('footer-logo.png')}" alt=""><div><strong>${lang==='ru'?'Наталья Генова':'Natallia Genova'}</strong><span>Private Medical Guidance</span><span>${t.descriptor}</span></div></div><div><span class="footer-heading">${t.navTitle}</span>${t.nav.map((n,i)=>`<a href="index.html${['#services','#approach','#about','#formats','#contact'][i]}">${n}</a>`).join('')}<a href="stories.html">${t.storyLink}</a></div><div><span class="footer-heading">${t.contacts}</span><a href="${WA}" target="_blank" rel="noopener">WhatsApp</a><a href="impressum.html">${t.impressum}</a><a href="privacy.html">${t.privacy}</a></div></div><div class="wrap footer-bottom"><p>${t.disclaimer}</p><p>© 2009–2026 ${lang==='ru'?'Наталья Генова':'Natallia Genova'} · Private Medical Guidance</p></div></footer><div class="cookie" hidden><div><strong>${t.cookieTitle}</strong><span>${t.cookieText}</span></div><div class="cookie-actions"><button data-cookie="essential">${t.essential}</button><button data-cookie="all">${t.accept}</button></div></div>`;
}
function home(t){
 return `${header(t)}<main id="main">
 <section class="hero"><div class="wrap hero-grid"><div class="hero-copy"><h1>${t.title}</h1><p>${t.lead}</p><div class="hero-actions"><a class="btn btn-light" href="#services">${t.help}</a><a class="btn btn-sage" href="${WA}" target="_blank" rel="noopener">${t.ask}</a></div></div><div class="hero-photo"><div class="photo-frame"><img src="${asset('hero.png')}" alt="${t.about}"></div></div></div></section>
 <section id="services" class="inquiries"><div class="wrap">${sectionTitle(t.inquiriesTag,t.inquiries)}<div class="inquiry-grid">${t.services.map(([a,b],i)=>`<article><span>0${i+1}</span><div><h3>${a}</h3><p>${b}</p></div></article>`).join('')}</div></div></section>
 <section id="approach" class="approach"><div class="wrap">${sectionTitle(t.approachTag,t.approach,t.approachIntro)}<div class="approach-grid">${cards(t.approachCards)}</div><p class="approach-end">${t.approachEnd}</p></div></section>
 <section class="possibilities"><div class="wrap">${sectionTitle(t.optionsTag,t.options,t.optionsIntro)}<div class="possibility-grid">${cards(t.optionsCards)}</div></div></section>
 <section class="process"><div class="wrap">${sectionTitle(t.processTag,t.process,t.processIntro)}<div class="process-grid">${t.steps.map(([a,b],i)=>`<article><span>0${i+1}</span><h3>${a}</h3><p>${b}</p></article>`).join('')}</div></div></section>
 <section id="about" class="about"><div class="wrap">${sectionTitle(t.aboutTag,t.about)}<p class="about-sub">${t.aboutSub}</p><div class="about-grid"><div><div class="about-photo"><img src="${asset('about.png')}" alt="${t.about}"></div><div class="since">${t.since}<small>${t.sinceSub}</small></div></div><div class="about-text">${t.aboutText.map(p=>`<p>${p}</p>`).join('')}</div></div></div></section>
 <section id="formats" class="formats"><div class="wrap">${sectionTitle(t.formatsTag,t.formats)}<div class="format-layout"><div class="format-cards">${cards(t.formatsCards)}</div><div class="formats-photo"><img src="${asset('formats.png')}" alt=""></div></div><p class="format-end">${t.formatsEnd}</p></div></section>
 <section id="cases" class="stories-preview"><div class="wrap">${sectionTitle(t.storiesTag,t.stories,t.storiesIntro)}<div class="stories-list">${t.caseTitles.map((title,i)=>`<article><span>${t.caseNames[i]}</span><h3>${title}</h3><p>${t.caseText[i]}</p></article>`).join('')}</div><a class="btn btn-dark" href="stories.html">${t.allStories}</a></div></section>
 </main>${footer(t)}`;
}
function stories(t){
 const storyArticles = [
  `<article class="story story-feature"><div><p class="eyebrow">${lang==='ru'?'ИСТОРИЯ АННЫ':'ANNA’S STORY'}</p><h2>${t.caseTitles[1]}</h2><p>${t.caseText[1]}</p></div><div class="story-images"><img src="${asset('anna-portrait.png')}" alt=""><img src="${asset('anna-one.png')}" alt=""><img src="${asset('anna-two.png')}" alt=""></div></article>`,
  `<article class="story"><p class="eyebrow">${lang==='ru'?'РЕАЛЬНАЯ ИСТОРИЯ':'A REAL STORY'}</p><h2>${lang==='ru'?'Две операции. Без лишней суеты.':'Two operations, with clear coordination.'}</h2><p>${lang==='ru'?'Алексей дважды обращался ко мне за организацией операций в Германии. Для него были важны понятная коммуникация, заранее согласованные шаги и возможность не тратить время на бесконечные звонки и согласования.':'Alexey asked for help arranging operations in Germany twice. Clear communication and agreed steps mattered to him.'}</p></article>`,
  `<article class="story story-split"><div><p class="eyebrow">${t.caseNames[0]}</p><h2>${t.caseTitles[0]}</h2><p>${t.caseText[0]}</p></div><img src="${asset('ekaterina.png')}" alt=""></article>`,
  `<article class="story story-split"><div><p class="eyebrow">${t.caseNames[2]}</p><h2>${t.caseTitles[2]}</h2><p>${t.caseText[2]}</p></div><div class="story-gallery"><img src="${asset('anatoly-one.png')}" alt=""><img src="${asset('anatoly-two.png')}" alt=""><img src="${asset('anatoly-three.png')}" alt=""></div></article>`
 ];
 return `${header(t)}<main id="main" class="story-page"><div class="wrap"><p class="eyebrow">${lang==='ru'?'ПРАКТИКА / РЕАЛЬНЫЕ ИСТОРИИ':'PRACTICE / REAL STORIES'}</p><h1>${t.storyPageTitle}</h1><p class="story-intro">${t.storyPageIntro}</p>${storyArticles.join('')}<section class="articles"><p class="eyebrow">${lang==='ru'?'МАТЕРИАЛЫ И АНАЛИТИКА':'MATERIALS AND ANALYSIS'}</p><h2>${t.articleTitle}</h2><p>${t.articleText}</p></section></div></main>${footer(t)}`;
}
async function legal(t){
 const title=page==='impressum'?'Haftungsausschluss':'Datenschutzrichtlinie';
 let content='';
 try { const data=await fetch('legal-data.json').then(r=>r.json()); content=data[page]||''; } catch(e){ content=''; }
 const escaped=content.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
 return `${header(t)}<main id="main" class="legal-page"><div class="legal-wrap"><h1>${title}</h1><div class="legal-text">${escaped}</div></div></main>${footer(t)}`;
}
async function render(){
 const t=copy[lang]; document.documentElement.lang=page==='impressum'||page==='privacy'?'de':lang;
 if(page==='home') document.title=lang==='ru'?'Наталья Генова — Ваш человек в немецкой медицине':'Natallia Genova — Private medical guidance in Germany';
 if(page==='stories') document.title=lang==='ru'?'Истории пациентов — Наталья Генова':'Patient stories — Natallia Genova';
 document.querySelector('#app').innerHTML=page==='home'?home(t):page==='stories'?stories(t):await legal(t);
 document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{lang=b.dataset.lang;localStorage.setItem('ng-language',lang);render();}));
 const banner=document.querySelector('.cookie');
 if(!localStorage.getItem('ng-cookie-choice')) banner.hidden=false;
 document.querySelectorAll('[data-cookie]').forEach(b=>b.addEventListener('click',()=>{localStorage.setItem('ng-cookie-choice',b.dataset.cookie);banner.hidden=true;}));
}
render();
