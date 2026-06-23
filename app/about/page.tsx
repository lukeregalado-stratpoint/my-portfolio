import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Luke Regalado",
  description:
    "Learn more about Luke Regalado, a software engineer based in Manila, Philippines.",
};

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "REST APIs", "PostgreSQL", "Prisma"] },
  { category: "Tooling", items: ["Git", "Docker", "Vercel", "GitHub Actions"] },
];

const timeline = [
  {
    year: "2026",
    role: "Software Engineer",
    company: "Stratpoint Technologies",
    desc: "Building scalable web applications for enterprise clients.",
  },
  {
    year: "2022",
    role: "BS Computer Science",
    company: "De La Salle University - Manila",
    desc: "Currently studying with a major in Software Technology.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen text-[#E8F0EC] pt-14">
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-12 h-[calc(100vh-3.5rem)] flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 flex-1 min-h-0">

          {/* Left — Intro, spans both rows */}
          <div className="backdrop-blur-2xl bg-white/3 border border-[#3DAB7A]/15 rounded-3xl p-10 shadow-[0_8px_64px_rgba(61,171,122,0.05)] md:row-span-2 flex flex-col justify-center">
            <p className="font-mono text-[#3DAB7A] text-xs tracking-widest uppercase mb-4">
              About me
            </p>
            <h1 className="font-mono text-4xl md:text-5xl font-bold tracking-tight mb-8 text-[#E8F0EC]">
              I write code.<br />I ship things.
            </h1>
            <div className="space-y-4 text-[#7A9E8A] text-base leading-relaxed">
              <p>
                I'm a software engineer based in Manila, Philippines, currently
                working at Stratpoint Technologies as an intern. I specialize in building
                performant, accessible web applications using React and Next.js.
              </p>
              <p>
                I care about the details: clean component architecture, good
                developer experience, and interfaces that feel fast and intentional.
                When I'm not coding, I'm usually reading about systems design or
                tinkering with side projects.
              </p>
            </div>
          </div>

          {/* Top-right — Skill cards */}
          <div className="grid grid-cols-3 gap-4 min-h-0">
            {skills.map(({ category, items }) => (
              <div
                key={category}
                className="backdrop-blur-xl bg-white/3 border border-[#3DAB7A]/12 hover:border-[#3DAB7A]/30 hover:bg-[#3DAB7A]/4 transition-all duration-500 p-6 rounded-2xl flex flex-col"
              >
                <p className="font-mono text-xs text-[#3DAB7A] tracking-widest uppercase mb-4">
                  {category}
                </p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="font-mono text-sm text-[#C8DDD4]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom-right — Timeline */}
          <div className="backdrop-blur-2xl bg-white/3 border border-[#3DAB7A]/12 rounded-3xl overflow-hidden shadow-[0_8px_64px_rgba(61,171,122,0.04)] flex flex-col min-h-0">
            <p className="font-mono text-[#3DAB7A] text-xs tracking-widest uppercase px-8 pt-8 pb-4">
              Experience
            </p>
            <div className="flex flex-col justify-evenly flex-1">
              {timeline.map(({ year, role, company, desc }, i) => (
                <div
                  key={i}
                  className="flex gap-8 px-8 py-6 border-t border-[#3DAB7A]/8 hover:bg-[#3DAB7A]/3 transition-colors duration-300"
                >
                  <p className="font-mono text-sm text-[#7A9E8A] w-12 shrink-0 pt-1">
                    {year}
                  </p>
                  <div>
                    <p className="font-mono text-base font-bold text-[#E8F0EC]">
                      {role}
                    </p>
                    <p className="font-mono text-sm text-[#3DAB7A] mb-2">
                      {company}
                    </p>
                    <p className="text-sm text-[#7A9E8A] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}