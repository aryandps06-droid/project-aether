"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import FloatingIcons from "./FloatingIcons";
import AIStatusCard from "./AIStatusCard";

export default function HeroProfile() {
  return (
    <div className="relative flex items-center justify-center">

      {/* AI Status Card */}
      <AIStatusCard />

      {/* Outer Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[390px] w-[390px] rounded-full border border-red-500/30"
      />

      {/* Inner Dashed Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[340px] w-[340px] rounded-full border border-dashed border-red-400/20"
      />

      {/* Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.8, 0.35],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[320px] w-[320px] rounded-full bg-red-600/20 blur-[100px]"
      />

      {/* Floating Technologies */}
      <FloatingIcons />

      {/* Profile */}
      <motion.div
        whileHover={{
          scale: 1.03,
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          h-[300px]
          w-[300px]
          overflow-hidden
          rounded-full
          border
          border-red-500/40
          bg-white/5
          backdrop-blur-xl
          shadow-[0_0_80px_rgba(220,38,38,.35)]
        "
      >
        <Image
          src="/profile.png"
          alt="Aryan"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Orbit Dot 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[390px] w-[390px]"
      >
        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-red-500 shadow-[0_0_20px_rgba(220,38,38,.9)]" />
      </motion.div>

      {/* Orbit Dot 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[340px] w-[340px]"
      >
        <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-red-400 shadow-[0_0_20px_rgba(220,38,38,.8)]" />
      </motion.div>
    </div>
  );
}