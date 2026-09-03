"use client";

import { useLanguage } from "@/lib/i18n";
import { site } from "@/lib/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading index="03" title={t.contact.heading} />
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-300 sm:pl-[4.5rem]">
          {t.contact.body}
        </p>
      </Reveal>

      <Reveal delay={180}>
        <div className="mt-8 flex flex-wrap gap-4 sm:pl-[4.5rem]">
          <a
            href={`mailto:${site.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-medium text-neutral-950 transition-all hover:scale-[1.03] hover:bg-emerald-300 hover:shadow-[0_0_24px_2px_rgba(52,211,153,0.35)] active:scale-[0.98]"
          >
            <MailIcon className="h-4 w-4" />
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-neutral-200 transition-all hover:-translate-y-0.5 hover:border-emerald-400/40 hover:text-emerald-300"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-neutral-200 transition-all hover:-translate-y-0.5 hover:border-emerald-400/40 hover:text-emerald-300"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}
