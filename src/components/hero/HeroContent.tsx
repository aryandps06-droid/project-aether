"use client";

import { motion } from "framer-motion";
import HeroTitle from "./HeroTitle";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="space-y-10"
    >
      <HeroTitle />

      <HeroButtons />

      <HeroStats />
    </motion.div>
  );
}