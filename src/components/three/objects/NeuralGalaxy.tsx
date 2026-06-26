"use client";

import GalaxyLayer from "./GalaxyLayer";

export default function NeuralGalaxy() {
  return (
    <>
      <GalaxyLayer
        count={700}
        spread={6}
        size={0.04}
        opacity={0.9}
        speed={0.02}
      />

      <GalaxyLayer
        count={1000}
        spread={10}
        size={0.03}
        opacity={0.55}
        speed={0.012}
      />

      <GalaxyLayer
        count={1400}
        spread={16}
        size={0.02}
        opacity={0.3}
        speed={0.006}
      />
    </>
  );
}