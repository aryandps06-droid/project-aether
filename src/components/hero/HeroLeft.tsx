"use client";

import HeroTitle from "./HeroTitle";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import HeroStats from "./HeroStats";

export default function HeroLeft() {
  return (
    <div className="max-w-2xl">

      <HeroTitle />

      <div className="mt-10">
        <HeroButtons />
      </div>

      <div className="mt-8">
        <HeroSocials />
      </div>

      <div className="mt-12">
        <HeroStats />
      </div>

    </div>
  );
}