import './style.css';
import navbarHtml from './components/Navbar.html?raw';
import FAQHtml from './components/FAQ/FAQ.html?raw';
import footerHtml from './components/Footer.html?raw';
import { initAnimations } from './animations.js';
import { initCookieConsent } from './components/Cookies/Cookies.js';

export function renderHtml(element, rawHtml) {
    element.innerHTML = rawHtml;
}

renderHtml(document.querySelector('#navbar'), navbarHtml);
renderHtml(document.querySelector('#FAQ'), FAQHtml);
renderHtml(document.querySelector('#footer'), footerHtml);

initAnimations();
initCookieConsent();
