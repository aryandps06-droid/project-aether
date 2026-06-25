"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 35,
        mass: 0.4,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[999999]"
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
    >
        <defs>
            <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="blur"/>
                <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>

        <path
            d="M6 5L26 16L17 19L14 29L6 5Z"
            fill="white"
            stroke="#ff2b45"
            strokeWidth="1.6"
            filter="url(#glow)"
        />

    </svg>

    </motion.div>
  );
}