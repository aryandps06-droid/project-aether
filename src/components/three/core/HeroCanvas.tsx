"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Scene from "./Scene";

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 2]}
        camera={{
          position: [0, 0, 6],
          fov: 45,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}