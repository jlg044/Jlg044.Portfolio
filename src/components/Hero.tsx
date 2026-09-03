"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { site } from "@/lib/site";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowDownIcon } from "@/components/Icons";

export function Hero() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden px-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 40% at 50% 0%, rgba(52,211,153,0.16) 0%, rgba(10,10,10,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/4 -z-10 h-72 w-72 rounded-full opacity-30 blur-[100px]"
        style={{ background: "radial-gradient(circle, #34d399, transparent 70%)" }}
      />

      <div className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p
            className={`mb-4 flex items-center gap-2 font-mono text-sm text-emerald-400 transition-all duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t.hero.role}
          </p>

          <h1
            className={`bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-400 bg-clip-text text-5xl font-semibold tracking-tight text-transparent transition-all duration-700 sm:text-7xl ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "80ms" }}
          >
            {site.name}
          </h1>

          <p
            className={`mt-6 max-w-xl text-base leading-relaxed text-neutral-400 transition-all duration-700 sm:text-lg ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "160ms" }}
          >
            {t.hero.tagline}
          </p>

          <div
            className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "240ms" }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-medium text-neutral-950 shadow-[0_0_0_0_rgba(52,211,153,0.5)] transition-all hover:scale-[1.03] hover:bg-emerald-300 hover:shadow-[0_0_24px_2px_rgba(52,211,153,0.35)] active:scale-[0.98]"
            >
              {t.hero.cta}
              <ArrowDownIcon className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>

            <div className="flex items-center gap-2">
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-white/10 p-2.5 text-neutral-300 transition-all hover:-translate-y-0.5 hover:border-emerald-400/40 hover:text-emerald-300"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-white/10 p-2.5 text-neutral-300 transition-all hover:-translate-y-0.5 hover:border-emerald-400/40 hover:text-emerald-300"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="rounded-full border border-white/10 p-2.5 text-neutral-300 transition-all hover:-translate-y-0.5 hover:border-emerald-400/40 hover:text-emerald-300"
              >
                <MailIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div
          className={`relative shrink-0 transition-all duration-700 ${
            mounted ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
          style={{ transitionDelay: "40ms" }}
        >
          <div
            aria-hidden
            className="absolute -inset-3 -z-10 rounded-full opacity-70 blur-2xl"
            style={{ background: "radial-gradient(circle, rgba(52,211,153,0.35), transparent 70%)" }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile.jpg"
            alt={site.name}
            className="h-36 w-36 rounded-full border-2 border-white/10 object-cover shadow-2xl shadow-black/50 sm:h-44 sm:w-44"
          />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-neutral-600 transition-colors hover:text-emerald-400 sm:block"
      >
        <ArrowDownIcon className="h-5 w-5" />
      </a>
    </section>
  );
}
