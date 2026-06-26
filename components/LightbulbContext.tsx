"use client";
import { createContext, useContext, useEffect, useState, useRef, ReactNode } from "react";

const TOTAL_FRAMES = 12;
const FRAME_DURATION = 80;
const BLACKOUT_UNTIL_FRAME = 3;
const TURNOFF_FRAMES = 9;

const getStoredFrame = () => {
  if (typeof window === "undefined") return null;

  const storedFrame = window.localStorage.getItem("lightbulbFrame");
  if (storedFrame === null) return null;

  const parsed = Number(storedFrame);
  return Number.isNaN(parsed) || parsed < 0 || parsed >= TOTAL_FRAMES ? null : parsed;
};

type LightbulbContextType = {
  frame: number;
  isLit: boolean;
  isBlackedOut: boolean;
  isAnimating: boolean;
  turningOff: boolean;
  triggerAnimation: () => void;
  setLit: () => void;
};

const LightbulbContext = createContext<LightbulbContextType | null>(null);

export function LightbulbProvider({ children }: { children: ReactNode }) {
  const [frame, setFrame] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [turningOff, setTurningOff] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const isAnimating = useRef(false);
  const frameRef = useRef(0);

useEffect(() => {
  const id = setTimeout(() => {
    const storedFrame = getStoredFrame();
    if (storedFrame !== null) {
      setFrame(storedFrame);
      frameRef.current = storedFrame;
    }
    setHydrated(true);
  }, 0);
  return () => clearTimeout(id);
}, []);

  useEffect(() => {
    frameRef.current = frame;
  }, [frame]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem("lightbulbFrame", String(frame));
  }, [frame, hydrated]);

  const isLit = frame === TOTAL_FRAMES - 1;
  const isBlackedOut = frame < BLACKOUT_UNTIL_FRAME;

  const triggerAnimation = () => {
  if (isAnimating.current) return;
  isAnimating.current = true;
  setAnimating(true);

  const goingOff = frameRef.current >= TOTAL_FRAMES - 1;
    setTurningOff(goingOff);

    if (goingOff) {
      frameRef.current = 11;
      setFrame(11);
      let offFrame = 11;

      const interval = setInterval(() => {
        offFrame -= 1;
        if (offFrame <= TURNOFF_FRAMES) {
          clearInterval(interval);
          frameRef.current = 0;
          setFrame(0);
          isAnimating.current = false;
          setAnimating(false);
          setTurningOff(false);
        } else {
          setFrame(offFrame);
        }
      }, FRAME_DURATION);

    } else {
      // normal turn-on
      const interval = setInterval(() => {
        frameRef.current += 1;
        setFrame(frameRef.current);
        if (frameRef.current >= TOTAL_FRAMES - 1) {
          clearInterval(interval);
          isAnimating.current = false;
          setAnimating(false);
        }
      }, FRAME_DURATION);
    }
  };

  const setLit = () => {
    frameRef.current = TOTAL_FRAMES - 1;
    setFrame(TOTAL_FRAMES - 1);
    setTurningOff(false);
    setAnimating(false);
    isAnimating.current = false;
  };

  return (
    <LightbulbContext.Provider value={{ frame, isLit, isBlackedOut, 
    isAnimating: animating, turningOff, triggerAnimation, setLit }}>
      {children}
    </LightbulbContext.Provider>
  );
}

export function useLightbulb() {
  const ctx = useContext(LightbulbContext);
  if (!ctx) throw new Error("useLightbulb must be used within LightbulbProvider");
  return ctx;
}