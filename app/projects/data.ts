export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  year: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Site",
    description:
      "This portfolio. Built with Next.js App Router, Tailwind CSS. Applied techniques for server \
      components, metadata API, and optimized images throughout.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/lukeregalado-stratpoint/my-portfolio",
    live: "n/a",
    year: "2026",
  },
];