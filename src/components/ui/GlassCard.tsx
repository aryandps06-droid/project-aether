import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "rounded-3xl",
        "border border-white/10",
        "bg-white/5",
        "backdrop-blur-xl",
        "shadow-2xl",
        "transition-all duration-500",
        "hover:border-red-500/40",
        "hover:shadow-[0_0_40px_rgba(220,38,38,.3)]",
        className
      )}
    >
      {children}
    </div>
  );
}