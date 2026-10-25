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

const backToTop = document.querySelector('.back-to-top');

function updateBackToTop() {
  if (!backToTop) return;
  backToTop.classList.toggle('is-visible', window.scrollY > 120);
}

window.addEventListener('scroll', updateBackToTop, { passive: true });
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
updateBackToTop();

document.querySelectorAll('[data-magnetic]').forEach((button) => {
  button.addEventListener('pointermove', (event) => {
    const bounds = button.getBoundingClientRect();
    const offsetX = (event.clientX - bounds.left - bounds.width / 2) * 0.12;
    const offsetY = (event.clientY - bounds.top - bounds.height / 2) * 0.18;
    button.style.setProperty('--magnetic-x', `${offsetX}px`);
    button.style.setProperty('--magnetic-y', `${offsetY}px`);
  });
  button.addEventListener('pointerleave', () => {
    button.style.setProperty('--magnetic-x', '0px');
    button.style.setProperty('--magnetic-y', '0px');
  });
});

const cookieBanner = document.querySelector('.cookie-banner');
const cookieChoice = window.localStorage.getItem('ng-cookie-choice');
if (cookieBanner && !cookieChoice) cookieBanner.hidden = false;
document.querySelectorAll('[data-cookie-dismiss]').forEach((button) => {
  button.addEventListener('click', () => {
    window.localStorage.setItem('ng-cookie-choice', button.dataset.cookieDismiss || 'essential');
    if (cookieBanner) cookieBanner.hidden = true;
  });
});

const clinicGallery = document.querySelector('[data-clinic-gallery]');
const clinicTrack = clinicGallery?.querySelector('.clinic-gallery-track');
const clinicCards = clinicTrack ? [...clinicTrack.children] : [];
const clinicPrevious = document.querySelector('[data-clinic-prev]');
const clinicNext = document.querySelector('[data-clinic-next]');
let clinicSlide = 0;

function clinicVisibleCards() {
  if (window.innerWidth <= 680) return 1;
  if (window.innerWidth <= 1000) return 2;
  return 3;
}

function renderClinicGallery() {
  if (!clinicGallery || !clinicTrack || !clinicCards.length) return;
  const visibleCards = clinicVisibleCards();
  const maxSlide = Math.max(0, clinicCards.length - visibleCards);
  clinicSlide = Math.min(clinicSlide, maxSlide);
  const gap = Number.parseFloat(getComputedStyle(clinicTrack).gap) || 0;
  const step = clinicCards[0].getBoundingClientRect().width + gap;
  clinicTrack.style.transform = `translateX(-${clinicSlide * step}px)`;
}

clinicPrevious?.addEventListener('click', () => {
  clinicSlide = Math.max(0, clinicSlide - 1);
  renderClinicGallery();
});
clinicNext?.addEventListener('click', () => {
  clinicSlide += 1;
  renderClinicGallery();
});
window.addEventListener('resize', renderClinicGallery);
renderClinicGallery();
