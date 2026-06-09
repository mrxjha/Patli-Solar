import { MapPin } from "lucide-react";
import { projects } from "@/content/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { ButtonLink } from "../ui/Button";
import { SmartImage } from "../ui/SmartImage";

export function ProjectsPreview({ limit = 3 }: { limit?: number }) {
  return (
    <section className="bg-white py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Work"
          title="Recent Solar Projects"
          subtitle="A glimpse of the homes, businesses and industries we have powered with clean energy."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, limit).map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <SmartImage
                    src={p.image}
                    alt={p.title}
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                    imgClassName="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                    {p.category}
                  </span>
                  <span className="absolute right-3 top-3 z-10 rounded-full bg-solar-500 px-3 py-1 text-xs font-bold text-ink">
                    {p.capacity}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-1 text-xs text-ink-soft">
                    <MapPin className="h-3.5 w-3.5" /> {p.location}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.summary}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <ButtonLink href="/projects" variant="outline">
            View All Projects
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
