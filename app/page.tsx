import type { Metadata } from "next";
import { Kalam } from "next/font/google";
import Vignette from "@/components/Vignette";
import PortfolioHeader from "@/components/PortfolioHeader";
import SocialLinks from "@/components/SocialLinks";

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kalam",
});

export const metadata: Metadata = {
  title: "Luke Regalado",
  description:
    "Luke Regalado - developer portfolio. Web apps, APIs, and tools.",
};

export default function HomePage() {
  return (
    <main className="relative h-lvh w-full text-[#2A2622] flex flex-col pt-14">
      {/* vignette home page only */}
      <Vignette />

      {/* doodle overlay */}
      <div
        className="fixed bottom-0 left-0 right-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/footer-doodles.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom center",
          backgroundSize: "contain",
          height: '50%',
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 flex-1 min-h-0">

        {/* Left column */}
        <div className="flex flex-col pl-50">
          <div className="flex-1 flex flex-col justify-center">
            {/* Shared positioning container - NOT elevated itself */}
            <div className="relative p-10 pb-2 w-auto mx-auto">

              {/* Header wrapper - elevated above blackout, header always visible */}
              <div className="relative z-101">
                <PortfolioHeader />
              </div>

              <SocialLinks />

            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col">
          <div className="flex-1 flex flex-col justify-center">
            <div className="p-10 pb-0 w-3/8 mx-auto">
              <img src="/me.gif" alt="Luke Regalado self-portrait" className="w-full h-auto" />
            </div>

            <div className="p-10 pt-2  w-2/3 mx-auto">
              <p className="font-mono text-2xl tracking-widest text-[#5C564C] leading-relaxed">
                A software engineer who enjoys building purposeful and creative solutions through clean, thoughtful code. Curious by nature; driven by ingenuity.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}