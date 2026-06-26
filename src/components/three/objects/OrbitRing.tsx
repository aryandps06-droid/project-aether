"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type Props = {
  radius: number;
  speed: number;
  tilt: [number, number, number];
};

export default function OrbitRing({
  radius,
  speed,
  tilt,
}: Props) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.z += speed * delta;
  });

  return (
    <mesh ref={ref} rotation={tilt}>
      <torusGeometry args={[radius, 0.012, 16, 180]} />

      <meshStandardMaterial
        color="#ff5555"
        emissive="#ff4444"
        emissiveIntensity={3}
        metalness={1}
        roughness={0.05}
      />
    </mesh>
  );
}