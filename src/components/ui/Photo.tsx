import Image from "next/image";
import type { Photo as PhotoData } from "@/content/media";
import { asset } from "@/lib/asset";

/**
 * Responsive photo with reserved aspect ratio (no layout shift), optional
 * caption, and base-path-safe src for GitHub Pages.
 */
export function Photo({
  photo,
  sizes,
  priority = false,
  className = "",
  frame = "light",
}: {
  photo: PhotoData;
  sizes: string;
  priority?: boolean;
  className?: string;
  frame?: "light" | "dark";
}) {
  return (
    <figure className={className}>
      <div
        className={`overflow-hidden rounded-card ${
          frame === "dark" ? "ring-1 ring-white/15 shadow-[0_24px_48px_-24px_rgb(0_0_0/0.6)]" : "border border-line"
        }`}
      >
        <Image
          src={asset(photo.src)}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes={sizes}
          priority={priority}
          className="h-auto w-full"
        />
      </div>
      {photo.caption && (
        <figcaption className={`mt-3 text-sm ${frame === "dark" ? "text-slate-300" : "text-muted"}`}>
          {photo.caption}
        </figcaption>
      )}
    </figure>
  );
}
