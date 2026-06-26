"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
      }}
      className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 backdrop-blur-xl"
    >
      <Sparkles className="h-4 w-4 text-red-500" />

      <span className="text-sm font-medium tracking-[0.25em] text-red-400 uppercase">
        Project AETHER
      </span>
    </motion.div>
  );
}