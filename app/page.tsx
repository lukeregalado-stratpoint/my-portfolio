"use client";

import { Kalam } from "next/font/google";
import Vignette from "@/components/Vignette";
import PortfolioHeader from "@/components/PortfolioHeader";
import SocialLinks from "@/components/SocialLinks";
import BlackoutBackground from "@/components/BlackoutBackground";
import { useLightbulb } from "@/components/LightbulbContext";

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kalam",
});

export default function HomePage() {
  const { isBlackedOut } = useLightbulb();

  return (
    <main className="relative flex-1 w-full flex flex-col pt-14 overflow-hidden">
      {/* Dark mode image — scoped to this page only, sits behind everything */}
      <BlackoutBackground />

      {/* Vignette home page only */}
      <Vignette />

      {/* Doodle overlay */}
      <div
        className="fixed bottom-0 left-0 right-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url('${isBlackedOut ? "/footer-doodles-dark.png" : "/footer-doodles.png"}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom center",
          backgroundSize: "contain",
          height: "50%",
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 flex-1 min-h-0 relative z-10">

        {/* Left column */}
        <div className="flex flex-col pl-50">
          <div className="flex-1 flex flex-col justify-center">
            <div className="relative p-10 pb-2 w-auto mx-auto">
              <div className="relative z-101">
                <PortfolioHeader />
              </div>
              {/* positioned relative to the container, not the header */}
              <div className="absolute" style={{ bottom: "-13%", left: "-5%" }}>
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col">
          <div className="flex-1 flex flex-col justify-center">
            <div className="p-10 pb-0 w-3/8 mx-auto">
              <img
                src={isBlackedOut ? "/me-dark.gif" : "/me.gif"}
                alt="Luke Regalado self-portrait"
                className="w-full h-auto"
              />
            </div>

            <div className="p-10 pt-2 w-2/3 mx-auto">
              <p
                className={`font-mono text-2xl tracking-widest leading-relaxed transition-colors duration-500 ${
                  isBlackedOut ? "text-[#EDE8DC]" : "text-[#5C564C]"
                }`}
              >
                A software engineer who enjoys building purposeful and creative
                solutions through clean, thoughtful code. Curious by nature;
                driven by ingenuity.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}