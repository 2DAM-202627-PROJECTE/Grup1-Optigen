export function renderFeatures(element) {
  element.innerHTML = `
    <section
      id="features"
      class="border-b border-[#33404d] px-[clamp(1.25rem,7vw,6rem)] py-[clamp(3rem,8vw,7rem)]"
    >
      <div class="relative flex items-center justify-center gap-4">
        <span class="text-[.72rem] uppercase tracking-[.16em] text-[#f47b20]">
          01
        </span>

        <h2 class="m-0 text-[clamp(1.5rem,3vw,2.25rem)] uppercase">
          Funcionalitats
        </h2>

        <span class="absolute right-0 text-[1.5rem] text-[#f47b20]">
          ↓
        </span>
      </div>

      <div
        class="mx-auto mt-12 grid max-w-[1000px] grid-cols-3 gap-6 max-[700px]:grid-cols-1"
      >
        <ul class="m-0 list-none p-0">
          <li
            class="border-b border-dashed border-[#9da5ae] py-[.8rem] text-white before:mr-3 before:text-[#f47b20] before:content-['✓']"
          >
            Configuració guiada
          </li>

          <li
            class="border-b border-dashed border-[#9da5ae] py-[.8rem] text-white before:mr-3 before:text-[#f47b20] before:content-['✓']"
          >
            Perfils personalitzats
          </li>
        </ul>

        <ul class="m-0 list-none p-0">
          <li
            class="border-b border-dashed border-[#9da5ae] py-[.8rem] text-white before:mr-3 before:text-[#f47b20] before:content-['✓']"
          >
            Generació instantània
          </li>

          <li
            class="border-b border-dashed border-[#9da5ae] py-[.8rem] text-white before:mr-3 before:text-[#f47b20] before:content-['✓']"
          >
            Control abans d'aplicar
          </li>
        </ul>

        <ul class="m-0 list-none p-0">
          <li
            class="border-b border-dashed border-[#9da5ae] py-[.8rem] text-white before:mr-3 before:text-[#f47b20] before:content-['✓']"
          >
            Instruccions clares
          </li>

          <li
            class="border-b border-dashed border-[#9da5ae] py-[.8rem] text-white before:mr-3 before:text-[#f47b20] before:content-['✓']"
          >
            Pensat per a tu
          </li>
        </ul>
      </div>
      
      <div
        class="mx-auto mt-16 grid max-w-[1000px] grid-cols-3 border-y border-[#33404d] max-[700px]:grid-cols-1"
      >

      <div class="px-6 py-8 max-[700px]:border-b max-[700px]:border-[#33404d]">
          <span class="text-[.7rem] tracking-[.16em] text-[#f47b20]">
            01 / ACCESSIBILITAT
          </span>

          <h3 class="mt-4 text-lg font-semibold text-white">
            Des del navegador
          </h3>

          <p class="mt-3 text-sm leading-[1.7] text-[#9da5ae]">
            Accedeix a OptiGen directament des del navegador, sense instal·lacions
            innecessàries.
          </p>
        </div>

        <div
          class="border-x border-[#33404d] px-6 py-8 max-[700px]:border-x-0 max-[700px]:border-b"
        >
          <span class="text-[.7rem] tracking-[.16em] text-[#f47b20]">
            02 / PERSONALITZACIÓ
          </span>

          <h3 class="mt-4 text-lg font-semibold text-white">
            A la teva manera
          </h3>

          <p class="mt-3 text-sm leading-[1.7] text-[#9da5ae]">
            Tria les opcions que millor s'adapten a les teves necessitats i
            personalitza la configuració del teu equip.
          </p>
        </div>

        <div class="px-6 py-8">
          <span class="text-[.7rem] tracking-[.16em] text-[#f47b20]">
            03 / CONTROL
          </span>

          <h3 class="mt-4 text-lg font-semibold text-white">
            Amb control
          </h3>

          <p class="mt-3 text-sm leading-[1.7] text-[#9da5ae]">
            Revisa el script generat i consulta els canvis abans de decidir
            executar-los.
          </p>
        </div>
      </div>
        <div class="col-span-3 mt-8 text-center">
         <a
            class="inline-block border border-transparent bg-[#f47b20] px-5 py-[.8rem] text-center text-[.78rem] font-bold text-[#080b10] no-underline"
            href="#pricing"
          >
            Veure més
          </a>
        </div>
      </div>
    </section>

    <section
      id="aboutUs"
      class="border-b border-[#33404d] px-[clamp(1.25rem,7vw,6rem)] py-[clamp(3rem,8vw,7rem)]"
    >
      <div class="relative flex items-center justify-center gap-4">
        <span class="text-[.72rem] uppercase tracking-[.16em] text-[#f47b20]">
          02
        </span>

        <h2 class="m-0 text-[clamp(1.5rem,3vw,2.25rem)] uppercase">
          Sobre nosaltres
        </h2>

        <span class="absolute right-0 text-[1.5rem] text-[#f47b20]">
          ↓
        </span>
      </div>

      <div
      class="mx-auto mt-16 grid max-w-[1000px] grid-cols-2 gap-12 max-[700px]:grid-cols-1"
      >
        <div class="max-[700px]:order-2">
          <p class="leading-[1.8] text-[#9da5ae]">
            OptiGen neix per simplificar la manera com configurem i
            optimitzem els nostres equips.
          </p>

          <h3 class="mt-6 text-white">La nostra idea</h3>
          <p class="leading-[1.8] text-[#9da5ae]">
            Fer accessible la configuració del sistema.
          </p>

          <h3 class="mt-6 text-white">El nostre objectiu</h3>
          <p class="leading-[1.8] text-[#9da5ae]">
            Donar més autonomia als usuaris.
          </p>
        </div>

        <div>
          <h3 class="text-white">La nostra filosofia</h3>
          <p class="leading-[1.8] text-[#9da5ae]">
            Simplicitat, transparència i control.
          </p>

          <h3 class="mt-6 text-white">La nostra prioritat</h3>
          <p class="leading-[1.8] text-[#9da5ae]">
            Que cada canvi sigui comprensible.
          </p>
        </div>
      </div>
      <div class="col-span-3 mt-8 text-center">
         <a
            class="inline-block border border-transparent bg-[#f47b20] px-5 py-[.8rem] text-center text-[.78rem] font-bold text-[#080b10] no-underline"
            href="#pricing"
          >
            Coneixer-nos més
          </a>
        </div>
    </section>

    
    <section
      id="faq"
      class="border-b border-[#33404d] px-[clamp(1.25rem,7vw,6rem)] py-[clamp(3rem,8vw,7rem)]"
    >
           
      <div class="relative flex items-center justify-center gap-4 mb-12">
        <span class="text-[.72rem] uppercase tracking-[.16em] text-[#f47b20]">
          03
        </span>

        <h2 class="m-0 text-[clamp(1.5rem,3vw,2.25rem)] uppercase">
          FAQ
        </h2>

        <span class="absolute right-0 text-[1.5rem] text-[#f47b20]">
          ↓
        </span>
      </div>


      <!-- Columna dreta: preguntes -->
      <div>

        <details
          name="faq"
          open
          class="group border-t border-[#252b31]
          [interpolate-size:allow-keywords]
          [&::details-content]:[block-size:0]
          [&::details-content]:overflow-clip
          [&::details-content]:[transition:block-size_0.4s_ease,content-visibility_0.4s_allow-discrete]
          [&[open]::details-content]:[block-size:auto]"
        >

          <summary class="flex cursor-pointer list-none items-center gap-6 py-6">

            <span class="text-[.65rem] tracking-[.16em] text-[#9da5ae]">
              01
            </span>

            <span class="flex-1 text-[clamp(1rem,2vw,1.4rem)] group-open:text-[#f47b20]">
              Què és OptiGen?
            </span>

            <span class="text-xl text-[#f47b20] group-open:hidden">
              +
            </span>

            <span class="hidden text-xl text-[#f47b20] group-open:inline">
              ×
            </span>

          </summary>

          <p class="pb-6 pl-12 text-[.9rem] leading-[1.7] text-[#9da5ae]">
            OptiGen és una plataforma web que permet configurar optimitzacions
            del sistema. Selecciones les opcions des del navegador i OptiGen
            genera un script personalitzat segons les teves preferències.
          </p>

        </details>


        <details
          name="faq"
          class="group border-t border-[#252b31]
          [interpolate-size:allow-keywords]
          [&::details-content]:[block-size:0]
          [&::details-content]:overflow-clip
          [&::details-content]:[transition:block-size_0.4s_ease,content-visibility_0.4s_allow-discrete]
          [&[open]::details-content]:[block-size:auto]"
        >

          <summary class="flex cursor-pointer list-none items-center gap-6 py-6">

            <span class="text-[.65rem] tracking-[.16em] text-[#9da5ae]">
              02
            </span>

            <span class="flex-1 text-[clamp(1rem,2vw,1.4rem)] group-open:text-[#f47b20]">
              OptiGen és una aplicació d'escriptori?
            </span>

            <span class="text-xl text-[#9da5ae] group-open:hidden">
              +
            </span>

            <span class="hidden text-xl text-[#f47b20] group-open:inline">
              ×
            </span>

          </summary>

          <p class="pb-6 pl-12 text-[.9rem] leading-[1.7] text-[#9da5ae]">
            No. OptiGen funciona directament des del navegador, sense necessitat
            d'instal·lar una aplicació d'escriptori per configurar les opcions.
          </p>

        </details>

        <details
          name="faq"
          class="group border-t border-[#252b31]
          [interpolate-size:allow-keywords]
          [&::details-content]:[block-size:0]
          [&::details-content]:overflow-clip
          [&::details-content]:[transition:block-size_0.4s_ease,content-visibility_0.4s_allow-discrete]
          [&[open]::details-content]:[block-size:auto]"
        >

          <summary class="flex cursor-pointer list-none items-center gap-6 py-6">

            <span class="text-[.65rem] tracking-[.16em] text-[#9da5ae]">
              03
            </span>

            <span class="flex-1 text-[clamp(1rem,2vw,1.4rem)] group-open:text-[#f47b20]">
              OptiGen modifica directament el meu PC?
            </span>

            <span class="text-xl text-[#9da5ae] group-open:hidden">
              +
            </span>

            <span class="hidden text-xl text-[#f47b20] group-open:inline">
              ×
            </span>

          </summary>

          <p class="pb-6 pl-12 text-[.9rem] leading-[1.7] text-[#9da5ae]">
            No. OptiGen genera un script personalitzat que pots revisar abans
            d'executar-lo. Tu mantens el control sobre els canvis que apliques.
          </p>

        </details>

        <details
          name="faq"
          class="group border-t border-[#252b31]
          [interpolate-size:allow-keywords]
          [&::details-content]:[block-size:0]
          [&::details-content]:overflow-clip
          [&::details-content]:[transition:block-size_0.4s_ease,content-visibility_0.4s_allow-discrete]
          [&[open]::details-content]:[block-size:auto]"
        >

          <summary class="flex cursor-pointer list-none items-center gap-6 py-6">

            <span class="text-[.65rem] tracking-[.16em] text-[#9da5ae]">
              04
            </span>

            <span class="flex-1 text-[clamp(1rem,2vw,1.4rem)] group-open:text-[#f47b20]">
              Puc revisar el script abans d'executar-lo?
            </span>

            <span class="text-xl text-[#9da5ae] group-open:hidden">
              +
            </span>

            <span class="hidden text-xl text-[#f47b20] group-open:inline">
              ×
            </span>

          </summary>

          <p class="pb-6 pl-12 text-[.9rem] leading-[1.7] text-[#9da5ae]">
            Sí. Pots consultar el contingut del script generat abans d'aplicar
            qualsevol canvi al teu equip.
          </p>

        </details>
        <div class="col-span-3 mt-8 text-center">
          <a
            class="inline-block border border-transparent bg-[#f47b20] px-5 py-[.8rem] text-center text-[.78rem] font-bold text-[#080b10] no-underline"
            href="#pricing"
          >
            Veure totes les preguntes
          </a>
      </div>

    </section>


    <section
      id="pricing"
      class="border-b border-[#33404d] px-[clamp(1.25rem,7vw,6rem)] py-[clamp(3rem,8vw,7rem)]"
    >
      <div class="relative flex items-center justify-center gap-4">
        <span class="text-[.72rem] uppercase tracking-[.16em] text-[#f47b20]">
          04
        </span>

        <h2 class="m-0 text-[clamp(1.5rem,3vw,2.25rem)] uppercase">
          Preus
        </h2>

        <span class="absolute right-0 text-[1.5rem] text-[#f47b20]">
          ↓
        </span>
      </div>

      <div
        class="mx-auto mt-12 grid max-w-[1000px] grid-cols-2 gap-6 max-[700px]:grid-cols-1"
      >
        <article class="border border-[#33404d] p-8">
          <h3 class="mt-0 uppercase">
            Perfil equilibrat
          </h3>

          <span class="text-[#9da5ae]">
            Un punt de partida segur per al dia a dia.
          </span>
        </article>

        <article class="border border-[#f47b20] p-8">
          <h3 class="mt-0 uppercase">
            Perfil avançat
          </h3>

          <span class="text-[#9da5ae]">
            Més control per ajustar cada detall.
          </span>
        </article>
      </div>
    </section>
  `;
}
