"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { sendMessage } from "./actions";
import { useLightbulb } from "@/components/LightbulbContext";
import Image from "next/image";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full font-mono text-xs tracking-widest uppercase px-5 py-3 rounded-xl bg-[#3DAB7A]/20 border border-[#3DAB7A]/30 text-[#3DAB7A] hover:bg-[#3DAB7A]/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Sending..." : "Send message"}
    </button>
  );
}

function FormFields({ onReset }: { onReset: () => void }) {
  const [state, action] = useActionState(sendMessage, null);
  const { isBlackedOut } = useLightbulb();

  const inputClass = `w-full min-w-0 max-w-full border border-[#3DAB7A]/5 rounded-xl px-6
  py-3 font-homemadeapple text-sm focus:outline-none focus:border-[#3DAB7A]/20 
  transition-colors resize-none overflow-visible bg-white/[0.01] ${
    isBlackedOut
      ? "text-[#E8F0EC] placeholder:text-[#E8F0EC]/30"
      : "text-[#2A2622] placeholder:text-[#283618]/40"
  }`;

  if (state?.success) {
    return (
      <div className="text-center space-y-4 py-8">
        <div className="p-10 pb-0 w-auto mx-auto">
          <Image
            src="/contact-success.png"
            alt="Contact Success visual"
            className="w-full h-auto"
            fill
          />
        </div>
        <p className="font-mono text-[#29654a] text-xl tracking-widest uppercase">
          Message sent
        </p>
        <p className="font-homemadeapple text-5xl text-[#283618] pb-[5%]">
          Thanks! I'll get back to you soon.
        </p>
        <button
          type="button"
          onClick={onReset}
          className="font-mono text-xs text-right tracking-widest uppercase text-[#3DAB7A] hover:text-[#E8F0EC] transition-colors"
        >
          ← back to contact form
        </button>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-6">
      {/* Side-by-side panels */}
      <div className="flex items-stretch rounded-2xl overflow-hidden" style={{ height: "722px" }}>
        {/* Left: message body */}
        <div
          className="p-6 flex flex-col justify-end"
          style={{
            width: "481px",
            flexShrink: 0,
            backgroundImage: `url('${isBlackedOut ? "/contact-message-dark.png" : "/contact-message.png"}')`,
            backgroundSize: "481px 722px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <textarea
            name="message"
            required
            rows={10}
            placeholder="What's on your mind?"
            className={inputClass}
            style={{ height: "calc(722px * 0.75)" }}
          />
        </div>

        {/* Right: credentials */}
        <div
          className="p-6 flex flex-col justify-start gap-7"
          style={{
            width: "462px",
            flexShrink: 0,
            backgroundImage: `url('${isBlackedOut ? "/contact-credentials-dark.png" : "/contact-credentials.png"}')`,
            backgroundSize: "462px 722px",
            backgroundRepeat: "no-repeat",
            paddingLeft: "170px",
            paddingTop: "calc(722px * 0.43)",
          }}
        >
          <div style={{ width: "250px" }}>
            <p className={`px-4 py-3 font-homemadeapple text-sm ${isBlackedOut ? "text-[#E8F0EC]" : "text-[#2A2622]"}`}>
              luke.m.regalado@gmail.com
            </p>
          </div>

          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className={inputClass}
            style={{ height: "57px" }}
          />

          <div style={{ width: "270px" }}>
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className={inputClass}
              style={{ height: "40px" }}
            />
          </div>
        </div>
      </div>

      {state?.error && (
        <p className="font-mono text-xs text-red-400">{state.error}</p>
      )}

      <SubmitButton />
    </form>
  );
}

export default function ContactForm() {
  const [formKey, setFormKey] = useState(0);

  return <FormFields key={formKey} onReset={() => setFormKey((k) => k + 1)} />;
}