"use client";

import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import { useLightbulb } from "@/components/LightbulbContext";

export default function Header() {
  const { isBlackedOut } = useLightbulb();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-70 border-b transition-colors duration-500 ${
        isBlackedOut
          ? "bg-[#1a1a1a] border-[#ffffff]/10"
          : "bg-[#E8E0D0] border-[#2A2622]/10"
      }`}
    >
      <div className="px-8 h-14 flex items-center justify-between">
        <Link href="/" className="group inline-flex shrink-0 w-auto">
          <Image
            src="/luke-regalado-nametag.png"
            alt="Luke Regalado - Home"
            width={316}
            height={40}
            style={{ height: "auto", width: "auto" }}
            className={`ml-10 transition-all duration-500 ease-out group-hover:opacity-70 group-active:opacity-50 group-active:scale-95 ${
              isBlackedOut ? "invert" : "opacity-100"
            }`}
          />
        </Link>
        <NavBar />
      </div>
    </header>
  );
}