"use client";

import { useLanguage } from "@/lib/i18n";
import { site } from "@/lib/site";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowDownIcon } from "@/components/Icons";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden px-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(52,211,153,0.12) 0%, rgba(10,10,10,0) 70%)",
        }}
      />

      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-4 font-mono text-sm text-emerald-400">
          {t.hero.role}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-50 sm:text-6xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
          {t.hero.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-emerald-300"
          >
            {t.hero.cta}
            <ArrowDownIcon className="h-4 w-4" />
          </a>

          <div className="flex items-center gap-2">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/10 p-2.5 text-neutral-300 transition-colors hover:border-white/20 hover:text-neutral-50"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-2.5 text-neutral-300 transition-colors hover:border-white/20 hover:text-neutral-50"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="rounded-full border border-white/10 p-2.5 text-neutral-300 transition-colors hover:border-white/20 hover:text-neutral-50"
            >
              <MailIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
