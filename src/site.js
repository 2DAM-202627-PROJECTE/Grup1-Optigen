import './style.css';
import navbarHtml from './components/Navbar.html?raw';
import footerHtml from './components/Footer.html?raw';
import { initAnimations } from './animations.js';
import { initCookieConsent } from './components/Cookies/Cookies.js';
import { initNewsletter } from './newsletter.js';
import { initContact } from './contact.js';

export function initSite() {
  document.querySelector('#navbar').innerHTML = navbarHtml;
  document.querySelector('#footer').innerHTML = footerHtml;
  document.querySelector('[data-footer-year]').textContent = new Date().getFullYear();

  initNewsletter();
  initContact();
  initCookieConsent();
  initAnimations();
}
