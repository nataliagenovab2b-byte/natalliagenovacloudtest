const carousel = document.querySelector('[data-carousel]');
const track = carousel?.querySelector('.case-track');
const cards = track ? [...track.children] : [];
const dotsContainer = document.querySelector('.carousel-dots');
const previousButton = document.querySelector('[data-carousel-prev]');
const nextButton = document.querySelector('[data-carousel-next]');
let currentSlide = 0;

function renderCarousel() {
  if (!track || !cards.length) return;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  document.querySelectorAll('.carousel-dot').forEach((dot, index) => dot.classList.toggle('active', index === currentSlide));
}

if (cards.length && dotsContainer) {
  cards.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot';
    dot.type = 'button';
    dot.setAttribute('aria-label', `Показать историю ${index + 1}`);
    dot.addEventListener('click', () => {
      currentSlide = index;
      renderCarousel();
    });
    dotsContainer.append(dot);
  });
  previousButton?.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + cards.length) % cards.length;
    renderCarousel();
  });
  nextButton?.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % cards.length;
    renderCarousel();
  });
  renderCarousel();
}

const contactForm = document.querySelector('#contact-form');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = contactForm.querySelector('.form-status');
  status.textContent = 'Спасибо. Запрос заполнен и готов к отправке после подключения почты или CRM.';
  contactForm.reset();
});
