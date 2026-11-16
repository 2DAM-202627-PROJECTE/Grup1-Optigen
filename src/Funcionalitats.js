import './style.css';
import navbarHtml from './components/Navbar.html?raw';
import funcionalitatsHtml from './components/Funcionalitats/Funcionalitats.html?raw';
import footerHtml from './components/Footer.html?raw';
import { initAnimations } from './animations.js';

export function renderHtml(element, rawHtml) {
    element.innerHTML = rawHtml;
}

renderHtml(document.querySelector('#navbar'), navbarHtml);
renderHtml(document.querySelector('#funcionalitats'), funcionalitatsHtml);
renderHtml(document.querySelector('#footer'), footerHtml);

initAnimations();
