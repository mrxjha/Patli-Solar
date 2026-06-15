"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sun, ShieldCheck, Leaf, Clock } from "lucide-react";
import { ButtonLink } from "../ui/Button";
import { SmartImage } from "../ui/SmartImage";
import { whatsappLink } from "@/lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-900 via-brand-800 to-brand-700 pt-28 pb-20 text-white md:pt-36 md:pb-28">
      {/* Background image */}
      <div className="absolute inset-0">
        <SmartImage
          src="/images/installations/rooftop-technician-install.png"
          alt="PATLI SOLAR engineer installing rooftop solar panels"
          priority
          sizes="100vw"
          imgClassName="object-cover opacity-25"
          overlay={
            <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 to-brand-700/60" />
          }
        />
      </div>

      {/* Animated sun glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-solar-500/30 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold backdrop-blur"
          >
            <Sun className="h-4 w-4 text-solar-400" />
            Trusted Solar Energy Supports
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Power Your World with{" "}
            <span className="text-gradient-solar">Renewable Energy</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-xl text-lg text-white/85"
          >
            End-to-end solar solutions for homes, businesses, institutions and industries.
            Slash your electricity bills, opt energy independence, and build a greener future.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap gap-4"
          >
            <ButtonLink href="/contact" variant="solar" size="lg">
              Get a Free Quote <ArrowRight className="h-5 w-5" />
            </ButtonLink>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/80"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-solar-400" /> 25+ Years Warranty
            </span>
            <span className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-solar-400" /> Govt. Subsidy Assistance
            </span>
            <span className="flex items-center gap-2">
              <Sun className="h-5 w-5 text-solar-400" /> Tier-1 Components
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-solar-400" /> 24x7 Available Experts
            </span>
          </motion.div>
        </div>

        {/* Floating visual card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
            <SmartImage
              src="/images/installations/rooftop-elevated-array.png"
              alt="Elevated rooftop solar array installed by PATLI SOLAR SOLUTIONS"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <motion.div
            className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-5 text-ink shadow-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-3xl font-extrabold text-brand-600">90%</p>
            <p className="text-sm font-medium text-ink-soft">Average bill savings</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute inset-x-0 bottom-0 leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-12 w-full md:h-20">
          <path fill="#ffffff" d="M0,40 C360,90 1080,-10 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
