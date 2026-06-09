import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about solar panels, savings, subsidy, installation, warranty and maintenance — answered by PATLI SOLAR SOLUTIONS.",
};

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before going solar."
        crumbs={[{ label: "FAQ" }]}
      />
      <section className="bg-gray-50 py-20">
        <div className="container-x">
          <FaqAccordion items={faqs} />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
