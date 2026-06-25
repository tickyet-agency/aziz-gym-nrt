"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  /** Numeric value to count up to */
  value: number;
  /** Text shown after the number, e.g. "+", "★" */
  suffix?: string;
  /** Text shown before the number, e.g. "₹" */
  prefix?: string;
  /** Decimal places to keep (for ratings like 4.3) */
  decimals?: number;
  duration?: number;
  className?: string;
}

export default function Counter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1.6,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Defer to the next frame so this doesn't run as a synchronous
      // setState call directly inside the effect body.
      const frame = requestAnimationFrame(() => setDisplay(value));
      return () => cancelAnimationFrame(frame);
    }

    let start: number | null = null;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    function step(timestamp: number) {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      setDisplay(value * ease(progress));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
    const frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </motion.span>
  );
}
