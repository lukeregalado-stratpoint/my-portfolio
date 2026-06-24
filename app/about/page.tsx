import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About | Luke Regalado",
  description:
    "Learn more about Luke Regalado, a software engineer based in Manila, Philippines.",
};

export default function AboutPage() {
  return <AboutContent />;
}