"use client";

import { useLightbulb } from "@/components/LightbulbContext";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { projects } from "@/app/projects/data";

const techStack = ["React", "TypeScript", "Next.js", "Node.js", "Express", "PostgreSQL"];

export default function ProjectsContent() {
  const { isBlackedOut } = useLightbulb();

  return (
    <main className={`min-h-screen flex flex-col overflow-visible transition-colors duration-500 ${
      isBlackedOut ? "bg-[#0e0e0e] text-[#E8F0EC]" : "bg-[#F5F0E8] text-[#2A2622]"
    }`}>
      <section className="relative flex-1 px-8 md:px-16 lg:px-24 pt-32 pb-5 flex items-center overflow-visible">

        {/* Left side */}
        <div className="hidden lg:flex flex-col items-start gap-4 w-48 shrink-0">
          <p className="font-mono text-[#3DAB7A] text-xs tracking-widest uppercase">
            Full-stack dev
          </p>
          <p className={`text-sm leading-relaxed max-w-10rem transition-colors duration-500 ${
            isBlackedOut ? "text-[#7A9E8A]" : "text-[#5C564C]"
          }`}>
            Building clean, maintainable reservation and management systems.
          </p>
          <div className="w-px h-16 bg-linear-to-b from-[#3DAB7A]/40 to-transparent mt-2" />
        </div>

        {/* Center */}
        <div className="flex-1 flex flex-col items-center justify-center gap-10 overflow-visible">
          <div className="text-center max-w-md">
            <p className="font-mono text-[#3DAB7A] text-xs tracking-widest uppercase mb-3">
              Selected work
            </p>
            <h1 className={`font-mono text-3xl md:text-4xl font-bold tracking-tight transition-colors duration-500 ${
              isBlackedOut ? "text-[#E8F0EC]" : "text-[#2A2622]"
            }`}>
              Projects
            </h1>
          </div>

          <ProjectCarousel projects={projects} />

          <p className={`font-mono text-xs tracking-widest uppercase transition-colors duration-500 ${
            isBlackedOut ? "text-[#4A6A5A]" : "text-[#8A8378]"
          }`}>
            click to cycle
          </p>
        </div>

        {/* Right side */}
        <div className="hidden lg:flex flex-col items-end gap-3 w-48 shrink-0">
          <p className="font-mono text-[#3DAB7A] text-xs tracking-widest uppercase mb-2">
            Stack
          </p>
          {techStack.map((tech) => (
            <span
              key={tech}
              className={`font-mono text-xs tracking-wide backdrop-blur-md border rounded-full px-4 py-1.5 transition-colors duration-500 ${
                isBlackedOut
                  ? "text-[#7A9E8A] bg-white/0.03 border-[#3DAB7A]/15 hover:text-[#E8F0EC] hover:border-[#3DAB7A]/35"
                  : "text-[#5C564C] bg-white/60 border-[#3DAB7A]/20 hover:text-[#2A2622] hover:border-[#3DAB7A]/40"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Stats strip */}
      <section className={`mx-8 md:mx-16 lg:mx-32 mb-24 relative backdrop-blur-xl border rounded-2xl px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 transition-colors duration-500 ${
        isBlackedOut
          ? "bg-white/0.02 border-[#3DAB7A]/10 shadow-[0_0_40px_rgba(61,171,122,0.06)]"
          : "bg-white/60 border-[#3DAB7A]/15 shadow-[0_0_40px_rgba(61,171,122,0.08)]"
      }`}>
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#2D8A62]/20 to-transparent rounded-t-2xl" />
        {[
          { value: "2+", label: "Years experience" },
          { value: "5+", label: "Projects developed" },
          { value: "React", label: "Primary stack" },
          { value: "PH", label: "Based in Manila" },
        ].map(({ value, label }) => (
          <div key={label}>
            <p className={`font-mono text-3xl font-bold transition-colors duration-500 ${
              isBlackedOut ? "text-[#E8F0EC]" : "text-[#2A2622]"
            }`}>{value}</p>
            <p className={`text-sm mt-1 transition-colors duration-500 ${
              isBlackedOut ? "text-[#4A6A5A]" : "text-[#8A8378]"
            }`}>{label}</p>
          </div>
        ))}
      </section>
    </main>
  );
}