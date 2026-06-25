"use client";

import { motion } from "framer-motion";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ResumeButton from "./ResumeButton";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-x-0 top-4 z-50"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-8 py-4 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,.45)]">

        <Logo />

        <NavLinks />

        <ResumeButton />

      </div>
    </motion.nav>
  );
}