"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Project } from "@/app/projects/data";

const CARD_W = 260;
const GAP = 300;

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const animatingRef = useRef(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const floatTRef = useRef(0);
  const rafRef = useRef<number>(0);
  const floatPhases = useRef(projects.map((_, i) => i * 1.3));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const currentRef = useRef(0);
  const n = projects.length;
  const router = useRouter();

  function getSlot(cardIdx: number, cur: number) {
    let diff = (cardIdx - cur + n) % n;
    if (diff > n / 2) diff -= n;
    return diff;
  }

  function slotX(slot: number) {
    const stageW = stageRef.current?.offsetWidth ?? 680;
    return stageW / 2 - CARD_W / 2 + slot * GAP;
  }

  // revolving anim
  function applyPositions(transition: boolean, dir: 1 | -1 = 1) {
    const cur = currentRef.current;
    cardRefs.current.forEach((c, i) => {
      if (!c) return;
      const slot = getSlot(i, cur);
      const absSlot = Math.abs(slot);
      const x = slotX(slot);
      const scale = absSlot === 0 ? 1 : absSlot === 1 ? 0.8 : 0.65;
      // front = full; 1 neighbor away = 0.8; farther = 0.65
      const y = absSlot === 0 ? 0 : absSlot === 1 ? 24 : 42;
      // vertical drop (px) for side cards
      const opacity = absSlot === 0 ? 1 : absSlot === 1 ? 0.42 : absSlot === 2 ? 0.15 : 0; 
      // how transparent side cards are
      const blur = absSlot === 0 ? 0 : absSlot === 1 ? 1.5 : 3;
      // blur to side cards
      const isFront = absSlot === 0;

      c.style.transition = transition
        ? "transform 2s cubic-bezier(0.34,1.2,0.64,1), opacity 0.45s ease"
        : "none";
      
      //SWINGING EFFECT
      const swingRot = transition
        ? dir * -5
        : slot * -3;       // side cards hang at their lean angle
      c.style.transform = `translateX(${x}px) translateY(${y}px) scale(${scale}) rotate(${swingRot}deg)`;
      c.style.opacity = String(opacity);
      c.style.zIndex = String(10 - absSlot);
      c.style.filter = blur > 0 ? `blur(${blur}px)` : "none";
      c.style.border = "none"; 
      c.style.background = isFront
        ? "rgba(255,255,255,0.08)"
        : "rgba(255,255,255,0.04)";

      const glow = c.querySelector<HTMLDivElement>(".carousel-glow");
      if (glow) glow.style.opacity = isFront ? "1" : "0";
    });
  }

  // floating anim
  useEffect(() => {
    applyPositions(false);

    function tick() {
      if (animatingRef.current) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

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
    if (animatingRef.current) return;
    setAnimating(true);
    animatingRef.current = true;

    // save each card's current slot before update currentRef
    cardRefs.current.forEach((c, i) => {
      if (!c) return;
      c.dataset.prevSlot = String(getSlot(i, currentRef.current));
    });

    const next = (currentRef.current + dir + n) % n;
    currentRef.current = next;
    setCurrent(next);
    applyPositions(true, dir);
    setTimeout(() => {
      setAnimating(false);
      animatingRef.current = false;
    }, 600);
  }
  return (
    <div className="flex flex-col items-center gap-8 overflow-visible w-full">
      <div ref={stageRef} className="relative w-full h-[380px] overflow-visible">
        {projects.map((project, i) => (
          <div
            key={project.slug}
            ref={(el) => { cardRefs.current[i] = el; }}
            onClick={() => {
              const slot = getSlot(i, current);
              if (slot === 0) {
                if (project.longDescription) router.push(`/projects/${project.slug}`);
              } else {
                go(slot > 0 ? 1 : -1);
              }
            }}
            className="absolute top-0 w-[260px] h-[359px] flex flex-col justify-end p-7 gap-1.5 overflow-hidden cursor-pointer"
            style={{ borderRadius: "15px" }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-90">
              <Image
                src="/project-card.png"
                alt="Decorative project card"
                fill
                sizes="40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-transparent to-transparent" />
            <div
              className="carousel-glow absolute inset-0 pointer-events-none transition-opacity duration-500"
              style={{
                background: "radial-gradient(ellipse at 50% 110%, rgba(255,255,255,0.16), transparent 65%)",
                opacity: 0,
              }}
            />
            <span className="absolute top-5 right-6 font-mono text-xs text-[#3DAB7A]/30"
            style={{ borderRadius: "15px", transformOrigin: "top center" }} >
              0{i + 1}
            </span>
            <span className="absolute top-10 left-6 font-mono text-xs tracking-widest uppercase text-[#283618]/30">
              ✦✦✦
            </span>
            <div className="relative flex h-full flex-col justify-start gap-3">
              <div className="space-y-2">
                <p className="font-homemadeapple text-4xl leading-15 mt-[23%] mb-0 font-bold text-[#283618] tracking-tight text-center">
                  {project.title}
                </p>
                <p className="font-mono text-sm font-bold text-[#283618] leading-relaxed text-center">
                  {project.tag}
                </p>
              </div>
              <p className="font-mono text-xs text-[#283618] leading-relaxed mt-0">
                {project.description}
              </p>
              {getSlot(i, current) === 0 && project.longDescription && (
                <span className="font-mono italic text-[9px] text-right tracking-wide uppercase text-[#283618]/40 mt-2">
                  view project →
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Previous project"
          onClick={() => go(-1)}
          className="w-9 h-9 rounded-full backdrop-blur-md bg-white/0.03 border border-white/10 text-[#7A9E8A] hover:text-[#E8F0EC] hover:border-white/20 transition-colors flex items-center justify-center text-lg"
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
          className="w-9 h-9 rounded-full backdrop-blur-md bg-white/0.03 border border-white/10 text-[#7A9E8A] hover:text-[#E8F0EC] hover:border-white/20 transition-colors flex items-center justify-center text-lg"
        >
          ›
        </button>
      </div>
    </div>
  );
}