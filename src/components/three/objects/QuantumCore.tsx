"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import { COLORS } from "../utils/colors";
import { CORE, INNER_CORE } from "../utils/constants";

export default function QuantumCore() {
  const outer = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.Mesh>(null);
  const glow = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (outer.current) {
      outer.current.rotation.y += 0.002;
      outer.current.rotation.x += 0.0004;

      const s = 1 + Math.sin(t * 2) * 0.015;
      outer.current.scale.setScalar(s);
    }

    if (inner.current) {
      inner.current.rotation.y -= 0.005;
      inner.current.rotation.z += 0.003;

      const s = 1 + Math.sin(t * 3) * 0.02;
      inner.current.scale.setScalar(s);
    }

    if (glow.current) {
      const s = 1.4 + Math.sin(t * 2) * 0.03;
      glow.current.scale.setScalar(s);

      const material = glow.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.18 + Math.sin(t * 3) * 0.03;
    }
  });

  return (
    <group>
      {/* Outer Crystal */}
      <mesh ref={outer}>
        <icosahedronGeometry args={[0.5, 8]} />

        <meshPhysicalMaterial
          color="#ff5555"
          emissive="#ff3333"
          emissiveIntensity={2.2}
          roughness={0}
          metalness={1}
          clearcoat={1}
          clearcoatRoughness={0}
          transmission={0.45}
          thickness={0.45}
        />
      </mesh>

      {/* Inner Core */}
      <mesh ref={inner}>
        <octahedronGeometry args={[0.18, 2]} />

        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={2.5}
        />
      </mesh>

      {/* Soft Glow */}
      <mesh ref={glow}>
        <sphereGeometry args={[0.75, 32, 32]} />

        <meshBasicMaterial
          color="#ff4444"
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}