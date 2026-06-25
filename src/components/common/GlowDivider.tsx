"use client";

export default function GlowDivider() {
  return (
    <div
      className="
        mt-28
        h-px
        w-full
        bg-gradient-to-r
        from-transparent
        via-red-500/30
        to-transparent
      "
    />
  );
}