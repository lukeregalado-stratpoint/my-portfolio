"use client";

import { useLightbulb } from "./LightbulbContext";

export default function PortfolioHeader() {
  const { frame, isLit, triggerAnimation } = useLightbulb();

  return (
    <button
      onClick={triggerAnimation}
      disabled={isLit}
      aria-label={isLit ? undefined : "Pull the light string"}
      className={`bg-transparent border-none p-0 w-full ${isLit ? "cursor-default" : "cursor-pointer"}`}
    >
      <img
        src={`/portfolio-header/frame-${frame}.png`}
        alt="Portfolio header"
        className="w-full h-auto"
      />
    </button>
  );
}