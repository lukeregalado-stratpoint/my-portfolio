export default function ProjectsLoading() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F5F0E8] animate-pulse">

      <section className="relative flex-1 px-8 md:px-16 lg:px-24 pt-32 pb-5 flex items-center overflow-visible">

        {/* Left column */}
        <div className="hidden lg:flex flex-col items-start gap-4 w-48 shrink-0">
          <div className="h-3 w-24 rounded-full bg-[#D9C9A8]/60" />
          <div className="flex flex-col gap-2">
            <div className="h-3 w-36 rounded-full bg-[#D9C9A8]/40" />
            <div className="h-3 w-28 rounded-full bg-[#D9C9A8]/40" />
            <div className="h-3 w-32 rounded-full bg-[#D9C9A8]/40" />
          </div>
        </div>

        {/* Center column */}
        <div className="flex-1 flex flex-col items-center justify-center gap-10 overflow-visible">

          {/* Title */}
          <div className="text-center flex flex-col items-center gap-3">
            <div className="h-3 w-28 rounded-full bg-[#D9C9A8]/50" />
            <div className="h-10 w-44 rounded-full bg-[#D9C9A8]/60" />
          </div>

          {/* Carousel front card + two side cards */}
          <div className="relative w-full h-[380px] overflow-visible flex items-center justify-center">
            {/* Left side card */}
            <div
              className="absolute rounded-[15px] bg-[#D9C9A8]/30"
              style={{
                width: 260,
                height: 359,
                transform: "translateX(-300px) translateY(24px) scale(0.8)",
                opacity: 0.4,
              }}
            />
            {/* Front card */}
            <div
              className="absolute rounded-[15px] bg-[#D9C9A8]/50"
              style={{ width: 260, height: 359 }}
            />
            {/* Right side card */}
            <div
              className="absolute rounded-[15px] bg-[#D9C9A8]/30"
              style={{
                width: 260,
                height: 359,
                transform: "translateX(300px) translateY(24px) scale(0.8)",
                opacity: 0.4,
              }}
            />
          </div>

          {/* "click to cycle" label */}
          <div className="h-3 w-24 rounded-full bg-[#D9C9A8]/40" />

        </div>

        {/* Right column (stackpanel) loading */}
        <div className="hidden lg:flex flex-col gap-3 w-48 shrink-0 items-end">
          {[32, 24, 36, 28, 20, 30].map((w, i) => (
            <div
              key={i}
              className="h-7 rounded-full bg-[#D9C9A8]/50"
              style={{ width: `${w * 4}px` }}
            />
          ))}
        </div>

      </section>

      {/* Stats strip */}
      <section className="mx-8 md:mx-16 lg:mx-32 mb-24 border border-[#3DAB7A]/15 rounded-2xl px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/60">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="h-8 w-16 rounded-full bg-[#D9C9A8]/60" />
            <div className="h-3 w-28 rounded-full bg-[#D9C9A8]/40" />
          </div>
        ))}
      </section>

    </main>
  );
}