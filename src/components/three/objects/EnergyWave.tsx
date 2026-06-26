"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function EnergyWave() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;

    const t = state.clock.elapsedTime;

    ref.current.rotation.z -= 0.0015;

    ref.current.rotation.y += 0.0008;

    const s =
      1.12 +
      Math.sin(t * 1.7) * 0.05;

    ref.current.scale.setScalar(s);
  });

  return (
    <mesh ref={ref}>
      <torusGeometry
        args={[1.8, 0.012, 32, 400]}
      />

      <meshBasicMaterial
        color="#ff6666"
        transparent
        opacity={0.45}
      />
    </mesh>
  );
}