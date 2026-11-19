const FORMSPREE_SCRIPT = 'https://unpkg.com/@formspree/ajax@1';
const initializedForms = new WeakSet();
let script;

export function initForms() {
  const forms = [...document.querySelectorAll('form[data-formspree-id]')]
    .filter((form) => form.dataset.formspreeId.trim() && !initializedForms.has(form));

  if (!forms.length) return;

  const formspree = (window.formspree ||= function () {
    (formspree.q ||= []).push(arguments);
  });

  for (const form of forms) {
    initializedForms.add(form);
    formspree('initForm', {
      formElement: `#${form.id}`,
      formId: form.dataset.formspreeId.trim(),
      useDefaultStyles: false,
    });
  }

  if (!script) {
    script = document.createElement('script');
    script.src = FORMSPREE_SCRIPT;
    script.addEventListener('error', () => {
      for (const form of document.querySelectorAll('form[data-formspree-id]')) {
        if (!initializedForms.has(form)) continue;
        const error = form.querySelector('[data-fs-error=""]');
        error.textContent = 'No hem pogut carregar el formulari. Recarrega la pàgina per tornar-ho a provar.';
        error.setAttribute('data-fs-active', '');
      }
    });
    document.head.append(script);
  }
}
