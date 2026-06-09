import type { LucideIcon } from "lucide-react";
import { Home, Building2, Factory, Wrench, ShieldCheck } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  image: string;
  hero: string;
  intro: string;
  benefits: string[];
  process: { step: string; detail: string }[];
};

export const services: Service[] = [
  {
    slug: "residential-solar",
    title: "Residential Solar Solutions",
    short: "Cut your home electricity bills with rooftop solar built to last.",
    icon: Home,
    image: "/images/installations/rooftop-technician-install.png",
    hero: "/images/installations/rooftop-technician-install.png",
    intro:
      "Turn your rooftop into a power plant. Our residential solar systems are engineered for maximum generation, sleek looks and decades of reliable, low-maintenance performance — helping your family save on bills while going green.",
    benefits: [
      "Slash monthly electricity bills by up to 90%",
      "Government subsidy & net-metering assistance",
      "Premium tier-1 panels with 25-year performance warranty",
      "Smart monitoring from your phone",
      "Increases your property value",
    ],
    process: [
      { step: "Free Site Survey", detail: "We assess your roof, shading and consumption." },
      { step: "Custom Design", detail: "A system sized precisely to your needs and budget." },
      { step: "Installation", detail: "Certified engineers install safely and on schedule." },
      { step: "Activation & Support", detail: "Net-metering, commissioning and lifetime support." },
    ],
  },
  {
    slug: "commercial-solar",
    title: "Commercial Solar Solutions",
    short: "Reduce operating costs and power your business with clean energy.",
    icon: Building2,
    image: "/images/installations/rooftop-elevated-array.png",
    hero: "/images/installations/rooftop-elevated-array.png",
    intro:
      "Offices, showrooms, hospitals and schools can dramatically cut energy expenses with commercial solar. We deliver high-yield systems with fast payback periods and a strong, predictable return on investment.",
    benefits: [
      "Attractive ROI with 3–5 year typical payback",
      "Accelerated depreciation tax benefits",
      "Hedge against rising grid tariffs",
      "Boost your brand's sustainability credentials",
      "Minimal disruption during installation",
    ],
    process: [
      { step: "Energy Audit", detail: "Detailed analysis of load and tariff structure." },
      { step: "Financial Modelling", detail: "Transparent ROI, savings and payback projections." },
      { step: "Engineering & EPC", detail: "Turnkey design, procurement and construction." },
      { step: "O&M", detail: "Ongoing operations and maintenance for peak output." },
    ],
  },
  {
    slug: "industrial-solar",
    title: "Industrial Solar Solutions",
    short: "Megawatt-scale solar for factories and large facilities.",
    icon: Factory,
    image: "/images/installations/ground-mount-solar-pump.png",
    hero: "/images/installations/ground-mount-solar-pump.png",
    intro:
      "From manufacturing plants to warehouses, our industrial solar installations deliver large-scale, dependable clean power. We handle ground-mount, rooftop and hybrid systems with robust engineering for demanding loads.",
    benefits: [
      "Large-scale rooftop & ground-mount systems",
      "Reduce dependency on diesel gensets",
      "Open-access and captive power options",
      "SCADA monitoring & performance analytics",
      "Built to industrial safety standards",
    ],
    process: [
      { step: "Feasibility Study", detail: "Load profiling, land/roof assessment and yield modelling." },
      { step: "Detailed Engineering", detail: "Structural, electrical and safety design." },
      { step: "Project Execution", detail: "Disciplined project management and quality control." },
      { step: "Performance Assurance", detail: "Guaranteed generation with proactive maintenance." },
    ],
  },
  {
    slug: "solar-installation",
    title: "Solar Installation",
    short: "Certified, safe and precise installation by expert engineers.",
    icon: Wrench,
    image: "/images/installations/inverter-meter-setup.png",
    hero: "/images/installations/inverter-meter-setup.png",
    intro:
      "A solar system is only as good as its installation. Our trained, certified teams follow strict quality and safety protocols to ensure every panel, cable and inverter is mounted for maximum yield and longevity.",
    benefits: [
      "Trained & certified installation crews",
      "Premium mounting structures (wind & corrosion rated)",
      "Clean cable management and safe earthing",
      "Compliance with electrical & safety codes",
      "Thorough testing & commissioning",
    ],
    process: [
      { step: "Pre-Installation Check", detail: "Material inspection and site readiness." },
      { step: "Mounting & Wiring", detail: "Structure, panels, inverter and DC/AC wiring." },
      { step: "Testing", detail: "Insulation, polarity and performance verification." },
      { step: "Handover", detail: "Documentation, demo and warranty registration." },
    ],
  },
  {
    slug: "solar-maintenance",
    title: "Solar Maintenance",
    short: "Keep your system at peak output with proactive care (AMC).",
    icon: ShieldCheck,
    image: "/images/installations/waaree-inverter.png",
    hero: "/images/installations/waaree-inverter.png",
    intro:
      "Dust, faults and wear quietly reduce solar output over time. Our Annual Maintenance Contracts (AMC) and on-demand service keep your investment generating at its best, year after year.",
    benefits: [
      "Scheduled panel cleaning & inspection",
      "Inverter health checks & fault diagnosis",
      "Performance monitoring & reporting",
      "Rapid breakdown support",
      "Flexible AMC plans",
    ],
    process: [
      { step: "Inspection", detail: "Visual, electrical and thermal checks." },
      { step: "Cleaning", detail: "Safe, water-optimised panel cleaning." },
      { step: "Optimisation", detail: "Fixing under-performance and faults." },
      { step: "Reporting", detail: "Clear performance and health reports." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
