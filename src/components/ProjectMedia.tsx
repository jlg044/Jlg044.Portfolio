"use client";

import { useLanguage } from "@/lib/i18n";
import type { ProjectMedia as ProjectMediaType } from "@/lib/projects";

export function ProjectMedia({ media }: { media: ProjectMediaType }) {
  const { lang } = useLanguage();

  if (media.kind === "video") {
    return (
      <div className="mt-6">
        <video
          controls
          preload="metadata"
          className="w-full rounded-xl border border-white/10"
        >
          <source src={media.src} type="video/mp4" />
        </video>
        <p className="mt-2 text-xs text-neutral-500">{media.caption[lang]}</p>
      </div>
    );
  }

  if (media.kind === "images") {
    return (
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {media.items.map((item) => (
          <figure
            key={item.src}
            className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt[lang]}
              loading="lazy"
              className="w-full"
            />
          </figure>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-6">
      <pre className="overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 text-xs leading-relaxed text-neutral-300">
        <code>{media.code}</code>
      </pre>
      <p className="mt-2 text-xs text-neutral-500">{media.caption[lang]}</p>
    </div>
  );
}
