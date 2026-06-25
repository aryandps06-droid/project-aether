"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Rocket,
  Brain,
  Award,
} from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Project AETHER",
    subtitle: "Premium AI Portfolio",
    description:
      "Designed and developed Project AETHER, a futuristic AI-inspired portfolio using Next.js, TypeScript, Tailwind CSS, Framer Motion, and modern UI/UX principles inspired by Apple, OpenAI, and Vercel.",
  },
  {
    icon: Rocket,
    title: "Bharatiya Antariksh Hackathon",
    subtitle: "National Hackathon Participant",
    description:
      "Participated in the Bharatiya Antariksh Hackathon, collaborating on innovative ideas and building technology-driven solutions while working under strict timelines.",
  },
  {
    icon: Brain,
    title: "IBM Industry Visit",
    subtitle: "Technical Assessment",
    description:
      "Visited IBM through my college, participated in the technical assessment, and earned a participation certificate while gaining exposure to enterprise technologies and industry practices.",
  },
  {
    icon: Award,
    title: "AI & Full Stack Journey",
    subtitle: "Continuous Learning",
    description:
      "Continuously improving my skills by building real-world projects with React, Next.js, Django, Python, PostgreSQL, and exploring Artificial Intelligence, Machine Learning, Computer Vision, LLMs, and AI Agents.",
  },
];
export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative py-32 px-6 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Badge */}

        <div className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2">
          <span className="text-sm uppercase tracking-[0.35em] text-red-400">
            Achievement Console
          </span>
        </div>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-5xl font-black text-white lg:text-7xl"
        >
          Achievements
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 max-w-3xl text-lg leading-9 text-zinc-400"
        >
          Milestones that reflect my continuous growth, technical curiosity,
          and passion for building impactful software.
        </motion.p>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="
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

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10">
                  <Icon className="h-8 w-8 text-red-400" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-red-400">
                  {item.subtitle}
                </p>

                <p className="mt-6 leading-8 text-zinc-400">
                  {item.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}