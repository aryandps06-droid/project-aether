"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming Languages",
    emoji: "💻",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
    ],
  },
  {
    title: "Frontend Development",
    emoji: "🎨",
    skills: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "React",
      "Next.js",
      "Framer Motion",
    ],
  },
  {
    title: "Backend & Database",
    emoji: "⚙️",
    skills: [
      "Django",
      "PostgreSQL",
      "REST APIs",
      "Authentication",
      "Database Design",
    ],
  },
  {
    title: "Artificial Intelligence",
    emoji: "🤖",
    skills: [
      "Machine Learning",
      "TensorFlow",
      "OpenCV",
      "Scikit-Learn",
      "LLMs",
      "AI Agents",
    ],
  },
  {
    title: "Developer Tools",
    emoji: "🛠️",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
    ],
  },
  {
    title: "Currently Learning",
    emoji: "📚",
    skills: [
      "LangChain",
      "Computer Vision",
      "Cloud Computing",
      "System Design",
      "Advanced AI",
      "Docker",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
          <span className="text-red-400 tracking-[0.35em] uppercase text-sm">
            Capability Matrix
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-5xl font-black text-white lg:text-7xl"
        >
          Skills & Technologies
        </motion.h2>

        <p className="mt-6 max-w-3xl text-lg leading-9 text-zinc-400">
          A collection of technologies, frameworks, and AI tools that I use to
          build modern intelligent applications.
        </p>

        {/* Grid */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
                transition
                hover:border-red-500/30
              "
            >
              <h3 className="mb-8 text-2xl font-bold text-white">
                {group.emoji} {group.title}
              </h3>

              <div className="flex flex-wrap gap-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="
                      rounded-full
                      border
                      border-red-500/20
                      bg-red-500/5
                      px-5
                      py-2
                      text-sm
                      text-zinc-300
                      transition
                      hover:border-red-500
                      hover:bg-red-500/20
                      hover:text-white
                    "
                  >
                    {skill}
                  </div>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}