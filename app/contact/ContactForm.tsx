"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendMessage } from "./actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full font-mono text-xs tracking-widest uppercase px-5 py-3 rounded-xl bg-[#3DAB7A]/20 border border-[#3DAB7A]/30 text-[#3DAB7A] hover:bg-[#3DAB7A]/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Sending..." : "Send message →"}
    </button>
  );
}

const inputClass =
  "w-full bg-white/[0.03] border border-[#3DAB7A]/15 rounded-xl px-4 py-3 font-mono text-sm text-[#E8F0EC] placeholder:text-[#7A9E8A]/50 focus:outline-none focus:border-[#3DAB7A]/50 transition-colors";

export default function ContactForm() {
  const [state, action] = useActionState(sendMessage, null);

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
    <form action={action} className="space-y-4">
      <div>
        <label className="font-mono text-xs tracking-widest uppercase text-[#3DAB7A] block mb-2">
          Name
        </label>
        <input name="name" required placeholder="Your name" className={inputClass} />
      </div>
      <div>
        <label className="font-mono text-xs tracking-widest uppercase text-[#3DAB7A] block mb-2">
          Email
        </label>
        <input name="email" type="email" required placeholder="your@email.com" className={inputClass} />
      </div>
      <div>
        <label className="font-mono text-xs tracking-widest uppercase text-[#3DAB7A] block mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What's on your mind?"
          className={`${inputClass} resize-none`}
        />
      </div>

      {state?.error && (
        <p className="font-mono text-xs text-red-400">{state.error}</p>
      )}

      <SubmitButton />
    </form>
  );
}