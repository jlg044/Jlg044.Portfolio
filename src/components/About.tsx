"use client";

import { useLanguage } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading index="01" title={t.about.heading} />
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-300 sm:pl-[4.5rem]">
          {t.about.body}
        </p>
      </Reveal>
    </section>
  );
}
