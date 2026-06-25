"use client";

interface Props {
  text: string;
}

export default function SectionBadge({
  text,
}: Props) {
  return (
    <div
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-red-500/20
        bg-red-500/10
        px-5
        py-2
        backdrop-blur-xl
      "
    >
      <span
        className="
          text-sm
          uppercase
          tracking-[0.35em]
          text-red-400
        "
      >
        {text}
      </span>
    </div>
  );
}