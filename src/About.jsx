import aboutBg from "./assets/about-bg.jpg";

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-75 relative overflow-hidden bg-cover bg-center px-6 py-16 text-white md:py-20 lg:py-24"
      style={{
        backgroundImage: `url(${aboutBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/60">
            Rólunk
          </p>

          <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
            Helyileg Pomázon vagyunk, Budapesttől 20km-re.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-white/80">
            A vállalkozás első sorban BMW ötös és hármas sorozatra - E60- E61
            -es és E90-E91 - es szériára specializálódott, gyári használt
            alkatrészeinek kiskereskedelmi tevékenységevel foglalkozik.
          </p>

          <p className="mt-6 leading-7 text-white/60">
            Lehetőség van házhosszállításra futárcég nélkül is ez előzetes
            egyeztetést igényel.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
