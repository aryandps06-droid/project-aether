"use client";

import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Badge */}

        <div className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2">
          <span className="text-sm uppercase tracking-[0.35em] text-red-400">
            Communication Terminal
          </span>
        </div>

        {/* Heading */}

        <h2 className="mt-6 text-5xl font-black text-white lg:text-7xl">
          Let's Connect
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
  I'm currently open to internship opportunities, freelance work,
  technical collaborations, and AI-focused projects. Whether you have
  an innovative idea or simply want to connect, I'd be happy to hear from you.
</p>

<div className="mt-8 inline-flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-3">
  <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>

  <span className="font-medium text-green-400">
    Available for Internship & Freelance
  </span>
</div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* Left Side */}

          <div className="space-y-6">

            {[
  {
    icon: Mail,
    title: "Email",
    value: "jha442749@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9078613586",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Odisha, India",
  },

            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ x: 10 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition"
                >
                  <div className="flex items-center gap-5">

                    <div className="rounded-2xl bg-red-500/10 p-4">
                      <Icon className="text-red-400" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-zinc-400">
                        {item.value}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}

            {/* Social Icons */}

            <div className="flex gap-5 pt-5">

              {[FaGithub, FaLinkedin].map((Icon, index) => (
                <motion.button
                  key={index}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    text-white
                    transition-all
                    hover:border-red-500
                    hover:bg-red-500/10
                  "
                >
                  <Icon size={24} />
                </motion.button>
              ))}

            </div>

          </div>

          {/* Right Side */}

          <motion.form
            whileHover={{
              y: -5,
            }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-8
              backdrop-blur-xl
            "
          >

            <input
              type="text"
              placeholder="Your Name"
              className="mb-5 w-full rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="mb-5 w-full rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="mb-6 w-full rounded-xl border border-white/10 bg-black/20 p-4 text-white outline-none"
            />

            <button
              type="submit"
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                bg-red-600
                px-8
                py-4
                text-white
                transition
                hover:bg-red-500
              "
            >
              <Send size={18} />
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}