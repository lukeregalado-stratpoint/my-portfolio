"use client";

import { useLightbulb } from "@/components/LightbulbContext";
import ContactForm from "./ContactForm";

export default function ContactContent() {
  const { isBlackedOut } = useLightbulb();

  return (
    <main
      className={`min-h-screen pt-14 flex items-center justify-center transition-colors duration-500 ${
        isBlackedOut ? "bg-dark-bg text-dark-text" : "bg-parchment text-ink"
      }`}
      // style={{
      //   backgroundImage: "url('/contact-letter.png')",
      //   backgroundRepeat: 'no-repeat',
      //   backgroundPosition: 'center',
      //   backgroundSize: 'contain',
      // }}
    >
      <div className="relative w-[943px] max-w-full mx-auto py-24">
        <div className="relative">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}