"use client";

import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function ResumeButton() {
  return (
    <motion.a
      href="/resume.pdf"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="
        inline-flex
        items-center
        gap-2
        rounded-xl
        bg-red-600
        px-5
        py-2.5
        text-sm
        font-semibold
        text-white
        shadow-[0_0_25px_rgba(220,38,38,.35)]
        transition-all
        hover:bg-red-500
      "
    >
      <Download size={16} />
      Resume
    </motion.a>
  );
}