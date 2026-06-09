/* ================================================================
   PATLI SOLAR SOLUTIONS — Central Site Configuration
   ----------------------------------------------------------------
   👉 THIS IS THE ONLY FILE YOU NEED TO EDIT FOR BUSINESS DETAILS.
   Replace every value marked PLACEHOLDER with your real information.
   Every page/component reads from here, so one edit updates the
   whole website.
================================================================ */

export const site = {
  name: "PATLI SOLAR SOLUTIONS",
  shortName: "Patli Solar",
  tagline: "Powering a Brighter, Cleaner Tomorrow",
  description:
    "PATLI SOLAR SOLUTIONS designs, installs and maintains high-efficiency solar power systems for homes, businesses and industries across Bihar and India.",

  // Official registration (from your MSME/Udyam + GST)
  gstin: "10AYYPK6538P1ZL", // Bihar (state code 10)

  // ---- CONTACT DETAILS (replace placeholders) ----
  phone: "+91-77177-36467", // PLACEHOLDER — your business phone
  phoneHref: "tel:+917717736467", // PLACEHOLDER — same number, no spaces
  whatsapp: "917717736467", // PLACEHOLDER — country code + number, NO "+" or spaces
  email: "patlisolarsolutions.offcl@gmail.com", // PLACEHOLDER

  // ---- ADDRESS (replace placeholders) ----
  address: {
    line1: "201, White House, Patliputra Residency", // PLACEHOLDER
    line2: "Anandpuri, Boring Canal Road", // PLACEHOLDER
    city: "Patna", // PLACEHOLDER
    state: "Bihar",
    pincode: "800001", // PLACEHOLDER
    country: "India",
  },

  businessHours: "Mon – Sat: 9:00 AM – 7:00 PM",

  // Google Maps EMBED url. To get yours: Google Maps → search your
  // address → Share → "Embed a map" → copy the src="..." URL here.
  mapEmbedUrl:
    "https://www.google.com/maps?q=201,+White+House,+Patliputra+Residency,+Anandpuri,+Boring+Canal+Road,+Patna,+Bihar,+800001,+India&output=embed", // PLACEHOLDER

  // ---- SOCIAL LINKS (use "#" to hide until you have them) ----
  socials: {
    facebook: "#", // PLACEHOLDER
    instagram: "#", // PLACEHOLDER
    linkedin: "#", // PLACEHOLDER
    youtube: "#", // PLACEHOLDER
    twitter: "#", // PLACEHOLDER
  },

  // ---- DEPLOYMENT ----
  // Set to your live domain once deployed (used for SEO/sitemap/OG).
  url: "https://patli-solar-solutions.vercel.app", // live on Vercel

  // ---- FORM BACKEND ----
  // Free key from https://web3forms.com (takes 1 minute, no signup of card).
  // Can also be supplied via NEXT_PUBLIC_WEB3FORMS_KEY env var (preferred for prod).
  web3formsKey: "dfb46884-2141-4235-bf11-b031b1085e1b", // PLACEHOLDER
} as const;

// Convenience helpers ------------------------------------------------

export const fullAddress = [
  site.address.line1,
  site.address.line2,
  `${site.address.city}, ${site.address.state} - ${site.address.pincode}`,
  site.address.country,
]
  .filter(Boolean)
  .join(", ");

export function whatsappLink(message?: string) {
  const text = message ?? `Hello ${site.name}, I would like to know more about your solar solutions.`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const web3formsKey =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || site.web3formsKey;
