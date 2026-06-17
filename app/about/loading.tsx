export default function AboutLoading() {
  return (
    <main className="min-h-screen text-[#E8F0EC] pt-14">
      <div className="max-w-4xl mx-auto px-6 md:px-16 py-24 space-y-12 animate-pulse">

        {/* Intro skeleton */}
        <div className="backdrop-blur-2xl bg-white/[0.03] border border-[#3DAB7A]/15 rounded-3xl p-10">
          <div className="h-3 w-16 bg-[#3DAB7A]/20 rounded-full mb-4" />
          <div className="h-12 w-80 bg-white/5 rounded-xl mb-3" />
          <div className="h-12 w-56 bg-white/5 rounded-xl mb-8" />
          <div className="space-y-3 max-w-2xl">
            <div className="h-4 bg-white/5 rounded-full w-full" />
            <div className="h-4 bg-white/5 rounded-full w-5/6" />
            <div className="h-4 bg-white/5 rounded-full w-4/6" />
          </div>
        </div>

        {/* Skills skeleton */}
        <div>
          <div className="h-3 w-12 bg-[#3DAB7A]/20 rounded-full mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="backdrop-blur-xl bg-white/[0.03] border border-[#3DAB7A]/12 p-6 rounded-2xl">
                <div className="h-3 w-20 bg-[#3DAB7A]/20 rounded-full mb-4" />
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="h-4 bg-white/5 rounded-full w-24" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline skeleton */}
        <div>
          <div className="h-3 w-20 bg-[#3DAB7A]/20 rounded-full mb-6" />
          <div className="backdrop-blur-2xl bg-white/[0.03] border border-[#3DAB7A]/12 rounded-3xl overflow-hidden">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-8 px-8 py-8 border-b border-[#3DAB7A]/8 last:border-b-0">
                <div className="h-4 w-10 bg-white/5 rounded-full shrink-0 mt-1" />
                <div className="flex-1 space-y-2">
                  <div className="h-5 w-48 bg-white/5 rounded-full" />
                  <div className="h-4 w-36 bg-[#3DAB7A]/10 rounded-full" />
                  <div className="h-4 w-72 bg-white/5 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}