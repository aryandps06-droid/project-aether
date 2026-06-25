"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  Database,
  Activity,
  Sparkles,
} from "lucide-react";

const technologies = [
  {
    icon: Brain,
    name: "TensorFlow",
  },
  {
    icon: Cpu,
    name: "PyTorch",
  },
  {
    icon: Database,
    name: "Next.js",
  },
  {
    icon: Sparkles,
    name: "React",
  },
];

export default function AIStatusCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: { duration: 0.6 },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="
        absolute
        -right-10
        bottom-6
        w-72
        rounded-3xl
        border
        border-white/10
        bg-black/40
        p-6
        backdrop-blur-2xl
        shadow-[0_0_40px_rgba(220,38,38,.15)]
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            AETHER AI
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            System Status
          </h3>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-emerald-400">ONLINE</span>
        </div>
      </div>

      {/* Divider */}
      <div className="my-5 h-px bg-white/10" />

      {/* Tech Stack */}
      <div className="space-y-3">
        {technologies.map((tech) => {
          const Icon = tech.icon;

          return (
            <motion.div
              key={tech.name}
              whileHover={{ x: 5 }}
              className="flex items-center justify-between rounded-xl bg-white/5 p-3"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-red-400" />
                <span className="text-sm text-zinc-300">
                  {tech.name}
                </span>
              </div>

              <Activity className="h-4 w-4 text-emerald-400" />
            </motion.div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-6 rounded-2xl bg-red-500/10 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-zinc-400">
            System Health
          </span>

          <span className="font-bold text-white">
            99.8%
          </span>
        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "99.8%" }}
            transition={{
              duration: 2,
            }}
            className="h-full rounded-full bg-gradient-to-r from-red-500 to-red-300"
          />
        </div>
      </div>
    </motion.div>
  );
}