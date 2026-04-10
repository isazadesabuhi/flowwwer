import exampleimg from "@/public/img.jpg";

export const servicePills = [
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

export const projects = [
  {
    name: "Wattflow",
    alt: "Apercu du projet Wattflow",
  },
  {
    name: "Flexhire App",
    alt: "Apercu du projet Flexhire App",
  },
  {
    name: "Flexhire Web",
    alt: "Apercu du projet Flexhire Web",
  },
];

export const steps = [
  {
    number: "1",
    title: "Strategie",
    description:
      "Nous analysons vos objectifs pour definir une direction claire et pertinente. Cette etape est essentielle pour aligner votre vision avec les attentes de vos utilisateurs.",
    image: exampleimg,
    imageAlt: "Illustration florale pour la phase de strategie",
    quote: "La clarte est la politesse du design.",
  },
  {
    number: "2",
    title: "Design",
    description:
      "Nous concevons des interfaces minimalistes, esthetiques et centrees sur l'utilisateur. Nous transformons des concepts complexes en experiences digitales simples et memorables.",
    image: exampleimg,
    imageAlt: "Illustration florale pour la phase de design",
    quote: "Le design donne une forme lisible a l'intention.",
  },
  {
    number: "3",
    title: "Realisation",
    description:
      "Nous transformons le design en un produit digital performant et haut de gamme. Chaque detail est soigne pour garantir une interaction fluide et une qualite irreprochable.",
    image: exampleimg,
    imageAlt: "Illustration florale pour la phase de realisation",
    quote: "L'execution transforme la vision en experience concrete.",
  },
] as const;

export type MethodStep = (typeof steps)[number];

export const aboutHighlights = [
  {
    title: "Propulser l'innovation",
    description:
      "Creer des experiences digitales qui transforment la complexite en simplicite radicale.",
  },
  {
    title: "Definir le futur",
    description:
      "Devenir la reference du design haut de gamme pour les marques les plus ambitieuses.",
  },
];

export const services = [
  {
    label: "Accompagnement Digital",
    labelClassName: "bg-[#eef0ff] text-[#5a64ff]",
    title: "Accompagnement Digital",
    description:
      "Nous assurons la perennite de vos solutions via un accompagnement strategique, continu et une evolution constante.",
  },
  {
    label: "Identite Visuelle",
    labelClassName: "bg-[#f8ecff] text-[#9f36ff]",
    title: "Identite Visuelle",
    description:
      "Nous faconnons des identites visuelles singulieres pour traduire fidelement votre vision strategique et marquer durablement les esprits.",
  },
  {
    label: "Developpement Web",
    labelClassName: "bg-[#edf7e9] text-[#61aa35]",
    title: "Developpement Web",
    description:
      "Concevoir des interfaces epurees alliant esthetique minimaliste et performance pour sublimer l'experience de vos utilisateurs.",
  },
];

export const pricingPlans = [
  {
    label: "Offert",
    title: "Consultation",
    price: "€0.00",
    description:
      "Un echange de 30 minutes pour analyser votre ecosysteme digital. Refonte complete ou conseil cible : nous definissons ensemble votre trajectoire de croissance.",
    recommanded: false,
    features: [
      "Identite de Marque",
      "Experience Web & UI",
      "Performance & Developpement",
      "Evolution & Support",
      "30 minutes pour analyser",
    ],
  },
  {
    label: "Recommande",
    title: "Consultation",
    price: "€4.999",
    description:
      "Une identite forte alliee a une structure web dynamique : une landing page pour convertir et un blog pour captiver, le tout gere par un CMS intuitif.",
    recommanded: true,
    features: [
      "Strategie de Marque Avancee",
      "Plateforme Web 20+ Pages",
      "Architecture CMS Complexe",
      "Accompagnement Prioritaire",
      "Livraison: 4-6 semaines",
    ],
  },
  {
    label: "Premium",
    title: "Consultation",
    price: "€4.999",
    description:
      "L'ecosysteme complet pour entreprises ambitieuses. Une plateforme robuste et evolutive, alliant strategie de marque profonde et architecture de contenu complexe.",
    recommanded: false,
    features: [
      "Strategie de Marque Avancee",
      "Plateforme Web 20+ Pages",
      "Architecture CMS Complexe",
      "Accompagnement Prioritaire",
      "Livraison: 4-6 semaines",
    ],
  },
] as const;

export const faqItems = [
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
