"use client";

import { useLightbulb } from "@/components/LightbulbContext";
import ContactForm from "./ContactForm";

export default function ContactContent() {
  const { isBlackedOut } = useLightbulb();

  return (
    <main
      className={`min-h-screen pt-14 flex items-center justify-center transition-colors duration-500 ${
        isBlackedOut ? "bg-[#0e0e0e] text-[#E8F0EC]" : "bg-[#F5F0E8] text-[#2A2622]"
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