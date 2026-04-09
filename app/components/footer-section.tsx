import Image from "next/image";
import Link from "next/link";

const footerNavigation = [
  "Projets",
  "Notre methode",
  "A propos",
  "Liste de prix",
  "Temoignages",
  "FAQs",
];

export function FooterSection() {
  return (
    <footer className="relative mt-auto overflow-hidden rounded-[32px] bg-[#f1efeb] px-6 py-10 text-[#111111] sm:px-8 sm:py-12 lg:min-h-[560px] lg:px-[72px] lg:py-[72px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 radial-gradient(circle_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0.68)_62%,rgba(255,255,255,0.88)_100%)]" />
          <Image
            src="/background_image.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-contain object-center"
          />
        </div>
      

      <div className="relative z-10 flex min-h-full flex-col justify-between gap-16 lg:min-h-[416px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[24rem]">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-[1.8rem] font-medium tracking-[-0.06em] sm:text-[2rem]"
          >
            <Image
              src="/logo.svg"
              alt="Flowwwer logo"
              width={626}
              height={687}
              className="h-8 w-8 object-contain sm:h-9 sm:w-9"
            />
            <span>Flowwwer</span>
          </Link>

          <p className="mt-10 max-w-[22rem] text-[1.1rem] leading-[1.65] text-[#818181] sm:text-[1.15rem]">
            Un studio de design boutique creant des experiences web haut de
            gamme, axees sur le minimalisme et l&apos;elegance fonctionnelle.
          </p>
        </div>

          <nav className="grid grid-cols-1 gap-x-18 gap-y-6 text-[1rem] text-[#111111] sm:grid-cols-2 sm:text-[1.1rem] lg:pt-2">
            {footerNavigation.map((item) => (
              <Link
                key={item}
                href="#"
                className="transition-opacity duration-200 hover:opacity-55"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        <div className="text-[1rem] text-[#111111]">
          <p>© 2026 Flowwwer, Tous droits reserves</p>
        </div>
      </div>
    </footer>
  );
}
