import Link from "next/link";
import type { ComponentType } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { site, fullAddress, whatsappLink } from "@/lib/site-config";
import { navItems } from "@/content/nav";
import { services } from "@/content/services";
import { Logo } from "./Logo";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "../ui/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();
  const socials: { href: string; Icon: ComponentType<{ className?: string }>; label: string }[] = [
    { href: site.socials.facebook, Icon: FacebookIcon, label: "Facebook" },
    { href: site.socials.instagram, Icon: InstagramIcon, label: "Instagram" },
    { href: site.socials.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
    { href: site.socials.youtube, Icon: YoutubeIcon, label: "YouTube" },
  ].filter((s) => s.href && s.href !== "#");

  return (
    <footer className="bg-ink text-white/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            {site.description}
          </p>
          {socials.length > 0 && (
            <div className="mt-5 flex gap-3">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-brand-600"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-white">Our Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="transition hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white">Get in Touch</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-solar-500" />
              <span>{fullAddress}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-solar-500" />
              <a href={site.phoneHref} className="transition hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-solar-500" />
              <a href={`mailto:${site.email}`} className="transition hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/60 md:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>GSTIN: {site.gstin}</p>
        </div>
      </div>
    </footer>
  );
}
