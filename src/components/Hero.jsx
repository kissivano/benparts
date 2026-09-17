function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-end px-6 pb-16 pt-32 md:pb-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/70">
            Segítünk ahol tudunk.
          </p>

          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-[#00AEEF] via-[#1C69D4] to-[#E10600] bg-clip-text text-transparent">
              BMW
            </span>{" "}
            GYÁRI HASZNÁLT ALKATRÉSZEK!
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
            Ellenőrzött, gyári bontott, BMW alkatrészek, 10 napos beépítési
            garanciával.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/85"
          >
            Kapcsolatfelvétel
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
