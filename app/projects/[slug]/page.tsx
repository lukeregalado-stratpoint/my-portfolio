import { projects } from "../data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} | Luke Regalado`,
    description: project.description,
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen text-[#E8F0EC] pt-14">
      <div className="max-w-4xl mx-auto px-6 md:px-16 py-24 space-y-8">

        {/* Back */}
        <Link
          href="/projects"
          className="font-mono text-xs tracking-widest uppercase text-[#3DAB7A] hover:text-[#E8F0EC] transition-colors"
        >
          ← back to projects
        </Link>

        {/* Header */}
        <div className="backdrop-blur-2xl bg-white/3 border border-[#3DAB7A]/15 rounded-3xl p-10 shadow-[0_8px_64px_rgba(61,171,122,0.05)]">
          <p className="font-mono text-[#3DAB7A] text-xs tracking-widest uppercase mb-4">
            {project.year}
          </p>
          <h1 className="font-mono text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#E8F0EC]">
            {project.title}
          </h1>
          <p className="text-[#7A9E8A] text-base leading-relaxed mb-8">
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
                className="font-mono text-xs tracking-widest uppercase px-5 py-2.5 rounded-xl border border-[#3DAB7A]/30 text-[#3DAB7A] hover:bg-[#3DAB7A]/10 transition-colors"
              >
                GitHub →
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-widest uppercase px-5 py-2.5 rounded-xl bg-[#3DAB7A]/20 border border-[#3DAB7A]/30 text-[#3DAB7A] hover:bg-[#3DAB7A]/30 transition-colors"
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