import funcionalitatsHtml from './components/Funcionalitats/Funcionalitats.html?raw';
import { initSite } from './site.js';

document.querySelector('#funcionalitats').innerHTML = funcionalitatsHtml;
initSite();
