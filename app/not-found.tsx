import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-white px-6 py-24 text-center">
      <div>
        <p className="font-[family-name:var(--font-display)] text-7xl font-extrabold text-brand-100">
          404
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-ink">
          Page Not Found
        </h1>
        <p className="mt-3 text-ink-soft">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <ButtonLink href="/" className="mt-7">
          Back to Home
        </ButtonLink>
      </div>
    </section>
  );
}
