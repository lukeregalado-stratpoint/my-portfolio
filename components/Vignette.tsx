"use client";

import { motion } from "framer-motion";

export default function Vignette() {
  return (
    <motion.div
      className="fixed -inset-4 z-2 pointer-events-none"
      style={{
        backgroundImage: "url('/home-vignette.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        mixBlendMode: "multiply",
      }}
      animate={{ y: [10, -20, 5] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}