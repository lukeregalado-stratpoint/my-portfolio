"use client";
import { useEffect, useRef, useState } from "react";

export type Project = {
  name: string;
  tag: string;
  href: string;
};

const CARD_W = 260;
const GAP = 300;

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const floatTRef = useRef(0);
  const rafRef = useRef<number>(0);
  const floatPhases = useRef(projects.map((_, i) => i * 1.3));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const currentRef = useRef(0);
  const n = projects.length;

  function getSlot(cardIdx: number, cur: number) {
    let diff = (cardIdx - cur + n) % n;
    if (diff > n / 2) diff -= n;
    return diff;
  }

  function slotX(slot: number) {
    const stageW = stageRef.current?.offsetWidth ?? 680;
    return stageW / 2 - CARD_W / 2 + slot * GAP;
        }

  function applyPositions(transition: boolean) {
    const cur = currentRef.current;
    cardRefs.current.forEach((c, i) => {
      if (!c) return;
      const slot = getSlot(i, cur);
      const absSlot = Math.abs(slot);
      const x = slotX(slot);
      const scale = absSlot === 0 ? 1 : absSlot === 1 ? 0.8 : 0.65;
      const y = absSlot === 0 ? 0 : absSlot === 1 ? 24 : 42;
      const opacity = absSlot === 0 ? 1 : absSlot === 1 ? 0.42 : absSlot === 2 ? 0.15 : 0;
      const blur = absSlot === 0 ? 0 : absSlot === 1 ? 1.5 : 3;
      const isFront = absSlot === 0;

      c.style.transition = transition
        ? "transform 0.55s cubic-bezier(0.34,1.2,0.64,1), opacity 0.45s ease"
        : "none";
      c.style.transform = `translateX(${x}px) translateY(${y}px) scale(${scale})`;
      c.style.opacity = String(opacity);
      c.style.zIndex = String(10 - absSlot);
      c.style.filter = blur > 0 ? `blur(${blur}px)` : "none";
      c.style.border = isFront
        ? "1.5px solid rgba(61,171,122,0.45)"
        : "1.5px solid rgba(61,171,122,0.15)";
      c.style.background = isFront
        ? "rgba(255,255,255,0.07)"
        : "rgba(255,255,255,0.03)";

      const glow = c.querySelector<HTMLDivElement>(".carousel-glow");
      if (glow) glow.style.opacity = isFront ? "1" : "0";
    });
  }

  useEffect(() => {
    applyPositions(false);

    function tick() {
      floatTRef.current += 0.012;
      const t = floatTRef.current;
      const cur = currentRef.current;

      cardRefs.current.forEach((c, i) => {
        if (!c) return;
        const slot = getSlot(i, cur);
        const absSlot = Math.abs(slot);
        const x = slotX(slot);
        const baseY = absSlot === 0 ? 0 : absSlot === 1 ? 24 : 42;
        const scale = absSlot === 0 ? 1 : absSlot === 1 ? 0.8 : 0.65;
        const ph = floatPhases.current[i];
        const floatY = Math.sin(t + ph) * 5 + Math.sin(t * 0.6 + ph) * 2;
        const floatRot = absSlot === 0 ? Math.sin(t * 0.5 + ph) * 0.7 : 0;
        c.style.transform = `translateX(${x}px) translateY(${baseY + floatY}px) scale(${scale}) rotate(${floatRot}deg)`;
      });

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function go(dir: 1 | -1) {
    if (animating) return;
    setAnimating(true);
    const next = (currentRef.current + dir + n) % n;
    currentRef.current = next;
    setCurrent(next);
    applyPositions(true);
    setTimeout(() => setAnimating(false), 600);
  }

  return (
    <div className="flex flex-col items-center gap-8 overflow-visible w-full">
      {/* Stage */}
      <div ref={stageRef} className="relative w-full h-[380px] overflow-visible">
        {projects.map((project, i) => (
          <div
            key={project.name}
            ref={(el) => { cardRefs.current[i] = el; }}
            className="absolute top-0 w-[260px] h-[340px] flex flex-col justify-end p-7 gap-1.5 overflow-hidden"
            style={{ borderRadius: "24px 24px 32px 32px" }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3DAB7A]/50 to-transparent" />
            <div
              className="carousel-glow absolute inset-0 pointer-events-none transition-opacity duration-500"
              style={{
                background: "radial-gradient(ellipse at 50% 110%, rgba(61,171,122,0.16), transparent 65%)",
                opacity: 0,
              }}
            />
            <span className="absolute top-5 right-6 font-mono text-xs text-[#3DAB7A]/30">
              0{i + 1}
            </span>
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#3DAB7A]/50 mb-0.5">
              Project
            </span>
            <p className="font-mono text-base font-bold text-[#E8F0EC] tracking-tight">
              {project.name}
            </p>
            <p className="font-mono text-xs text-[#7A9E8A] leading-relaxed">
              {project.tag}
            </p>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Previous project"
          onClick={() => go(-1)}
          className="w-9 h-9 rounded-full backdrop-blur-md bg-white/[0.03] border border-[#3DAB7A]/20 text-[#7A9E8A] hover:text-[#E8F0EC] hover:border-[#3DAB7A]/40 transition-colors flex items-center justify-center text-lg"
        >
          ‹
        </button>

        <div className="flex gap-1.5 items-center">
          {projects.map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                background: i === current ? "rgba(61,171,122,0.85)" : "rgba(61,171,122,0.22)",
                transform: i === current ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next project"
          onClick={() => go(1)}
          className="w-9 h-9 rounded-full backdrop-blur-md bg-white/[0.03] border border-[#3DAB7A]/20 text-[#7A9E8A] hover:text-[#E8F0EC] hover:border-[#3DAB7A]/40 transition-colors flex items-center justify-center text-lg"
        >
          ›
        </button>
      </div>
    </div>
  );
}