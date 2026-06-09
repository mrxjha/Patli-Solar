import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { GoogleMap } from "@/components/widgets/GoogleMap";
import { Reveal } from "@/components/ui/Reveal";
import { site, fullAddress, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with PATLI SOLAR SOLUTIONS for a free solar consultation, quote or support. Call, WhatsApp or send us an enquiry.",
};

export default function ContactPage() {
  const cards = [
    { icon: Phone, label: "Call Us", value: site.phone, href: site.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: whatsappLink() },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Clock, label: "Hours", value: site.businessHours },
  ];

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Ready to go solar? Reach out for a free consultation and quote."
        crumbs={[{ label: "Contact" }]}
      />

      {/* Quick contact cards */}
      <section className="bg-white py-16">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const Icon = c.icon;
            const inner = (
              <div className="flex h-full flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-50 text-brand-600">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-3 text-sm font-semibold text-ink">{c.label}</p>
                <p className="mt-1 text-sm text-ink-soft">{c.value}</p>
              </div>
            );
            return (
              <Reveal key={c.label} delay={i * 0.06}>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Form + details */}
      <section className="bg-gray-50 py-16">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-gray-100 sm:p-9">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
                Send Us an Enquiry
              </h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                Fill in the form and our team will respond promptly.
              </p>
              <div className="mt-6">
                <EnquiryForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-gray-100">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-ink">
                  Visit Our Office
                </h3>
                <p className="mt-3 flex items-start gap-3 text-sm text-ink-soft">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  {fullAddress}
                </p>
                <p className="mt-3 flex items-center gap-3 text-sm text-ink-soft">
                  <Phone className="h-5 w-5 shrink-0 text-brand-600" />
                  <a href={site.phoneHref} className="hover:text-brand-700">
                    {site.phone}
                  </a>
                </p>
                <p className="mt-3 flex items-center gap-3 text-sm text-ink-soft">
                  <Mail className="h-5 w-5 shrink-0 text-brand-600" />
                  <a href={`mailto:${site.email}`} className="hover:text-brand-700">
                    {site.email}
                  </a>
                </p>
              </div>
              <GoogleMap className="h-72" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
