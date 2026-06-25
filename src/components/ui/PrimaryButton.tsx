"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function PrimaryButton({
  children,
}: Props) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: .95,
      }}
      className="
      rounded-xl
      border
      border-red-600
      bg-red-600/10
      px-7
      py-3
      font-semibold
      text-white
      backdrop-blur-xl
      transition-all
      duration-300
      hover:bg-red-600
      hover:shadow-[0_0_30px_rgba(220,38,38,.6)]
      "
    >
      {children}
    </motion.button>
  );
}