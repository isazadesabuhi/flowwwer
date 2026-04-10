import exampleimg from "@/public/img.jpg";

export const servicePills = [
  {
    label: "Accompagnement Digital",
    className: "bg-[#eef0ff] text-[#3f48ff]",
  },
  {
    label: "Identité Visuelle",
    className: "bg-[#f8ecff] text-[#9f36ff]",
  },
  {
    label: "Développement Web",
    className: "bg-[#edf7e9] text-[#4ea51f]",
  },
];

export const projects = [
  {
    name: "Wattflow",
    alt: "Aperçu du projet Wattflow",
  },
  {
    name: "Flexhire App",
    alt: "Aperçu du projet Flexhire App",
  },
  {
    name: "Flexhire Web",
    alt: "Aperçu du projet Flexhire Web",
  },
];

export const steps = [
  {
    number: "1",
    title: "Stratégie",
    description:
      "Nous analysons vos objectifs pour définir une direction claire et pertinente. Cette étape est essentielle pour aligner votre vision avec les attentes de vos utilisateurs.",
    image: exampleimg,
    imageAlt: "Illustration florale pour la phase de stratégie",
    quote: "La clarté est la politesse du design.",
  },
  {
    number: "2",
    title: "Design",
    description:
      "Nous concevons des interfaces minimalistes, esthétiques et centrées sur l'utilisateur. Nous transformons des concepts complexes en expériences digitales simples et mémorables.",
    image: exampleimg,
    imageAlt: "Illustration florale pour la phase de design",
    quote: "Le design donne une forme lisible a l'intention.",
  },
  {
    number: "3",
    title: "Réalisation",
    description:
      "Nous transformons le design en un produit digital performant et haut de gamme. Chaque détail est soigné pour garantir une interaction fluide et une qualité irréprochable.",
    image: exampleimg,
    imageAlt: "Illustration florale pour la phase de réalisation",
    quote: "L'exécution transforme la vision en expérience concrète.",
  },
] as const;

export type MethodStep = (typeof steps)[number];

export const aboutHighlights = [
  {
    title: "Propulser l'innovation",
    description:
      "Créer des expériences digitales qui transforment la complexité en simplicité radicale.",
  },
  {
    title: "Définir le futur",
    description:
      "Devenir la référence du design haut de gamme pour les marques les plus ambitieuses.",
  },
];

export const services = [
  {
    label: "Accompagnement Digital",
    labelClassName: "bg-[#eef0ff] text-[#5a64ff]",
    title: "Accompagnement Digital",
    description:
      "Nous assurons la pérennité de vos solutions via un accompagnement stratégique, continu et une évolution constante.",
  },
  {
    label: "Identité Visuelle",
    labelClassName: "bg-[#f8ecff] text-[#9f36ff]",
    title: "Identité Visuelle",
    description:
      "Nous façonnons des identités visuelles singulières pour traduire fidèlement votre vision stratégique et marquer durablement les esprits.",
  },
  {
    label: "Développement Web",
    labelClassName: "bg-[#edf7e9] text-[#61aa35]",
    title: "Développement Web",
    description:
      "Concevoir des interfaces épurées alliant esthétique minimaliste et performance pour sublimer l'expérience de vos utilisateurs.",
  },
];

export const pricingPlans = [
  {
    label: "Offert",
    title: "Consultation",
    price: "€0.00",
    description:
      "Un échange de 30 minutes pour analyser votre écosystème digital. Refonte complète ou conseil ciblé : nous définissons ensemble votre trajectoire de croissance.",
    recommanded: false,
    features: [
      "Identité de Marque",
      "Expérience Web & UI",
      "Performance & Développement",
      "Évolution & Support",
      "30 minutes pour analyser",
    ],
  },
  {
    label: "Recommandé",
    title: "Consultation",
    price: "€4.999",
    description:
      "Une identité forte alliée à une structure web dynamique : une landing page pour convertir et un blog pour captiver, le tout géré par un CMS intuitif.",
    recommanded: true,
    features: [
      "Stratégie de Marque Avancée",
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
      "L'écosystème complet pour entreprises ambitieuses. Une plateforme robuste et évolutive, alliant stratégie de marque profonde et architecture de contenu complexe.",
    recommanded: false,
    features: [
      "Stratégie de Marque Avancée",
      "Plateforme Web 20+ Pages",
      "Architecture CMS Complexe",
      "Accompagnement Prioritaire",
      "Livraison: 4-6 semaines",
    ],
  },
] as const;

export const faqItems = [
  {
    question: "Pourquoi êtes-vous plus rapides qu'une agence classique ?",
    answer:
      "Grâce à notre workflow optimisé par l'IA et notre expertise en Next.js, nous éliminons les processus lourds des agences traditionnelles. Nous nous concentrons sur l'essentiel : un design d'élite et un code performant, livrés en quelques jours sans compromis sur la qualité.",
  },
  {
    question: "Serai-je propriétaire du code et pourrai-je le modifier librement ?",
    answer:
      "Oui. Une fois le projet livré, vous disposez du code source et pouvez le faire évoluer librement avec votre équipe ou avec nous selon vos besoins.",
  },
  {
    question: "Vos tarifs incluent-ils la maintenance et les modifications futures?",
    answer:
      "Les forfaits couvrent la conception et la livraison du projet. La maintenance continue et les évolutions peuvent ensuite être encadrées via un accompagnement adapté.",
  },
  {
    question: "Mon site sera-t-il optimisé pour Google et la vitesse de chargement ?",
    answer:
      "Oui. Nous travaillons la structure, les performances et les bonnes pratiques techniques pour fournir un site rapide, propre et favorable au référencement.",
  },
] as const;
