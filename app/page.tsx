import { NavbarSection } from "./sections/navbar-section";
import { MethodSection } from "./sections/method-section";
import { ProjectsSection } from "./sections/projects-section";

const servicePills = [
  {
    label: "Accompagnement Digital",
    className: "bg-[#eef0ff] text-[#3f48ff]",
  },
  {
    label: "Identite Visuelle",
    className: "bg-[#f8ecff] text-[#9f36ff]",
  },
  {
    label: "Developpement Web",
    className: "bg-[#edf7e9] text-[#4ea51f]",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfbf8] text-[#111111]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1280px] flex-col px-4 pb-10 pt-4 sm:px-6 sm:pb-14 lg:px-3">
        <NavbarSection />

        <section className="flex flex-1 items-center justify-center py-14 sm:py-20 lg:py-24">
          <div className="flex w-full max-w-[860px] flex-col items-center text-center">
            <h1 className="max-w-[12ch] text-[3.35rem] font-normal leading-[0.94] tracking-[-0.07em] text-[#111111] sm:text-[4.6rem] lg:max-w-none lg:text-[5.85rem]">
              Elegance digitale
            </h1>

            <p className="mt-4 max-w-[35rem] px-2 text-[1rem] leading-[1.6] text-[#8f8f8f] sm:mt-5 sm:text-[1.2rem] lg:mt-6 lg:max-w-[690px] lg:px-0 lg:text-[1.35rem]">
              Un studio de design boutique creant des experiences web haut de
              gamme, axees sur le minimalisme et l&apos;elegance fonctionnelle.
            </p>

            <div className="mt-9 flex w-full flex-col items-center gap-4 sm:mt-12 sm:gap-5 lg:mt-9 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-3">
              {servicePills.map((pill) => (
                <span
                  key={pill.label}
                  className={`inline-flex min-h-13 w-full max-w-fit items-center justify-center rounded-[18px] px-6 text-[0.95rem] font-medium tracking-[-0.03em] sm:min-h-14 sm:px-8 sm:text-[1.05rem] ${pill.className}`}
                >
                  {pill.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        <ProjectsSection />
        <MethodSection />
      </div>
    </main>
  );
}
