"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function OuterGlow() {
  const glow = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!glow.current) return;

    const t = state.clock.elapsedTime;

    const s =
      2.4 +
      Math.sin(t * 1.3) * 0.08;

    glow.current.scale.setScalar(s);

    const material =
      glow.current.material as THREE.MeshBasicMaterial;

    material.opacity =
      0.08 +
      Math.sin(t * 2) * 0.02;
  });

  return (
    <mesh ref={glow}>
      <sphereGeometry
        args={[1, 64, 64]}
      />

      <meshBasicMaterial
        color="#ff4040"
        transparent
        opacity={0.08}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}