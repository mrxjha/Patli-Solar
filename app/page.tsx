import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { faqs } from "@/content/faqs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesGrid limit={3} />
      <WhyChooseUs />
      <ProjectsPreview limit={3} />
      <Testimonials />

      {/* FAQ teaser */}
      <section className="bg-gray-50 py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to the questions we hear most often about going solar."
          />
          <div className="mt-12">
            <FaqAccordion items={faqs.slice(0, 5)} />
          </div>
          <div className="mt-8 text-center">
            <ButtonLink href="/faq" variant="outline">
              View All FAQs
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
