"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function HeroTyping() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="flex items-center"
    >
      <div
        className="
          rounded-xl
          border
          border-red-500/20
          bg-red-500/5
          px-5
          py-3
          backdrop-blur-xl
        "
      >
        <TypeAnimation
          sequence={[
            "AI / ML Developer", 2000,
            "Computer Science Engineer", 2000,
            "Full Stack Developer", 2000,
            "Deep Learning Enthusiast", 2000,
            "LLM Explorer", 2000,
            "Problem Solver", 2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="
            text-xl
            font-semibold
            text-red-400
          "
        />
      </div>
    </motion.div>
  );
}