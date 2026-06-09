"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navItems } from "@/content/nav";
import { site } from "@/lib/site-config";
import { Logo } from "./Logo";
import { ButtonLink } from "../ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-md backdrop-blur" : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "text-brand-700" : "text-ink-soft hover:text-brand-700"
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-brand-50"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-ink-soft hover:text-brand-700 md:flex"
          >
            <Phone className="h-4 w-4 text-brand-600" />
            {site.phone}
          </a>
          <ButtonLink href="/contact" size="sm" className="hidden sm:inline-flex">
            Get a Free Quote
          </ButtonLink>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-lg text-ink lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-4 py-3 text-base font-medium ${
                    pathname === item.href
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink-soft hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink href="/contact" onClick={() => setOpen(false)} className="mt-2 w-full">
                Get a Free Quote
              </ButtonLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
