import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  icon?: boolean;
  external?: boolean;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  icon = false,
  external = false,
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 px-8 py-4 text-sm label-track font-medium transition-all duration-300 ease-out";

  const styles =
    variant === "primary"
      ? "bg-accent text-[#0a0a0a] hover:bg-[#ddb938] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_var(--accent)]"
      : "border border-border-strong text-text hover:border-accent hover:text-accent hover:-translate-y-0.5";

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={clsx(base, styles, className)} {...props}>
      {children}
      {icon && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Link>
  );
}
