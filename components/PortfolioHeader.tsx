"use client";
import { useLightbulb } from "./LightbulbContext";
import Image from "next/image";

export default function PortfolioHeader() {
  const { frame, isAnimating, turningOff, triggerAnimation } = useLightbulb(); 

  const frameSrc = turningOff
    ? `/portfolio-header/frame-off-${frame}.png`
    : `/portfolio-header/frame-${frame}.png`;
  return (
    <button
      onClick={triggerAnimation}
      aria-label="Toggle the light"
      className={`bg-transparent border-none p-0 w-full h09. ${isAnimating ? "cursor-default" : "cursor-pointer"}`}
    >
      <Image
        src={frameSrc} 
        alt="Portfolio header"
        className="w-full h-auto"
        width="971"
        height="783"
      />
    </button>
    
  );
}