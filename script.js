const toggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
if (toggle && mobileNav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    mobileNav.hidden = !open;
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mobileNav.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  }));
}
