import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Luke Regalado",
  description: "Get in touch with Luke Regalado.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen text-[#E8F0EC] pt-14 flex items-center justify-center">
      <div className="max-w-xl w-full mx-auto px-6 md:px-16 py-24">
        <div className="backdrop-blur-2xl bg-white/3 border border-[#3DAB7A]/15 rounded-3xl p-10 shadow-[0_8px_64px_rgba(61,171,122,0.05)]">
          <p className="font-mono text-[#3DAB7A] text-xs tracking-widest uppercase mb-4">
            Contact
          </p>
          <h1 className="font-mono text-4xl font-bold tracking-tight mb-8 text-[#E8F0EC]">
            Contact me!
          </h1>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}