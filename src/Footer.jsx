function Footer() {
  return (
    <footer className="scroll-mt-120 bg-neutral-950 px-6 pt-16 text-white md:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-3">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
              Benparts
            </p>

            <h3 className="mt-4 max-w-sm text-2xl font-semibold leading-snug">
              Minőségi megoldások, precíz kivitelezéssel.
            </h3>
          </div>

          <div>
            <p className="mb-4 text-sm text-white/40">Navigáció</p>

            <div className="flex flex-col gap-3">
              <a
                href="#about"
                className="w-fit text-white/70 transition hover:text-white"
              >
                Rólunk
              </a>

              <a
                href="#gallery"
                className="w-fit text-white/70 transition hover:text-white"
              >
                Galéria
              </a>

              <a
                href="#contact"
                className="w-fit text-white/70 transition hover:text-white"
              >
                Kapcsolat
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm text-white/40">Elérhetőség</p>

            <div className="flex flex-col gap-3 text-white/70">
              <a
                href="tel:+36707799745"
                className="w-fit transition hover:text-white"
              >
                +36707799745
              </a>

              <a
                href="mailto:hello@benparts.hu"
                className="w-fit transition hover:text-white"
              >
                bentradepartners@gmail.com
              </a>

              <p>Pomáz, Magyarország</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-6 text-sm text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Benparts. Minden jog fenntartva.</p>

          <p>Az oldalt készítette a NETGARY!</p>
        </div>

        <div className="overflow-hidden pb-6 pt-6">
          <div className="select-none text-center text-[18vw] font-bold uppercase leading-none tracking-tighter text-white/[0.04] md:text-[11vw]">
            BENPARTS
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
