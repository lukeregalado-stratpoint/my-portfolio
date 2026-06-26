export default function ProjectLoading() {
  return (
    <main className="min-h-screen bg-[#F5F0E8] pt-14">
      <div className="max-w-4xl mx-auto px-6 md:px-16 py-24 space-y-8">

        <div className="h-4 w-32 bg-[#D9C9A8]/50 rounded animate-pulse" />

        <div className="border border-[#3DAB7A]/15 rounded-3xl p-10 space-y-6 bg-white/70">
          <div className="h-3 w-16 bg-[#D9C9A8]/50 rounded animate-pulse" />
          <div className="h-10 w-2/3 bg-[#D9C9A8]/60 rounded animate-pulse" />

          <div className="space-y-2">
            <div className="h-4 w-full bg-[#D9C9A8]/40 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-[#D9C9A8]/40 rounded animate-pulse" />
            <div className="h-4 w-4/6 bg-[#D9C9A8]/40 rounded animate-pulse" />
          </div>
          
          <div className="flex gap-2">
            <div className="h-6 w-20 bg-[#D9C9A8]/50 rounded-full animate-pulse" />
            <div className="h-6 w-20 bg-[#D9C9A8]/50 rounded-full animate-pulse" />
          </div>
        </div>
        
      </div>
    </main>
  );
}