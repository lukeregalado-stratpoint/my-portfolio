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
      "This portfolio — built with Next.js App Router, Tailwind CSS, and deployed on Vercel. Server components, metadata API, and optimized images throughout.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/lukeregalado/portfolio",
    live: "https://lukeregalado.dev",
    year: "2026",
  },
  {
    id: 2,
    title: "Task Manager API",
    description:
      "A REST API for managing tasks and projects, built with Node.js, Express, and PostgreSQL. Includes JWT auth, rate limiting, and full CRUD.",
    tags: ["Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/lukeregalado/task-api",
    year: "2025",
  },
  {
    id: 3,
    title: "E-commerce Dashboard",
    description:
      "An admin dashboard for a local e-commerce client. Built with React and Recharts for sales analytics, inventory tracking, and order management.",
    tags: ["React", "TypeScript", "Recharts"],
    github: "https://github.com/lukeregalado/ecom-dashboard",
    year: "2025",
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "A minimal weather app using the OpenWeatherMap API. Fetches current conditions and a 5-day forecast with clean, responsive UI.",
    tags: ["React", "API Integration", "CSS"],
    github: "https://github.com/lukeregalado/weather-app",
    live: "#",
    year: "2024",
  },
  {
    id: 5,
    title: "Link Shortener",
    description:
      "A URL shortening service with click analytics. Built as a full-stack project with Next.js API routes and a SQLite database via Prisma.",
    tags: ["Next.js", "Prisma", "SQLite"],
    github: "https://github.com/lukeregalado/link-shortener",
    year: "2024",
  },
  {
    id: 6,
    title: "Dev Blog",
    description:
      "A markdown-based blog using Next.js static generation. Posts are written in MDX with syntax highlighting via Shiki.",
    tags: ["Next.js", "MDX", "Shiki"],
    github: "https://github.com/lukeregalado/blog",
    year: "2024",
  },
];