import { projects } from "../data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SlugContent from "./SlugContent";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} | Luke Regalado`,
    description: project.description,
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  await new Promise((r) => setTimeout(r, 0));
  return <SlugContent slug={slug} />;
}