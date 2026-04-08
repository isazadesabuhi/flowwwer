import Image from "next/image";
import Link from "next/link";
import exampleimg from "@/public/img.jpg";


const projects = [
  {
    name: "Wattflow",
    // image: "/public/img.jpg",
    alt: "Apercu du projet Wattflow",
  },
  {
    name: "Flexhire App",
    // image: "/public/img.jpg",
    alt: "Apercu du projet Flexhire App",
  },
  {
    name: "Flexhire Web",
    // image: "/public/img.jpg",
    alt: "Apercu du projet Flexhire Web",
  },
];

export function ProjectsSection() {
  return (
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
                src={exampleimg}
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
  );
}
