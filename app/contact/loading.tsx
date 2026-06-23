export default function ContactLoading() {
  return (
    <main className="min-h-screen text-[#E8F0EC] pt-14 flex items-center justify-center">
      <div className="max-w-xl w-full mx-auto px-6 md:px-16 py-24">
        <div className="backdrop-blur-2xl bg-white/3 border border-[#3DAB7A]/15 rounded-3xl p-10 space-y-6">
          <div className="h-3 w-16 bg-[#3DAB7A]/10 rounded animate-pulse" />
          <div className="h-10 w-1/2 bg-[#3DAB7A]/10 rounded animate-pulse" />
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-3 w-16 bg-[#3DAB7A]/10 rounded animate-pulse" />
                <div className="h-10 w-full bg-[#3DAB7A]/10 rounded-xl animate-pulse" />
              </div>
            ))}
            <div className="h-10 w-full bg-[#3DAB7A]/10 rounded-xl animate-pulse" />
          </div>
        </div>
      </div>
    </main>
  );
}