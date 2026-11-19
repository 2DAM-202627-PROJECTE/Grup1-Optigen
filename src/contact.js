import { CONTACT_MAX_LENGTHS, isValidEmail } from './form-rules.js';

export function initContact() {
  const form = document.querySelector('[data-contact]');
  if (!form) return;

  const button = form.querySelector('button[type="submit"]');
  const status = form.querySelector('[role="status"]');
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT?.trim()
    || `${import.meta.env.BASE_URL}api/contact`;

  function showStatus(message, error = false) {
    status.textContent = message;
    status.classList.toggle('text-[#ffc29d]', error);
    status.classList.toggle('text-[#9da5ae]', !error);
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (button.disabled) return;

    const fields = {};
    for (const [name, maxLength] of Object.entries(CONTACT_MAX_LENGTHS)) {
      const input = form.elements.namedItem(name);
      const value = input.value.trim();
      if (!value || value.length > maxLength || (name === 'email' && !isValidEmail(value))) {
        input.setCustomValidity(name === 'email' ? 'Introdueix un correu electrònic vàlid.' : 'Revisa aquest camp.');
        input.reportValidity();
        return;
      }
      fields[name] = value;
    }

    button.disabled = true;
    showStatus('Estem enviant el missatge…');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'omit',
        body: JSON.stringify(fields),
        signal: AbortSignal.timeout(12_000),
      });

      if (response.status === 429) {
        showStatus('Hi ha massa enviaments ara mateix. Torna-ho a provar d’aquí a un minut.', true);
        return;
      }
      if (!response.ok || (await response.json()).sent !== true) {
        showStatus('No hem pogut confirmar l’enviament. Torna-ho a provar.', true);
        return;
      }

      form.reset();
      showStatus('Hem enviat el teu missatge. Gràcies!');
    } catch {
      showStatus('No hem pogut confirmar l’enviament. Torna-ho a provar.', true);
    } finally {
      button.disabled = false;
    }
  });

  for (const name of Object.keys(CONTACT_MAX_LENGTHS)) {
    const input = form.elements.namedItem(name);
    input.addEventListener('input', () => input.setCustomValidity(''));
  }
}
