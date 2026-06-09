import { CheckCircle2 } from "lucide-react";
import { whyChooseUs } from "@/content/nav";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-b from-brand-50 to-white py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The PATLI SOLAR Advantage"
          subtitle="We combine engineering excellence with honest service to deliver solar systems you can rely on for decades."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <div className="flex h-full gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-brand-600" />
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
