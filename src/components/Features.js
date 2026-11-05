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
        class="mx-auto mt-12 grid max-w-[900px] grid-cols-2 items-center gap-[clamp(2rem,8vw,8rem)] max-[700px]:grid-cols-1"
      >
        <div
          class="flex h-[190px] items-center justify-center bg-[#26313c] text-[#9da5ae]"
        >
          EL TEU EQUIP
        </div>

        <p class="leading-[1.8] text-[#9da5ae]">
          OptiGen transforma les teves preferències en una configuració útil i
          entenedora. Tu decideixes què vols millorar i l'eina t'acompanya en
          cada pas.
        </p>
      </div>
    </section>

    <section
      id="faq"
      class="border-b border-[#33404d] px-[clamp(1.25rem,7vw,6rem)] py-[clamp(3rem,8vw,7rem)]"
    >
      <div class="relative flex items-center justify-center gap-4">
        <span class="text-[.72rem] uppercase tracking-[.16em] text-[#f47b20]">
          03
        </span>

        <h2 class="m-0 text-[clamp(1.5rem,3vw,2.25rem)] uppercase">
          FAQs
        </h2>

        <span class="absolute right-0 text-[1.5rem] text-[#f47b20]">
          ↓
        </span>
      </div>

      <div
        class="mx-auto mt-12 grid max-w-[1000px] grid-cols-2 gap-6 max-[700px]:grid-cols-1"
      >
        <p class="m-0 border-b border-dashed border-[#9da5ae] p-3">
          <b class="mr-3 text-[#f47b20]">01.</b>
          Què és OptiGen?
        </p>

        <p class="m-0 border-b border-dashed border-[#9da5ae] p-3">
          <b class="mr-3 text-[#f47b20]">02.</b>
          Com funciona?
        </p>

        <p class="m-0 border-b border-dashed border-[#9da5ae] p-3">
          <b class="mr-3 text-[#f47b20]">03.</b>
          Puc personalitzar-ho?
        </p>

        <p class="m-0 border-b border-dashed border-[#9da5ae] p-3">
          <b class="mr-3 text-[#f47b20]">04.</b>
          Com puc contactar?
        </p>
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
