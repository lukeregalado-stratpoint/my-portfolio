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
      style={{
        backgroundImage: "url('/contact-letter.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
      }}
    >
      <div className="max-w-xl w-full mx-auto px-6 md:px-16 py-24">


          <div className="relative">
            {/* Two-column layout: left = message body (span 2), right = to (above) and from (below) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-6">
              <div className="md:col-span-2">
                <label className="font-mono text-xs tracking-widest uppercase text-[#3DAB7A] block mb-1">Message body</label>
                <textarea name="body_box" rows={8} placeholder="Message body" className="w-full px-3 py-2 rounded-lg border bg-white/40 font-mono text-sm resize-none" />
              </div>

              <div className="md:col-span-1 space-y-4">
                <div>
                  <label className="font-mono text-xs tracking-widest uppercase text-[#3DAB7A] block mb-1">To</label>
                  <input name="to_box" placeholder="To" className="w-full px-3 py-2 rounded-lg border bg-white/40 font-mono text-sm" />
                </div>

                <div>
                  <label className="font-mono text-xs tracking-widest uppercase text-[#3DAB7A] block mb-1">From</label>
                  <input name="me_box" placeholder="From" className="w-full px-3 py-2 rounded-lg border bg-white/40 font-mono text-sm" />
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
    </main>
  );
}