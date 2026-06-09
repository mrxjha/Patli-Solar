export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Calculator", href: "/calculator" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 50, suffix: "+", label: "Installations Completed" },
  { value: 250, suffix: " kW+", label: "Clean Energy Installed" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 3, suffix: "+", label: "Years of Expertise" },
];

// "Why choose us" pillars
export const whyChooseUs = [
  {
    title: "Certified Experts",
    text: "Trained, certified engineers and disciplined project execution on every job.",
  },
  {
    title: "Tier-1 Components",
    text: "We use only premium panels and inverters backed by long-term warranties.",
  },
  {
    title: "End-to-End Service",
    text: "From survey and subsidy paperwork to installation and maintenance — one partner.",
  },
  {
    title: "Maximum Savings",
    text: "Systems engineered for the highest generation and fastest payback for you.",
  },
  {
    title: "Lifetime Support",
    text: "Responsive after-sales support and flexible AMC plans keep you covered.",
  },
  {
    title: "Transparent Pricing",
    text: "Clear quotes and honest ROI projections — no hidden costs, ever.",
  },
];
