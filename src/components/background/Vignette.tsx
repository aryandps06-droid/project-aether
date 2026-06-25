"use client";

export default function Vignette() {
  return (
    <div
      className="
        absolute
        inset-0
        pointer-events-none
      "
      style={{
        background:
          "radial-gradient(circle, transparent 45%, rgba(0,0,0,.75) 100%)",
      }}
    />
  );
}