"use client";

import { useEffect } from "react";

export default function ContactError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen pt-14 flex items-center justify-center bg-[#F5F0E8] text-[#2A2622]">
      <div className="text-center space-y-6 py-8 max-w-md mx-auto px-6">

        <p className="font-mono text-[#29654a] text-xs tracking-widest uppercase">
          Something went wrong
        </p>

        <p className="font-homemadeapple text-4xl leading-snug">
          Couldn&apos;t send your message. Sorry about that.
        </p>

        <p className="font-mono text-xs text-[#2A2622]/50 tracking-wide">
          {error?.message ?? "An unexpected error occurred."}
        </p>

        <button
          onClick={reset}
          className="font-mono text-xs tracking-widest uppercase px-5 py-3 rounded-xl bg-[#3DAB7A]/20 border border-[#3DAB7A]/30 text-[#3DAB7A] hover:bg-[#3DAB7A]/30 transition-colors"
        >
          Try again
        </button>

      </div>
    </main>
  );
}