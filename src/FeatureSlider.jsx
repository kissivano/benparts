import { ShieldCheck, Sparkles, Clock3, BadgeCheck } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: ShieldCheck,
    title: "Minőség",
    text: "Precíz kivitelezés és igényes részletek minden munkánál.",
    color: "bg-[#6CC5EA]",
  },
  {
    icon: Sparkles,
    title: "Tapasztalat",
    text: "Gyakorlati tudás, modern megoldások és folyamatos fejlődés.",
    color: "bg-[#0046AD]",
  },
  {
    icon: Clock3,
    title: "Gyorsaság",
    text: "Hatékony munkafolyamat és kiszámítható határidők.",
    color: "bg-[#E30613]",
  },
];

function FeatureSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  return (
    <section className="bg-white px-6 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-black/50">
              Miért minket?
            </p>

            <h2 className="text-3xl font-semibold md:text-5xl">
              Amit képviselünk
            </h2>
          </div>

          <div className="hidden gap-2 md:flex">
            <button
              onClick={prevSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 transition hover:bg-black hover:text-white"
            >
              ←
            </button>

            <button
              onClick={nextSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 transition hover:bg-black hover:text-white"
            >
              →
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="min-w-full">
                  <div className="rounded-3xl bg-neutral-100 p-8 md:p-12">
                    <div
                      className={`mb-8 flex h-14 w-14 items-center justify-center rounded-full text-white ${feature.color}`}
                    >
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <h3 className="text-2xl font-semibold">{feature.title}</h3>

                    <p className="mt-4 max-w-xl leading-7 text-black/60">
                      {feature.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex justify-between md:hidden">
          <button
            onClick={prevSlide}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeatureSlider;
