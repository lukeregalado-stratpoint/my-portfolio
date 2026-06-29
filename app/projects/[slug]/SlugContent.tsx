"use client";

import { useLightbulb } from "@/components/LightbulbContext";
import Link from "next/link";
import { projects } from "@/app/projects/data";

export default function SlugContent({ slug }: { slug: string }) {
  const { isBlackedOut } = useLightbulb();
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) return null;

  return (
    <main className={`min-h-screen pt-14 transition-colors duration-500 ${
      isBlackedOut ? "bg-dark-bg text-dark-text" : "bg-parchment text-dark-bg"
    }`}>
      <div className="max-w-4xl mx-auto px-6 md:px-16 py-24 space-y-8">

        {/* Back */}
        <Link
          href="/projects"
          className="font-mono text-xs tracking-widest uppercase text-sage hover:text-dark-text transition-colors"
        >
          ← back to projects
        </Link>

        {/* Header */}
        <div className={`backdrop-blur-2xl border rounded-3xl p-10 shadow-lg transition-colors duration-500 ${
          isBlackedOut
            ? "bg-white/3 border-sage/15 shadow-[0_8px_64px_rgba(61,171,122,0.05)]"
            : "bg-white/70 border-sage/20 shadow-[0_8px_64px_rgba(61,171,122,0.08)]"
        }`}>
          <p className="font-mono text-sage text-xs tracking-widest uppercase mb-4">
            {project.year}
          </p>

          <h1 className={`font-mono text-4xl md:text-5xl font-bold tracking-tight mb-6 transition-colors duration-500 ${
            isBlackedOut ? "text-dark-text" : "text-dark-bg"
          }`}>
            {project.title}
          </h1>

          <p className={`text-base leading-relaxed mb-8 transition-colors duration-500 ${
            isBlackedOut ? "text-dark-muted" : "text-muted"
          }`}>
            {project.longDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (

              <span
                key={tag}
                className="font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-sage/30 text-sage"
              >
                {tag}
              </span>

            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.github && (

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-mono text-xs tracking-widest uppercase px-5 py-2.5 rounded-xl border border-sage/30 text-sage transition-colors ${
                  isBlackedOut ? "hover:bg-sage/10" : "hover:bg-sage/15"
                }`}
              >
                GitHub →
              </a>

            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-mono text-xs tracking-widest uppercase px-5 py-2.5 rounded-xl border border-sage/30 text-sage transition-colors ${
                  isBlackedOut ? "bg-sage/20 hover:bg-sage/30" : "bg-sage/10 hover:bg-sage/20"
                }`}
              >
                Live Site →
              </a>
            )}

          </div>
          
        </div>

      </div>
    </main>
  );
}