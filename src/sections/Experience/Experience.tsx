"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Rocket,
  BrainCircuit,
} from "lucide-react";

const timeline = [
  {
    year: "2024",
    title: "Started B.Tech in Computer Science & Engineering (Core)",
    organization: "University",
    icon: GraduationCap,
    description:
      "Began my Computer Science journey with a strong focus on programming fundamentals, data structures, algorithms, software engineering, and problem solving while developing an interest in Artificial Intelligence.",
  },
  {
    year: "2025",
    title: "AI & Full Stack Development",
    organization: "Personal Projects",
    icon: BrainCircuit,
    description:
      "Started building modern web applications and AI-powered solutions using React, Next.js, TypeScript, Django, Python, PostgreSQL, Tailwind CSS, and Framer Motion while continuously improving software architecture and UI/UX skills.",
  },
  {
    year: "2025",
    title: "Innovation & Technical Events",
    organization: "IBM • Bharatiya Antariksh Hackathon",
    icon: Rocket,
    description:
      "Participated in the Bharatiya Antariksh Hackathon and attended an IBM industry visit, successfully completing the technical assessment and gaining practical exposure to real-world software development and innovation.",
  },
  {
    year: "Present",
    title: "Building the Future",
    organization: "Project AETHER • KoylaVault AI",
    icon: Briefcase,
    description:
      "Currently building premium AI-focused projects, exploring Machine Learning, Computer Vision, LLMs, AI Agents, and actively seeking internship opportunities where I can contribute, learn, and grow as a Software Engineer.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32 px-6 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2"
        >
          <span className="text-sm uppercase tracking-[0.35em] text-red-400">
            Mission Timeline
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-5xl font-black text-white lg:text-7xl"
        >
          Experience & Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-3xl text-lg leading-9 text-zinc-400"
        >
          My journey as a Computer Science student, continuously learning,
          building intelligent software, and exploring cutting-edge AI
          technologies.
        </motion.p>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Vertical Line */}

          <div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-red-500 via-red-500/30 to-transparent" />

          <div className="space-y-16">

            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: -40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                  }}
                  viewport={{ once: true }}
                  className="relative flex gap-8"
                >

                  {/* Timeline Icon */}

                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-red-500 bg-black shadow-[0_0_25px_rgba(220,38,38,.35)]">
                    <Icon size={18} className="text-red-400" />
                  </div>

                  {/* Card */}

                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.01,
                    }}
                    className="
                      flex-1
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-8
                      backdrop-blur-xl
                      transition-all
                      hover:border-red-500/30
                      hover:shadow-[0_0_35px_rgba(220,38,38,.15)]
                    "
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                      <div>

                        <p className="text-sm uppercase tracking-[0.25em] text-red-400">
                          {item.year}
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-zinc-400">
                          {item.organization}
                        </p>

                      </div>

                    </div>

                    <p className="mt-6 leading-8 text-zinc-400">
                      {item.description}
                    </p>

                  </motion.div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}