import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: Props) {
  return (
    <Reveal>
      <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
        {eyebrow && (
          <span className="inline-block rounded-full bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
            {eyebrow}
          </span>
        )}
        <h2
          className={`mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/80" : "text-ink-soft"}`}>
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}
