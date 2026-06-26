"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScanBeam() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute left-0 h-40 w-full bg-gradient-to-b from-transparent via-red-500/5 to-transparent" />
    );
  }

  return (
    <motion.div
      className="absolute left-0 h-40 w-full bg-gradient-to-b from-transparent via-red-500/5 to-transparent"
      animate={{
        y: ["-30%", "130%"],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}