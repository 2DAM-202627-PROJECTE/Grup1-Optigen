export function renderNavbar(element) {
  element.innerHTML = `
    <nav class="flex min-h-[78px] flex-wrap items-center justify-between gap-8 border-b border-[#33404d] px-[clamp(1.25rem,5vw,4rem)] py-4 max-[700px]:gap-4">
      <a class="inline-flex items-center gap-[.6rem] text-[.85rem] font-bold tracking-[.13em] no-underline" href="#home" aria-label="OptiGen inici">
        <span class="inline-flex h-[25px] w-[25px] items-center justify-center rounded-full border-2 border-[#f47b20] text-[#f47b20]">O</span>
        <span>OPTIGEN</span>
      </a>
      <div class="flex justify-center gap-[clamp(1rem,3vw,2.5rem)] overflow-x-auto max-[700px]:order-3 max-[700px]:w-full">
        <a class="text-[.78rem] text-white no-underline" href="#home">Home</a>
        <a class="text-[.78rem] text-[#9da5ae] no-underline hover:text-white" href="#aboutUs">Sobre nosaltres</a>
        <a class="text-[.78rem] text-[#9da5ae] no-underline hover:text-white" href="#faq">FAQ</a>
        <a class="text-[.78rem] text-[#9da5ae] no-underline hover:text-white" href="#features">Funcionalitats</a>
      </div>
      <a class="rounded-full border border-[#9da5ae] px-5 py-[.8rem] text-[.78rem] text-white no-underline transition-colors hover:border-[#f47b20] hover:bg-[#f47b20] hover:text-[#080b10] max-[700px]:ml-auto" href="#contact">Iniciar configuració</a>
      </nav>
  `;
}
