"use client";

import { useMemo, useState } from "react";
import { useLightbulb } from "@/components/LightbulbContext";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { null_projects, projects } from "@/app/projects/data";
import { StackPanel } from "@/components/StackPanel";
import Image from "next/image";

const allTags = Array.from(
  new Set(projects.flatMap((p) => p.tags))
).filter(Boolean);

export default function ProjectsContent() {
  const { isBlackedOut } = useLightbulb();
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  function toggleFilter(tag: string) {
    setActiveFilters((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  const filteredProjects = useMemo(() => {
    if (activeFilters.length === allTags.length) return null_projects;
    return projects.filter((p) => {

      // show only projects matching activated filters
      return activeFilters.every((f) => p.tags.includes(f));
    });
  }, [activeFilters]);
  
  const realProjects = projects.filter((p) => p.tags.length > 0);
  const primaryStack = allTags[0] ?? "React";

  const earliestYear = realProjects.reduce(
    (min, p) => (p.year < min ? p.year : min),
    realProjects[0]?.year ?? "2026"
  );

  const currentYear = new Date().getFullYear();
  const yearsExp = currentYear - Number(earliestYear);

  return (
    <main
      className={`min-h-screen flex flex-col transition-colors duration-500 ${
        isBlackedOut
          ? "bg-dark-bg text-dark-text"
          : "bg-parchment text-ink"
      }`}
    >
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src={isBlackedOut ? "/projects-overlay-dark.png" : "/projects-overlay.png"}
          alt=""
          aria-hidden
          fill
          className="object-cover"
        />
      </div>

      <section className="relative flex-1 px-8 md:px-16 lg:px-24 pt-32 pb-5 flex items-center overflow-visible">

        {/* Left column */}
        <div className="hidden lg:flex flex-col items-start gap-4 w-48 shrink-0">

          <p className="font-mono text-forest text-xs tracking-widest uppercase">
            idk wat to put here!
          </p>

          <p
            className={`text-sm leading-relaxed max-w-10rem transition-colors duration-500 ${
              isBlackedOut ? "text-dark-muted" : "text-muted"
            }`}
          >
            blablabla
          </p>

        </div>

        {/* Center column */}
        <div className="flex-1 flex flex-col items-center justify-center gap-10 overflow-visible">
          <div className="text-center max-w-md">

            <p className="font-mono text-forest text-xs tracking-widest mb-3">
              View my projects!
            </p>

            <h1
              className={`font-homemadeapple text-5xl font-bold tracking-tight transition-colors duration-500 ${
                isBlackedOut ? "text-dark-text" : "text-ink"
              }`}
            >
              Projects
            </h1>

          </div>

          <ProjectCarousel
            key={activeFilters.join(",")}
            projects={filteredProjects}
          />

          <p
            className={`font-mono text-xs tracking-widest uppercase transition-colors duration-500 ${
              isBlackedOut ? "text-dark-faint" : "text-[#8A8378]"
            }`}
          >
            click to cycle
          </p>
        </div>

        {/* Right column Stack panel */}
        <div className="hidden lg:block w-48 h-14/16 shrink-0 relative overflow-visible">
          <StackPanel
            allTags={allTags}
            activeFilters={activeFilters}
            onToggle={toggleFilter}
          />
        </div>

      </section>

      {/* Stats strip */}
      <section
        className={`mx-8 md:mx-16 lg:mx-32 mb-24 relative backdrop-blur-xl border rounded-2xl px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 transition-colors duration-500 ${
          isBlackedOut
            ? "bg-white/0.02 border-sage/10 shadow-[0_0_40px_rgba(61,171,122,0.06)]"
            : "bg-white/60 border-sage/15 shadow-[0_0_40px_rgba(61,171,122,0.08)]"
        }`}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#2D8A62]/20 to-transparent rounded-t-2xl" />
        {[
          { value: `${yearsExp}+`, label: "Years experience" },
          { value: `${realProjects.length}+`, label: "Projects developed" },
          { value: primaryStack, label: "Primary stack" },
          { value: "PH", label: "Based in Manila" },
        ].map(({ value, label }) => (
          <div key={label}>

            <p
              className={`font-mono text-3xl font-bold transition-colors duration-500 ${
                isBlackedOut ? "text-dark-text" : "text-ink"
              }`}
            >
              {value}
            </p>
            
            <p
              className={`text-sm mt-1 transition-colors duration-500 ${
                isBlackedOut ? "text-dark-faint" : "text-[#8A8378]"
              }`}
            >
              {label}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}