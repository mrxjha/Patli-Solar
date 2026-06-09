export type Project = {
  title: string;
  category: "Residential" | "Commercial" | "Industrial";
  location: string;
  capacity: string;
  image: string;
  summary: string;
};

// Real PATLI SOLAR installations. Edit titles/locations/capacities to match
// each site exactly — photos live in /public/images/installations.
export const projects: Project[] = [
  {
    title: "Elevated Rooftop Solar Array",
    category: "Commercial",
    location: "Patna, Bihar",
    capacity: "10 kW",
    image: "/images/installations/rooftop-elevated-array.png",
    summary:
      "Raised galvanised mounting structure over a terrace — keeps the roof usable while maximising panel exposure and airflow.",
  },
  {
    title: "Residential Rooftop Installation",
    category: "Residential",
    location: "Patna, Bihar",
    capacity: "3 kW",
    image: "/images/installations/rooftop-technician-install.png",
    summary:
      "On-grid home rooftop system installed by our in-house team, cutting the family's monthly electricity bill substantially.",
  },
  {
    title: "Ground-Mount Solar Water Pump",
    category: "Industrial",
    location: "Rural Bihar",
    capacity: "5 kW",
    image: "/images/installations/ground-mount-solar-pump.png",
    summary:
      "Ground-mounted array powering an agricultural water pump — reliable irrigation with zero running cost.",
  },
  {
    title: "On-Grid System with WAAREE Inverter",
    category: "Residential",
    location: "Patna, Bihar",
    capacity: "3 kW",
    image: "/images/installations/waaree-inverter.png",
    summary:
      "Tier-1 WAAREE inverter with dedicated DCDB protection — clean, code-compliant wiring built to last.",
  },
  {
    title: "Net-Metered Home System",
    category: "Residential",
    location: "Patna, Bihar",
    capacity: "5 kW",
    image: "/images/installations/inverter-meter-setup.png",
    summary:
      "Complete inverter, net-meter and distribution-board setup commissioned and connected to the grid.",
  },
  {
    title: "Commercial On-Grid Setup",
    category: "Commercial",
    location: "Bihar",
    capacity: "8 kW",
    image: "/images/installations/inverter-acdb-setup.png",
    summary:
      "Inverter with dedicated solar ACDB and surge protection — engineered for safe, continuous generation.",
  },
];

export const projectCategories = ["All", "Residential", "Commercial", "Industrial"] as const;
