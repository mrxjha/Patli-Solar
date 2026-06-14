import Link from "next/link";
import { site } from "@/lib/site-config";

/** Text + sun-mark logo placeholder. Swap the <svg> for a real logo anytime. */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-solar-500 to-solar-700 shadow-md">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-[family-name:var(--font-display)] text-base font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}>
          PATLI <span className="text-brand-600">SOLAR</span>
        </span>
        <span className={`flex w-full justify-between text-[10px] font-medium uppercase ${light ? "text-white/70" : "text-ink-soft/70"}`}>
          {"SOLUTIONS".split("").map((c, i) => (
            <span key={i}>{c}</span>
          ))}
        </span>
      </span>
    </Link>
  );
}
