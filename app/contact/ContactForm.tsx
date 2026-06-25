"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendMessage } from "./actions";
import { useLightbulb } from "@/components/LightbulbContext";

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

export default function ContactForm() {
  const [state, action] = useActionState(sendMessage, null);
  const { isBlackedOut } = useLightbulb();

  const inputClass = `w-full min-w-0 max-w-full border border-[#3DAB7A]/5 rounded-xl px-6
  py-3 font-homemadeapple text-sm placeholder:text-[#283618]/40 focus:outline-none focus:border-[#3DAB7A]/20 
  transition-colors resize-none overflow-visible bg-white/[0.01] ${
  isBlackedOut ? "text-[#E8F0EC]" : "text-[#2A2622]"
}`;

  if (state?.success) {
    return (
      <div className="text-center space-y-4 py-8">
        <p className="font-mono text-[#3DAB7A] text-xs tracking-widest uppercase">
          Message sent
        </p>
        <p className="text-[#7A9E8A]">Thanks! I'll get back to you soon.</p>
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
            backgroundImage: "url('/contact-message.png')",
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
            backgroundImage: "url('/contact-credentials.png')",
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

          <textarea
            name="name"
            required
            placeholder="Your name"
            rows={1}
            className={inputClass}
            style={{ height: "57px" }}
          />

          <div style={{ width: "250px" }}>
            <textarea
              name="email"
              required
              placeholder="your@email.com"
              rows={1}
              className={inputClass}
              style={{ height: "57px" }}
            />
          </div>
        </div>
      </div>

      {state?.error && (
        <p className={`font-mono text-xs text-red-400`}>{state.error}</p>
      )}

      <SubmitButton />
    </form>
  );
}