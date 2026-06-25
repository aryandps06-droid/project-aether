"use client";

import { motion } from "framer-motion";

export default function HeroScroll() {
  return (
    <motion.div
      animate={{
        y: [0, 12, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <div className="flex h-16 w-8 justify-center rounded-full border border-white/20">
        <motion.div
          animate={{
            y: [0, 22, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-2 h-3 w-3 rounded-full bg-red-500"
        />
      </div>
    </motion.div>
  );
}