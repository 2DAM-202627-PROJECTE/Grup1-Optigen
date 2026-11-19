import { isValidEmail, NEWSLETTER_CONSENT_VERSION } from './form-rules.js';

export function initNewsletter() {
  const form = document.querySelector('[data-newsletter]');
  if (!form) return;

  const { email, consent } = form.elements;
  const button = form.querySelector('button[type="submit"]');
  const status = form.querySelector('[role="status"]');
  const endpoint = import.meta.env.VITE_NEWSLETTER_ENDPOINT?.trim()
    || `${import.meta.env.BASE_URL}api/newsletter`;

  function showStatus(message, error = false) {
    status.textContent = message;
    status.classList.toggle('text-[#ffc29d]', error);
    status.classList.toggle('text-[#9da5ae]', !error);
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (button.disabled) return;

    const address = email.value.trim();
    if (!isValidEmail(address)) {
      showStatus('Introdueix un correu electrònic vàlid.', true);
      email.setAttribute('aria-invalid', 'true');
      email.focus();
      return;
    }
    if (!consent.checked) {
      showStatus('Marca la casella si vols rebre la newsletter.', true);
      consent.setAttribute('aria-invalid', 'true');
      consent.focus();
      return;
    }

    button.disabled = true;
    showStatus('Estem desant la teva subscripció…');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'omit',
        body: JSON.stringify({
          email: address,
          consent: true,
          consentVersion: NEWSLETTER_CONSENT_VERSION,
        }),
        signal: AbortSignal.timeout(10000),
      });

      if (!response.ok || (await response.json()).subscribed !== true) {
        throw new Error('Newsletter subscription failed');
      }

      form.reset();
      showStatus('La teva subscripció està registrada. Gràcies!');
    } catch {
      showStatus('Ara mateix no hem pogut confirmar la subscripció. Torna-ho a provar.', true);
    } finally {
      button.disabled = false;
    }
  });

  email.addEventListener('input', () => email.removeAttribute('aria-invalid'));
  consent.addEventListener('change', () => consent.removeAttribute('aria-invalid'));
  form.noValidate = true;
}
