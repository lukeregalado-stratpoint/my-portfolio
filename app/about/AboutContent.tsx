"use client";

import Image from "next/image";
import { useLightbulb } from "@/components/LightbulbContext";

const timeline = [
  {
    year: "2026",
    role: "Software Engineer Intern",
    company: "Stratpoint Technologies",
    desc: "Building enterprise-level scalable web applications.",
  },
  {
    year: "2025",
    role: "Junior Artist",
    company: "Asha Artlines Art Team",
    desc: "Currently accomplishing assigned commissions via collaboration with an art team.",
  },
  {
    year: "2022",
    role: "BS Computer Science",
    company: "De La Salle University - Manila",
    desc: "Currently studying with a major in Software Technology.",
  },

];

function getExpOverlay(i: number, total: number, isBlackedOut: boolean): string {
  const suffix = isBlackedOut ? "-dark" : "";
  if (i === 0) return `/latest-exp${suffix}.png`;
  if (i === total - 1) return `/old-exp${suffix}.png`;
  return `/between-exp${suffix}.png`;
}

export default function AboutContent() {
  const { isBlackedOut } = useLightbulb();

  const text  = isBlackedOut ? "text-[#E8F0EC]" : "text-[#283618]";
  const muted = isBlackedOut ? "text-[#7A9E8A]" : "text-[#5C564C]";
  const mono  = isBlackedOut ? "text-[#C8DDD4]" : "text-[#2A2622]";

  return (
    <main
      className={`relative min-h-screen pt-14 transition-colors duration-500 ${
        isBlackedOut ? "bg-[#0e0e0e]" : "bg-[#F5F0E8]"
      }`}
    >
      <div
        className="relative w-full"
        style={{ height: 'calc(100vh - 56px)' }}
      >
        <Image
          src={isBlackedOut ? "/about-overlay-dark.png" : "/about-overlay.png"}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          fill
        />

        {/* About Me */}
        <div className="absolute z-20" style={{ top: "15%", left: "15%" }}>
          <h1 className={`font-mono text-4xl font-extrabold tracking-tight mb-6 leading-snug ${text}`}>
            Live in the question.<br />Experience the answers.
          </h1>
          <div className={`space-y-3 font-mono text-xl leading-relaxed max-w-md ${muted}`}>
            <p>
              I'm a software engineer based in Manila, Philippines, currently
              working at Stratpoint Technologies as an intern. I specialize in
              building performant, accessible web applications using React and Next.js.
            </p>
            <p>
              I care about the details; clean component architecture, good
              developer experience, and interfaces that feel fast and intentional.
            </p>
          </div>
        </div>

        {/* Frontend */}
        <div className="absolute z-20" style={{ top: "16%", left: "48%" }}>
          <ul className="space-y-1">
            {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((item) => (
              <li key={item} className={`font-bold text-lg font-mono ${mono}`}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Backend */}
        <div className="absolute z-20" style={{ top: "19%", left: "60%", transform: "rotate(5.8deg)" }}>
          <ul className="space-y-1">
            {["Node.js", "REST APIs", "PostgreSQL", "Prisma"].map((item) => (
              <li key={item} className={`font-bold text-lg font-mono ${mono}`}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Tooling */}
        <div className="absolute z-20" style={{ top: "16%", left: "72%", transform: "rotate(-3deg)" }}>
          <ul className="space-y-1">
            {["Git", "Docker", "Vercel", "GitHub Actions"].map((item) => (
              <li key={item} className={`font-bold text-lg font-mono ${mono}`}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Experience */}
        <div className="absolute z-20" style={{ top: "40%", left: "47%", width: "34%" }}>
          <div className="flex flex-col gap-0">
            {timeline.map(({ year, role, company, desc }, i) => (
              <div
                key={i} 
                className={`relative px-10 h-auto ${i === 0 ? 'pt-12' : 'pt-6'} pb-0 sm:h-48 md:h-36`}
              >

                <Image
                  src={getExpOverlay(i, timeline.length, isBlackedOut)}
                  alt=""
                  aria-hidden
                  fill
                  sizes="40vw"
                  className="object-fill pointer-events-none"
                />
                <div className="relative z-10 flex gap-6">
                  <p className={`font-homemadeapple text-4xl w-20 shrink-0 pt-0.5 ${muted}`}>{year}</p>
                  <div>
                    <p className={`font-mono text-xl font-bold ${text}`}>{role}</p>
                    <p className={`font-mono text-lg ${text}`}>{company}</p>
                    <p className={`font-mono text-md leading-tight ${muted}`}>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}