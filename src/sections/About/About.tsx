"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden px-6 py-32 lg:px-20"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-red-600/10 blur-[180px]" />

      <div className="mx-auto max-w-7xl">

        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2 backdrop-blur-xl"
        >
          <span className="text-sm uppercase tracking-[0.35em] text-red-400">
            Identity Module
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-white lg:text-7xl"
        >
          About Me
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          viewport={{ once: true }}
          className="mt-8 max-w-3xl text-lg leading-9 text-zinc-400"
        >
          I'm Aryan, a Computer Science & Engineering (Core) student passionate
          about Artificial Intelligence, Machine Learning, and Full Stack
          Development. I enjoy building intelligent applications that combine
          creativity, performance, and real-world impact.
        </motion.p>

      </div>
    </section>
  );
}