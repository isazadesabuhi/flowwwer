"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import phone from "@/public/phone.svg";

const navigationItems = [
  "Projets",
  "Notre methode",
  "A propos",
  "Liste de prix",
  "Temoignages",
  "FAQs",
];

export function NavbarSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - previousScrollY;

      if (Math.abs(scrollDelta) < 4) {
        return;
      }

      setIsNavbarVisible(currentScrollY < 80 || scrollDelta < 0);
      previousScrollY = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-[#fcfbf8] transition-transform duration-300 ease-out ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-[calc(100%+24px)]"
      }`}
    >
      <div className="flex items-center justify-between gap-3 sm:gap-4">
        <Link
          href="/"
          className="flex min-w-0 shrink items-center gap-2 sm:gap-2.5"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/logo.svg"
            alt="Flowwwer logo"
            width={626}
            height={687}
            priority
            className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9"
          />
          <span className="truncate text-[18px] font-medium  text-[#111111] sm:text-[1.35rem] lg:text-[24px] lg:tracking-[0.5px]">
            Flowwwer
          </span>
        </Link>
        <div className="flex flex-row gap-7">
          <nav className="hidden items-center gap-7 text-[12px] text-[#222222] xl:text-[16px] 2xl:gap-10 lg:flex">
          {navigationItems.map((item) => (
            <Link
              key={item}
              href="#"
              className="transition-opacity duration-200 hover:opacity-65"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <Link
            href="tel:+33000000000"
            className="inline-flex h-10 items-center gap-1.5 rounded-full bg-[#111111] px-3.5 py-4 text-[0.9rem] font-medium text-white transition-transform duration-200 hover:scale-[1.02] sm:h-12 sm:gap-2 sm:px-6 sm:text-[1rem]"
          >
            <Image src={phone} alt="" width={20} height={20} className="h-5 w-5" />
            <span className="text-white">Appel</span>
          </Link>

          <button
            type="button"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center text-[#111111] sm:h-12 sm:w-12 lg:hidden"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-7 w-7 sm:h-8 sm:w-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              {isMenuOpen ? (
                <>
                  <path d="m6 6 12 12" />
                  <path d="M18 6 6 18" />
                </>
              ) : (
                <>
                  <path d="M3 7h18" />
                  <path d="M3 17h18" />
                </>
              )}
            </svg>
          </button>
        </div>

        </div>

        

        
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full z-20 mt-3 rounded-[24px] border border-black/8 bg-[#fcfbf8] p-5 shadow-[0_18px_45px_rgba(17,17,17,0.08)] lg:hidden"
        >
          <div className="flex flex-col gap-4 text-[1rem] text-[#222222]">
            {navigationItems.map((item) => (
              <Link
                key={item}
                href="#"
                className="transition-opacity duration-200 hover:opacity-65"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
