"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function CameraRig() {
  const { camera, mouse } = useThree();

  const target = useRef(new THREE.Vector3());

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    target.current.set(
      mouse.x * 0.45,
      mouse.y * 0.25 + Math.sin(t * 0.4) * 0.08,
      6
    );

    camera.position.lerp(target.current, 0.04);

    camera.lookAt(0, 0, 0);
  });

  return null;
}