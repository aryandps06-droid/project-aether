"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-7 py-3 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-red-600 text-white shadow-[0_0_30px_rgba(220,38,38,.45)] hover:bg-red-500 hover:scale-105",

    secondary:
      "border border-white/15 bg-white/5 backdrop-blur-xl text-white hover:border-red-500 hover:bg-red-500/10",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={cn(base, styles[variant], className)}
    >
      {children}
    </motion.button>
  );
}