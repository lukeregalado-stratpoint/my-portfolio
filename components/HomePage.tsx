"use client";

import Vignette from "@/components/Vignette";
import PortfolioHeader from "@/components/PortfolioHeader";
import SocialLinks from "@/components/SocialLinks";
import BlackoutBackground from "@/components/BlackoutBackground";
import { useLightbulb } from "@/components/LightbulbContext";

export default function HomePage() {
  const { isBlackedOut } = useLightbulb();

  return (
    <main className="relative flex-1 w-full flex flex-col min-h-screen pt-14 overflow-hidden">
      <BlackoutBackground />
      <Vignette />
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
      <div className="flex flex-1 min-h-0 relative z-10 items-center justify-center">
        <div className="flex flex-col h-full justify-center">
          <div className="p-10 mt-[2%] w-15/16 mx-auto">
            <div className="relative z-101">
              <PortfolioHeader />
              <div className="absolute left-25" style={{ top: "62%", left: "12%" }}>
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}