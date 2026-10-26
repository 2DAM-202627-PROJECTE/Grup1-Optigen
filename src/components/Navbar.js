export function renderNavbar(element) {
  element.innerHTML = `
    <nav class="navbar">
      <a class="brand" href="#home" aria-label="OptiGen inici">
        <span class="brand-mark">O</span>
        <span>OPTIGEN</span>
      </a>
      <div class="nav-links">
        <a class="active" href="#home">Home</a>
        <a href="#about">Sobre nosaltres</a>
        <a href="#faq">FAQ</a>
        <a href="#features">Funcionalitats</a>
      </div>
      <a class="button button-outline" href="#contact">Iniciar configuració</a>
    </nav>
  `;
}
