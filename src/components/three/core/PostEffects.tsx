"use client";

import { Bloom } from "@react-three/postprocessing";

export default function PostEffects() {
  return (
    <Bloom
      intensity={1.2}
      luminanceThreshold={0.2}
      luminanceSmoothing={0.9}
      mipmapBlur
    />
  );
}