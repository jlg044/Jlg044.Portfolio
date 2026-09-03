"use client";

import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/LanguageToggle";
import { site } from "@/lib/site";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group relative py-1 text-neutral-400 transition-colors hover:text-neutral-100"
    >
      {children}
      <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-emerald-400 transition-transform duration-300 group-hover:scale-x-100" />
    </a>
  );
}

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-neutral-100 transition-colors hover:text-emerald-300"
        >
          {site.name
            .split(" ")
            .map((w) => w[0])
            .join("")}
          <span className="text-emerald-400">.</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm sm:flex">
          <NavLink href="#about">{t.nav.about}</NavLink>
          <NavLink href="#projects">{t.nav.projects}</NavLink>
          <NavLink href="#contact">{t.nav.contact}</NavLink>
        </nav>

        <LanguageToggle />
      </div>
    </header>
  );
}
