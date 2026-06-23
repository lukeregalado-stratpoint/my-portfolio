"use client";
import { useLightbulb } from "./LightbulbContext";

const TURNOFF_FRAME_THRESHOLD = 3;

export default function PortfolioHeader() {
  const { frame, isAnimating, turningOff, triggerAnimation } = useLightbulb(); 

  const frameSrc = turningOff
    ? `/portfolio-header/frame-off-${frame}.png`
    : `/portfolio-header/frame-${frame}.png`;
  return (
    <button
      onClick={triggerAnimation}
      aria-label="Toggle the light"
      className={`bg-transparent border-none p-0 w-full ${isAnimating ? "cursor-default" : "cursor-pointer"}`}
    >
      <img
        src={frameSrc} 
        alt="Portfolio header"
        className="w-full h-auto"
      />
    </button>
    
  );
}