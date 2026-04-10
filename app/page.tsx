"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  aboutHighlights,
  faqItems,
  MethodStep,
  pricingPlans,
  projects,
  servicePills,
  services,
  steps,
} from "@/app/home-data";

export default function Home() {
    const [activeStep, setActiveStep] = useState<MethodStep>(steps[0]);
    const [openQuestion, setOpenQuestion] = useState<string>(faqItems[0].question);
    
  return (
    <main className="flex min-h-screen flex-col gap-y-[70px] lg:gap-y-[120px] bg-[#fcfbf8] text-[#111111]">
      {/* Introduction */}
        <section className="flex items-center justify-center">
          <div className="flex w-full max-w-[860px] flex-col items-center text-center">
            <h1 className="max-w-[12ch] text-[3.35rem] font-normal leading-[0.94] tracking-[-0.07em] text-[#111111] sm:text-[4.6rem] lg:max-w-none lg:text-[3.85rem]">
              Elegance digitale
            </h1>

            <p className="mt-4 max-w-[35rem] px-2 text-[1rem] leading-[1.6] text-[#8f8f8f] sm:mt-5 sm:text-[1.2rem] lg:mt-6 lg:max-w-[610px] lg:px-0 lg:text-[1.35rem]">
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
        {/* projects */}
        <section className="py-10 sm:py-14 lg:py-20">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-[1.7rem] tracking-[-0.05em] text-[#111111] sm:text-[2.2rem]">
          Projets selectionnes
        </h2>
        <Link
          href="#"
          className="inline-flex h-10 items-center rounded-full bg-[#f1f1f1] px-4 text-[0.9rem] font-medium text-[#3a3a3a] transition-colors duration-200 hover:bg-[#e8e8e8] sm:h-11 sm:text-[0.92rem]"
        >
          Afficher tout
        </Link>
      </div>

      <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.name}>
            <div className="relative aspect-[1/1.04] overflow-hidden rounded-[24px] bg-[#f2f2f2] sm:aspect-[1/1.1] xl:aspect-[1/1.16]">
              <Image
                src="/img.jpg"
                alt={project.alt}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <h3 className="px-1 pt-3 text-[1.45rem] tracking-[-0.05em] text-[#111111] sm:px-2 sm:pt-4 sm:text-[1.8rem] lg:text-[2rem]">
              {project.name}
            </h3>
          </article>
        ))}
      </div>
          </section>
    {/* Methods */}
    <section className="">
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

        {/* About Section */}
        <section className="">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex min-h-10 items-center rounded-full bg-[#f4f2ef] px-5 text-[0.92rem] text-[#555555]">
            A propos
          </span>
          <h2 className="mt-8 max-w-[15ch] text-[2.75rem] font-normal leading-[1.08] tracking-[-0.07em] text-[#8d8d8d] sm:text-[4rem] lg:max-w-[13ch] lg:text-[5.1rem]">
            Fusionnant <span className="font-semibold text-[#111111]">minimalisme radical</span> et expertise technique, notre studio batit des{" "}
            <span className="font-semibold text-[#111111]">identites numeriques</span> durables pour les marques visionnaires.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:mt-14 lg:grid-cols-[310px_minmax(0,1fr)] lg:gap-5">
          <aside className="flex h-full flex-col rounded-[28px] bg-[#f4f4f2] p-6 sm:p-8">
            <div className="space-y-9">
              {aboutHighlights.map((item) => (
                <div key={item.title}>
                  <h3 className="text-[1.75rem] tracking-[-0.05em] text-[#111111]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[22rem] text-[1rem] leading-[1.6] text-[#8c8c8c]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="tel:+33783418879"
              className="mt-10 inline-flex h-12 w-fit items-center rounded-full bg-[#111111] px-6 text-[1rem] font-medium text-white transition-transform duration-200 hover:scale-[1.02] lg:mt-auto"
            >
              Appelez-nous
            </Link>
          </aside>

          <div className="relative min-h-[420px] overflow-hidden rounded-[28px] sm:min-h-[520px] lg:min-h-[600px]">
            <Image
              src="/img.jpg"
              alt="Equipe en reunion dans un studio lumineux"
              fill
              sizes="(max-width: 1023px) 100vw, 70vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
    {/* Services Section */}
    <section className="">
      <div className="mx-auto max-w-[1220px]">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex min-h-10 items-center rounded-full bg-[#f4f2ef] px-5 text-[0.92rem] text-[#555555]">
            Services
          </span>
          <h2 className="mt-7 max-w-[10ch] text-[2.5rem] font-normal leading-[1.02] tracking-[-0.07em] text-[#111111] sm:text-[3.6rem] lg:text-[4.5rem]">
            L&apos;alliance du design d&apos;elite et de l&apos;ingenierie moderne
          </h2>
          <p className="mt-5 max-w-[46rem] text-[1rem] leading-[1.65] text-[#8b8b8b] sm:text-[1.08rem]">
            De l&apos;identite visuelle au developpement sur mesure, chaque ligne
            de code est pensee pour transformer vos visiteurs en clients
            fideles et propulser votre marque a l&apos;international.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:mt-14 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex min-h-[300px] flex-col rounded-[24px] bg-white p-6 sm:min-h-[340px] sm:p-7"
            >
              <span
                className={`inline-flex min-h-9 w-fit items-center rounded-full px-4 text-[0.9rem] ${service.labelClassName}`}
              >
                {service.label}
              </span>
              <div className="mt-auto">
                <h3 className="text-[2rem] tracking-[-0.05em] text-[#111111] sm:text-[2.1rem]">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-[34rem] text-[1rem] leading-[1.7] text-[#8a8a8a] sm:text-[1.05rem]">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing Section */}

    <section className="">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex min-h-10 items-center rounded-full bg-[#f4f2ef] px-5 text-[0.92rem] text-[#555555]">
            Liste de prix
          </span>
          <h2 className="mt-7 max-w-[11ch] text-[2.5rem] font-normal leading-[1.02] tracking-[-0.07em] text-[#111111] sm:text-[3.6rem] lg:text-[4.5rem]">
            Propulsez votre presence digitale en un temps record
          </h2>
          <p className="mt-5 max-w-[46rem] text-[1rem] leading-[1.65] text-[#8b8b8b] sm:text-[1.08rem]">
            Du diagnostic strategique offert au developpement sur mesure
            complet, choisissez le pack qui correspond a la croissance de votre
            entreprise.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 xl:mt-14 xl:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.label}
              className={`flex min-h-[560px] flex-col rounded-[26px] p-6 sm:p-7 ${plan.cardClassName}`}
            >
              <span
                className={`inline-flex min-h-10 w-fit items-center rounded-full px-4 text-[0.92rem] ${
                  plan.cardClassName.includes("text-white")
                    ? "bg-white text-[#111111]"
                    : "bg-white text-[#555555]"
                }`}
              >
                {plan.label}
              </span>

              <div className="mt-6">
                <p className="text-[1.35rem] tracking-[-0.04em] opacity-95">
                  {plan.title}
                </p>
                <p className="mt-2 text-[3.5rem] font-semibold leading-none tracking-[-0.08em]">
                  {plan.price}
                </p>
                <p
                  className={`mt-5 text-[1rem] leading-[1.7] ${
                    plan.cardClassName.includes("text-white")
                      ? "text-white/78"
                      : "text-[#8a8a8a]"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <Link
                href="tel:+33783418879"
                className={`mt-8 inline-flex h-13 items-center justify-center rounded-full px-6 text-[1rem] font-medium transition-transform duration-200 hover:scale-[1.02] ${plan.buttonClassName}`}
              >
                Reserver l&apos;appel
              </Link>

              <div
                className={`mt-8 rounded-[22px] p-6 sm:p-7 ${plan.featurePanelClassName}`}
              >
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-3 text-[0.98rem] ${
                        plan.cardClassName.includes("text-white")
                          ? "text-white"
                          : "text-[#222222]"
                      }`}
                    >
                      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#59b315] text-white">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 20 20"
                          className="h-3 w-3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4.5 10.5 8 14l7.5-8" />
                        </svg>
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* FAQs Section */}
     <section className="">
      <div className="mx-auto max-w-[940px]">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex min-h-10 items-center rounded-full bg-[#f4f2ef] px-5 text-[0.92rem] text-[#555555]">
            FAQs
          </span>
          <h2 className="mt-7 max-w-[11ch] text-[2.5rem] font-normal leading-[1.02] tracking-[-0.07em] text-[#111111] sm:text-[3.6rem] lg:text-[4.5rem]">
            Propulsez votre presence digitale en un temps record
          </h2>
          <p className="mt-5 max-w-[42rem] text-[1rem] leading-[1.65] text-[#8b8b8b] sm:text-[1.08rem]">
            Du diagnostic strategique offert au developpement sur mesure
            complet, choisissez le pack qui correspond a la croissance de votre
            entreprise.
          </p>
        </div>

        <div className="mt-10 space-y-4 xl:mt-14">
          {faqItems.map((item) => {
            const isOpen = openQuestion === item.question;

            return (
              <article
                key={item.question}
                className={
                  isOpen
                    ? "rounded-[26px] bg-[#f5f5f3] px-6 py-6 sm:px-8 sm:py-7"
                    : "border-t border-[#eceae6] px-6 py-6 sm:px-8 sm:py-7"
                }
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenQuestion((current) =>
                      current === item.question ? "" : item.question,
                    )
                  }
                  className="flex w-full items-start justify-between gap-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="max-w-[24ch] text-[1.9rem] leading-[1.2] tracking-[-0.05em] text-[#111111] sm:text-[2.05rem]">
                    {item.question}
                  </span>
                  <span className="mt-1 text-[2rem] leading-none text-[#111111]">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                {isOpen ? (
                  <p className="mt-4 max-w-[38rem] text-[1rem] leading-[1.8] text-[#8a8a8a] sm:text-[1.05rem]">
                    {item.answer}
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>    
    </main>
  );
}
