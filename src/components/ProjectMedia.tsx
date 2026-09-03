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
          className="w-full rounded-xl border border-white/10 shadow-lg shadow-black/40"
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
            className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] shadow-lg shadow-black/30"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.alt[lang]}
              loading="lazy"
              className="w-full transition-transform duration-500 hover:scale-[1.04]"
            />
          </figure>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-6">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-lg shadow-black/30">
        <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
        </div>
        <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-neutral-300">
          <code>{media.code}</code>
        </pre>
      </div>
      <p className="mt-2 text-xs text-neutral-500">{media.caption[lang]}</p>
    </div>
  );
}
