"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import EnergyCore from "@/components/background/EnergyCore";
import Grid from "@/components/background/Grid";
import ScanLine from "@/components/effects/ScanLine";
const bootMessages = [
  "Initializing Neural Core...",
  "Loading Tensor Engine...",
  "Connecting Neural Network...",
  "Loading AI Models...",
  "Activating Computer Vision...",
  "Loading LLM Engine...",
  "Authenticating Visitor...",
  "Access Granted",
];

interface BootLoaderProps {
  onComplete: () => void;
}

export default function BootLoader({ onComplete }: BootLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;

        const step = Math.floor(next / 14);

        if (step < bootMessages.length) {
          setMessageIndex(step);
        }

        if (next >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onComplete();
          }, 800);

          return 100;
        }

        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] overflow-hidden bg-[#050505]"
      >
        
        
        <Grid />
        <ScanLine />
        <EnergyCore />
       
        {/* Glow */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[200px]" />
        </div>

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative flex h-full flex-col items-center justify-center px-8">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="text-center text-6xl font-black tracking-[0.55em] text-white md:text-8xl drop-shadow-[0_0_35px_rgba(220,38,38,.5)]"
          >
            AETHER
          </motion.h1>

          <motion.div
            className="mt-8 h-[2px] bg-red-600 shadow-[0_0_20px_red]"
            animate={{
              width: 320,
            }}
            initial={{
              width: 0,
            }}
            transition={{
              duration: 1.2,
            }}
          />

          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 font-mono uppercase tracking-[0.3em] text-red-500 text-center"
          >
            {bootMessages[messageIndex]}
          </motion.p>

          <div className="mt-10 w-[320px]">
            <div className="h-[6px] overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-red-600"
                animate={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <div className="mt-3 flex justify-between text-xs font-mono text-zinc-400">
              <span>{progress}%</span>
              <span>AI BOOT SEQUENCE</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}