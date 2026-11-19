import './style.css';
import navbarHtml from './components/Navbar.html?raw';
import SobreNosaltresHtml from './components/Sobre_Nosaltres/Sobre_Nosaltres.html?raw';
import footerHtml from './components/Footer.html?raw';
import { initAnimations } from './animations.js';
import { initCookieConsent } from './components/Cookies/Cookies.js';

export function renderHtml(element, rawHtml) {
    element.innerHTML = rawHtml;
}

renderHtml(document.querySelector('#navbar'), navbarHtml);
renderHtml(document.querySelector('#SobreNosaltres'), SobreNosaltresHtml);
renderHtml(document.querySelector('#footer'), footerHtml);
initAnimations();
initCookieConsent();
