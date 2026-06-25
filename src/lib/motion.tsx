"use client";

import { motion, type Variants } from "framer-motion";
import { useRef } from "react";

/** Fade up on scroll into view — the page's baseline reveal. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Stagger container for groups of children (cards, list items, words). */
export function staggerContainer(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };
}

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Wraps content with a single fade-up reveal triggered on viewport entry. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Splits a heading into lines that reveal one after another.
 * Used for the hero and section titles where a line-by-line
 * reveal reinforces the editorial, deliberate pacing of the page.
 */
export function RevealLines({
  lines,
  className,
  lineClassName,
  delayStart = 0,
  stagger = 0.12,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delayStart?: number;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer(stagger, delayStart)}
    >
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            className={lineClassName}
            variants={{
              hidden: { y: "110%" },
              visible: {
                y: "0%",
                transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}

/** Count-up number, triggers once when scrolled into view. */
export function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  return ref;
}
