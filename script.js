(() => {
  'use strict';

  const carousel = document.querySelector('[data-carousel]');
  const track = carousel?.querySelector('.case-track');
  const cards = track ? [...track.children] : [];
  const dotsContainer = document.querySelector('.carousel-dots');
  const status = document.querySelector('[data-carousel-status]');
  let currentSlide = 0;
  const dots = [];

  function renderCarousel(announce = true) {
    if (!track || !cards.length) return;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    cards.forEach((card, index) => {
      const active = index === currentSlide;
      card.setAttribute('aria-hidden', String(!active));
      card.inert = !active;
      dots[index]?.setAttribute('aria-pressed', String(active));
    });
    if (announce && status) {
      status.textContent = `История ${currentSlide + 1} из ${cards.length}: ${cards[currentSlide].querySelector('.case-name').textContent}`;
    }
    // Each story has its own natural height on narrow screens.
    if (carousel) carousel.style.height = `${cards[currentSlide].offsetHeight}px`;
  }

  function stepCarousel(offset) {
    currentSlide = (currentSlide + offset + cards.length) % cards.length;
    renderCarousel();
  }

  if (cards.length && dotsContainer) {
    cards.forEach((card, index) => {
      card.setAttribute('role', 'group');
      card.setAttribute('aria-roledescription', 'слайд');
      card.setAttribute('aria-label', `${index + 1} из ${cards.length}`);
      const dot = document.createElement('button');
      dot.className = 'carousel-dot';
      dot.type = 'button';
      dot.setAttribute('aria-label', `Показать историю ${index + 1}`);
      dot.addEventListener('click', () => {
        currentSlide = index;
        renderCarousel();
      });
      dots.push(dot);
      dotsContainer.append(dot);
    });
    document.querySelector('[data-carousel-prev]')?.addEventListener('click', () => stepCarousel(-1));
    document.querySelector('[data-carousel-next]')?.addEventListener('click', () => stepCarousel(1));
    carousel.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        stepCarousel(event.key === 'ArrowLeft' ? -1 : 1);
      }
    });
    document.querySelector('[data-show-cases]')?.addEventListener('click', () => {
      stepCarousel(1);
      carousel.focus({ preventScroll: true });
    });
    window.addEventListener('resize', () => renderCarousel(false));
    document.fonts.ready.then(() => renderCarousel(false));
    renderCarousel(false);
  }

  const cookieBanner = document.querySelector('.cookie-banner');
  let cookieChoice = null;
  // Privacy modes and file:// previews can block browser storage.
  try { cookieChoice = window.localStorage.getItem('ng-cookie-choice'); } catch { /* Keep the choice available for this visit. */ }
  if (cookieBanner && !cookieChoice) cookieBanner.hidden = false;
  document.querySelectorAll('[data-cookie-dismiss]').forEach((button) => {
    button.addEventListener('click', () => {
      try { window.localStorage.setItem('ng-cookie-choice', button.dataset.cookieDismiss || 'essential'); } catch { /* Dismiss still works without persistent storage. */ }
      if (cookieBanner) cookieBanner.hidden = true;
    });
  });
})();
