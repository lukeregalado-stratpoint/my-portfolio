export default function AboutLoading() {
  return (
    <main className="relative min-h-screen pt-14 bg-parchment">
      <div className="relative w-full animate-pulse" style={{ height: "calc(100vh - 56px)" }}>

        {/* About Me loading */}
        <div className="absolute" style={{ top: "15%", left: "15%" }}>
          {/* Heading */}
          <div className="flex flex-col gap-2 mb-6">
            <div className="h-8 w-72 rounded-full bg-bone/60" />
            <div className="h-8 w-52 rounded-full bg-bone/60" />
          </div>
          {/* Bio paragraph lines */}
          <div className="flex flex-col gap-2 max-w-md">
            <div className="h-4 w-full rounded-full bg-bone/40" />
            <div className="h-4 w-5/6 rounded-full bg-bone/40" />
            <div className="h-4 w-full rounded-full bg-bone/40" />
            <div className="h-4 w-3/4 rounded-full bg-bone/40" />
            <div className="mt-2 h-4 w-full rounded-full bg-bone/40" />
            <div className="h-4 w-4/5 rounded-full bg-bone/40" />
          </div>
        </div>

        {/* Frontend stack loading */}
        <div className="absolute" style={{ top: "16%", left: "48%" }}>
          <div className="flex flex-col gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-5 w-28 rounded-full bg-bone/50" />
            ))}
          </div>
        </div>

        {/* Backend stack — slight rotation */}
        <div className="absolute" style={{ top: "19%", left: "60%", transform: "rotate(5.8deg)" }}>
          <div className="flex flex-col gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-5 w-24 rounded-full bg-bone/50" />
            ))}
          </div>
        </div>

        {/* Tooling stack loading */}
        <div className="absolute" style={{ top: "16%", left: "72%", transform: "rotate(-3deg)" }}>
          <div className="flex flex-col gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-5 w-28 rounded-full bg-bone/50" />
            ))}
          </div>
        </div>

        {/* Experience timeline loading (3 entries for now) */}
        <div className="absolute" style={{ top: "40%", left: "47%", width: "34%" }}>
          <div className="flex flex-col gap-0">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className={`relative px-10 ${i === 0 ? "pt-12" : "pt-6"} pb-0`}
                style={{ minHeight: "9rem" }}
              >
                {/* Card bg placeholder */}
                <div className="absolute inset-0 rounded-xl bg-bone/30" />
                <div className="relative z-10 flex gap-6">
                  {/* Year */}
                  <div className="w-16 h-9 rounded-full bg-bone/50 shrink-0" />
                  {/* Text lines */}
                  <div className="flex flex-col gap-2 flex-1">
                    <div className="h-5 w-3/4 rounded-full bg-bone/60" />
                    <div className="h-4 w-1/2 rounded-full bg-bone/50" />
                    <div className="h-3 w-full rounded-full bg-bone/40" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}