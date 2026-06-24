import type { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Luke Regalado — Software Engineer",
  description:
    "Portfolio of Luke Regalado, a software engineer building clean, fast, and thoughtful web experiences.",
  openGraph: {
    title: "Luke Regalado — Software Engineer",
    description:
      "Portfolio of Luke Regalado, a software engineer building clean, fast, and thoughtful web experiences.",
    url: "https://lukeregalado.dev",
    siteName: "Luke Regalado",
    locale: "en_US",
    type: "website",
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}