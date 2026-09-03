"use client";

import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/LanguageToggle";
import { site } from "@/lib/site";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-neutral-100"
        >
          {site.name
            .split(" ")
            .map((w) => w[0])
            .join("")}
          <span className="text-emerald-400">.</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-neutral-400 sm:flex">
          <a href="#about" className="transition-colors hover:text-neutral-100">
            {t.nav.about}
          </a>
          <a
            href="#projects"
            className="transition-colors hover:text-neutral-100"
          >
            {t.nav.projects}
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-neutral-100"
          >
            {t.nav.contact}
          </a>
        </nav>

        <LanguageToggle />
      </div>
    </header>
  );
}
