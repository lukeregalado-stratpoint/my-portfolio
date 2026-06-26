export default function HomeLoading() {
  return (
    <main className="relative flex-1 w-full flex flex-col min-h-screen pt-14 overflow-hidden bg-[#F5F0E8] animate-pulse">

      <div className="grid grid-cols-1 md:grid-cols-2 flex-1 min-h-0 relative z-10 items-center">

        {/* Left column — PortfolioHeader + SocialLinks */}
        <div className="flex flex-col h-full justify-center pl-50">
          <div className="p-10 mt-[2%] w-14/16 mx-auto">
            <div className="relative">

              {/* PortfolioHeader image block */}
              <div className="w-full aspect-[520/320] rounded-2xl bg-[#D9C9A8]/50" />

              {/* SocialLinks row — mirrors absolute position */}
              <div
                className="absolute flex gap-3"
                style={{ top: "62%", left: "12%" }}
              >
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="w-7 h-7 rounded-full bg-[#D9C9A8]/60" />
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Right column — gif + bio */}
        <div className="flex flex-col h-full justify-center">

          {/* gif placeholder */}
          <div className="p-10 pb-[8%] w-10/25 mx-auto">
            <div className="w-full aspect-square rounded-2xl bg-[#D9C9A8]/50" />
          </div>

          {/* Bio text placeholder */}
          <div
            className="p-10 pt-0 w-2/3 mx-auto flex flex-col gap-3"
            style={{ position: "relative", top: "-8%" }}
          >
            <div className="h-4 w-full rounded-full bg-[#D9C9A8]/40" />
            <div className="h-4 w-5/6 rounded-full bg-[#D9C9A8]/40" />
            <div className="h-4 w-full rounded-full bg-[#D9C9A8]/40" />
            <div className="h-4 w-3/4 rounded-full bg-[#D9C9A8]/40" />
          </div>

        </div>

      </div>
    </main>
  );
}