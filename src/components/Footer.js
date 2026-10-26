export function renderFooter(element) {
  element.innerHTML = `
    <footer id="contact" class="footer">
      <div class="footer-top">
        <div><a class="brand" href="#home"><span class="brand-mark">O</span><span>OPTIGEN</span></a><p>Configura. Genera.<br />Pren el control.</p></div>
        <div class="newsletter"><h2>Newsletter</h2><p>Rep les novetats i actualitzacions d'OptiGen.</p><form><label class="sr-only" for="email">Correu electrònic</label><input id="email" type="email" placeholder="El teu correu electrònic" /><button class="button button-primary" type="submit">Subscriu-me</button></form></div>
        <div class="footer-contact"><h2>Contacta'ns</h2><p>Per a qualsevol consulta, escrigu-nos a:</p><a href="mailto:hello@optigen.cat">hello@optigen.cat</a></div>
      </div>
      <div class="footer-bottom"><span>© ${new Date().getFullYear()} OptiGen</span><a href="#terms">Termes i condicions</a><span>MENU ↑</span></div>
    </footer>
  `;
}
