export type Testimonial = {
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
};

// PLACEHOLDER reviews — replace with genuine customer testimonials.
export const testimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "Homeowner",
    location: "Patna",
    rating: 5,
    quote:
      "My electricity bill dropped from thousands to almost nothing. The team handled everything — survey, subsidy paperwork and a neat installation. Highly recommended!",
  },
  {
    name: "Sunita Devi",
    role: "Business Owner",
    location: "Gaya",
    rating: 5,
    quote:
      "Professional from start to finish. They explained the ROI clearly and delivered exactly what they promised. Our showroom now runs on clean solar power.",
  },
  {
    name: "Amit Singh",
    role: "Factory Manager",
    location: "Muzaffarpur",
    rating: 5,
    quote:
      "Excellent engineering and project management for our large ground-mount system. Generation has been consistently above the projected numbers.",
  },
  {
    name: "Priya Sharma",
    role: "Homeowner",
    location: "Bhagalpur",
    rating: 5,
    quote:
      "Great experience! The monitoring app lets me track savings daily. Their maintenance support has been prompt and reliable.",
  },
];
