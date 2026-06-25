import Image from "next/image";
import clsx from "clsx";
import { LucideIcon } from "lucide-react";
import type { SourcedPhoto } from "@/lib/photos";

/**
 * PHOTOGRAPHY PANEL
 * ------------------------------------------------------------------
 * Renders a real photo when `photo` is provided (sourced from
 * Unsplash, see src/lib/photos.ts), otherwise falls back to a
 * designed gradient-mesh placeholder with grain and a faint icon
 * mark — used for slots that don't yet have brand photography
 * (e.g. trainer headshots, which use invented names and shouldn't
 * be paired with photos of real people).
 * ------------------------------------------------------------------
 */
interface PhotoPanelProps {
  icon?: LucideIcon;
  label?: string;
  className?: string;
  variant?: 1 | 2 | 3 | 4 | 5;
  photo?: SourcedPhoto;
  priority?: boolean;
}

const gradients: Record<number, string> = {
  1: "radial-gradient(circle at 30% 20%, #2a2a2a, #050505 70%)",
  2: "radial-gradient(circle at 70% 80%, #232017, #050505 70%)",
  3: "radial-gradient(circle at 50% 0%, #1d1d1d, #050505 65%)",
  4: "radial-gradient(circle at 20% 90%, #262218, #050505 70%)",
  5: "radial-gradient(circle at 80% 10%, #1f1f1f, #050505 65%)",
};

export default function PhotoPanel({
  icon: Icon,
  label,
  className,
  variant = 1,
  photo,
  priority = false,
}: PhotoPanelProps) {
  if (photo) {
    const isAbsolute = className?.includes("absolute");
    return (
      <div className={clsx("overflow-hidden", !isAbsolute && "relative", className)}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        {/* Subtle brand-tone wash so photos sit consistently with the
            rest of the dark, gold-accented palette rather than looking
            like an unrelated stock insert. */}
        <div
          className="absolute inset-0 mix-blend-multiply opacity-40"
          style={{ background: gradients[variant] }}
        />
        {label && (
          <span className="absolute bottom-4 left-4 z-10 text-[10px] label-track text-white/40">
            {label}
          </span>
        )}
      </div>
    );
  }

  const isAbsolute = className?.includes("absolute");
  return (
    <div
      className={clsx(
        "grain overflow-hidden flex items-center justify-center",
        !isAbsolute && "relative",
        className
      )}
      style={{ background: gradients[variant] }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent 0px, transparent 64px, rgba(255,255,255,0.025) 64px, rgba(255,255,255,0.025) 65px)",
        }}
      />
      {Icon && (
        <Icon
          size={42}
          strokeWidth={1}
          className="relative z-10 text-white/15"
        />
      )}
      {label && (
        <span className="absolute bottom-4 left-4 z-10 text-[10px] label-track text-white/25">
          {label}
        </span>
      )}
    </div>
  );
}
