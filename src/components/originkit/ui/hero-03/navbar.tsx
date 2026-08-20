// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/originkit/ui/hero-03/button";
import type { KeyboardEvent } from "react";

const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "https://wa.me/5511975115131" },
] as const;

type NavbarProps = {
  onExplore: () => void;
};

export const Navbar = ({ onExplore }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string,
  ) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    handleNavClick(href);
  };

  return (
    <>
      <nav aria-label="Primary" className="relative z-30 w-full">
        {/* Mobile header bar */}
        <div className="flex w-full items-center justify-between p-4 ipad:px-12 ipad:py-6 desktop-sm:hidden">
          <a
            href="/"
            aria-label="LUCAS ANTIGNANI home"
            className="inline-flex items-center gap-[11px] touch-manipulation focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d1d1d] [-webkit-tap-highlight-color:transparent]"
          >
            <span className="font-sans text-[18px] font-semibold leading-[1.1] tracking-[-0.5px] text-black uppercase ipad:text-[22px]">
              LUCAS ANTIGNANI
            </span>
          </a>

          {/* Hamburger button */}
          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex min-h-11 min-w-11 shrink-0 flex-col items-center justify-center gap-[5px] touch-manipulation transition-opacity duration-200 ease focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d1d1d] [-webkit-tap-highlight-color:transparent] [@media(hover:hover)_and_(pointer:fine)]:hover:opacity-80"
          >
            <span
              className="block h-[3px] w-6 bg-black transition-transform duration-300 origin-center"
              style={menuOpen ? { transform: "translateY(8px) rotate(45deg)" } : {}}
            />
            <span
              className="block h-[3px] w-6 bg-black transition-all duration-300"
              style={menuOpen ? { opacity: 0, transform: "scaleX(0)" } : {}}
            />
            <span
              className="block h-[3px] w-6 bg-black transition-transform duration-300 origin-center"
              style={menuOpen ? { transform: "translateY(-8px) rotate(-45deg)" } : {}}
            />
          </button>
        </div>

        {/* Desktop nav */}
        <div className="mx-auto hidden w-full max-w-[480px] items-center justify-center gap-6 pt-[29px] desktop-sm:flex">
          <ul className="flex items-center gap-6 font-tight text-[17px] leading-[25.5px] tracking-[-0.34px] text-[#101010]">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <button
                  type="button"
                  tabIndex={0}
                  aria-label={link.label}
                  onKeyDown={(event) => handleKeyDown(event, link.href)}
                  onClick={() => handleNavClick(link.href)}
                  className="inline-flex min-h-11 items-center touch-manipulation whitespace-nowrap transition-colors duration-200 ease focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d1d1d] [-webkit-tap-highlight-color:transparent] [@media(hover:hover)_and_(pointer:fine)]:hover:text-black bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <Button
            variant="nav"
            aria-label="Ver Serviços"
            onClick={onExplore}
            className="shrink-0"
          >
            Ver Serviços
          </Button>
        </div>
      </nav>

      {/* Mobile fullscreen overlay menu */}
      <div
        aria-hidden={!menuOpen}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 bg-[#fffbe1] desktop-sm:hidden"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.3s ease",
        }}
      >
        {/* Close button */}
        <button
          type="button"
          aria-label="Fechar menu"
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 ipad:top-6 ipad:right-12 inline-flex min-h-11 min-w-11 flex-col items-center justify-center gap-[5px] touch-manipulation"
        >
          <span
            className="block h-[3px] w-6 bg-black"
            style={{ transform: "translateY(8px) rotate(45deg)" }}
          />
          <span className="block h-[3px] w-0 bg-black" />
          <span
            className="block h-[3px] w-6 bg-black"
            style={{ transform: "translateY(-8px) rotate(-45deg)" }}
          />
        </button>

        <nav className="flex flex-col items-center gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="font-sans text-[clamp(2rem,8vw,3.5rem)] font-bold uppercase tracking-[-0.02em] text-[#1d1d1d] transition-opacity duration-200 hover:opacity-60 bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-4">
          <a
            href="https://wa.me/5511975115131?text=Ol%C3%A1%20Lucas!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="rounded-full border-2 border-[#1d1d1d] bg-[#1d1d1d] px-8 py-3 font-sans text-[1rem] font-semibold uppercase tracking-wide text-[#fffbe1] transition-opacity hover:opacity-80"
          >
            Fale Comigo ↗
          </a>
        </div>
      </div>
    </>
  );
};
