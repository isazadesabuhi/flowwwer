import Image from "next/image";
import Link from "next/link";

const leftColumnLinks = ["Projets", "Notre méthode", "À propos"] as const;
const rightColumnLinks = ["Liste de prix", "Témoignages", "FAQs"] as const;

export function FooterSection() {
  return (
    <footer className="relative mt-auto overflow-hidden rounded-[30px] bg-[#f1efeb] px-6 py-8 text-[#111111] sm:px-8 sm:py-9 lg:min-h-[430px] lg:px-[56px] lg:py-[34px]">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/background_image.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(241,239,235,0.9)_0%,rgba(241,239,235,0.42)_34%,rgba(241,239,235,0.36)_66%,rgba(241,239,235,0.8)_100%)]" />
      </div>

      <div className="relative z-10 flex min-h-full flex-col justify-between gap-8 lg:min-h-[362px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[23rem]">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-[1.65rem] font-medium tracking-[-0.06em] sm:text-[1.85rem]"
            >
              <Image
                src="/logo.svg"
                alt="Flowwwer logo"
                width={626}
                height={687}
                className="h-7 w-7 object-contain sm:h-8 sm:w-8"
              />
              <span>Flowwwer</span>
            </Link>

            <p className="mt-8 max-w-[22rem] text-[1.02rem] leading-[1.62] text-[#8a8a8a] sm:text-[1.08rem]">
              Un studio de design boutique créant des expériences web haut de
              gamme, axées sur le minimalisme et l&apos;élégance fonctionnelle.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-0 text-[1rem] text-[#111111] sm:gap-x-18 sm:text-[1.06rem] lg:min-w-[320px]">
            <div className="flex flex-col gap-5">
              {leftColumnLinks.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="transition-opacity duration-200 hover:opacity-55"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              {rightColumnLinks.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="transition-opacity duration-200 hover:opacity-55"
                >
                  {item}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <div className="text-[0.96rem] text-[#111111] sm:text-[1rem]">
          <p>© 2026 Flowwwer, Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}
