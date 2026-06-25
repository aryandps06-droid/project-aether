"use client";

import { motion } from "framer-motion";
import {
  Download,
  Send,
} from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-5">

      {/* Resume Button */}
      <motion.a
        href="/resume.pdf"
        whileHover={{
          y: -4,
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="
          group
          relative
          inline-flex
          items-center
          gap-3
          overflow-hidden
          rounded-2xl
          bg-gradient-to-r
          from-red-600
          to-red-500
          px-8
          py-4
          font-semibold
          text-white
          shadow-[0_0_35px_rgba(220,38,38,.35)]
          transition-all
          duration-300
        "
      >
        <div className="absolute inset-0 translate-y-full bg-white/10 transition duration-500 group-hover:translate-y-0" />

        <Download size={18} />

        <span className="relative">
          Download Resume
        </span>
      </motion.a>

      {/* Contact Button */}
      <motion.a
        href="#contact"
        whileHover={{
          y: -4,
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="
          group
          inline-flex
          items-center
          gap-3
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          px-8
          py-4
          font-semibold
          text-white
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-red-500/40
          hover:bg-red-500/10
          hover:shadow-[0_0_30px_rgba(220,38,38,.15)]
        "
      >
        <Send
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />

        Contact Me
      </motion.a>

    </div>
  );
}