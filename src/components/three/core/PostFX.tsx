"use client";

import {
  Bloom,
  ChromaticAberration,
  Vignette,
} from "@react-three/postprocessing";

import { BlendFunction } from "postprocessing";

export default function PostFX() {
  return (
    <>
      <Bloom
        intensity={0.65}
        luminanceThreshold={0.4}
        luminanceSmoothing={0.9}
        mipmapBlur
      />

      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL}
        offset={[0.0005, 0.0005]}
      />

      <Vignette
        eskil={false}
        offset={0.2}
        darkness={0.85}
      />
    </>
  );
}