"use client";

import { motion } from "framer-motion";
import { RevealLines } from "@/lib/motion";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { PHOTOS } from "@/lib/photos";

export default function FinalCta() {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden grain flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src={PHOTOS.finalCtaBg.src}
          alt={PHOTOS.finalCtaBg.alt}
          fill
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(5,5,5,0.45) 0%, rgba(5,5,5,0.92) 80%)",
          }}
        />
      </div>
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(105deg, transparent 0px, transparent 80px, rgba(201,162,39,0.05) 80px, rgba(201,162,39,0.05) 82px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />

      <div className="relative z-10 px-6 text-center max-w-4xl">
        <RevealLines
          lines={["YOUR STRONGEST VERSION", "STARTS HERE"]}
          className="font-display"
          lineClassName="text-[10vw] sm:text-6xl lg:text-7xl leading-[0.95] tracking-wide"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-muted mt-6 text-base sm:text-lg max-w-xl mx-auto"
        >
          Join Body Grow Gym Aziz and begin your fitness transformation
          today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-10 flex justify-center"
        >
          <Button href="https://wa.me/919247790025" external icon>
            Book a Gym Visit
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
