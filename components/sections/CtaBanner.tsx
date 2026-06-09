import { ArrowRight, Phone } from "lucide-react";
import { ButtonLink } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { site } from "@/lib/site-config";

export function CtaBanner() {
  return (
    <section className="bg-white py-16">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-700 to-brand-600 px-8 py-12 text-center text-white md:px-16 md:py-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-solar-500/30 blur-3xl" />
            <h2 className="relative font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
              Ready to Switch to Solar?
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-white/85">
              Get a free, no-obligation site survey and a custom quote tailored to your needs.
              Start saving from day one.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/contact" variant="solar" size="lg">
                Get Your Free Quote <ArrowRight className="h-5 w-5" />
              </ButtonLink>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                <Phone className="h-5 w-5" /> Call {site.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
