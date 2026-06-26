"use client";

import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroLeft() {
  return (
    <div className="max-w-2xl">
      <HeroBadge />

      <h1 className="mt-8 text-6xl font-black leading-tight lg:text-7xl">
        Aspiring Full Stack Enginner
        <br />
        <span className="text-red-500">
          & Currently a Full Stack Developer(B)
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
        I design and build premium AI-powered software,
        intelligent web applications, and immersive digital
        experiences using modern technologies including
        Artificial Intelligence, Machine Learning, Next.js,
        React, Python, and Cloud Computing.
      </p>

      <HeroButtons />

      <HeroStats />
    </div>
  );
}