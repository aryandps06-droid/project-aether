"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function GlassCard({
  children,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        hover:border-red-500/30
        hover:shadow-[0_0_40px_rgba(220,38,38,.15)]
      "
    >
      {children}
    </motion.div>
  );
}