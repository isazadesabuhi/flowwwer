"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Pourquoi etes-vous plus rapides qu'une agence classique ?",
    answer:
      "Grace a notre workflow optimise par l'IA et notre expertise en Next.js, nous eliminons les processus lourds des agences traditionnelles. Nous nous concentrons sur l'essentiel : un design d'elite et un code performant, livres en quelques jours sans compromis sur la qualite.",
  },
  {
    question: "Serai-je proprietaire du code et pourrai-je le modifier librement?",
    answer:
      "Oui. Une fois le projet livre, vous disposez du code source et pouvez le faire evoluer librement avec votre equipe ou avec nous selon vos besoins.",
  },
  {
    question: "Vos tarifs incluent-ils la maintenance et les modifications futures?",
    answer:
      "Les forfaits couvrent la conception et la livraison du projet. La maintenance continue et les evolutions peuvent ensuite etre encadrees via un accompagnement adapte.",
  },
  {
    question: "Mon site sera-t-il optimise pour Google et la vitesse de chargement?",
    answer:
      "Oui. Nous travaillons la structure, les performances et les bonnes pratiques techniques pour fournir un site rapide, propre et favorable au referencement.",
  },
] as const;

export function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState<string>(faqItems[0].question);

  return (
    <section className="py-12 sm:py-16 lg:py-24">
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
  );
}
