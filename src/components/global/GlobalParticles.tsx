"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 1200;

export default function GlobalParticles() {
  const points = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();

    const positions = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }

    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );

    return geo;
  }, []);

  useFrame((state) => {
    if (!points.current) return;

    points.current.rotation.y = state.clock.elapsedTime * 0.01;
    points.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.05) * 0.03;
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        color="#ff4d4d"
        size={0.02}
        transparent
        opacity={0.45}
        depthWrite={false}
      />
    </points>
  );
}