"use client";

import Image from "next/image";
import { useLightbulb } from "@/components/LightbulbContext";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiDocker,
  SiVercel,
  SiGithubactions,
} from "react-icons/si";

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

const frontendStack = [
  { label: "React", Icon: SiReact },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "TypeScript", Icon: SiTypescript },
  { label: "Tailwind CSS", Icon: SiTailwindcss },
];
 
const backendStack = [
  { label: "Node.js", Icon: SiNodedotjs },
  { label: "REST APIs", Icon: "✦" },
  { label: "PostgreSQL", Icon: SiPostgresql },
  { label: "Prisma", Icon: SiPrisma },
];
 
const toolingStack = [
  { label: "Git", Icon: SiGit },
  { label: "Docker", Icon: SiDocker },
  { label: "Vercel", Icon: SiVercel },
  { label: "GitHub Actions", Icon: SiGithubactions },
];

function getExpOverlay(i: number, total: number, isBlackedOut: boolean): string {
  const suffix = isBlackedOut ? "-dark" : "";
  if (i === 0) return `/latest-exp${suffix}.png`;
  if (i === total - 1) return `/old-exp${suffix}.png`;
  return `/between-exp${suffix}.png`;
}

export default function AboutContent() {
  const { isBlackedOut } = useLightbulb();

  const text  = isBlackedOut ? "text-dark-text" : "text-forest";
  const muted = isBlackedOut ? "text-dark-muted" : "text-muted";
  const mono  = isBlackedOut ? "text-dark-mono" : "ink";

  return (
    <main
      className={`relative min-h-screen pt-14 transition-colors duration-500 ${
        isBlackedOut ? "bg-dark-bg" : "bg-parchment"
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
          <Image
            src={isBlackedOut ? "/me-dark.gif" : "/me.gif"}
            alt="Luke Regalado self-portrait"
            className="w-96 h-auto mb-6"
            width={263}
            height={261}
            unoptimized
          />
          <h1 className={`font-lexend text-8xl font-extrabold tracking-tight mb-6 leading-snug ${text}`}>
            hello!
          </h1>
          <div className={`space-y-3 font-quicksand text-xl max-w-xl text-justify ${mono}`}>
            <p>
              I&apos;m a software engineer based in Manila, Philippines, currently
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
        <h1 className={`font-lexend text-8xl font-extrabold tracking-tight mb-6 leading-snug absolute z-20 ${text}`}
        style={{ top: "7%", left: "47%" }}>
          skills 
        </h1>
        <div className="absolute z-20" style={{ top: "20%", left: "48%" }}>
          <ul className="space-y-2">
            {frontendStack.map(({ label, Icon }) => (
              <li key={label} className={`flex items-center gap-2 font-bold text-lg font-quicksand ${mono}`}>
                {Icon && <Icon className="shrink-0" size={20} />}
                {label}
              </li>
            ))}
          </ul>
        </div>
 
        {/* Backend */}
        <div className="absolute z-20" style={{ top: "20%", left: "59%" }}>
          <ul className="space-y-2">
            {backendStack.map(({ label, Icon }) => (
              <li key={label} className={`flex items-center gap-2 font-bold text-lg font-quicksand ${mono}`}>
                {typeof Icon === "string" ? (
                  <span className="shrink-0">{Icon}</span>
                ) : Icon ? (
                  <Icon className="shrink-0" size={20} />
                ) : null}
                {label}
              </li>
            ))}
          </ul>
        </div>
 
        {/* Tooling */}
        <div className="absolute z-20" style={{ top: "20%", left: "71%" }}>
          <ul className="space-y-2">
            {toolingStack.map(({ label, Icon }) => (
              <li key={label} className={`flex items-center gap-2 font-bold text-lg font-quicksand ${mono}`}>
                {Icon && <Icon className="shrink-0" size={20} />}
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Experience */}
        <div className="absolute z-20" style={{ top: "43%", left: "47%", width: "34%" }}>
          <h1 className={`font-lexend text-8xl font-extrabold tracking-tight mb-6 leading-snug absolute z-20 ${text}`}
          style={{ top: "-15%", left: "0%" }}>
            experience
          </h1>
          <div className="flex flex-col gap-0 mt-13">
            {timeline.map(({ year, role, company, desc }, i) => (
              <div
                key={i} 
                className="relative px-10 h-auto pb-0 sm:h-48 pt-6 md:h-36"
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