import logo from "../assets/logo.png";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#">
          <img src={logo} alt="Logo" className="h-15 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#about">Rólunk</a>
          <a href="#gallery">Miben segíthetünk?</a>

          <a
            href="#contact"
            className="rounded-full bg-black px-5 py-3 text-white"
          >
            Kapcsolat
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative flex h-6 w-6 flex-col items-center justify-center md:hidden"
          aria-label="Menü"
        >
          <span
            className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${
              menuOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />

          <span
            className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ${
              menuOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      <nav
        className={`absolute left-0 top-full w-full bg-white px-6 py-6 shadow-xl transition-all duration-500 ease-out md:hidden ${
          menuOpen
            ? "translate-y-0 opacity-95 pointer-events-auto"
            : "-translate-y-8 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-5 text-center">
          <a href="#about" className="text-lg font-medium">
            Rólunk
          </a>

          <a href="#gallery" className="text-lg font-medium">
            Miben segíthetünk?
          </a>

          <a
            href="tel:+36702222595"
            className="mt-2 rounded-full bg-black px-5 py-3 text-white"
          >
            Kapcsolat
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
