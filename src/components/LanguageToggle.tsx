"use client";

import { useLanguage } from "@/lib/i18n";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-0.5 text-xs font-medium">
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === "es"
            ? "bg-emerald-400 text-neutral-950"
            : "text-neutral-400 hover:text-neutral-200"
        }`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === "en"
            ? "bg-emerald-400 text-neutral-950"
            : "text-neutral-400 hover:text-neutral-200"
        }`}
      >
        EN
      </button>
    </div>
  );
}
