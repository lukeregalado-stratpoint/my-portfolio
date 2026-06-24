import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | Luke Regalado",
  description: "Get in touch with Luke Regalado.",
};

export default function ContactPage() {
  return <ContactContent />;
}