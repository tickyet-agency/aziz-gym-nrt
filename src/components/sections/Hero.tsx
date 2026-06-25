"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import { RevealLines } from "@/lib/motion";
import { PHOTOS } from "@/lib/photos";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Subtle parallax: background drifts slower than scroll, overlay deepens.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100vh] min-h-[640px] w-full overflow-hidden grain"
    >
      {/* Background: real training-floor photography with brand-tone wash */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <Image
          src={PHOTOS.heroBackground.src}
          alt={PHOTOS.heroBackground.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(28,26,20,0.55) 0%, rgba(10,9,8,0.7) 45%, rgba(5,5,5,0.88) 75%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(100deg, transparent 0px, transparent 90px, rgba(201,162,39,0.04) 90px, rgba(201,162,39,0.04) 92px)",
          }}
        />
      </motion.div>

      {/* Dark overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-bg"
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-accent text-xs sm:text-sm label-track mb-6"
        >
          Premium Strength &amp; Conditioning
        </motion.p>

        <RevealLines
          lines={["BODY GROW", "GYM AZIZ"]}
          delayStart={0.35}
          stagger={0.15}
          className="font-display text-text"
          lineClassName="text-[14vw] sm:text-[10vw] lg:text-[8rem] leading-[0.92] tracking-wide"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-muted text-base sm:text-lg font-light"
        >
          <span>Train Hard.</span>
          <span className="hidden sm:inline text-accent">/</span>
          <span>Build Strength.</span>
          <span className="hidden sm:inline text-accent">/</span>
          <span>Transform Your Life.</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.35 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Button href="https://wa.me/919247790025" external icon>
            Book a Gym Visit
          </Button>
          <Button href="#experience" variant="ghost">
            Explore Facilities
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-8 inset-x-0 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] label-track text-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
