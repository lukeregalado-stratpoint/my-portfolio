import type { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Luke Regalado - Software Engineer",
  description:
    "Portfolio of Luke Regalado, a software engineer building clean, fast, and thoughtful web experiences.",
  openGraph: {
    title: "Luke Regalado - Software Engineer",
    description:
      "Portfolio of Luke Regalado, a software engineer building clean, fast, and thoughtful web experiences.",
    url: "https://my-portfolio-foo3.vercel.app/",
    siteName: "Luke Regalado",
    locale: "en_US",
    type: "website",
  },
};

export default async function ProjectsPage() {
  await new Promise((r) => setTimeout(r, 0));
  
  return <ProjectsContent />;
}