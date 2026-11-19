import '../style.css';
import navbarHtml from '../components/Navbar.html?raw';
import footerHtml from '../components/Footer.html?raw';
import { initAnimations } from './animations.js';
import { initCookieConsent } from './Cookies.js';
import { initForms } from './forms.js';
import { initFaq } from './faq.js';

function markCurrentPage(navbar) {
  const filename = window.location.pathname.split('/').at(-1);
  const page = !filename || filename === 'index.html' ? 'indexInici.html' : filename;
  const link = [...navbar.querySelectorAll('[data-page-link]')]
    .find((item) => item.pathname.split('/').at(-1) === page);
  link?.setAttribute('aria-current', 'page');
}

function initBackToTop(button, topLink, lenis) {
  const updateVisibility = () => {
    button.toggleAttribute('inert', window.scrollY <= 0);
  };

  window.addEventListener('scroll', updateVisibility, { passive: true });
  updateVisibility();

  button.addEventListener('click', () => {
    topLink.focus({ preventScroll: true });
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo(0, 0);
    }
  });
}

export function initSite() {
  const navbar = document.querySelector('#navbar');
  const footer = document.querySelector('#footer');
  navbar.innerHTML = navbarHtml;
  footer.innerHTML = footerHtml;
  footer.querySelector('[data-footer-year]').textContent = new Date().getFullYear();

  markCurrentPage(navbar);
  initForms();
  initCookieConsent();
  initFaq();
  const lenis = initAnimations();
  initBackToTop(footer.querySelector('[data-back-to-top]'), navbar.querySelector('a'), lenis);
}
