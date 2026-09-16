import { Phone, Mail, MapPin } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 md:grid-cols-2 md:items-start">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-black/50">
              Kapcsolat
            </p>

            <h2 className="max-w-xl text-4xl font-semibold leading-tight md:text-6xl">
              Lépj velünk kapcsolatba.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-black/60">
              Kérdésed van, ajánlatot szeretnél kérni vagy csak többet szeretnél
              tudni rólunk? Keress minket az alábbi elérhetőségeken.
            </p>
          </div>

          <div className="grid gap-4">
            <a
              href="tel:+3612345678"
              className="group flex items-center gap-5 rounded-2xl border border-black/10 p-5 transition hover:bg-neutral-50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <Phone size={20} />
              </div>

              <div>
                <p className="text-sm text-black/50">Telefon</p>
                <p className="font-medium">+36702222595</p>
              </div>
            </a>

            <a
              href="mailto:hello@cegnev.hu"
              className="group flex items-center gap-5 rounded-2xl border border-black/10 p-5 transition hover:bg-neutral-50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <Mail size={20} />
              </div>

              <div>
                <p className="text-sm text-black/50">Email</p>
                <p className="font-medium">benparts777@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-5 rounded-2xl border border-black/10 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-sm text-black/50">Cím</p>
                <p className="font-medium">Pomáz, Magyarország</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
