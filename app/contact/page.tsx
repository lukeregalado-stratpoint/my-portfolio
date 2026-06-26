import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | Luke Regalado",
  description: "Get in touch with Luke Regalado.",
};

export default async function ContactPage() {
  await new Promise((r) => setTimeout(r, 0));
  return <ContactContent />;
}