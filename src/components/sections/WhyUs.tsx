"use client";

import { motion } from "framer-motion";
import {
  Maximize2,
  UserCheck,
  Dumbbell,
  HeartHandshake,
  Users,
} from "lucide-react";
import { Reveal } from "@/lib/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Image from "next/image";
import { PHOTOS } from "@/lib/photos";

const FEATURES = [
  {
    icon: Maximize2,
    title: "Spacious Workout Area",
    desc: "An open, uncrowded training floor designed so every set has room to breathe — no waiting, no squeezing past racks.",
    span: "lg:col-span-2 lg:row-span-1",
    photo: undefined,
  },
  {
    icon: UserCheck,
    title: "Professional Trainers",
    desc: "Certified coaches who correct your form before it becomes a habit, not after it becomes an injury.",
    span: "lg:col-span-1 lg:row-span-2",
    photo: PHOTOS.trainerCoaching,
  },
  {
    icon: Dumbbell,
    title: "Personal Training Available",
    desc: "One-on-one programs built around your goals, your schedule, and your starting point.",
    span: "lg:col-span-1 lg:row-span-1",
    photo: undefined,
  },
  {
    icon: HeartHandshake,
    title: "Friendly Atmosphere",
    desc: "A floor where beginners aren't intimidated and regulars feel at home.",
    span: "lg:col-span-1 lg:row-span-1",
    photo: undefined,
  },
  {
    icon: Users,
    title: "Trusted By Local Members",
    desc: "Built on word-of-mouth from members who kept coming back — and kept bringing friends.",
    span: "lg:col-span-2 lg:row-span-1",
    photo: undefined,
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-28 lg:py-36 px-6 lg:px-10 bg-bg">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>Why Train Here</SectionLabel>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-5 max-w-3xl">
            BUILT FOR PEOPLE WHO ARE{" "}
            <span className="text-accent">SERIOUS</span> ABOUT RESULTS
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-5 lg:auto-rows-[220px]">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.015, y: -4 }}
                className={`glass relative overflow-hidden p-8 flex flex-col justify-between group cursor-default ${feature.span}`}
              >
                {feature.photo && (
                  <>
                    <Image
                      src={feature.photo.src}
                      alt={feature.photo.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90 z-0" />
                  </>
                )}
                <div
                  className="absolute -right-10 -top-10 w-40 h-40 rounded-full glow-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                  aria-hidden
                />
                <Icon
                  size={28}
                  strokeWidth={1.4}
                  className="text-accent relative z-10"
                />
                <div className="relative z-10">
                  <h3 className="font-display text-2xl tracking-wide mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed max-w-sm">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
