"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function EnergyHalo() {
  const halo = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!halo.current) return;

    const t = state.clock.elapsedTime;

    halo.current.rotation.z += 0.002;
    halo.current.rotation.x =
      Math.sin(t * 0.6) * 0.08;

    halo.current.rotation.y =
      Math.cos(t * 0.5) * 0.08;

    const s =
      1 +
      Math.sin(t * 2.5) * 0.025;

    halo.current.scale.setScalar(s);
  });

  return (
    <mesh ref={halo}>
      <torusGeometry args={[1.55, 0.04, 32, 300]} />

      <meshPhysicalMaterial
        color="#ff5555"
        emissive="#ff3333"
        emissiveIntensity={8}
        transparent
        opacity={0.35}
        roughness={0}
        metalness={1}
        clearcoat={1}
        transmission={0.4}
      />
    </mesh>
  );
}