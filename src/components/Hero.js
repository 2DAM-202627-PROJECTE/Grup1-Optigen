
export function renderHero(element) {
  element.innerHTML = `
    <section
      id="home"
      class="grid min-h-[470px] grid-cols-[1.4fr_1fr] items-stretch border-b border-[#33404d] bg-[#101923] px-[clamp(1.25rem,7vw,6rem)] py-20 max-[700px]:grid-cols-1"
    >
      <div class="max-w-[700px] self-center">

        <p class="text-[.72rem] uppercase tracking-[.16em] text-[#f47b20]">
          Configuració intel·ligent per al teu equip
        </p>

        <h1 class="my-4 mb-6 max-w-[800px] text-[clamp(2.7rem,7vw,6.5rem)] font-bold leading-[.96]">
          OPTIGEN
          <span class="inline-block text-[clamp(4rem,2.5vw,6.5rem)] leading-none text-[#f47b20]">
            Configura Genera Executa
          </span>
        </h1>

        <p class="max-w-[470px] leading-[1.6] text-[#9da5ae]">
          Optimitza el teu PC des del navegador i aplica cada canvi amb un
          script personalitzat, clar i fàcil de revisar.
        </p>

        <div class="mt-8 flex flex-wrap gap-4">

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
        class="flex items-center justify-center border-l border-[#33404d] tracking-[.1em] text-[#9da5ae] max-[700px]:mt-12 max-[700px]:min-h-[150px] max-[700px]:border-l-0 max-[700px]:border-t"
        aria-label="Espai reservat per a la il·lustració principal"
      >
        <span>
          DECORACIÓ<br />
          VISUAL
        </span>
      </div>
    </section>
  `;
}
