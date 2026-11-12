import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initSmoothScroll() {
  const lenis = new Lenis({ duration: 1.1, smoothWheel: true });

  // Lenis drives its frames from GSAP's ticker so ScrollTrigger reads the same scroll position.
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const hash = link.getAttribute('href');
    if (hash.length < 2) return;
    const target = document.querySelector(hash);
    if (!target) return;
    event.preventDefault();
    lenis.scrollTo(target, { offset: hash === '#home' ? -100 : 0 });
    history.pushState(null, '', hash);
  });

  return lenis;
}

function animateHero() {
  const hero = document.querySelector('#home');
  if (!hero) return;

  const q = gsap.utils.selector(hero);
  const score = q('[data-hero-score]')[0];
  const counter = { value: 0 };

  gsap
    .timeline({ defaults: { ease: 'power3.out' } })
    .from(q('[data-hero-word]'), { yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.12 })
    .from(q('[data-hero-reveal]'), { y: 24, opacity: 0, duration: 0.7, stagger: 0.1 }, '-=0.5')
    .from(q('[data-hero-card]'), { y: 60, rotate: 4, opacity: 0, duration: 1 }, '-=0.9')
    .from(q('[data-hero-bar]'), { scaleX: 0, transformOrigin: 'left', duration: 0.9, stagger: 0.15 }, '-=0.5')
    .to(counter, {
      value: 82,
      duration: 1.2,
      ease: 'power2.out',
      onUpdate: () => { if (score) score.textContent = Math.round(counter.value); },
    }, '<')
    .from(q('[data-hero-badge]'), { x: -30, opacity: 0, duration: 0.6 }, '-=0.6')
    .from(q('[data-hero-ring]'), { scale: 0.4, opacity: 0, duration: 0.8 }, '<');

  gsap.to(q('[data-hero-ring]'), { rotate: 360, duration: 24, repeat: -1, ease: 'none' });

  // Parallax: layers drift at different speeds as the hero scrolls out.
  const parallax = { trigger: hero, start: 'top top', end: 'bottom top', scrub: true };
  gsap.to(q('[data-hero-card]'), { yPercent: -18, rotate: -5, ease: 'none', scrollTrigger: parallax });
  gsap.to(q('[data-hero-badge]'), { yPercent: -90, ease: 'none', scrollTrigger: parallax });
  gsap.to(q('[data-hero-ring]'), { y: -140, ease: 'none', scrollTrigger: parallax });
  gsap.to(q('[data-hero-title]'), { yPercent: 25, opacity: 0.25, ease: 'none', scrollTrigger: parallax });
}

function animateSections() {
  gsap.utils.toArray('main section:not(#home)').forEach((section) => {
    const q = gsap.utils.selector(section);
    const heading = q(':scope > div:first-child');
    const items = q('li, article, details, :scope > div:nth-child(n+2) > div');

    gsap.from(heading, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: section, start: 'top 80%', once: true },
    });

    gsap.from(items, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.06,
      scrollTrigger: { trigger: section, start: 'top 70%', once: true },
    });
  });

  const footer = document.querySelector('#contact');
  if (footer) {
    gsap.from(footer.querySelectorAll(':scope > div:first-child > div'), {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power2.out',
      scrollTrigger: { trigger: footer, start: 'top 85%', once: true },
    });
  }
}

export function initAnimations() {
  if (prefersReducedMotion()) return;

  initSmoothScroll();
  animateHero();
  animateSections();
}
