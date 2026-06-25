"use client";

import { motion } from "framer-motion";
import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiReact,
  SiDocker,
  SiMongodb,
} from "react-icons/si";

const icons = [
  { Icon: SiPython, x: -180, y: -80, color: "#3776AB" },
  { Icon: SiTensorflow, x: 170, y: -90, color: "#FF6F00" },
  { Icon: SiPytorch, x: -170, y: 100, color: "#EE4C2C" },
  { Icon: SiReact, x: 170, y: 120, color: "#61DAFB" },
  { Icon: SiDocker, x: 0, y: -180, color: "#2496ED" },
  { Icon: SiMongodb, x: 0, y: 180, color: "#47A248" },
];

export default function FloatingIcons() {
  return (
    <>
      {icons.map(({ Icon, x, y, color }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: "50%",
            top: "50%",
            x,
            y,
          }}
          animate={{
            y: [y, y - 15, y],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="rounded-full border border-white/10 bg-black/40 p-3 backdrop-blur-xl">
            <Icon size={28} color={color} />
          </div>
        </motion.div>
      ))}
    </>
  );
}