import type { Metadata } from "next";
import { Target, Eye, Heart, Award } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about PATLI SOLAR SOLUTIONS — our mission, values and commitment to delivering reliable, high-quality solar energy systems across Bihar.",
};

const values = [
  { icon: Target, title: "Our Mission", text: "To make clean, affordable solar energy accessible to every home, business and industry." },
  { icon: Eye, title: "Our Vision", text: "A sustainable, energy-independent future powered by the sun for generations to come." },
  { icon: Heart, title: "Our Values", text: "Integrity, quality and customer-first service guide everything we do." },
  { icon: Award, title: "Our Promise", text: "Engineering excellence and honest pricing — with support that lasts a lifetime." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About PATLI SOLAR SOLUTIONS"
        subtitle="Your trusted partner in the transition to clean, renewable energy."
        crumbs={[{ label: "About" }]}
      />

      {/* Story */}
      <section className="bg-white py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <SmartImage
                src="/images/installations/rooftop-technician-install.png"
                alt="PATLI SOLAR installation team at work on a rooftop"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="inline-block rounded-full bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
              Who We Are
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-ink sm:text-4xl">
              Driven by Sunshine, Built on Trust
            </h2>
            <div className="mt-5 space-y-4 text-ink-soft leading-relaxed">
              <p>
                {site.name} is a dedicated solar energy company committed to helping homes,
                businesses and industries harness the power of the sun. From the first site
                survey to long-term maintenance, we deliver complete, hassle-free solar
                solutions.
              </p>
              <p>
                We use only tier-1 components, follow strict installation standards, and back
                every project with responsive after-sales support. Our goal is simple: maximum
                savings and clean energy you can depend on for decades.
              </p>
              <p className="text-sm">
                <span className="font-semibold text-ink">GSTIN:</span> {site.gstin} &nbsp;·&nbsp;
                <span className="font-semibold text-ink">Region:</span> Bihar, India
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission/Vision/Values */}
      <section className="bg-gray-50 py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Mission, Vision & Values"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-[family-name:var(--font-display)] font-bold text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Authorized vendor */}
      <section className="bg-white py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="inline-block rounded-full bg-solar-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-solar-700">
              Choose Wisely
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-ink sm:text-4xl">
              Why an Authorized Solar Vendor Matters
            </h2>
            <div className="mt-5 space-y-4 text-ink-soft leading-relaxed">
              <p>
                A cheap, unauthorized installation may look like a bargain — but messy wiring,
                sub-standard structures and no real warranty cost far more in lost generation,
                breakdowns and safety risks over the years.
              </p>
              <p>
                As an authorized installer using tier-1 components, we deliver clean,
                code-compliant work with proper protection devices, valid warranties, subsidy
                eligibility and dependable after-sales support — so your system performs safely
                for decades.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-brand-600">✓</span> Genuine tier-1 panels &amp; inverters with valid warranty
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-brand-600">✓</span> Safe, code-compliant wiring &amp; protection devices
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-brand-600">✓</span> Eligible for government subsidy &amp; net-metering
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-square overflow-hidden rounded-3xl shadow-xl ring-1 ring-gray-100">
              <SmartImage
                src="/images/installations/authorized-vendor.png"
                alt="Comparison: unauthorized vs authorized rooftop solar vendor"
                sizes="(min-width: 1024px) 45vw, 100vw"
                imgClassName="object-contain bg-white"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <WhyChooseUs />
      <CtaBanner />
    </>
  );
}
