"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { SectionHeading } from "../ui/SectionHeading";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const t = testimonials[index];

  return (
    <section className="bg-brand-900 py-20 text-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Customers Say"
          light
        />

        <div className="relative mx-auto mt-12 max-w-3xl">
          <Quote className="mx-auto h-10 w-10 text-solar-500" />
          <div className="relative min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mt-6 text-center"
              >
                <div className="mb-4 flex justify-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-solar-500 text-solar-500" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-white/90">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6">
                  <p className="font-[family-name:var(--font-display)] font-bold">{t.name}</p>
                  <p className="text-sm text-white/60">
                    {t.role} · {t.location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-solar-500" : "w-2.5 bg-white/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
