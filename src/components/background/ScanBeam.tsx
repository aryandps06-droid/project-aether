"use client";

import { motion } from "framer-motion";

export default function ScanBeam() {
  return (
    <motion.div
      animate={{
        y: ["-10%", "110%"],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
        absolute
        left-0
        h-40
        w-full
        bg-gradient-to-b
        from-transparent
        via-red-500/10
        to-transparent
      "
    />
  );
}