"use client";

import type { Project } from "@/app/projects/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="backdrop-blur-xl bg-white/[0.03] border border-[#3DAB7A]/12 hover:border-[#3DAB7A]/35 hover:bg-[#3DAB7A]/[0.05] transition-all duration-500 rounded-2xl p-6 flex flex-col gap-4 group shadow-[0_4px_32px_rgba(61,171,122,0.04)] hover:shadow-[0_8px_48px_rgba(61,171,122,0.08)]">

      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <h2 className="font-mono text-base font-bold text-[#C8DDD4] group-hover:text-[#3DAB7A] transition-colors duration-300">
          {project.title}
        </h2>
        <span className="font-mono text-xs text-[#7A9E8A] shrink-0">
          {project.year}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-[#7A9E8A] leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs text-[#3DAB7A] bg-[#3DAB7A]/10 border border-[#3DAB7A]/20 px-2 py-0.5 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-3 border-t border-[#3DAB7A]/8">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#7A9E8A] hover:text-[#C8DDD4] transition-colors"
          >
            GitHub →
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#7A9E8A] hover:text-[#3DAB7A] transition-colors"
          >
            Live →
          </a>
        )}
      </div>
    </article>
  );
}