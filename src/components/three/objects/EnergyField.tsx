"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function EnergyField() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.y += 0.001;
    ref.current.rotation.x += 0.0004;

    const t = state.clock.elapsedTime;

    const s = 1.55 + Math.sin(t * 1.5) * 0.03;

    ref.current.scale.set(s, s, s);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 64, 64]} />

      <meshPhysicalMaterial
        color="#ff4040"
        transparent
        opacity={0.05}
        roughness={0}
        metalness={0}
        transmission={1}
        thickness={1.5}
        clearcoat={1}
        emissive="#ff3030"
        emissiveIntensity={2.2}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}