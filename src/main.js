import './style.css';
import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderFooter } from './components/Footer.js';

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <div id="navbar"></div>
    <main>
      <div id="hero"></div>
    </main>
    <div id="footer"></div>
  </div>
`;

renderNavbar(document.querySelector('#navbar'));
renderHero(document.querySelector('#hero'));
renderFooter(document.querySelector('#footer'));
