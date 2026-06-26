"use client";

import { EffectComposer } from "@react-three/postprocessing";

import Lights from "./Lights";
import CameraRig from "./CameraRig";
import PostFX from "./PostFX";

import QuantumCore from "../objects/QuantumCore";
import PlasmaShell from "../objects/PlasmaShell";
import NeuralGalaxy from "../objects/NeuralGalaxy";
import EnergyHalo from "../objects/EnergyHalo";
import OuterGlow from "../objects/OuterGlow";

export default function Scene() {
  return (
    <>
      <Lights />

      <CameraRig />

      <group
        position={[0, 0, 0]}
        scale={1.05}
      >
        {/* Background */}
        <NeuralGalaxy />

        {/* Soft Atmospheric Glow */}
        <OuterGlow />

        {/* Transparent Plasma */}
        <PlasmaShell />

        {/* Main Halo */}
        <EnergyHalo />

        {/* Core */}
        <QuantumCore />
      </group>

      <EffectComposer>
        <PostFX />
      </EffectComposer>
    </>
  );
}