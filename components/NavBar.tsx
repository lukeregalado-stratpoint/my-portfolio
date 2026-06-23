"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLightbulb } from "./LightbulbContext";
import { useEffect } from "react";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
];

export default function NavBar() {
  const pathname = usePathname();
  const { isBlackedOut, setLit } = useLightbulb();

  useEffect(() => {
    if (pathname !== "/") {
      setLit();
    }
  }, [pathname]);

  return (
    <nav className={`flex items-end h-14 mr-10 ${isBlackedOut ? "pointer-events-none" : ""}`}>
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
              className={`absolute inset-0 rounded-t-md border border-b-0 transition-all duration-300 ease-out
                ${isActive
                  ? "bg-[#439a86] border-[#439a86]"
                  : "bg-[#EDE8DC] border-[#2A2622]/15 group-hover:bg-[#439a86] group-hover:border-[#439a86]"
                }`}
            />
            {/* bookmark notch */}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-1.5 bg-[#E8E0D0] transition-colors duration-300" />
            {/* label */}
            <span
              className={`relative transition-colors duration-300
                ${isActive ? "text-[#FCFBF4]" : "text-[#5C564C] group-hover:text-[#FCFBF4]"}`}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}