"use client";

import { useLanguage } from "@/lib/i18n";
import { site } from "@/lib/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="font-mono text-sm text-emerald-400">
        03. {t.contact.heading}
      </h2>
      <p className="mt-3 max-w-xl text-lg leading-relaxed text-neutral-300">
        {t.contact.body}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-emerald-300"
        >
          <MailIcon className="h-4 w-4" />
          {site.email}
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:border-white/20"
        >
          <LinkedInIcon className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:border-white/20"
        >
          <GitHubIcon className="h-4 w-4" />
          GitHub
        </a>
      </div>
    </section>
  );
}
