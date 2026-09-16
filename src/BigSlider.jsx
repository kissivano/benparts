import e60 from "./assets/images/e60.jpg";
import e61 from "./assets/images/e61.jpg";
import e90 from "./assets/images/e90.jpg";
import e91 from "./assets/images/e91.jpg";
import e92 from "./assets/images/e92.jpg";
import e93 from "./assets/images/e93.jpg";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const models = [
  {
    name: "E60",
    image: e60,
  },
  {
    name: "E61",
    image: e61,
  },
  {
    name: "E90",
    image: e90,
  },
  {
    name: "E91",
    image: e91,
  },
  {
    name: "E92",
    image: e92,
  },
  {
    name: "E93",
    image: e93,
  },
];

function BigSlider() {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollBy({
      left: -340,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({
      left: 340,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="gallery"
      className="scroll-mt-70 bg-white px-6 py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-black/50">
              BMW modellek
            </p>

            <h2 className="text-3xl font-semibold md:text-5xl">
              Válaszd ki a típusod.
            </h2>
          </div>

          <div className="hidden gap-2 md:flex">
            <button
              onClick={slideLeft}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 transition hover:bg-black hover:text-white"
              aria-label="Előző"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={slideRight}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 transition hover:bg-black hover:text-white"
              aria-label="Következő"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4"
        >
          {models.map((model) => (
            <div
              key={model.name}
              className="group min-w-[260px] snap-start overflow-hidden rounded-3xl bg-neutral-100 md:min-w-[320px]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={model.image}
                  alt={`BMW ${model.name}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <p className="text-sm text-black/40">BMW</p>

                <h3 className="mt-1 text-2xl font-semibold">{model.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2 md:hidden">
          <button
            onClick={slideLeft}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15"
            aria-label="Előző"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={slideRight}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15"
            aria-label="Következő"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default BigSlider;
