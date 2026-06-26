"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Props = {
  count: number;
  spread: number;
  size: number;
  opacity: number;
  speed: number;
};

export default function GalaxyLayer({
  count,
  spread,
  size,
  opacity,
  speed,
}: Props) {
  const points = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();

    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] =
        (Math.random() - 0.5) * spread;

      positions[i * 3 + 1] =
        (Math.random() - 0.5) * spread;

      positions[i * 3 + 2] =
        (Math.random() - 0.5) * spread;
    }

    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(
        positions,
        3
      )
    );

    return geo;
  }, [count, spread]);

  useFrame((state) => {
    if (!points.current) return;

    points.current.rotation.y =
      state.clock.elapsedTime * speed;

    points.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.2) *
      speed;
  });

  return (
    <points
      ref={points}
      geometry={geometry}
    >
      <pointsMaterial
        color="#ff4d4d"
        size={size}
        transparent
        opacity={opacity}
        depthWrite={false}
      />
    </points>
  );
}