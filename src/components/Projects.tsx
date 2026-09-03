"use client";

import { useLanguage } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="font-mono text-sm text-emerald-400">
        02. {t.projects.heading}
      </h2>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-neutral-300">
        {t.projects.subheading}
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.slug}
            className={project.featured ? "sm:col-span-2" : ""}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
