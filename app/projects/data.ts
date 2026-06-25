export type Project = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  longDescription: string;
  tags: string[];
  github?: string;
  live?: string;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "my-portfolio",
    title: "Portfolio Website",
    tag: "Personal portfolio",
    description: "Personal portfolio built with Next.js and Tailwind CSS.",
    longDescription:
      "This portfolio. Built with Next.js App Router, Tailwind CSS. Applied techniques for server components, metadata API, and optimized images throughout.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/lukeregalado-stratpoint/my-portfolio",
    live: "n/a",
    year: "2026",
  },
  {
    slug: "coming-soon-1",
    title: "Coming Soon",
    tag: "More projects on the way",
    description: "",
    longDescription: "",
    tags: [],
    year: "2026",
  },
  {
    slug: "coming-soon-2",
    title: "Coming Soon",
    tag: "More projects on the way",
    description: "",
    longDescription: "",
    tags: [],
    year: "2026",
  },
  {
    slug: "coming-soon-3",
    title: "Coming Soon",
    tag: "More projects on the way",
    description: "",
    longDescription: "",
    tags: [],
    year: "2026",
  },
  {
    slug: "coming-soon-4",
    title: "Coming Soon",
    tag: "More projects on the way",
    description: "",
    longDescription: "",
    tags: [],
    year: "2026",
  },
  {
    slug: "coming-soon-5",
    title: "Coming Soon",
    tag: "More projects on the way",
    description: "",
    longDescription: "",
    tags: [],
    year: "2026",
  },
  
];