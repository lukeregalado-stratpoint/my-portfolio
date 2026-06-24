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
    year: "2022",
    role: "BS Computer Science",
    company: "De La Salle University - Manila",
    desc: "Currently studying with a major in Software Technology.",
  },
];

function getExpOverlay(i: number, total: number): string {
  if (i === 0) return "/latest-exp.png";
  if (i === total - 1) return "/old-exp.png";
  return "/mid-exp.png";
}

// Overlay canvas is 2559 x 1248px.
// All top/left values are percentages of that canvas so layout
// is identical on every screen size.

export default function AboutContent() {
  const { isBlackedOut } = useLightbulb();

  const text  = isBlackedOut ? "text-[#E8F0EC]" : "text-[#2A2622]";
  const muted = isBlackedOut ? "text-[#7A9E8A]" : "text-[#5C564C]";
  const mono  = isBlackedOut ? "text-[#C8DDD4]" : "text-[#2A2622]";

  return (
    <main
      className={`relative min-h-screen pt-14 transition-colors duration-500 ${
        isBlackedOut ? "bg-[#0e0e0e]" : "bg-[#F5F0E8]"
      }`}
    >
      {/*
        Aspect-ratio container locked to 2559:1248.
        Everything inside is positioned as % of this box,
        so it scales identically on every monitor.
      */}
      <div
        className="relative w-full"
        style={{ aspectRatio: "2559 / 1248" }}
      >
        {/* Overlay image — fills the container exactly */}
        <img
          src="/about-overlay.png"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />

        {/* About Me */}
        <div className="absolute z-20" style={{ top: "15%", left: "15%" }}>
          <p className="font-mono text-[#3DAB7A] text-sm tracking-widest uppercase mb-3">
            About me
          </p>
          <h1 className={`font-mono text-4xl font-bold tracking-tight mb-6 leading-snug ${text}`}>
            Live in the question.<br />Experience the answers.
          </h1>
          <div className={`space-y-3 text-xl leading-relaxed max-w-xs ${muted}`}>
            <p>
              I'm a software engineer based in Manila, Philippines, currently
              working at Stratpoint Technologies as an intern. I specialize in
              building performant, accessible web applications using React and Next.js.
            </p>
            <p>
              I care about the details: clean component architecture, good
              developer experience, and interfaces that feel fast and intentional.
            </p>
          </div>
        </div>

        {/* Frontend */}
        <div className="absolute z-20" style={{ top: "15.5%", left: "48%" }}>
          <p className="font-bold text-lg text-[#3DAB7A] tracking-widest uppercase mb-3">
            Frontend
          </p>
          <ul className="space-y-1">
            {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((item) => (
              <li key={item} className={`font-semibold text-base ${mono}`}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Backend */}
        <div className="absolute z-20" style={{ top: "18%", left: "60%", transform: "rotate(5.8deg)" }}>
          <p className="font-bold text-lg text-[#3DAB7A] tracking-widest uppercase mb-3">
            Backend
          </p>
          <ul className="space-y-1">
            {["Node.js", "REST APIs", "PostgreSQL", "Prisma"].map((item) => (
              <li key={item} className={`font-semibold text-base ${mono}`}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Tooling */}
        <div className="absolute z-20" style={{ top: "15.5%", left: "72%", transform: "rotate(-3deg)" }}>
          <p className="font-bold text-lg text-[#3DAB7A] tracking-widest uppercase mb-3">
            Tooling
          </p>
          <ul className="space-y-1">
            {["Git", "Docker", "Vercel", "GitHub Actions"].map((item) => (
              <li key={item} className={`font-semibold text-base ${mono}`}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Experience */}
        <div className="absolute z-20" style={{ top: "40%", left: "47%", width: "34%" }}>
          <p className="font-mono text-[#3DAB7A] text-xs tracking-widest uppercase mb-2">
            Experience
          </p>
          <div className="flex flex-col gap-0">
            {timeline.map(({ year, role, company, desc }, i) => (
              <div key={i} className="relative px-10 py-8">
                <Image
                  src={getExpOverlay(i, timeline.length)}
                  alt=""
                  aria-hidden
                  fill
                  sizes="34vw"
                  className="object-fill pointer-events-none"
                />
                <div className="relative z-10 flex gap-6">
                  <p className={`font-mono text-xs w-10 shrink-0 pt-0.5 ${muted}`}>{year}</p>
                  <div>
                    <p className={`font-mono text-sm font-bold ${text}`}>{role}</p>
                    <p className="font-mono text-xs text-[#3DAB7A] mb-1">{company}</p>
                    <p className={`text-xs leading-relaxed ${muted}`}>{desc}</p>
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