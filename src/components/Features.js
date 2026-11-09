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
      class="border-b border-[#33404d] px-[clamp(1.25rem,7vw,6rem)] py-16"
    >
      <div class="relative flex items-center justify-center gap-4">
        <span class="text-[.72rem] text-[#f47b20]">02</span>
        <span class="h-px w-5 bg-[#33404d]"></span>
        <h2 class="m-0 text-[clamp(1.5rem,3vw,2.25rem)] uppercase">
          Sobre nosaltres
        </h2>
        <span class="absolute right-0 text-[#f47b20]">↗</span>
      </div>

      <div class="mx-auto mt-10 max-w-[944px]">
        <div class="mb-12 text-center">
          <h3 class="mx-auto mb-4 max-w-[500px] text-[clamp(1.3rem,3vw,1.8rem)] font-semibold leading-[1.2]">
            La tecnologia hauria de ser
            <span class="text-[#f47b20]">més accessible.</span>
          </h3>

          <p class="text-[.8rem] text-[#9da5ae]">
            OptiGen neix per simplificar la manera com configurem i optimitzem els nostres equips.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-4 max-[700px]:grid-cols-1">
          <div class="border border-[#f47b20] p-8">
            <span class="text-[.6rem] tracking-[.16em] text-[#f47b20]">
              01 / LA NOSTRA IDEA
            </span>
            <h3 class="mt-5 text-lg font-semibold">
              Fer accessible la configuració del sistema.
            </h3>
          </div>

          <div class="border border-[#33404d] p-8">
            <span class="text-[.6rem] tracking-[.16em] text-[#f47b20]">
              02 / LA NOSTRA FILOSOFIA
            </span>
            <h3 class="mt-5 text-lg font-semibold">
              Simplicitat, transparència i control.
            </h3>
          </div>

          <div class="border border-[#33404d] p-8">
            <span class="text-[.6rem] tracking-[.16em] text-[#f47b20]">
              03 / EL NOSTRE OBJECTIU
            </span>
            <h3 class="mt-5 text-lg font-semibold">
              Donar més autonomia als usuaris.
            </h3>
          </div>

          <div class="border border-[#33404d] p-8">
            <span class="text-[.6rem] tracking-[.16em] text-[#f47b20]">
              04 / LA NOSTRA PRIORITAT
            </span>
            <h3 class="mt-5 text-lg font-semibold">
              Que cada canvi sigui comprensible.
            </h3>
          </div>
        </div>

        <div class="mt-11 border-y border-[#33404d] py-8 text-center">
          <p class="text-[clamp(1.1rem,2.5vw,1.5rem)] font-semibold">
            El teu equip. Les teves decisions.
            <span class="text-[#f47b20]">El teu control.</span>
          </p>
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
  class="border-b border-[#33404d] px-[clamp(1.25rem,7vw,6rem)] py-20"
>
  <div class="relative flex items-center justify-center gap-4">
    <span class="text-[.72rem] text-[#f47b20]">04</span>
    <span class="h-px w-5 bg-[#33404d]"></span>
    <h2 class="m-0 text-[clamp(1.5rem,3vw,2.25rem)] uppercase">
      Preus
    </h2>
    <span class="absolute right-0 text-[#f47b20]">↗</span>
  </div>

  <div class="mx-auto mt-10 grid max-w-[900px] grid-cols-2 gap-5 max-[700px]:grid-cols-1">

    <!-- FREE -->
    <div class="border border-[#33404d] p-8">
      <span class="text-[.6rem] tracking-[.16em] text-[#f47b20]">
        01 / FREE
      </span>

      <h3 class="mt-5 text-2xl font-semibold">
        Free
      </h3>

      <p class="mt-2 text-[.8rem] text-[#9da5ae]">
        Les eines essencials per optimitzar el teu equip.
      </p>

      <div class="my-8 border-t border-dashed border-[#33404d]"></div>

      <p class="text-[.6rem] tracking-[.16em] text-[#9da5ae]">
        OPCIONS D'OPTIMITZACIÓ
      </p>

      <div class="mt-5 space-y-4">
        <div class="flex items-center gap-3">
          <span class="text-[#f47b20]">✓</span>
          <span class="text-sm">Performance</span>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-[#f47b20]">✓</span>
          <span class="text-sm">Balanced</span>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-[#58636e]">×</span>
          <span class="text-sm text-[#9da5ae]">Cleanup</span>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-[#58636e]">×</span>
          <span class="text-sm text-[#9da5ae]">Gaming</span>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-[#58636e]">×</span>
          <span class="text-sm text-[#9da5ae]">Custom</span>
        </div>
      </div>

      <p class="mt-7 text-[.6rem] tracking-[.16em] text-[#9da5ae]">
        ACCÉS GRATUÏT
      </p>
    </div>

    <!-- PREMIUM -->
    <div class="border border-[#f47b20] p-8">
      <span class="text-[.6rem] tracking-[.16em] text-[#f47b20]">
        02 / PREMIUM
      </span>

      <h3 class="mt-5 text-2xl font-semibold">
        Premium
      </h3>

      <p class="mt-2 text-[.8rem] text-[#9da5ae]">
        Desbloqueja totes les opcions i personalitza cada detall.
      </p>

      <div class="my-8 border-t border-dashed border-[#33404d]"></div>

      <p class="text-[.6rem] tracking-[.16em] text-[#9da5ae]">
        OPCIONS D'OPTIMITZACIÓ
      </p>

      <div class="mt-5 space-y-4">
        <div class="flex items-center gap-3">
          <span class="text-[#f47b20]">✓</span>
          <span class="text-sm">Performance</span>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-[#f47b20]">✓</span>
          <span class="text-sm">Balanced</span>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-[#f47b20]">✓</span>
          <span class="text-sm">Cleanup</span>
          <span class="text-[.55rem] tracking-[.1em] text-[#f47b20]">PREMIUM</span>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-[#f47b20]">✓</span>
          <span class="text-sm">Gaming</span>
          <span class="text-[.55rem] tracking-[.1em] text-[#f47b20]">PREMIUM</span>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-[#f47b20]">✓</span>
          <span class="text-sm">Custom</span>
          <span class="text-[.55rem] tracking-[.1em] text-[#f47b20]">PREMIUM</span>
        </div>
      </div>

      <p class="mt-7 text-[.6rem] tracking-[.16em] text-[#9da5ae]">
        ACCÉS COMPLET
      </p>
    </div>

  </div>
</section>
  `;
}
