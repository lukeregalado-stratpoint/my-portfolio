"use client";

import { createContext, useContext, useState, useRef, ReactNode } from "react";

const TOTAL_FRAMES = 11;
const FRAME_DURATION = 90;
const BLACKOUT_UNTIL_FRAME = 3;

type LightbulbContextType = {
  frame: number;
  isLit: boolean;
  isBlackedOut: boolean;
  triggerAnimation: () => void;
};

const LightbulbContext = createContext<LightbulbContextType | null>(null);

export function LightbulbProvider({ children }: { children: ReactNode }) {
  const [frame, setFrame] = useState(0);
  const isAnimating = useRef(false);

  const isLit = frame === TOTAL_FRAMES - 1;
  const isBlackedOut = frame < BLACKOUT_UNTIL_FRAME;

  const triggerAnimation = () => {
    if (isAnimating.current || isLit) return;
    isAnimating.current = true;

    let current = frame;
    const interval = setInterval(() => {
      current += 1;
      setFrame(current);

      if (current >= TOTAL_FRAMES - 1) {
        clearInterval(interval);
        isAnimating.current = false;
      }
    }, FRAME_DURATION);
  };

  return (
    <LightbulbContext.Provider value={{ frame, isLit, isBlackedOut, triggerAnimation }}>
      {children}
    </LightbulbContext.Provider>
  );
}

export function useLightbulb() {
  const ctx = useContext(LightbulbContext);
  if (!ctx) throw new Error("useLightbulb must be used within LightbulbProvider");
  return ctx;
}