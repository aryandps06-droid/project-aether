"use client";

import { useMemo } from "react";

export default function FloatingNodes() {
  const nodes = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      angle: (i / 20) * Math.PI * 2,
      radius: 2.2 + Math.random() * 0.3,
    }));
  }, []);

  return (
    <>
      {nodes.map((node) => (
        <mesh
          key={node.id}
          position={[
            Math.cos(node.angle) * node.radius,
            Math.sin(node.angle) * node.radius,
            0,
          ]}
        >
          <sphereGeometry args={[0.04, 16, 16]} />

          <meshBasicMaterial
            color="#ff5555"
          />
        </mesh>
      ))}
    </>
  );
}