"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLightbulb } from "./LightbulbContext";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const { isBlackedOut, isAnimating, triggerAnimation } = useLightbulb();
  const dark = isBlackedOut;
  const [hovered, setHovered] = useState(false);



  const toggleIcon = isBlackedOut
    ? hovered ? "/lights-off-hover.png" : "/lights-off.png"
    : hovered ? "/lights-on-hover.png" : "/lights-on.png";

  return (
    <nav className="flex items-end h-14 mr-10 gap-3">
      {navLinks.map(({ href, label }, i) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`group relative flex items-center justify-center px-5 font-mono text-xs tracking-widest uppercase transition-all duration-300 ease-out
              ${isActive ? "h-11" : "h-9 hover:h-11"}`}
            style={{ zIndex: navLinks.length - i }}
          >
            {/* bookmark bg */}
            <span
              className={`absolute inset-0 rounded-t-md border border-b-0 transition-all duration-500 ease-out
                ${isActive
                  ? "bg-[#439a86] border-[#439a86]"
                  : dark
                    ? "bg-[#2a2a2a] border-[#ffffff]/15 group-hover:bg-[#439a86] group-hover:border-[#439a86]"
                    : "bg-[#EDE8DC] border-[#2A2622]/15 group-hover:bg-[#439a86] group-hover:border-[#439a86]"
                }`}
            />
            {/* bookmark notch — matches header bg */}
            <span
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-1.5 transition-colors duration-500 ${
                dark ? "bg-[#1a1a1a]" : "bg-[#E8E0D0]"
              }`}
            />
            {/* label */}
            <span
              className={`relative transition-colors duration-500
                ${isActive
                  ? "text-[#FCFBF4]"
                  : dark
                    ? "text-[#EDE8DC]/70 group-hover:text-[#FCFBF4]"
                    : "text-[#5C564C] group-hover:text-[#FCFBF4]"
                }`}
            >
              {label}
            </span>
          </Link>
        );
      })}

      {/* Dark mode toggle */}
      <button
          onClick={triggerAnimation}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          disabled={isAnimating}
          aria-label="Toggle lights"
          className={`relative flex items-center justify-center mb-1.5 transition-opacity duration-300 ${
            isAnimating ? "opacity-50 cursor-default" : "opacity-100 cursor-pointer"
          }`}
        >
          <img
            src={toggleIcon}
            alt="Toggle dark mode"
            className={`h-10 w-auto transition-all duration-200 ${hovered ? "rotate-12" : "rotate-0"}`}
          />
        </button>
    </nav>
  );
}