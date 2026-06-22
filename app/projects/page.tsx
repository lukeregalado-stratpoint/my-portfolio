import type { Metadata } from "next";
import { ProjectCarousel } from "@/components/ProjectCarousel";

export const metadata: Metadata = {
  title: "Luke Regalado — Software Engineer",
  description:
    "Portfolio of Luke Regalado, a software engineer building clean, fast, and thoughtful web experiences.",
  openGraph: {
    title: "Luke Regalado — Software Engineer",
    description:
      "Portfolio of Luke Regalado, a software engineer building clean, fast, and thoughtful web experiences.",
    url: "https://lukeregalado.dev",
    siteName: "Luke Regalado",
    locale: "en_US",
    type: "website",
  },
};

export const projects = [
  { name: "AL-RESERVE-APP", tag: "Workspace reservations", href: "/projects/al-reserve-app" },
  { name: "AMS", tag: "Activity management system", href: "/projects/ams" },
  { name: "Auth refactor", tag: "JWT + Clean Architecture", href: "/projects/auth-refactor" },
  { name: "Calendar view", tag: "Day / week navigation", href: "/projects/calendar-view" },
];

const techStack = ["React", "TypeScript", "Next.js", "Node.js", "Express", "PostgreSQL"];

export default function HomePage() {
  return (
    <main className="min-h-screen text-[#E8F0EC] flex flex-col overflow-visible">
      <section className="relative flex-1 px-8 md:px-16 lg:px-24 pt-32 pb-24 flex items-center overflow-visible">

        {/* Left side */}
        <div className="hidden lg:flex flex-col items-start gap-4 w-48 shrink-0">
          <p className="font-mono text-[#3DAB7A] text-xs tracking-widest uppercase">
            Full-stack dev
          </p>
          <p className="text-[#7A9E8A] text-sm leading-relaxed max-w-[10rem]">
            Building clean, maintainable reservation and management systems.
          </p>
          <div className="w-px h-16 bg-gradient-to-b from-[#3DAB7A]/40 to-transparent mt-2" />
        </div>

        {/* Center */}
        <div className="flex-1 flex flex-col items-center justify-center gap-10 overflow-visible">
          <div className="text-center max-w-md">
            <p className="font-mono text-[#3DAB7A] text-xs tracking-widest uppercase mb-3">
              Selected work
            </p>
            <h1 className="font-mono text-3xl md:text-4xl font-bold tracking-tight text-[#E8F0EC]">
              Projects
            </h1>
          </div>

          <ProjectCarousel projects={projects} />

          <p className="font-mono text-[#4A6A5A] text-xs tracking-widest uppercase">
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
              className="font-mono text-xs tracking-wide text-[#7A9E8A] backdrop-blur-md bg-white/[0.03] border border-[#3DAB7A]/15 rounded-full px-4 py-1.5 hover:text-[#E8F0EC] hover:border-[#3DAB7A]/35 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Stats strip */}
      <section className="mx-8 md:mx-16 lg:mx-32 mb-24 relative backdrop-blur-xl bg-white/[0.02] border border-[#3DAB7A]/10 rounded-2xl px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 shadow-[0_0_40px_rgba(61,171,122,0.06)]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2D8A62]/20 to-transparent rounded-t-2xl" />
        {[
          { value: "2+", label: "Years experience" },
          { value: "5+", label: "Projects developed" },
          { value: "React", label: "Primary stack" },
          { value: "PH", label: "Based in Manila" },
        ].map(({ value, label }) => (
          <div key={label}>
            <p className="font-mono text-3xl font-bold text-[#E8F0EC]">{value}</p>
            <p className="text-[#4A6A5A] text-sm mt-1">{label}</p>
          </div>
        ))}
      </section>
    </main>
  );
}