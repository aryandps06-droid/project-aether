"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "15+",
    label: "Projects",
  },
  {
    number: "10+",
    label: "Technologies",
  },
  {
    number: "5+",
    label: "Certifications",
  },
  {
    number: "24/7",
    label: "Learning",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.12,
          }}
          whileHover={{
            y: -6,
            scale: 1.04,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            p-6
            backdrop-blur-2xl
            transition-all
            duration-300
            hover:border-red-500/40
            hover:shadow-[0_0_40px_rgba(220,38,38,.15)]
          "
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

          <h2 className="relative text-3xl font-black text-white">
            {stat.number}
          </h2>

          <p className="relative mt-2 text-sm uppercase tracking-[0.25em] text-zinc-500">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}