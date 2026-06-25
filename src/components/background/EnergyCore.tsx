"use client";

import { motion } from "framer-motion";

export default function EnergyCore() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.25, 0.4, 0.25],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
      }}
      className="
        absolute
        left-1/2
        top-[35%]
        h-[450px]
        w-[450px]
        -translate-x-1/2
        rounded-full
        bg-red-500/20
        blur-[180px]
      "
    />
  );
}