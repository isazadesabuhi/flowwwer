"use client";

import { useState } from "react";
import Image from "next/image";
import exampleImage from "@/public/img.jpg";

const steps = [
  {
    number: "1",
    title: "Strategie",
    description:
      "Nous analysons vos objectifs pour definir une direction claire et pertinente. Cette etape est essentielle pour aligner votre vision avec les attentes de vos utilisateurs.",
    image: exampleImage,
    imageAlt: "Illustration florale pour la phase de strategie",
    quote: "La clarte est la politesse du design.",
  },
  {
    number: "2",
    title: "Design",
    description:
      "Nous concevons des interfaces minimalistes, esthetiques et centrees sur l'utilisateur. Nous transformons des concepts complexes en experiences digitales simples et memorables.",
    image: exampleImage,
    imageAlt: "Illustration florale pour la phase de design",
    quote: "Le design donne une forme lisible a l'intention.",
  },
  {
    number: "3",
    title: "Realisation",
    description:
      "Nous transformons le design en un produit digital performant et haut de gamme. Chaque detail est soigne pour garantir une interaction fluide et une qualite irreprochable.",
    image: exampleImage,
    imageAlt: "Illustration florale pour la phase de realisation",
    quote: "L'execution transforme la vision en experience concrete.",
  },
] as const;

type MethodStep = (typeof steps)[number];

export function MethodSection() {
  const [activeStep, setActiveStep] = useState<MethodStep>(steps[0]);

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
        <span className="inline-flex min-h-10 items-center rounded-full bg-[#f2f2f2] px-5 text-[0.92rem] text-[#555555]">
          Notre methode
        </span>
        <h2 className="mt-5 max-w-[12ch] text-[2.4rem] leading-[1.02] tracking-[-0.06em] text-[#111111] sm:text-[3.2rem] lg:max-w-[11ch] lg:text-[4rem]">
          Trois etapes vers votre excellence digitale
        </h2>
        <p className="mt-4 max-w-[38rem] text-[1rem] leading-[1.65] text-[#8a8a8a] sm:text-[1.1rem]">
          Nous fusionnons l&apos;IA et le sur-mesure en Next.js pour creer
          votre ecosysteme en un temps record, sans delais.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 xl:mt-14 xl:grid-cols-[minmax(0,1fr)_minmax(420px,1fr)] xl:items-stretch">
        <div className="flex flex-col gap-5 sm:gap-6">
          {steps.map((step) => {
            const isActive = activeStep.number === step.number;

            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(step)}
                className={`rounded-[28px] px-6 py-7 text-left transition-colors duration-200 sm:px-7 sm:py-8 ${
                  isActive ? "bg-[#f3f3f3]" : "bg-transparent hover:bg-[#f7f7f7]"
                }`}
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[1rem] text-[#111111] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                  {step.number}
                </span>
                <h3 className="mt-9 text-[2rem] tracking-[-0.05em] text-[#111111] sm:text-[2.2rem]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[34rem] text-[1rem] leading-[1.7] text-[#7f7f7f] sm:text-[1.08rem]">
                  {step.description}
                </p>
              </button>
            );
          })}
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-[30px] sm:min-h-[560px] xl:min-h-full">
          <Image
            key={activeStep.number}
            src={activeStep.image}
            alt={activeStep.imageAlt}
            fill
            sizes="(max-width: 1279px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(170,202,235,0.18)_0%,rgba(17,17,17,0.08)_100%)]" />

          <div className="absolute left-1/2 top-1/2 flex w-[78%] max-w-[320px] -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-[28px] bg-[rgba(159,205,224,0.56)] px-7 py-8 text-center backdrop-blur-[14px] sm:w-[44%] sm:max-w-[340px]">
            <span className="text-[3.2rem] font-semibold leading-none text-white">
              &ldquo;
            </span>
            <p className="mt-2 text-[1.55rem] leading-[1.25] tracking-[-0.04em] text-white sm:text-[1.8rem]">
              {activeStep.quote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
