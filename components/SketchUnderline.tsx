"use client";

/**
 * SketchUnderline
 * A single wobbly hand-drawn line, used beneath links/words instead of
 * boxes or buttons — keeps the "no rectangles, just marks on the page" feel.
 */

type SketchUnderlineProps = {
  className?: string;
  seed?: number;
  color?: string;
  thickness?: number;
};

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildWobblyLine(width: number, seed: number, jitter = 3, segments = 6) {
  const rand = mulberry32(seed);
  const points: [number, number][] = [];
  for (let i = 0; i <= segments; i++) {
    const x = (i / segments) * width;
    const y = 5 + (rand() - 0.5) * jitter * 2;
    points.push([x, y]);
  }
  const [start, ...rest] = points;
  let d = `M ${start[0]} ${start[1]} `;
  rest.forEach(([x, y]) => {
    d += `L ${x} ${y} `;
  });
  return d;
}

export default function SketchUnderline({
  className = "",
  seed = 1,
  color = "#2A2622",
  thickness = 2,
}: SketchUnderlineProps) {
  const path = buildWobblyLine(200, seed, 2.5, 6);

  return (
    <svg
      className={className}
      viewBox="0 0 200 10"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={thickness}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}