import clsx from "clsx";

export default function SectionLabel({
  children,
  className,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 text-xs label-track",
        light ? "text-[#0a0a0a]/60" : "text-accent",
        className
      )}
    >
      <span
        className={clsx(
          "h-px w-8",
          light ? "bg-[#0a0a0a]/40" : "bg-accent"
        )}
      />
      {children}
    </div>
  );
}
