"use client";

export default function Noise() {
  return (
    <div
      className="
        absolute
        inset-0
        opacity-[0.03]
        mix-blend-soft-light
      "
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,.5) 1px, transparent 1px)",
        backgroundSize: "8px 8px",
      }}
    />
  );
}