"use client";

import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
} from "lucide-react";

const certifications = [
  {
    title: "IBM Industry Visit & Technical Assessment",
    issuer: "IBM",
    status: "Completed",
  },
  {
    title: "IBM Skills Certification",
    issuer: "IBM",
    status: "Completed",
  },
  {
    title: "Bharatiya Antariksh Hackathon",
    issuer: "Participation Certificate",
    status: "Completed",
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    issuer: "Currently Learning",
    status: "In Progress",
  },
];
export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-32 px-6 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        <div className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2">
          <span className="text-sm uppercase tracking-[0.35em] text-red-400">
            Certifications
          </span>
        </div>

        <h2 className="mt-6 text-5xl font-black text-white lg:text-7xl">
          Learning Never Stops
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
          Professional certifications and continuous learning that strengthen
          my technical foundation.
        </p>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {certifications.map((item) => (
            <motion.div
              key={item.title}
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
              "
            >

              <div className="flex items-center justify-between">

                <Award className="text-red-400" />

                <div className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400">
                  {item.status}
                </div>

              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-zinc-400">
                {item.issuer}
              </p>

              <div className="mt-8 flex items-center gap-3">

                <ShieldCheck className="text-green-400" />

                <span className="text-zinc-400">
                  Verified Learning
                </span>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}