import './style.css';
import navbarHtml from './components/Navbar.html?raw';
import heroHtml from './components/Hero.html?raw';
import featuresHtml from './components/Features.html?raw';
import footerHtml from './components/Footer.html?raw';
import { initAnimations } from './animations.js';

export function renderHtml(element, rawHtml) {
  element.innerHTML = rawHtml;
}

renderHtml(document.querySelector('#navbar'), navbarHtml);
renderHtml(document.querySelector('#hero'), heroHtml);
renderHtml(document.querySelector('#features'), featuresHtml);
renderHtml(document.querySelector('#footer'), footerHtml);

initAnimations();
