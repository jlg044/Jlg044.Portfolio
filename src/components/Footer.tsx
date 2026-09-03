"use client";

import { useLanguage } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}. {t.footer.rights}
        </p>
        <p>{t.footer.builtWith}</p>
      </div>
    </footer>
  );
}
