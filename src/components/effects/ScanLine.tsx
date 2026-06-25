"use client";

import { motion } from "framer-motion";

export default function ScanLine() {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: "100vh" }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      }}
      className="pointer-events-none absolute left-0 h-[2px] w-full bg-red-500/60 shadow-[0_0_20px_rgba(220,38,38,.8)]"
    />
  );
}