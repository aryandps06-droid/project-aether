"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaKaggle,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

const socials = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/yourusername",
  },
  {
    name: "Kaggle",
    icon: FaKaggle,
    href: "https://kaggle.com/yourusername",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    href: "https://leetcode.com/yourusername",
  },
  {
    name: "Email",
    icon: HiOutlineMail,
    href: "mailto:your@email.com",
  },
];

export default function HeroSocials() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {socials.map((social, index) => {
        const Icon = social.icon;

        return (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              y: -6,
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              group
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              px-5
              py-3
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-red-500/40
              hover:bg-red-500/10
              hover:shadow-[0_0_25px_rgba(220,38,38,.2)]
            "
          >
            <Icon
              size={20}
              className="text-zinc-300 transition group-hover:text-red-400"
            />

            <span className="text-sm font-medium text-zinc-300 group-hover:text-white">
              {social.name}
            </span>
          </motion.a>
        );
      })}
    </div>
  );
}