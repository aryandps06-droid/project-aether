"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export default function Logo() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex cursor-pointer items-center gap-4"
    >
      {/* Logo Icon */}
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-600/20 to-black backdrop-blur-xl shadow-[0_0_35px_rgba(220,38,38,.35)]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-2xl border border-red-500/20"
        />

        <Cpu
          size={28}
          className="text-red-500"
        />
      </div>

      {/* Text */}
      <div>
        <h1 className="text-2xl font-black tracking-[0.35em] text-white">
          AETHER
        </h1>

        <p className="mt-1 text-xs tracking-[0.35em] text-red-500">
          AI • ML • PORTFOLIO
        </p>
      </div>
    </motion.div>
  );
}