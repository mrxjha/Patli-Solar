"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { projects, projectCategories } from "@/content/projects";
import { SmartImage } from "../ui/SmartImage";

export function ProjectsGallery() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              filter === cat
                ? "bg-brand-600 text-white shadow"
                : "bg-gray-100 text-ink-soft hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <SmartImage
                  src={p.image}
                  alt={p.title}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  imgClassName="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 z-10 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                  {p.category}
                </span>
                <span className="absolute right-3 top-3 z-10 rounded-full bg-solar-500 px-3 py-1 text-xs font-bold text-ink">
                  {p.capacity}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-ink">
                  {p.title}
                </h3>
                <p className="mt-1 flex items-center gap-1 text-xs text-ink-soft">
                  <MapPin className="h-3.5 w-3.5" /> {p.location}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.summary}</p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
