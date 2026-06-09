import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight } from "lucide-react";
import { services, getService } from "@/content/services";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { SmartImage } from "@/components/ui/SmartImage";
import { CtaBanner } from "@/components/sections/CtaBanner";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found" };
  return { title: service.title, description: service.short };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHeader
        title={service.title}
        subtitle={service.short}
        crumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
      />

      {/* Intro + image */}
      <section className="bg-white py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <SmartImage
                src={service.hero}
                alt={service.title}
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink sm:text-3xl">
              Overview
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">{service.intro}</p>
            <ul className="mt-6 space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm text-ink-soft">{b}</span>
                </li>
              ))}
            </ul>
            <ButtonLink href="/contact" className="mt-8">
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-20">
        <div className="container-x">
          <div className="text-center">
            <span className="inline-block rounded-full bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
              How It Works
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-ink">
              Our Process
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                  <span className="font-[family-name:var(--font-display)] text-4xl font-extrabold text-brand-100">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] font-bold text-ink">
                    {p.step}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{p.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-white py-16">
        <div className="container-x">
          <h2 className="text-center font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
            Explore Other Services
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-medium text-ink-soft transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                >
                  {s.title}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
