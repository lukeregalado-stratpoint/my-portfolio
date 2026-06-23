export default function ProjectLoading() {
  return (
    <main className="min-h-screen text-[#E8F0EC] pt-14">
      <div className="max-w-4xl mx-auto px-6 md:px-16 py-24 space-y-8">
        <div className="h-4 w-32 bg-[#3DAB7A]/10 rounded animate-pulse" />
        <div className="backdrop-blur-2xl bg-white/0.03 border border-[#3DAB7A]/15 rounded-3xl p-10 space-y-6">
          <div className="h-3 w-16 bg-[#3DAB7A]/10 rounded animate-pulse" />
          <div className="h-10 w-2/3 bg-[#3DAB7A]/10 rounded animate-pulse" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-[#3DAB7A]/10 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-[#3DAB7A]/10 rounded animate-pulse" />
            <div className="h-4 w-4/6 bg-[#3DAB7A]/10 rounded animate-pulse" />
          </div>
          <div className="flex gap-2">
            <div className="h-6 w-20 bg-[#3DAB7A]/10 rounded-full animate-pulse" />
            <div className="h-6 w-20 bg-[#3DAB7A]/10 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </main>
  );
}