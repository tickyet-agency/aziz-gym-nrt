"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/lib/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import PhotoPanel from "@/components/ui/PhotoPanel";
import { User } from "lucide-react";
import { PHOTOS } from "@/lib/photos";

const TRAINERS = [
  {
    name: "Mohammed Aziz",
    role: "Head Coach & Founder",
    experience: "9+ Years Experience",
    specialization: "Strength Training, Powerlifting",
    variant: 5 as const,
    photo: PHOTOS.trainerAziz,
  },
  {
    name: "Rahul Verma",
    role: "Personal Trainer",
    experience: "6 Years Experience",
    specialization: "Fat Loss, Functional Fitness",
    variant: 2 as const,
    photo: PHOTOS.trainerRahul,
  },
  {
    name: "Sameer Khan",
    role: "Personal Trainer",
    experience: "5 Years Experience",
    specialization: "Strength Training, Mobility",
    variant: 3 as const,
    photo: PHOTOS.trainerSameer,
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="relative py-28 lg:py-36 px-6 lg:px-10 bg-bg">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>The Coaching Staff</SectionLabel>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-5 max-w-3xl">
            MEET THE TEAM <span className="text-accent">BEHIND YOUR PROGRESS</span>
          </h2>
        </Reveal>

        <div className="mt-16 flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
          {TRAINERS.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden border border-border rounded-sm shrink-0 w-[72vw] snap-start sm:w-auto"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <PhotoPanel
                    variant={trainer.variant}
                    icon={User}
                    photo={trainer.photo}
                    className="absolute inset-0"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />

                {/* Info panel — slides up further on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-0 group-hover:-translate-y-1 transition-transform duration-500">
                  <h3 className="font-display text-2xl tracking-wide">
                    {trainer.name}
                  </h3>
                  <p className="text-accent text-xs label-track mt-1">
                    {trainer.role}
                  </p>

                  <div className="overflow-hidden">
                    <div className="max-h-0 group-hover:max-h-24 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <p className="text-muted text-sm mt-3 pt-3 border-t border-border">
                        {trainer.specialization}
                      </p>
                      <p className="text-muted text-xs mt-1">
                        {trainer.experience}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
