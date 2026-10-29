export function renderFeatures(element) {
  element.innerHTML = `
    <section id="features" class="wire-section">
      <div class="section-heading">
        <span class="section-index">01</span>
        <h2>Funcionalitats</h2>
        <span class="section-arrow">↓</span>
      </div>
      <div class="feature-grid">
        <ul>
          <li>Configuració senzilla</li>
          <li>Resultats personalitzats</li>
        </ul>
        <ul>
          <li>Procés ràpid</li>
          <li>Control total</li>
        </ul>
        <ul>
          <li>Experiència clara</li>
          <li>Adaptat a tu</li>
        </ul>
      </div>
    </section>
    <section id="aboutUs" class="wire-section aboutUs-section">
      <div class="section-heading"><span class="section-index">02</span><h2>Sobre nosaltres</h2><span class="section-arrow">↓</span></div>
      <div class="aboutUs-content"><div class="image-placeholder">IMATGE</div><p>Una eina pensada per ajudar-te a prendre decisions i crear configuracions que encaixin amb les teves necessitats.</p></div>
    </section>
    <section id="faq" class="wire-section">
      <div class="section-heading"><span class="section-index">03</span><h2>FAQs</h2><span class="section-arrow">↓</span></div>
      <div class="faq-grid"><p><b>01.</b> Què és OptiGen?</p><p><b>02.</b> Com funciona?</p><p><b>03.</b> Puc personalitzar-ho?</p><p><b>04.</b> Com puc contactar?</p></div>
    </section>
    <section id="pricing" class="wire-section pricing-section">
      <div class="section-heading"><span class="section-index">04</span><h2>Preus</h2><span class="section-arrow">↓</span></div>
      <div class="pricing-grid"><article><h3>Opció 1</h3><span>Configuració essencial</span></article><article class="featured-price"><h3>Opció 2</h3><span>Configuració completa</span></article></div>
    </section>
  `;
}
