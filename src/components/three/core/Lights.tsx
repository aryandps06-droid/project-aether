"use client";

import { Environment } from "@react-three/drei";

export default function Lights() {
  return (
    <>
      {/* Ambient */}
      <ambientLight intensity={0.35} />

      {/* Main Red Light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
        color="#ff5555"
      />

      {/* Front Glow */}
      <pointLight
        position={[0, 0, 3]}
        intensity={18}
        color="#ff3333"
      />

      {/* White Highlight */}
      <pointLight
        position={[-3, 2, 4]}
        intensity={8}
        color="#ffffff"
      />

      {/* Bottom Fill */}
      <pointLight
        position={[0, -3, 1]}
        intensity={4}
        color="#dc2626"
      />

      <Environment preset="city" />
    </>
  );
}