"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  children: ReactNode;
}

export default function SectionContainer({
  id,
  children,
}: Props) {
  return (
    <motion.section
      id={id}
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative py-36 px-6 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </motion.section>
  );
}