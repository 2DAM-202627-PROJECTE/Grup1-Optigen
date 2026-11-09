
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

          <div class="mt-8">
            <h2 class="mt-0 text-base uppercase">
              Contacta'ns
            </h2>
            <p class="text-[.8rem] leading-[1.6] text-[#9da5ae]">
              Per a qualsevol consulta:
            </p>
            <div class="flex flex-col gap-1">
              <a
                class="text-[.8rem] text-[#f47b20] no-underline"
                href="mailto:davidstaicu@iesebre.com"
              >
                davidstaicu@iesebre.com
              </a>
              <a
                class="text-[.8rem] text-[#f47b20] no-underline"
                href="mailto:xaviersans@iesebre.com"
              >
                xaviersans@iesebre.com
              </a>
            </div>
          </div>
        </div>

        <!-- Formulari de contacte -->
        <div>
          <h2 class="mt-0 text-base uppercase">
            Parlem del teu equip
          </h2>

          <p class="text-[.8rem] leading-[1.6] text-[#9da5ae]">
            Explica'ns què necessites i et respondrem tan aviat com puguem.
          </p>

          <form
            class="mt-4 grid grid-cols-2 gap-3 max-[700px]:grid-cols-1"
            action="mailto:davidstaicu@iesebre.com,xaviersans@iesebre.com"
            method="post"
            enctype="text/plain"
          >
            <label
              class="flex flex-col gap-1 text-[.62rem] uppercase tracking-[.1em] text-[#788492]"
              for="name"
            >
              Nom
              <input
                class="min-w-0 border border-[#33404d] bg-[#101923] p-3 text-[.78rem] normal-case tracking-normal text-white outline-none transition-colors placeholder:text-[#667381] focus:border-[#f47b20]"
                id="name"
                name="name"
                type="text"
                placeholder="El teu nom"
                autocomplete="name"
                required
              />
            </label>

            <label
              class="flex flex-col gap-1 text-[.62rem] uppercase tracking-[.1em] text-[#788492]"
              for="email"
            >
              Correu electrònic
              <input
                class="min-w-0 border border-[#33404d] bg-[#101923] p-3 text-[.78rem] normal-case tracking-normal text-white outline-none transition-colors placeholder:text-[#667381] focus:border-[#f47b20]"
                id="email"
                name="email"
                type="email"
                placeholder="tu@exemple.cat"
                autocomplete="email"
                required
              />
            </label>

            <label
              class="col-span-2 flex flex-col gap-1 text-[.62rem] uppercase tracking-[.1em] text-[#788492] max-[700px]:col-span-1"
              for="subject"
            >
              Assumpte
              <input
                class="min-w-0 border border-[#33404d] bg-[#101923] p-3 text-[.78rem] normal-case tracking-normal text-white outline-none transition-colors placeholder:text-[#667381] focus:border-[#f47b20]"
                id="subject"
                name="subject"
                type="text"
                placeholder="Com et podem ajudar?"
                required
              />
            </label>

            <label
              class="col-span-2 flex flex-col gap-1 text-[.62rem] uppercase tracking-[.1em] text-[#788492] max-[700px]:col-span-1"
              for="message"
            >
              Missatge
              <textarea
                class="min-h-[84px] resize-y border border-[#33404d] bg-[#101923] p-3 text-[.78rem] normal-case tracking-normal text-white outline-none transition-colors placeholder:text-[#667381] focus:border-[#f47b20]"
                id="message"
                name="message"
                placeholder="Descriu breument la teva consulta..."
                rows="3"
                required
              ></textarea>
            </label>

            <button
              class="col-span-2 justify-self-start border-0 bg-[#f47b20] px-5 py-[.8rem] text-[.78rem] font-bold text-[#080b10] transition-colors hover:bg-[#ff9140] max-[700px]:col-span-1"
              type="submit"
            >
              Envia el missatge →
            </button>
          </form>
        </div>

        <!-- Newsletter -->
        <div>
          <h2 class="mt-0 text-base uppercase">
            Newsletter
          </h2>

          <p class="text-[.8rem] leading-[1.6] text-[#9da5ae]">
            Rep les novetats i actualitzacions d'OptiGen.
          </p>

          <form
            class="mt-4 flex flex-col gap-3"
            action="mailto:davidstaicu@iesebre.com,xaviersans@iesebre.com"
            method="post"
            enctype="text/plain"
          >
            <label
              class="flex flex-col gap-1 text-[.62rem] uppercase tracking-[.1em] text-[#788492]"
              for="newsletter-email"
            >
              Correu electrònic
              <input
                class="min-w-0 border border-[#33404d] bg-[#101923] p-3 text-[.78rem] normal-case tracking-normal text-white outline-none transition-colors placeholder:text-[#667381] focus:border-[#f47b20]"
                id="newsletter-email"
                name="email"
                type="email"
                placeholder="El teu correu electrònic"
                autocomplete="email"
                required
              />
            </label>
            <button
              class="self-start border-0 bg-[#f47b20] px-5 py-[.8rem] text-[.78rem] font-bold text-[#080b10] transition-colors hover:bg-[#ff9140]"
              type="submit"
            >
              Subscriu-me →
            </button>
          </form>
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
