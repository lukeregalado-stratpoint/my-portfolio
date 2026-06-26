"use client";

import Vignette from "@/components/Vignette";
import PortfolioHeader from "@/components/PortfolioHeader";
import SocialLinks from "@/components/SocialLinks";
import BlackoutBackground from "@/components/BlackoutBackground";
import Image from "next/image";
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
      <div className="grid grid-cols-1 md:grid-cols-2 flex-1 min-h-0 relative z-10 items-center">
        <div className="flex flex-col h-full justify-center pl-50">
          <div className="p-10 mt-[2%] w-14/16 mx-auto">
            <div className="relative z-101">
              <PortfolioHeader />
              <div className="absolute left-25" style={{ top: "62%", left: "12%" }}>
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full justify-center">
          <div className="p-10 pb-[8%] w-10/25 mx-auto">
            <Image
              src={isBlackedOut ? "/me-dark.gif" : "/me.gif"}
              alt="Luke Regalado self-portrait"
              className="w-full h-auto"
              width={263}
              height={261}
            />
          </div>
          <div className="p-10 pt-0 w-2/3 mx-auto relative" style={{ top: "-8%" }}>
            <p className={`font-mono text-2xl tracking-widest leading-relaxed transition-colors duration-500 ${
              isBlackedOut ? "text-[#EDE8DC]" : "text-[#5C564C]"
            }`}>
              A software engineer who enjoys building purposeful and creative
              solutions through clean, thoughtful code. Curious by nature;
              driven by ingenuity.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}