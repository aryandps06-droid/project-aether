"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 1800;

export default function ParticleField() {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      const radius = 2 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] =
        radius * Math.sin(phi) * Math.cos(theta);

      pos[i * 3 + 1] =
        radius * Math.sin(phi) * Math.sin(theta);

      pos[i * 3 + 2] =
        radius * Math.cos(phi);
    }

    return pos;
  }, []);

  useFrame((state) => {
    if (!points.current) return;

    points.current.rotation.y =
      state.clock.elapsedTime * 0.04;

    points.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#ff4d4d"
        size={0.02}
        sizeAttenuation
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </points>
  );
}