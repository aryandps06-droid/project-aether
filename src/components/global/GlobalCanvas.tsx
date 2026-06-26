"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import GlobalParticles from "./GlobalParticles";

export default function GlobalCanvas() {
  return (
    <div className="fixed inset-0 -z-40 pointer-events-none">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 60,
        }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <GlobalParticles />
        </Suspense>
      </Canvas>
    </div>
  );
}