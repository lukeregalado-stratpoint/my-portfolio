"use client";

import { useLightbulb } from "@/components/LightbulbContext";
import Link from "next/link";
import { projects } from "@/app/projects/data";
import { notFound } from "next/navigation";

export default function SlugContent({ slug }: { slug: string }) {
  const { isBlackedOut } = useLightbulb();
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className={`min-h-screen pt-14 transition-colors duration-500 ${
      isBlackedOut ? "bg-[#0e0e0e] text-[#E8F0EC]" : "bg-[#F5F0E8] text-[#2A2622]"
    }`}>
      <div className="max-w-4xl mx-auto px-6 md:px-16 py-24 space-y-8">

        {/* Back */}
        <Link
          href="/projects"
          className="font-mono text-xs tracking-widest uppercase text-[#3DAB7A] hover:text-[#E8F0EC] transition-colors"
        >
          ← back to projects
        </Link>

        {/* Header */}
        <div className={`backdrop-blur-2xl border rounded-3xl p-10 shadow-lg transition-colors duration-500 ${
          isBlackedOut
            ? "bg-white/3 border-[#3DAB7A]/15 shadow-[0_8px_64px_rgba(61,171,122,0.05)]"
            : "bg-white/70 border-[#3DAB7A]/20 shadow-[0_8px_64px_rgba(61,171,122,0.08)]"
        }`}>
          <p className="font-mono text-[#3DAB7A] text-xs tracking-widest uppercase mb-4">
            {project.year}
          </p>
          <h1 className={`font-mono text-4xl md:text-5xl font-bold tracking-tight mb-6 transition-colors duration-500 ${
            isBlackedOut ? "text-[#E8F0EC]" : "text-[#2A2622]"
          }`}>
            {project.title}
          </h1>
          <p className={`text-base leading-relaxed mb-8 transition-colors duration-500 ${
            isBlackedOut ? "text-[#7A9E8A]" : "text-[#5C564C]"
          }`}>
            {project.longDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-[#3DAB7A]/30 text-[#3DAB7A]"
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
                className={`font-mono text-xs tracking-widest uppercase px-5 py-2.5 rounded-xl border border-[#3DAB7A]/30 text-[#3DAB7A] transition-colors ${
                  isBlackedOut ? "hover:bg-[#3DAB7A]/10" : "hover:bg-[#3DAB7A]/15"
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
                className={`font-mono text-xs tracking-widest uppercase px-5 py-2.5 rounded-xl border border-[#3DAB7A]/30 text-[#3DAB7A] transition-colors ${
                  isBlackedOut ? "bg-[#3DAB7A]/20 hover:bg-[#3DAB7A]/30" : "bg-[#3DAB7A]/10 hover:bg-[#3DAB7A]/20"
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