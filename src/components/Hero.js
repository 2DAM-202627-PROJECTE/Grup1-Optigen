export function renderHero(element) {
  element.innerHTML = `
    <section id="home" class="hero section-frame">
      <div class="hero-copy">
        <p class="eyebrow">Lorem ipsum dolor sit amet</p>
        <h1>OPTIGEN <span>dolor sit amet.</span></h1>
        <p class="hero-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum, justo at tincidunt consequat, eros lorem malesuada sem.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#home">Lorem ipsum</a>
          <a class="button button-ghost" href="#home">Lorem ipsum</a>
        </div>
      </div>
      <div class="hero-visual" aria-label="Espai reservat per a la il·lustració principal">
        <span>DECORACIÓ<br />VISUAL</span>
      </div>
    </section>
  `;
}
