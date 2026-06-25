"use client";

import GradientMesh from "./GradientMesh";
import Grid from "./Grid";
import EnergyCore from "./EnergyCore";
import GlowOrbs from "./GlowOrbs";
import NeuralParticles from "./NeuralParticles";
import ScanBeam from "./ScanBeam";
import Noise from "./Noise";
import Vignette from "./Vignette";
import NeuralNetwork from "./NeuralNetwork";

export default function AIBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#050505] pointer-events-none">
      <GradientMesh />
      <Grid />
      <EnergyCore />
      <GlowOrbs />
      <NeuralNetwork />
      <ScanBeam />
      <Noise />
      <Vignette />
    </div>
  );
}