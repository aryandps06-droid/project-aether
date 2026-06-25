"use client";

interface Props {
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <>
      <h2 className="mt-8 text-5xl font-black text-white lg:text-7xl">
        {title}
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
        {subtitle}
      </p>
    </>
  );
}