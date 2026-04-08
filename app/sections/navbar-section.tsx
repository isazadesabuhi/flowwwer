import Image from "next/image";
import Link from "next/link";
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
  return (
    <header className="flex items-center justify-between gap-3 sm:gap-4">
      <Link href="/" className="flex min-w-0 shrink items-center gap-2 sm:gap-2.5">
        <Image
          src="/logo.svg"
          alt="Flowwwer logo"
          width={626}
          height={687}
          priority
          className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9"
        />
        <span className="truncate text-[1.05rem] font-medium tracking-[-0.05em] text-[#111111] sm:text-[1.35rem] lg:text-[2.1rem] lg:tracking-[-0.06em]">
          Flowwwer
        </span>
      </Link>

      <nav className="hidden items-center gap-7 text-[0.98rem] text-[#222222] xl:gap-10 xl:text-[1.05rem] 2xl:gap-12 lg:flex">
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
          className="inline-flex h-10 items-center gap-1.5 rounded-full bg-[#111111] px-3.5 text-[0.9rem] font-medium text-white transition-transform duration-200 hover:scale-[1.02] sm:h-12 sm:gap-2 sm:px-6 sm:text-[1rem]"
        >
          <Image src={phone} alt="" width={16} height={16} className="h-4 w-4" />
          <span className="text-white">Appel</span>
        </Link>

        <button
          type="button"
          aria-label="Ouvrir le menu"
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
            <path d="M3 7h18" />
            <path d="M3 17h18" />
          </svg>
        </button>
      </div>
    </header>
  );
}
