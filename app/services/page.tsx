import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Solar Services",
  description:
    "Residential, commercial and industrial solar solutions, plus expert installation and maintenance from PATLI SOLAR SOLUTIONS.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Solar Services"
        subtitle="End-to-end solar solutions tailored to your needs — from homes to large industries."
        crumbs={[{ label: "Services" }]}
      />
      <ServicesGrid />
      <CtaBanner />
    </>
  );
}
