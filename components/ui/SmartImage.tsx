"use client";

import Image from "next/image";
import { useState } from "react";
import { Sun } from "lucide-react";

type Props = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  /** Tailwind classes for the <img> (e.g. object-cover, transition). */
  imgClassName?: string;
  /** Overlay rendered above the image (e.g. a dark gradient for text contrast). */
  overlay?: React.ReactNode;
};

/**
 * Fill-style image with a graceful fallback. Renders an on-brand gradient
 * base behind the photo; if the photo fails to load (offline / blocked CDN),
 * an attractive gradient + sun icon shows instead of a broken image.
 * The parent element MUST be `position: relative` with a defined size.
 */
export function SmartImage({ src, alt, sizes, priority, imgClassName = "object-cover", overlay }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <>
      {/* Gradient base / fallback */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-500 to-solar-500" />
      {failed && (
        <div className="absolute inset-0 grid place-items-center">
          <Sun className="h-1/4 w-1/4 max-h-24 max-w-24 text-white/40" />
        </div>
      )}

      {!failed && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={imgClassName}
          onError={() => setFailed(true)}
        />
      )}

      {overlay}
    </>
  );
}
