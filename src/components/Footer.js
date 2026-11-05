
export function renderFooter(element) {
  element.innerHTML = `
    <footer
      id="contact"
      class="bg-[#06080b] px-[clamp(1.25rem,7vw,6rem)] pb-4 pt-12"
    >
      <div class="grid grid-cols-[1fr_2fr_1fr] gap-12 max-[700px]:grid-cols-1">

        <!-- Identitat OptiGen -->
        <div>
          <a
            class="inline-flex items-center gap-[.6rem] text-[.85rem] font-bold tracking-[.13em] no-underline"
            href="#home"
          >
            <span
              class="inline-flex h-[25px] w-[25px] items-center justify-center rounded-full border-2 border-[#f47b20] text-[#f47b20]"
            >
              O
            </span>

            <span>
              OPTIGEN
            </span>
          </a>

          <p class="text-[.8rem] leading-[1.6] text-[#9da5ae]">
            Configura. Genera.<br />
            Millora el teu equip.
          </p>
        </div>

        <!-- Newsletter -->
        <div>
          <h2 class="mt-0 text-base uppercase">
            Newsletter
          </h2>

          <p class="text-[.8rem] leading-[1.6] text-[#9da5ae]">
            Rep les novetats i actualitzacions d'OptiGen.
          </p>

          <form class="mt-4 flex">
            <label
              class="sr-only absolute -m-px h-px w-px overflow-hidden"
              for="email"
            >
              Correu electrònic
            </label>

            <input
              class="min-w-0 w-full border border-[#33404d] bg-[#101923] p-[.8rem] text-white"
              id="email"
              type="email"
              placeholder="El teu correu electrònic"
            />

            <button
              class="whitespace-nowrap border-0 bg-[#f47b20] px-5 py-[.8rem] text-[.78rem] font-bold text-[#080b10]"
              type="submit"
            >
              Subscriu-me
            </button>
          </form>
        </div>

        <!-- Contacte -->
        <div>
          <h2 class="mt-0 text-base uppercase">
            Contacta'ns
          </h2>

          <p class="text-[.8rem] leading-[1.6] text-[#9da5ae]">
            Per a qualsevol consulta, escrigu-nos a:
          </p>

          <a
            class="text-[.8rem] text-[#f47b20] no-underline"
            href="mailto:hello@optigen.cat"
          >
            hello@optigen.cat
          </a>
        </div>

      </div>

      <!-- Peu del footer -->
      <div
        class="mt-12 flex justify-between border-t border-[#33404d] pt-4 text-[.7rem] text-[#9da5ae] max-[700px]:flex-wrap max-[700px]:gap-3"
      >
        <span>
          © ${new Date().getFullYear()} OptiGen
        </span>

        <a
          class="no-underline"
          href="#terms"
        >
          Termes i condicions
        </a>

        <span>
          MENU ↑
        </span>
      </div>
    </footer>
  `;
}
