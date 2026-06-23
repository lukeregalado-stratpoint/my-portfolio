"use client";

import { useLightbulb } from "./LightbulbContext";

export default function BlackoutBackground() {
  const { isBlackedOut } = useLightbulb();

  if (!isBlackedOut) return null;

  return (
    <div className="fixed inset-0 z-100 bg-black pointer-events-none" />
  );
}