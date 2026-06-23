"use client";

export default function ProjectError({ reset }: { reset: () => void }) {
  return (
    <main className="min-h-screen text-[#E8F0EC] pt-14 flex items-center justify-center">
      <div className="backdrop-blur-2xl bg-white/3 border border-[#3DAB7A]/15 rounded-3xl p-10 max-w-md text-center space-y-6">
        <p className="font-mono text-[#3DAB7A] text-xs tracking-widest uppercase">
          Something went wrong
        </p>
        <h2 className="font-mono text-2xl font-bold text-[#E8F0EC]">
          Couldn't load this project
        </h2>
        <button
          onClick={reset}
          className="font-mono text-xs tracking-widest uppercase px-5 py-2.5 rounded-xl border border-[#3DAB7A]/30 text-[#3DAB7A] hover:bg-[#3DAB7A]/10 transition-colors"
        >
          Try again
        </button>
      </div>
    </main>
  );
}