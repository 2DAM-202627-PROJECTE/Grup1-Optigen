const COOKIE_NAME = 'optigen_cookie_consent';
const COOKIE_VERSION = 1;
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const defaultPreferences = {
  essential: true,
  analytics: false,
  version: COOKIE_VERSION,
};

function readCookie(name) {
  const prefix = `${name}=`;
  const cookie = document.cookie
    .split('; ')
    .find((entry) => entry.startsWith(prefix));

  if (!cookie) return null;

  try {
    return decodeURIComponent(cookie.slice(prefix.length));
  } catch {
    return null;
  }
}

function getPreferences() {
  const rawValue = readCookie(COOKIE_NAME);
  if (!rawValue) return null;

  try {
    const parsed = JSON.parse(rawValue);
    if (
      parsed?.version !== COOKIE_VERSION
      || parsed.essential !== true
      || parsed.analytics !== false
    ) {
      return null;
    }

    return { ...defaultPreferences };
  } catch {
    return null;
  }
}

function savePreferences() {
  const value = encodeURIComponent(JSON.stringify(defaultPreferences));
  const secureAttribute = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${COOKIE_NAME}=${value}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax${secureAttribute}`;

  return getPreferences() !== null;
}

function createBanner() {
  const banner = document.createElement('aside');
  banner.className = 'fixed inset-x-4 bottom-4 z-40 mx-auto max-w-[760px] border border-[#33404d] bg-[#101923] p-5 shadow-[0_18px_50px_rgba(0,0,0,.45)] sm:inset-x-6 sm:p-6';
  banner.setAttribute('data-cookie-banner', '');
  banner.setAttribute('aria-labelledby', 'cookie-banner-title');
  banner.innerHTML = `
    <div class="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div class="max-w-[530px]">
        <h2 id="cookie-banner-title" class="m-0 text-lg font-bold text-white">🍪 Tu privacidad importa</h2>
        <p class="mt-2 mb-0 text-sm leading-[1.6] text-[#9da5ae]">
          En Optigen utilizamos cookies esenciales para garantizar el funcionamiento de la plataforma.
          También puedes gestionar tus preferencias de cookies en cualquier momento desde nuestra Política de Cookies.
        </p>
        <p class="mt-3 mb-0 hidden text-xs text-[#f47b20]" data-cookie-error role="status">
          No se han podido guardar las preferencias. Comprueba que las cookies estén habilitadas.
        </p>
      </div>
      <div class="flex shrink-0 flex-wrap gap-3">
        <button class="border border-[#f47b20] bg-transparent px-5 py-3 text-xs font-bold text-[#f47b20] transition-colors hover:bg-[#f47b20] hover:text-[#080b10]" type="button" data-cookie-configure>
          Configurar cookies
        </button>
        <button class="border border-[#f47b20] bg-[#f47b20] px-5 py-3 text-xs font-bold text-[#080b10] transition-colors hover:bg-[#ff9140]" type="button" data-cookie-accept>
          Aceptar
        </button>
      </div>
    </div>
  `;
  document.body.append(banner);
  return banner;
}

function createModal() {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 z-50 hidden items-center justify-center bg-[#080b10]/85 p-4';
  modal.setAttribute('data-cookie-modal', '');
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-labelledby', 'cookie-modal-title');
  modal.innerHTML = `
    <div class="max-h-[90vh] w-full max-w-[620px] overflow-y-auto border border-[#33404d] bg-[#101923] p-6 shadow-[0_18px_50px_rgba(0,0,0,.55)] sm:p-8">
      <div class="flex items-start justify-between gap-4 border-b border-[#33404d] pb-5">
        <div>
          <p class="m-0 text-[.7rem] uppercase tracking-[.16em] text-[#f47b20]">Privacidad</p>
          <h2 id="cookie-modal-title" class="mt-2 mb-0 text-2xl font-bold text-white">Configurar cookies</h2>
        </div>
        <button class="border-0 bg-transparent p-1 text-2xl leading-none text-[#9da5ae] hover:text-white" type="button" data-cookie-close aria-label="Cerrar panel">×</button>
      </div>
      <div class="mt-6 space-y-5">
        <div class="border border-[#33404d] bg-[#151f2b] p-5">
          <div class="flex items-start justify-between gap-4">
            <div>
              <h3 class="m-0 text-base font-bold text-white">Cookies esenciales</h3>
              <p class="mt-2 mb-0 text-sm leading-[1.6] text-[#9da5ae]">
                Estas cookies son necesarias para el funcionamiento de Optigen. Permiten mantener las sesiones,
                garantizar la seguridad y recordar tus preferencias de privacidad.
              </p>
            </div>
            <span class="shrink-0 text-xs font-bold uppercase tracking-[.1em] text-[#f47b20]">Siempre activas</span>
          </div>
        </div>
        <div class="border border-[#33404d] bg-[#151f2b] p-5">
          <div class="flex items-start justify-between gap-4">
            <div>
              <h3 class="m-0 text-base font-bold text-white">Cookies analíticas</h3>
              <p class="mt-2 mb-0 text-sm leading-[1.6] text-[#9da5ae]">
                Estas cookies nos ayudarían a comprender cómo se utiliza Optigen y a mejorar sus funcionalidades.
              </p>
            </div>
            <span class="shrink-0 text-right text-xs font-bold uppercase tracking-[.1em] text-[#788492]">No disponibles</span>
          </div>
          <p class="mt-4 mb-0 text-xs leading-[1.6] text-[#788492]">No hay ninguna herramienta analítica integrada actualmente.</p>
        </div>
      </div>
      <p class="mt-5 hidden text-xs text-[#f47b20]" data-cookie-error role="status">
        No se han podido guardar las preferencias. Comprueba que las cookies estén habilitadas.
      </p>
      <div class="mt-6 flex flex-wrap justify-end gap-3 border-t border-[#33404d] pt-5">
        <button class="border border-[#33404d] bg-transparent px-5 py-3 text-xs font-bold text-white transition-colors hover:border-white" type="button" data-cookie-back>Volver</button>
        <button class="border border-[#f47b20] bg-[#f47b20] px-5 py-3 text-xs font-bold text-[#080b10] transition-colors hover:bg-[#ff9140]" type="button" data-cookie-save>Guardar preferencias</button>
      </div>
    </div>
  `;
  document.body.append(modal);
  return modal;
}

function setVisible(element, visible) {
  element.classList.toggle('hidden', !visible);
  element.classList.toggle('flex', visible);
}

function openModal(modal, trigger) {
  const focusable = modal.querySelector('[data-cookie-close]');
  modal.dataset.previousFocus = trigger?.id || '';
  setVisible(modal, true);
  focusable.focus();
}

function closeModal(modal) {
  setVisible(modal, false);
  const previousFocus = modal.dataset.previousFocus
    ? document.getElementById(modal.dataset.previousFocus)
    : document.querySelector('[data-cookie-configure]');
  previousFocus?.focus();
}

function showError(container) {
  container.querySelectorAll('[data-cookie-error]').forEach((error) => {
    error.classList.remove('hidden');
  });
}

function bindCookieUi() {
  const banner = document.querySelector('[data-cookie-banner]');
  const modal = document.querySelector('[data-cookie-modal]');
  if (!modal) return;

  const save = (source) => {
    if (!savePreferences()) {
      showError(source);
      return;
    }
    banner?.remove();
    closeModal(modal);
  };

  banner?.querySelector('[data-cookie-accept]').addEventListener('click', () => save(banner));
  banner?.querySelector('[data-cookie-configure]').addEventListener('click', (event) => {
    openModal(modal, event.currentTarget);
  });
  document.addEventListener('click', (event) => {
    const settingsButton = event.target.closest('[data-cookie-settings]');
    if (settingsButton) openModal(modal, settingsButton);
  });
  modal.querySelector('[data-cookie-save]').addEventListener('click', (event) => save(modal));
  modal.querySelector('[data-cookie-back]').addEventListener('click', () => closeModal(modal));
  modal.querySelector('[data-cookie-close]').addEventListener('click', () => closeModal(modal));
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal(modal);
  });
  modal.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal(modal);
      return;
    }
    if (event.key !== 'Tab') return;

    const focusableElements = [...modal.querySelectorAll('button:not([disabled])')];
    const first = focusableElements[0];
    const last = focusableElements.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

export function initCookieConsent() {
  const modal = createModal();
  if (!getPreferences()) createBanner();
  bindCookieUi();
}

export function getCookiePreferences() {
  return getPreferences() || { ...defaultPreferences };
}