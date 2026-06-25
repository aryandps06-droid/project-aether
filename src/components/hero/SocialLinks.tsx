"use client";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="mt-10 flex gap-5">
      <a
        href="#"
        className="rounded-full border border-white/10 bg-white/5 p-4 transition hover:border-red-500 hover:text-red-500"
      >
        <FaGithub size={20} />
      </a>

      <a
        href="#"
        className="rounded-full border border-white/10 bg-white/5 p-4 transition hover:border-red-500 hover:text-red-500"
      >
        <FaLinkedin size={20} />
      </a>
    </div>
  );
}