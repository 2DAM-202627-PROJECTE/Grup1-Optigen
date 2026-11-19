import heroHtml from '../components/Inici/Hero.html?raw';
import featuresHtml from '../components/Inici/Features.html?raw';
import { initSite } from './site.js';

document.querySelector('#hero').innerHTML = heroHtml;
document.querySelector('#features').innerHTML = featuresHtml;
initSite();
