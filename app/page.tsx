import HomePage from "@/components/HomePage";
import type { Metadata } from "next";

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

export default async function RootPage() {
  await new Promise((r) => setTimeout(r, 0));
  return <HomePage />;
}