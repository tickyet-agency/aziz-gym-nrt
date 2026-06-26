"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Scale,
  CalendarDays,
  TrendingDown,
  Beef,
  Leaf,
} from "lucide-react";
import { Reveal } from "@/lib/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { PHOTOS } from "@/lib/photos";

const NUTRITION_CARDS = [
  {
    icon: ClipboardList,
    title: "Personalised Diet Plans",
    desc: "Custom-built meal plans matched to your body type, goals, and lifestyle — no guesswork, just results.",
    photo: PHOTOS.nutritionDietPlan,
    span: "lg:col-span-1",
  },
  {
    icon: Scale,
    title: "Balanced Nutrition",
    desc: "Learn how macros, micros, and hydration work together to fuel every rep and every recovery.",
    photo: PHOTOS.nutritionBalanced,
    span: "lg:col-span-1",
  },
  {
    icon: CalendarDays,
    title: "Meal Planning",
    desc: "Structured weekly meal schedules that make healthy eating consistent, practical, and stress-free.",
    photo: PHOTOS.nutritionMealPrep,
    span: "lg:col-span-1",
  },
  {
    icon: TrendingDown,
    title: "Weight Loss Diets",
    desc: "Science-backed calorie and nutrition strategies designed to burn fat while preserving lean muscle.",
    photo: PHOTOS.nutritionWeightLoss,
    span: "lg:col-span-1",
  },
  {
    icon: Beef,
    title: "Muscle Gain Nutrition",
    desc: "High-protein, calorie-optimised plans that give your muscles what they need to grow stronger every week.",
    photo: PHOTOS.nutritionMuscle,
    span: "lg:col-span-1",
  },
  {
    icon: Leaf,
    title: "Healthy Lifestyle Guidance",
    desc: "Long-term habits, sleep, and stress management that keep your fitness journey on track for life.",
    photo: PHOTOS.nutritionLifestyle,
    span: "lg:col-span-1",
  },
];

export default function DietNutrition() {
  return (
    <section
      id="nutrition"
      className="relative py-28 lg:py-36 px-6 lg:px-10 bg-bg overflow-hidden"
    >
      {/* Ambient glow blob — matches Membership section style */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full glow-gold opacity-20 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full glow-gold opacity-15 pointer-events-none"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ── Section header ── */}
        <Reveal>
          <SectionLabel>Diet &amp; Nutrition</SectionLabel>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-5 max-w-3xl">
            FUEL YOUR BODY,{" "}
            <span className="text-accent">AMPLIFY YOUR GAINS</span>
          </h2>
          <p className="text-muted text-base sm:text-lg mt-6 max-w-2xl leading-relaxed">
            Training hard is only half the equation. Our nutrition guidance
            bridges the gap between effort and results — with plans built around
            your goals, not generic templates.
          </p>
        </Reveal>

        {/* Gold hairline divider */}
        <div className="hr-gold mt-10 mb-14" />

        {/* ── 6-card grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {NUTRITION_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.015, y: -4 }}
                className="glass relative overflow-hidden rounded-sm flex flex-col group cursor-default"
              >
                {/* Card image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden shrink-0">
                  <Image
                    src={card.photo.src}
                    alt={card.photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark gradient over image */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
                  {/* Icon badge on image */}
                  <div className="absolute bottom-4 left-4 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 border border-accent/40 backdrop-blur-sm">
                    <Icon size={18} strokeWidth={1.5} className="text-accent" />
                  </div>
                </div>

                {/* Card body */}
                <div className="p-7 flex flex-col flex-1 relative z-10">
                  {/* Hover glow */}
                  <div
                    className="absolute -right-8 -top-8 w-32 h-32 rounded-full glow-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden
                  />
                  <h3 className="font-display text-xl tracking-wide mb-3 relative z-10">
                    {card.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed flex-1 relative z-10">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── CTA row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 glass p-8 rounded-sm"
        >
          <div>
            <p className="font-display text-2xl sm:text-3xl tracking-wide">
              READY TO EAT{" "}
              <span className="text-accent">SMARTER?</span>
            </p>
            <p className="text-muted text-sm mt-2 max-w-md leading-relaxed">
              Book a free nutrition consultation with our coaches and get a
              personalised plan built for your goals.
            </p>
          </div>
          <Button
            href="https://wa.me/919247790025"
            external
            icon
            className="shrink-0 whitespace-nowrap"
          >
            Get Your Diet Plan
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
