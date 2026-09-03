"use client";

import { useLanguage } from "@/lib/i18n";
import type { Project } from "@/lib/projects";
import { ExternalLinkIcon, GitHubIcon } from "@/components/Icons";

export function ProjectCard({ project }: { project: Project }) {
  const { lang, t } = useLanguage();

  return (
    <article className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-neutral-50">
          {project.title[lang]}
        </h3>
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            aria-label={t.projects.viewCode}
            className="shrink-0 rounded-full border border-white/10 p-2 text-neutral-400 transition-colors group-hover:border-white/20 hover:!text-emerald-400"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
        )}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-neutral-400">
        {project.summary[lang]}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-neutral-300">
        {project.description[lang]}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-xs text-neutral-400"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-4 text-xs text-neutral-500">
        <span>
          {project.type === "solo" ? t.projects.solo : t.projects.team}
          {project.collaborators && project.collaborators.length > 0 && (
            <>
              {" · "}
              {t.projects.with}{" "}
              {project.collaborators.map((c, i) => (
                <span key={c.name}>
                  {i > 0 && ", "}
                  {c.github ? (
                    <a
                      href={c.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-neutral-400 underline decoration-white/20 underline-offset-2 hover:text-emerald-400"
                    >
                      {c.name}
                    </a>
                  ) : (
                    c.name
                  )}
                </span>
              ))}
            </>
          )}
        </span>

        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-neutral-400 transition-colors hover:text-emerald-400"
          >
            {t.projects.viewCode}
            <ExternalLinkIcon className="h-3 w-3" />
          </a>
        )}
      </div>
    </article>
  );
}
