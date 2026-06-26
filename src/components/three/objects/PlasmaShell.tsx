"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import { COLORS } from "../utils/colors";
import { SHELL } from "../utils/constants";

export default function PlasmaShell() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.y += 0.001;
    ref.current.rotation.x += 0.0003;

    const s =
      1 +
      Math.sin(state.clock.elapsedTime * 1.5) * 0.02;

    ref.current.scale.setScalar(s);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[SHELL.radius, 64, 64]} />

      <meshPhysicalMaterial
        color={COLORS.glow}
        transparent
        opacity={0.05}
        transmission={1}
        thickness={1.5}
        roughness={0}
        metalness={0}
        emissive={COLORS.glow}
        emissiveIntensity={3}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}