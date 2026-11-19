import FAQHtml from './components/FAQ/FAQ.html?raw';
import { initSite } from './site.js';

document.querySelector('#FAQ').innerHTML = FAQHtml;
initSite();
