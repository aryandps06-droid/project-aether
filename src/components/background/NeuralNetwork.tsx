"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

export default function NeuralNetwork() {
  const nodes = useMemo(
    () =>
      Array.from({ length: 80 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden">

      {nodes.map((node, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.15, 0.8, 0.15],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4,
            delay: node.delay,
            repeat: Infinity,
          }}
          className="absolute rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,.8)]"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: node.size,
            height: node.size,
          }}
        />
      ))}

    </div>
  );
}