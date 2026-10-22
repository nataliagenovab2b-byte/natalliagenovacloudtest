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

const dataRain = document.querySelector('.data-rain');
const dataRainCanvas = dataRain?.querySelector('canvas');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (dataRain && dataRainCanvas && !prefersReducedMotion) {
  const context = dataRainCanvas.getContext('2d');
  const requestFrame = window.requestAnimationFrame || ((callback) => window.setTimeout(callback, 16));
  const cancelFrame = window.cancelAnimationFrame || window.clearTimeout;
  let particles = [];
  let animationFrame;

  function resizeDataRain() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    dataRainCanvas.width = dataRain.clientWidth * pixelRatio;
    dataRainCanvas.height = dataRain.clientHeight * pixelRatio;
    dataRainCanvas.style.width = `${dataRain.clientWidth}px`;
    dataRainCanvas.style.height = `${dataRain.clientHeight}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    particles = Array.from({ length: Math.max(120, Math.floor(dataRain.clientWidth / 8)) }, () => ({
      x: Math.random() * dataRain.clientWidth,
      y: Math.random() * dataRain.clientHeight,
      speed: 0.25 + Math.random() * 0.75,
      length: 12 + Math.random() * 40,
      width: 0.35 + Math.random() * 0.8,
      hue: Math.random() > 0.84 ? 325 + Math.random() * 35 : 175 + Math.random() * 70,
      alpha: 0.12 + Math.random() * 0.42,
      swirl: 0.15 + Math.random() * 0.5,
    }));
  }

  function drawDataRain() {
    const width = dataRain.clientWidth;
    const height = dataRain.clientHeight;
    context.clearRect(0, 0, width, height);
    const glow = context.createRadialGradient(width * 0.68, height * 0.48, 0, width * 0.68, height * 0.48, Math.max(width, height) * 0.42);
    glow.addColorStop(0, 'rgba(173, 43, 104, 0.2)');
    glow.addColorStop(0.35, 'rgba(60, 36, 99, 0.08)');
    glow.addColorStop(1, 'rgba(2, 9, 20, 0)');
    context.fillStyle = glow;
    context.fillRect(0, 0, width, height);
    context.globalCompositeOperation = 'lighter';
    const centerX = width * 0.68;
    const centerY = height * 0.52;
    particles.forEach((particle) => {
      const deltaX = particle.x - centerX;
      const deltaY = particle.y - centerY;
      const distance = Math.max(40, Math.hypot(deltaX, deltaY));
      const tangentX = -deltaY / distance;
      const tangentY = deltaX / distance;
      const velocityX = tangentX * particle.swirl + 0.08;
      const velocityY = particle.speed + tangentY * particle.swirl;
      context.beginPath();
      context.moveTo(particle.x, particle.y);
      context.lineTo(particle.x - velocityX * particle.length, particle.y - velocityY * particle.length);
      context.strokeStyle = `hsla(${particle.hue}, 82%, 70%, ${particle.alpha})`;
      context.lineWidth = particle.width;
      context.stroke();
      if (particle.alpha > 0.42 && Math.random() > 0.94) {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.width * 1.7, 0, Math.PI * 2);
        context.fillStyle = `hsla(${particle.hue}, 95%, 88%, ${particle.alpha + 0.2})`;
        context.fill();
      }
      particle.x += velocityX;
      particle.y += velocityY;
      if (particle.x < -80 || particle.x > width + 80 || particle.y < -80 || particle.y > height + 80) {
        particle.x = Math.random() * width;
        particle.y = -Math.random() * 80;
      }
    });
    context.globalCompositeOperation = 'source-over';
    animationFrame = requestFrame(drawDataRain);
  }

  resizeDataRain();
  window.addEventListener('resize', resizeDataRain);
  animationFrame = requestFrame(drawDataRain);
  window.addEventListener('pagehide', () => cancelFrame(animationFrame), { once: true });
}
