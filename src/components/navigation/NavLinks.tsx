"use client";

import { navigation } from "@/data/navigation";
import { motion } from "framer-motion";

export default function NavLinks() {
  return (
    <ul className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => (
        <motion.li
          key={item.id}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href={`#${item.id}`}
            className="
              relative
              text-sm
              font-medium
              text-zinc-400
              transition-all
              duration-300
              hover:text-white
              after:absolute
              after:left-0
              after:-bottom-2
              after:h-[2px]
              after:w-0
              after:bg-red-500
              after:transition-all
              after:duration-300
              hover:after:w-full
            "
          >
            {item.label}
          </a>
        </motion.li>
      ))}
    </ul>
  );
}