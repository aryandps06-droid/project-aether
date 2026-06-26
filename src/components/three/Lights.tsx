"use client";

import { Environment } from "@react-three/drei";

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.35} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
        color="#ff6666"
      />

      <pointLight
        position={[0, 0, 2]}
        intensity={25}
        color="#ff3333"
      />

      <pointLight
        position={[2, 1, 2]}
        intensity={8}
        color="#ffffff"
      />

      <Environment preset="city" />
    </>
  );
}