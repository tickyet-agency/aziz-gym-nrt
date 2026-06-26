"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Dumbbell, Activity, Weight, Flame } from "lucide-react";
import { Reveal } from "@/lib/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import PhotoPanel from "@/components/ui/PhotoPanel";
import { PHOTOS } from "@/lib/photos";

const ZONES = [
  {
    icon: Weight,
    title: "Free Weight Zone",
    desc: "Olympic plates, racks, and platforms with room to load up without bumping elbows.",
    variant: 1 as const,
    photo: PHOTOS.freeWeightZone,
  },
  {
    icon: Activity,
    title: "Cardio Floor",
    desc: "Treadmills, cycles, and rowers facing an open wall of glass for natural light.",
    variant: 2 as const,
    photo: PHOTOS.cardioFloor,
  },
  {
    icon: Dumbbell,
    title: "Equipment Bay",
    desc: "Modern machines maintained on a strict service schedule — nothing sits broken for weeks.",
    variant: 3 as const,
    photo: PHOTOS.equipmentBay,
  },
  {
    icon: Flame,
    title: "Functional Zone",
    desc: "Open floor space for conditioning circuits, mobility work, and warm-ups.",
    variant: 4 as const,
    photo: PHOTOS.functionalZone,
  },
];

export default function GymExperience() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.innerWidth < 768;
    if (prefersReducedMotion || isMobile) return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        return -(trackWidth - window.innerWidth);
      };

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        duration: 1,
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${Math.abs(getScrollAmount())}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative bg-bg overflow-hidden h-[100vh] min-h-[640px] flex flex-col"
    >
      <div className="px-6 lg:px-10 pt-20 lg:pt-24 pb-8 shrink-0">
        <Reveal>
          <SectionLabel>The Gym Experience</SectionLabel>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-5">
            EVERY ZONE, <span className="text-accent">BUILT WITH PURPOSE</span>
          </h2>
        </Reveal>
      </div>

      <div className="relative flex-1 flex items-center overflow-hidden w-full">
        <div
          ref={trackRef}
          className="flex gap-5 px-6 lg:px-10 overflow-x-auto md:overflow-x-visible no-scrollbar pb-4 md:pb-0 scroll-smooth will-change-transform w-full snap-x snap-mandatory md:snap-none"
        >
          {ZONES.map((zone) => {
            const Icon = zone.icon;
            return (
              <div
                key={zone.title}
                className="relative w-[78vw] sm:w-[52vw] lg:w-[34vw] aspect-[4/5] shrink-0 rounded-sm overflow-hidden border border-border snap-start md:snap-align-none"
              >
                <PhotoPanel
                  variant={zone.variant}
                  photo={zone.photo}
                  className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-7">
                  <Icon
                    size={26}
                    strokeWidth={1.4}
                    className="text-accent mb-4"
                  />
                  <h3 className="font-display text-3xl tracking-wide mb-2">
                    {zone.title}
                  </h3>
                  <p className="text-muted text-sm max-w-xs leading-relaxed">
                    {zone.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
