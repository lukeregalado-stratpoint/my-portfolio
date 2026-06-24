"use client";

import { useLightbulb } from "@/components/LightbulbContext";
import ContactForm from "./ContactForm";

export default function ContactContent() {
  const { isBlackedOut } = useLightbulb();

  return (
    <main className={`min-h-screen pt-14 flex items-center justify-center transition-colors duration-500 ${
      isBlackedOut ? "bg-[#0e0e0e] text-[#E8F0EC]" : "bg-[#F5F0E8] text-[#2A2622]"
    }`}>
      <div className="max-w-xl w-full mx-auto px-6 md:px-16 py-24">
        <div className={`backdrop-blur-2xl border rounded-3xl p-10 shadow-lg transition-colors duration-500 ${
          isBlackedOut
            ? "bg-white/3 border-[#3DAB7A]/15 shadow-[0_8px_64px_rgba(61,171,122,0.05)]"
            : "bg-white/70 border-[#3DAB7A]/20 shadow-[0_8px_64px_rgba(61,171,122,0.08)]"
        }`}>
          <p className="font-mono text-[#3DAB7A] text-xs tracking-widest uppercase mb-4">
            Contact
          </p>
          <h1 className={`font-mono text-4xl font-bold tracking-tight mb-8 transition-colors duration-500 ${
            isBlackedOut ? "text-[#E8F0EC]" : "text-[#2A2622]"
          }`}>
            Contact me!
          </h1>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}