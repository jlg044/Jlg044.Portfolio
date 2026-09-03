"use client";

import { useLanguage } from "@/lib/i18n";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:gap-16">
        <h2 className="font-mono text-sm text-emerald-400">
          01. {t.about.heading}
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-neutral-300">
          {t.about.body}
        </p>
      </div>
    </section>
  );
}
