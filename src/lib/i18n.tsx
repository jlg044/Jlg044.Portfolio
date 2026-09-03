"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "es" | "en";

type Dict = {
  nav: { about: string; projects: string; contact: string };
  hero: {
    role: string;
    tagline: string;
    cta: string;
  };
  about: {
    heading: string;
    body: string;
  };
  projects: {
    heading: string;
    subheading: string;
    solo: string;
    team: string;
    with: string;
    viewCode: string;
    private: string;
  };
  contact: {
    heading: string;
    body: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
};

const dictionaries: Record<Lang, Dict> = {
  es: {
    nav: { about: "Sobre mí", projects: "Proyectos", contact: "Contacto" },
    hero: {
      role: "Desarrollador de Software",
      tagline:
        "Ingeniería Informática por la Universidad de Almería. Construyo sistemas completos, desde firmware embebido hasta pipelines de datos y modelos de IA.",
      cta: "Ver proyectos",
    },
    about: {
      heading: "Sobre mí",
      body: "Estudiante de Ingeniería Informática en la Universidad de Almería, especializado en desarrollo full-stack, sistemas distribuidos y machine learning. Me gusta trabajar en proyectos que combinan hardware, backend y datos: desde localización indoor con BLE hasta clasificación de imágenes con CNNs entrenadas desde cero. Cómodo tanto trabajando en equipo como llevando un proyecto de principio a fin en solitario.",
    },
    projects: {
      heading: "Proyectos",
      subheading:
        "Una selección de proyectos académicos y colaborativos, de trabajos de fin de grado a sistemas distribuidos con Docker.",
      solo: "Proyecto individual",
      team: "Proyecto en equipo",
      with: "Con",
      viewCode: "Ver código",
      private: "Repositorio privado",
    },
    contact: {
      heading: "Contacto",
      body: "¿Quieres hablar sobre una oportunidad, colaboración o simplemente saludar? Escríbeme.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      builtWith: "Construido con Next.js y Tailwind CSS, desplegado en Vercel.",
    },
  },
  en: {
    nav: { about: "About", projects: "Projects", contact: "Contact" },
    hero: {
      role: "Software Developer",
      tagline:
        "Computer Engineering graduate from the University of Almería. I build full systems, from embedded firmware to data pipelines and AI models.",
      cta: "View projects",
    },
    about: {
      heading: "About me",
      body: "Computer Engineering student at the University of Almería, focused on full-stack development, distributed systems, and machine learning. I enjoy projects that combine hardware, backend, and data: from indoor BLE localization to image classification with CNNs trained from scratch. Comfortable both working in a team and owning a project end to end on my own.",
    },
    projects: {
      heading: "Projects",
      subheading:
        "A selection of academic and collaborative projects, from a final degree thesis to distributed systems running on Docker.",
      solo: "Solo project",
      team: "Team project",
      with: "With",
      viewCode: "View code",
      private: "Private repository",
    },
    contact: {
      heading: "Contact",
      body: "Want to talk about an opportunity, collaboration, or just say hi? Reach out.",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Next.js and Tailwind CSS, deployed on Vercel.",
    },
  },
};

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "es" || stored === "en") {
      setLangState(stored);
      return;
    }
    const browserLang = window.navigator.language.toLowerCase();
    if (!browserLang.startsWith("es")) {
      setLangState("en");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore write failures (private browsing, etc.)
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
