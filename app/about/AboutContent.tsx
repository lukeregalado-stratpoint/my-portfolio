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

function StackList({
  stack,
  mono,
  textClass = "text-lg",
  iconClass = "w-5 h-5",
}: {
  stack: { label: string; Icon: any }[];
  mono: string;
  textClass?: string;
  iconClass?: string;
}) {
  return (
    <ul className="space-y-2">
      {stack.map(({ label, Icon }) => (
        <li
          key={label}
          className={`flex items-center gap-2 font-bold ${textClass} font-quicksand ${mono}`}
        >
          {typeof Icon === "string" ? (
            <span className={`shrink-0 flex items-center justify-center ${iconClass}`}>{Icon}</span>
          ) : Icon ? (
            <Icon className={`shrink-0 ${iconClass}`} />
          ) : null}
          {label}
        </li>
      ))}
    </ul>
  );
}

export default function AboutContent() {
  const { isBlackedOut } = useLightbulb();

  const text = isBlackedOut ? "text-dark-text" : "text-forest";
  const muted = isBlackedOut ? "text-dark-muted" : "text-muted";
  const mono = isBlackedOut ? "text-dark-mono" : "ink";

  const fluid = {
    heading: "text-[clamp(2.75rem,8.5vmin,7rem)]", 
    bodyText: "text-[clamp(0.85rem,1.8vmin,1.2rem)]", 
    stackText: "text-[clamp(0.8rem,1.6vmin,1.05rem)]", 
    stackIcon: "w-[clamp(0.85rem,1.7vmin,1.3rem)] h-[clamp(0.85rem,1.7vmin,1.3rem)]",
    year: "text-[clamp(1.3rem,3.2vmin,2.4rem)]", 
    yearWidth: "w-[clamp(3.3rem,7vmin,5.5rem)]", 
    role: "text-[clamp(0.85rem,1.8vmin,1.2rem)]", 
    company: "text-[clamp(0.8rem,1.6vmin,1.05rem)]", 
    desc: "text-[clamp(0.7rem,1.45vmin,0.95rem)]", 
  };

  return (
    <main
      className={`relative min-h-screen pt-14 transition-colors duration-500 ${
        isBlackedOut ? "bg-dark-bg" : "bg-parchment"
      }`}
    >
      {/* ============ DESKTOP (lg and up) - fluid, proportionally-scaling canvas ============ */}
      <div className="hidden lg:block relative w-full" style={{ height: "calc(100vh - 56px)" }}>
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
            className="w-[clamp(9rem,26vmin,17rem)] h-auto mb-6"
            width={263}
            height={261}
            unoptimized
          />
          <h1 className={`font-lexend ${fluid.heading} font-extrabold tracking-tight mb-6 leading-snug ${text}`}>
            hello!
          </h1>
          <div
            className={`space-y-3 font-quicksand ${fluid.bodyText} max-w-[clamp(16rem,25vw,30rem)] text-justify ${mono}`}
          >
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
        <h1
          className={`font-lexend ${fluid.heading} font-extrabold tracking-tight mb-6 leading-snug absolute z-20 ${text}`}
          style={{ top: "6%", left: "47%" }}
        >
          skills
        </h1>
        <div className="absolute z-20" style={{ top: "19%", left: "48%" }}>
          <StackList
            stack={frontendStack}
            mono={mono}
            textClass={fluid.stackText}
            iconClass={fluid.stackIcon}
          />
        </div>

        {/* Backend */}
        <div className="absolute z-20" style={{ top: "19%", left: "59%" }}>
          <StackList
            stack={backendStack}
            mono={mono}
            textClass={fluid.stackText}
            iconClass={fluid.stackIcon}
          />
        </div>

        {/* Tooling */}
        <div className="absolute z-20" style={{ top: "19%", left: "71.5%" }}>
          <StackList
            stack={toolingStack}
            mono={mono}
            textClass={fluid.stackText}
            iconClass={fluid.stackIcon}
          />
        </div>

        {/* Experience */}
        <div className="absolute z-20" style={{ top: "42%", left: "47%", width: "34%" }}>
          <h1
            className={`font-lexend ${fluid.heading} font-extrabold tracking-tight mb-6 leading-snug absolute z-20 ${text}`}
            style={{ top: "-16%", left: "0%" }}
          >
            experience
          </h1>
          <div className="flex flex-col gap-0 mt-10 z-21">
            {timeline.map(({ year, role, company, desc }, i) => (
              <div
                key={i}
                className="relative pt-[clamp(0.85rem,2.1vmin,1.75rem)] pb-0 px-[clamp(1.25rem,2.08vw,3rem)]"
                style={{ height: "clamp(7.5rem, 15vmin, 10.5rem)" }}
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
                  <p className={`font-homemadeapple ${fluid.year} ${fluid.yearWidth} shrink-0 pt-0.5 ${muted}`}>
                    {year}
                  </p>
                  <div>
                    <p className={`font-mono ${fluid.role} font-bold ${text}`}>{role}</p>
                    <p className={`font-mono ${fluid.company} ${text}`}>{company}</p>
                    <p className={`font-mono ${fluid.desc} leading-tight ${muted}`}>{desc}</p>
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