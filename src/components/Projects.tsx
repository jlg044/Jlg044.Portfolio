"use client";

import { useLanguage } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading index="02" title={t.projects.heading} />
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-300 sm:pl-[4.5rem]">
          {t.projects.subheading}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.slug}
            delay={i * 80}
            className={project.featured ? "sm:col-span-2" : ""}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
