"use client";

import { Reveal } from "@/lib/motion";
import Counter from "@/components/ui/Counter";

const STATS = [
  { value: 100, suffix: "+", label: "Active Members" },
  { value: 4.3, suffix: "★", decimals: 1, label: "Google Rating" },
  { value: 2000, prefix: "₹", label: "Starting Membership" },
];

export default function Stats() {
  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-10 bg-surface border-y border-border">
      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6 text-center">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1}>
            <Counter
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              decimals={stat.decimals}
              className="font-display text-6xl sm:text-7xl lg:text-8xl text-accent block"
            />
            <p className="mt-3 text-muted text-sm label-track">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
