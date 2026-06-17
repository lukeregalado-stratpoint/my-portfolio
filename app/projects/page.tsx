import type { Metadata } from "next";
import { projects } from "./data";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — Luke Regalado",
  description:
    "A collection of projects built by Luke Regalado — web apps, APIs, and tools.",
};

async function getProjects() {
  return projects;
}

export default async function ProjectsPage() {
  const data = await getProjects();

  return (
    <main className="min-h-screen text-[#E8F0EC] pt-14">
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-24">

        {/* Header */}
        <div className="mb-12 backdrop-blur-2xl bg-white/[0.03] border border-[#3DAB7A]/15 rounded-3xl p-10 shadow-[0_8px_64px_rgba(61,171,122,0.05)]">
          <p className="font-mono text-[#3DAB7A] text-xs tracking-widest uppercase mb-4">
            Work
          </p>
          <h1 className="font-mono text-4xl md:text-6xl font-bold tracking-tight mb-6 text-[#E8F0EC]">
            Projects
          </h1>
          <p className="text-[#7A9E8A] text-base max-w-xl leading-relaxed">
            Things I&apos;ve built — personal projects, freelance work, and experiments.
            All source code is on GitHub.
          </p>
        </div>

        {/* Count pill */}
        <div className="flex items-center gap-3 mb-8 backdrop-blur-md bg-white/[0.03] border border-[#3DAB7A]/12 rounded-full px-5 py-2 w-fit">
          <span className="font-mono text-xs text-[#7A9E8A]">
            {data.length} projects
          </span>
          <span className="text-[#3DAB7A]/30">|</span>
          <span className="font-mono text-xs text-[#7A9E8A]">
            sorted by recent
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </main>
  );
}