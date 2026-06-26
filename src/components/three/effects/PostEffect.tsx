"use client";

import { Bloom } from "@react-three/postprocessing";

export default function PostEffects() {
  return (
    <Bloom
      intensity={1.4}
      luminanceThreshold={0.15}
      luminanceSmoothing={0.9}
      mipmapBlur
    />
  );
}