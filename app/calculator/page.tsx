import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { SolarCalculator } from "@/components/widgets/SolarCalculator";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Solar Savings Calculator",
  description:
    "Estimate your rooftop solar system size, cost after government subsidy, monthly savings and payback period in seconds with the PATLI SOLAR savings calculator.",
};

export default function CalculatorPage() {
  return (
    <>
      <PageHeader
        title="Solar Savings Calculator"
        subtitle="See your recommended system size, cost after subsidy, monthly savings and payback period — instantly."
        crumbs={[{ label: "Calculator" }]}
      />

      <section className="bg-gray-50 py-16">
        <div className="container-x">
          <SolarCalculator />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
