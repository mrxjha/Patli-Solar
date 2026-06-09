import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Projects & Portfolio",
  description:
    "Explore solar installations by PATLI SOLAR SOLUTIONS across residential, commercial and industrial segments in Bihar.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Our Projects"
        subtitle="Real solar installations delivering real savings across Bihar."
        crumbs={[{ label: "Projects" }]}
      />
      <section className="bg-white py-20">
        <div className="container-x">
          <ProjectsGallery />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
