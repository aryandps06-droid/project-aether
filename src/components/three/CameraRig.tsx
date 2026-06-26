"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function CameraRig() {
  const { camera, mouse } = useThree();

  const target = useRef(new THREE.Vector3());

  useFrame(() => {
    target.current.set(
      mouse.x * 0.45,
      mouse.y * 0.25,
      camera.position.z
    );

    camera.position.lerp(target.current, 0.04);

    camera.lookAt(0, 0, 0);
  });

  return null;
}