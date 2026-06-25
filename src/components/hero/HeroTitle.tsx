"use client";

import { motion } from "framer-motion";
import HeroTyping from "./HeroTyping";

export default function HeroTitle() {
  return (
    <>
      {/* Availability Badge */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 backdrop-blur-xl"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />

        <span className="text-sm font-medium text-emerald-300">
          Available for Internship & Freelance
        </span>
      </motion.div>

      {/* Small Heading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="
          mt-8
          text-sm
          font-semibold
          uppercase
          tracking-[0.45em]
          text-red-500
        "
      >
        Computer Science & Engineering (Core)
      </motion.p>

      {/* Main Heading */}
      <motion.h1
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        className="
          mt-5
          text-6xl
          font-black
          leading-[0.92]
          tracking-tight
          text-white
          lg:text-[7rem]
        "
      >
        Building

        <span className="block bg-gradient-to-r from-red-500 via-red-400 to-white bg-clip-text text-transparent">
          Tomorrow's
        </span>

        Intelligence.
      </motion.h1>

      {/* Typing */}
      <div className="mt-8">
        <HeroTyping />
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          delay: 0.8,
          duration: 0.8,
        }}
        className="mt-7 h-px w-40 origin-left bg-gradient-to-r from-red-500 to-transparent"
      />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
        }}
        className="
          mt-8
          max-w-2xl
          text-lg
          leading-9
          text-zinc-400
        "
      >
        I'm{" "}
        <span className="font-semibold text-white">
          Aryan
        </span>
        , a Computer Science & Engineering (Core) student passionate about
        <span className="text-white"> Artificial Intelligence</span>,
        <span className="text-white"> Machine Learning</span>,
        <span className="text-white"> Full-Stack Development</span>,
        and building intelligent software that solves real-world problems.

        <br />
        <br />

        I enjoy transforming ideas into scalable applications while
        continuously learning modern AI technologies, LLMs, and cloud-native
        development.
      </motion.p>
    </>
  );
}