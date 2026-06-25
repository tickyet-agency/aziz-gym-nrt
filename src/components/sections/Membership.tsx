"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Reveal } from "@/lib/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { PHOTOS } from "@/lib/photos";

const PLANS = [
  {
    name: "Monthly Membership",
    price: "₹2,000",
    period: "/ month",
    features: ["Gym Access", "Equipment Access", "Trainer Guidance"],
    featured: false,
    photo: PHOTOS.planGeneral,
  },
  {
    name: "Personal Training",
    price: "₹5,000",
    period: "/ month",
    features: [
      "Personalized Coaching",
      "Diet Guidance",
      "Progress Tracking",
    ],
    featured: true,
    photo: PHOTOS.planPersonal,
  },
];

export default function Membership() {
  return (
    <section
      id="membership"
      className="relative py-28 lg:py-36 px-6 lg:px-10 bg-bg overflow-hidden"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full glow-gold opacity-30"
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl">
        <Reveal className="text-center">
          <div className="flex justify-center">
            <SectionLabel>Membership Plans</SectionLabel>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-5">
            CHOOSE YOUR <span className="text-accent">PATH FORWARD</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col rounded-sm overflow-hidden ${
                plan.featured
                  ? "glass-strong border-2 border-accent"
                  : "glass"
              }`}
            >
              {/* Header Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden shrink-0">
                <Image
                  src={plan.photo.src}
                  alt={plan.photo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-black/30" />
                
                {plan.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-accent text-[#0a0a0a] text-[10px] label-track px-3 py-1.5 rounded-full shadow-md font-semibold">
                    <Star size={11} fill="currentColor" />
                    Most Popular
                  </div>
                )}
              </div>

              <div className="p-9 flex flex-col flex-1">
                <h3 className="font-display text-2xl tracking-wide">
                  {plan.name}
                </h3>

              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="font-display text-5xl text-text">
                  {plan.price}
                </span>
                <span className="text-muted text-sm">{plan.period}</span>
              </div>

              <div className="hr-gold my-7" />

              <ul className="flex flex-col gap-3.5 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      size={16}
                      className="text-accent mt-0.5 shrink-0"
                      strokeWidth={2.5}
                    />
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="https://wa.me/919247790025"
                external
                variant={plan.featured ? "primary" : "ghost"}
                className="mt-8 justify-center w-full"
              >
                Get Started
              </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-muted text-xs mt-8">
          Visit the gym for plan customization and trial sessions.
        </p>
      </div>
    </section>
  );
}
