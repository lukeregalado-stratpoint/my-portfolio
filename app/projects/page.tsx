import type { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projects | Luke Regalado",
  description: "A collection of projects built by Luke Regalado: web apps, tools, and experiments.",
  openGraph: {
    title: "Luke Regalado - Software Engineer",
    description:
      "Projects of Luke Regalado.",
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