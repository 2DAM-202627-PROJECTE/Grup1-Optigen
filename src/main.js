import './style.css';
import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderFeatures } from './components/Features.js';
import { renderFooter } from './components/Footer.js';
import { initAnimations } from './animations.js';

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-[#080b10]">
    <div id="navbar"></div>
    <main>
      <div id="hero"></div>
      <div id="features"></div>
    </main>
    <div id="footer"></div>
  </div>
`;

renderNavbar(document.querySelector('#navbar'));
renderHero(document.querySelector('#hero'));
renderFeatures(document.querySelector('#features'));
renderFooter(document.querySelector('#footer'));
initAnimations();
