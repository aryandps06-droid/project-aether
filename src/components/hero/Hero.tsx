"use client";

import { motion } from "framer-motion";

import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import HeroScroll from "./HeroScroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        pt-28
        pb-20
      "
    >
      {/* Background */}
      

      {/* Blur Glow */}
      <div className="absolute left-[-250px] top-20 h-[600px] w-[600px] rounded-full bg-red-600/10 blur-[170px]" />

      <div className="absolute right-[-300px] bottom-[-100px] h-[500px] w-[500px] rounded-full bg-red-500/10 blur-[180px]" />

      {/* Container */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-7xl
          items-center
          gap-20
          px-6
          lg:grid-cols-2
          lg:px-10
        "
      >
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
          }}
        >
          <HeroLeft />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
        >
          <HeroRight />
        </motion.div>
      </div>

      <HeroScroll />
    </section>
  );
}