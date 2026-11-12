
export function renderHero(element) {
  element.innerHTML = `
    <section
      id="home"
      class="grid min-h-[470px] grid-cols-[1.4fr_1fr] items-stretch border-b border-[#33404d] bg-[#101923] px-[clamp(1.25rem,7vw,6rem)] py-20 max-[700px]:grid-cols-1"
    >
      <div class="max-w-[700px] self-center">

        <p data-hero-reveal class="text-[.72rem] uppercase tracking-[.16em] text-[#f47b20]">
          Configuració intel·ligent per al teu equip
        </p>

        <h1 data-hero-title class="my-4 mb-6 max-w-[800px] text-[clamp(2.7rem,7vw,6.5rem)] font-bold leading-[.96]">
          <span data-hero-word class="inline-block">OPTIGEN</span>
          <span data-hero-word class="block text-[clamp(4rem,2.5vw,6.5rem)] leading-none text-[#f47b20]">
            Configura Genera Executa
          </span>
        </h1>

        <p data-hero-reveal class="max-w-[470px] leading-[1.6] text-[#9da5ae]">
          Optimitza el teu PC des del navegador i aplica cada canvi amb un
          script personalitzat, clar i fàcil de revisar.
        </p>

        <div data-hero-reveal class="mt-8 flex flex-wrap gap-4">

          <a
            class="inline-block border border-transparent bg-[#f47b20] px-5 py-[.8rem] text-center text-[.78rem] font-bold text-[#080b10] no-underline"
            href="#pricing"
          >
            Comença a configurar
          </a>

          <a
            class="inline-block border-b border-[#f47b20] px-5 py-[.8rem] text-center text-[.78rem] text-white no-underline"
            href="#features"
          >
            Explora funcionalitats
          </a>

        </div>
      </div>

      <div
        class="relative flex items-center justify-center border-l border-[#33404d] px-8 py-12 max-[700px]:mt-12 max-[700px]:min-h-[390px] max-[700px]:border-l-0 max-[700px]:border-t max-[700px]:px-0"
        aria-label="Previsualització del configurador d'OptiGen"
      >
        <div data-hero-ring class="absolute right-[8%] top-[12%] h-24 w-24 rounded-full border border-[#f47b20]/20 max-[700px]:right-[4%]">
          <div class="absolute inset-3 rounded-full border border-dashed border-[#f47b20]/40"></div>
          <span class="absolute -right-2 top-1/2 h-2 w-2 rounded-full bg-[#f47b20] shadow-[0_0_16px_#f47b20]"></span>
        </div>

        <div data-hero-card class="relative w-full max-w-[430px] rotate-[-2deg] border border-[#33404d] bg-[#151f2b] p-4 shadow-[18px_22px_0_rgba(8,11,16,.55)] sm:p-5">
          <div class="mb-5 flex items-center justify-between border-b border-[#33404d] pb-3">
            <div class="flex items-center gap-2">
              <span class="h-2 w-2 rounded-full bg-[#f47b20] shadow-[0_0_10px_#f47b20]"></span>
              <span class="text-[.62rem] font-bold uppercase tracking-[.18em] text-white">Configurador</span>
            </div>
            <span class="text-[.58rem] uppercase tracking-[.12em] text-[#788492]">Pas 02 / 03</span>
          </div>

          <div class="grid grid-cols-[1fr_auto] gap-4">
            <div>
              <p class="mb-1 text-[.62rem] uppercase tracking-[.14em] text-[#788492]">Perfil actiu</p>
              <h2 class="text-xl font-bold text-white">Equilibrat</h2>
              <p class="mt-1 text-[.72rem] leading-[1.5] text-[#9da5ae]">Rendiment estable per al dia a dia.</p>
            </div>
            <div class="flex h-[74px] w-[74px] items-center justify-center rounded-full border-[5px] border-[#f47b20] border-l-[#33404d] text-center">
              <span class="text-lg font-bold text-white"><span data-hero-score>82</span><small class="text-[.62rem] text-[#f47b20]">%</small></span>
            </div>
          </div>

          <div class="mt-5 space-y-3">
            <div>
              <div class="mb-1 flex justify-between text-[.6rem] uppercase tracking-[.1em] text-[#788492]">
                <span>Rendiment</span><span class="text-[#f47b20]">Alt</span>
              </div>
              <div class="h-1 bg-[#283542]"><div data-hero-bar class="h-full w-[78%] bg-[#f47b20]"></div></div>
            </div>
            <div>
              <div class="mb-1 flex justify-between text-[.6rem] uppercase tracking-[.1em] text-[#788492]">
                <span>Consum</span><span class="text-[#f47b20]">Òptim</span>
              </div>
              <div class="h-1 bg-[#283542]"><div data-hero-bar class="h-full w-[64%] bg-[#f47b20]"></div></div>
            </div>
          </div>

          <div class="mt-5 grid grid-cols-2 gap-2">
            <div class="border border-[#33404d] bg-[#101923] p-3">
              <p class="text-[.58rem] uppercase tracking-[.1em] text-[#788492]">Canvis preparats</p>
              <p class="mt-1 text-lg font-bold text-white">12</p>
            </div>
            <div class="border border-[#33404d] bg-[#101923] p-3">
              <p class="text-[.58rem] uppercase tracking-[.1em] text-[#788492]">Estat</p>
              <p class="mt-1 flex items-center gap-1.5 text-[.72rem] font-bold text-[#f47b20]"><span class="h-1.5 w-1.5 rounded-full bg-[#f47b20]"></span>Preparat</p>
            </div>
          </div>
        </div>

        <div data-hero-badge class="absolute bottom-[13%] left-[5%] border border-[#33404d] bg-[#101923] px-3 py-2 shadow-[8px_8px_0_rgba(8,11,16,.4)] max-[700px]:bottom-[7%]">
          <p class="text-[.56rem] uppercase tracking-[.12em] text-[#788492]">Script personalitzat</p>
          <p class="mt-1 text-[.68rem] text-white"><span class="mr-1 text-[#f47b20]">✓</span>Revisió disponible</p>
        </div>
      </div>
    </section>
  `;
}
