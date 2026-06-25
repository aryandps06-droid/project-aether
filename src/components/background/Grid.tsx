"use client";

import { motion } from "framer-motion";

export default function GradientMesh() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -80, 80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-40
          top-20
          h-[650px]
          w-[650px]
          rounded-full
          bg-red-600/10
          blur-[180px]
        "
      />

      <motion.div
        animate={{
          x: [0, -120, 120, 0],
          y: [0, 120, -120, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-0
          bottom-0
          h-[700px]
          w-[700px]
          rounded-full
          bg-red-700/10
          blur-[220px]
        "
      />
    </>
  );
}