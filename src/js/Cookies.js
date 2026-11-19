const COOKIE_NAME = 'optigen_cookie_consent';
const COOKIE_VERSION = 2;
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const defaultPreferences = {
  essential: true,
  analytics: false,
  version: COOKIE_VERSION,
};

const choiceClass = 'border border-[#f47b20] bg-[#f47b20] px-4 py-3 text-xs font-bold text-[#080b10] hover:bg-[#ff9140]';
const settingsClass = 'border border-[#33404d] px-4 py-3 text-xs font-bold text-white hover:border-white';
const errorMarkup = `<p hidden class="mt-3 text-sm text-[#ffc29d]" data-cookie-error role="status"></p>`;

function getPreferences() {
  const prefix = `${COOKIE_NAME}=`;
  const cookie = document.cookie.split(/;\s*/).find((entry) => entry.startsWith(prefix));
  if (!cookie) return null;

  try {
    const preferences = JSON.parse(decodeURIComponent(cookie.slice(prefix.length)));
    if (preferences?.version === COOKIE_VERSION
      && preferences.essential === true
      && typeof preferences.analytics === 'boolean') {
      return preferences;
    }
  } catch {
    return null;
  }

  return null;
}

function savePreferences(analytics) {
  const value = encodeURIComponent(JSON.stringify({ ...defaultPreferences, analytics }));
  const secure = location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${COOKIE_NAME}=${value}; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax${secure}`;

  return getPreferences()?.analytics === analytics;
}

function createBanner() {
  const banner = document.createElement('aside');
  banner.className = 'fixed inset-x-4 bottom-4 z-40 mx-auto max-w-[700px] border border-[#33404d] bg-[#101923] p-5 shadow-[0_18px_50px_rgba(0,0,0,.45)] sm:p-6';
  banner.setAttribute('aria-labelledby', 'cookie-banner-title');
  banner.innerHTML = `
    <h2 id="cookie-banner-title" class="text-lg font-bold text-white">Preferències de cookies</h2>
    <p class="mt-2 text-sm leading-relaxed text-[#9da5ae]">
      Fem servir una cookie tècnica per recordar la teva tria. Pots acceptar o rebutjar les opcionals.
      Actualment la landing no instal·la cookies analítiques ni publicitàries.
      <a class="text-[#f47b20] underline" href="./indexCookies.html" target="_blank" rel="noopener noreferrer">Política de cookies</a>.
    </p>
    ${errorMarkup}
    <div class="mt-4 flex flex-wrap gap-2">
      <button class="${choiceClass}" type="button" data-cookie-choice="accept">Accepta les opcionals</button>
      <button class="${choiceClass}" type="button" data-cookie-choice="reject">Rebutja les opcionals</button>
      <button class="${settingsClass}" type="button" data-cookie-settings>Configura</button>
    </div>
  `;
  document.body.append(banner);
  return banner;
}

function createModal() {
  const modal = document.createElement('dialog');
  modal.className = 'm-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-[620px] overflow-y-auto border border-[#33404d] bg-[#101923] p-5 text-white backdrop:bg-[#080b10]/85 sm:p-8';
  modal.setAttribute('aria-labelledby', 'cookie-modal-title');
  modal.setAttribute('data-lenis-prevent', '');
  modal.innerHTML = `
    <div class="flex items-start justify-between gap-4 border-b border-[#33404d] pb-5">
      <h2 id="cookie-modal-title" class="text-2xl font-bold">Configura les cookies</h2>
      <button class="px-2 text-2xl leading-none text-[#9da5ae] hover:text-white" type="button" data-cookie-close aria-label="Tanca el configurador" autofocus>×</button>
    </div>
    <div class="mt-5 space-y-4">
      <div class="border border-[#33404d] bg-[#151f2b] p-4">
        <h3 class="font-bold">Essencials <span class="ml-2 text-xs text-[#f47b20]">Sempre actives</span></h3>
        <p class="mt-2 text-sm text-[#9da5ae]">Recorden la teva tria entre visites.</p>
      </div>
      <div class="border border-[#33404d] bg-[#151f2b] p-4">
        <label class="flex items-start gap-3 font-bold">
          <input class="mt-1 accent-[#f47b20]" type="checkbox" data-cookie-analytics aria-describedby="cookie-analytics-info" />
          Permet les cookies analítiques
        </label>
        <p id="cookie-analytics-info" class="mt-2 text-sm text-[#9da5ae]">
          Servirien per mesurar l'ús de la web. La landing desa la teva tria i actualment no carrega cap eina analítica.
        </p>
      </div>
      <a class="inline-block text-sm text-[#f47b20] underline" href="./indexCookies.html" target="_blank" rel="noopener noreferrer">
        Política de cookies
      </a>
    </div>
    ${errorMarkup}
    <div class="mt-5 flex flex-wrap gap-2 border-t border-[#33404d] pt-4">
      <button class="${choiceClass}" type="button" data-cookie-choice="accept">Accepta les opcionals</button>
      <button class="${choiceClass}" type="button" data-cookie-choice="reject">Rebutja les opcionals</button>
      <button class="${settingsClass}" type="button" data-cookie-choice="custom">Desa la selecció</button>
    </div>
  `;
  document.body.append(modal);
  return modal;
}

export function initCookieConsent() {
  const modal = createModal();
  const analytics = modal.querySelector('[data-cookie-analytics]');
  const banner = getPreferences() ? null : createBanner();

  function save(allowAnalytics, source) {
    if (!savePreferences(allowAnalytics)) {
      const error = source.querySelector('[data-cookie-error]');
      error.hidden = false;
      error.textContent = 'No hem pogut desar la teva tria. Comprova els permisos de cookies del navegador.';
      return;
    }

    const bannerHadFocus = banner?.contains(document.activeElement);
    const openedFromBanner = banner?.contains(settingsTrigger);
    if (modal.open) modal.close();
    banner?.remove();
    if (bannerHadFocus || openedFromBanner) {
      document.querySelector('footer [data-cookie-settings]')?.focus({ preventScroll: true });
    }
  }

  let settingsTrigger;
  document.querySelectorAll('[data-cookie-settings]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      settingsTrigger = trigger;
      analytics.checked = getCookiePreferences().analytics;
      const error = modal.querySelector('[data-cookie-error]');
      error.hidden = true;
      error.textContent = '';
      modal.showModal();
    });
  });

  modal.querySelector('[data-cookie-close]').addEventListener('click', () => modal.close());

  for (const source of [banner, modal]) {
    source?.querySelectorAll('[data-cookie-choice]').forEach((button) => {
      button.addEventListener('click', () => {
        const choice = button.dataset.cookieChoice;
        save(choice === 'accept' || (choice === 'custom' && analytics.checked), source);
      });
    });
  }
}

export function getCookiePreferences() {
  return getPreferences() || { ...defaultPreferences };
}
