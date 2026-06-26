"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function NeuralShell() {
  const shell = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!shell.current) return;

    const t = state.clock.elapsedTime;

    shell.current.rotation.y += 0.001;
    shell.current.rotation.x += 0.0004;

    const s =
      1 +
      Math.sin(t * 2.1) * 0.02;

    shell.current.scale.setScalar(s);
  });

  return (
    <mesh ref={shell}>
      <icosahedronGeometry
        args={[2.05, 18]}
      />

      <meshBasicMaterial
        color="#ff4444"
        wireframe
        transparent
        opacity={0.12}
      />
    </mesh>
  );
}