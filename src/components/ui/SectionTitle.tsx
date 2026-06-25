interface Props {
  title: string;
  subtitle: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-16 text-center">

      <p className="mb-3 uppercase tracking-[0.35em] text-red-500">
        {subtitle}
      </p>

      <h2 className="text-5xl font-black text-white">
        {title}
      </h2>

    </div>
  );
}