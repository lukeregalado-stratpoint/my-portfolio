"use client";
import { useLightbulb } from "./LightbulbContext";
import Image from "next/image";

interface StackPanelProps {
  allTags: string[];
  activeFilters: string[];
  onToggle: (tag: string) => void;
}

// Natural dimensions (px)
const TAG_W   = 323;
const TAG_H   = 74;
const TITLE_W = 370;
const TITLE_H = 109;
const PEEK_PX = 100; // how much of a retracted tag stays visible


export function StackPanel({ allTags, activeFilters, onToggle }: StackPanelProps) {
  const { isBlackedOut } = useLightbulb();
  const button  = isBlackedOut ? "text-[#E8F0EC]" : "text-[#283618]";
  
  return (
    <div className="absolute right-0 left-72 top-1/2 -translate-y-1/2 z-9999 flex flex-col items-end gap-2 overflow-visible">

      {/* Title scales */}
      <div className="mb-2 w-[203.5px] h-[59.95px] xl:w-[64.75px] xl:h-[76.3px] 2xl:w-[314.5px] 2xl:h-[94.65]">
        <Image
          src={isBlackedOut ? "/stack-title-dark.png" : "/stack-title.png"}
          alt="Stack"
          width={TITLE_W}
          height={TITLE_H}
          className="w-full h-full object-contain object-right"
          loading="eager"
          priority
        />
      </div>

      {/* Tag pills */}
      {allTags.map((tag) => {
        const retracted = activeFilters.includes(tag);

        return (
          <button
            key={tag}
            type="button"
            onClick={() => onToggle(tag)}
            aria-pressed={retracted}
            aria-label={`Filter by ${tag}`}
            className={[
              "relative flex items-center justify-start cursor-pointer overflow-visible shrink-0",
              "w-[177.65px] h-[40.75px]",
              "xl:w-[226.1] xl:h-[51.8px]",
              "2xl:w-[274.55px] 2xl:h-[62.9px]",
            ].join(" ")}
            style={{

              // calc formula: retract distance scales automatically with whatever width the button has at that breakpoint
              transform: retracted ? `translateX(calc(100% - ${PEEK_PX}px))` : "translateX(0)",
              transition: "transform 0.4s cubic-bezier(0.34,1.1,0.64,1)",
            }}
          >
            <Image
              src={isBlackedOut ? "/stack-tag-dark.png" : "/stack-tag.png"}
              alt=""
              width={TAG_W}
              height={TAG_H}
              className="absolute inset-0 w-full h-full object-fill"
              loading="eager"
            priority
            />
            <span
              className={`relative z-10 pl-12 font-mono font-extrabold text-3xl text-[#283618] text-left pointer-events-none ${button}`}
              style={{
                opacity:    retracted ? 0 : 1,
                transition: "opacity 0.15s ease",
              }}
            >
              {tag}
            </span>
          </button>
        );
      })}
    </div>
  );
}