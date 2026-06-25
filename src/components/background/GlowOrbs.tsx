"use client";

export default function GlowOrbs() {
  return (
    <>
      <div className="absolute top-40 left-20 h-48 w-48 rounded-full bg-red-500/10 blur-[120px]" />

      <div className="absolute bottom-40 right-20 h-60 w-60 rounded-full bg-red-600/10 blur-[150px]" />

      <div className="absolute top-1/2 right-1/3 h-40 w-40 rounded-full bg-red-400/10 blur-[100px]" />
    </>
  );
}