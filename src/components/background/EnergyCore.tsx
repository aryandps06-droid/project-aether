"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function EnergyCore() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      className="absolute left-1/2 top-[35%] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-red-500/20 blur-[180px]"
      initial={false}
      animate={
        mounted
          ? {
              scale: [1, 1.15, 1],
              opacity: [0.25, 0.4, 0.25],
            }
          : {
              scale: 1,
              opacity: 0.25,
            }
      }
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}