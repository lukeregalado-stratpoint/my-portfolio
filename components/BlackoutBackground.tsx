"use client";

import Image from "next/image";
import { useLightbulb } from "./LightbulbContext";

export default function BlackoutBackground() {
  const { isBlackedOut } = useLightbulb();

  return (
    <div
      className="fixed inset-x-0 bottom-0 top-0 z-0 pointer-events-none transition-opacity duration-500"
      style={{ opacity: isBlackedOut ? 1 : 0 }}
    >
      <Image
        src="/home-dark-mode.png"
        alt=""
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}