"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function AICore() {
  const coreRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (coreRef.current) {
      coreRef.current.rotation.y += 0.004;
      coreRef.current.rotation.x += 0.001;

      const s = 1 + Math.sin(t * 2.2) * 0.04;
      coreRef.current.scale.setScalar(s);
    }

    if (innerRef.current) {
      innerRef.current.rotation.y -= 0.006;
      innerRef.current.rotation.z += 0.002;

      const s = 0.65 + Math.sin(t * 3) * 0.02;
      innerRef.current.scale.setScalar(s);
    }
  });

  return (
    <group>
      {/* Outer Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.65, 10]} />

        <meshPhysicalMaterial
          color="#ff2d2d"
          emissive="#ff0000"
          emissiveIntensity={5}
          metalness={1}
          roughness={0.05}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </mesh>

      {/* Inner Core */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.28, 2]} />

        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={4}
        />
      </mesh>
    </group>
  );
}