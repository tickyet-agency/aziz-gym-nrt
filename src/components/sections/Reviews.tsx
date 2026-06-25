"use client";

import { Star } from "lucide-react";
import { Reveal } from "@/lib/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Image from "next/image";
import { PHOTOS } from "@/lib/photos";

const REVIEWS = [
  {
    name: "Arjun Mehta",
    rating: 5,
    text: "Best gym I've trained at in the city. The floor never feels crowded and the trainers actually correct your form.",
    photo: PHOTOS.avatarArjun,
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Joined for the personal training plan and the diet guidance alone was worth it. Down 6kg in two months.",
    photo: PHOTOS.avatarPriya,
  },
  {
    name: "Imran Sheikh",
    rating: 4,
    text: "Clean equipment, friendly staff, and the morning slots are never overcrowded. Highly recommend.",
    photo: PHOTOS.avatarImran,
  },
  {
    name: "Sneha Reddy",
    rating: 5,
    text: "As a beginner I was nervous walking in. The coaches made it easy and I actually look forward to sessions now.",
    photo: PHOTOS.avatarSneha,
  },
  {
    name: "Vikram Rao",
    rating: 4,
    text: "Good range of free weights and the cardio section has enough machines that I never wait around.",
    photo: PHOTOS.avatarVikram,
  },
  {
    name: "Fatima Ali",
    rating: 5,
    text: "Switched here after a bad experience at a chain gym. Night and day difference in attention and cleanliness.",
    photo: PHOTOS.avatarFatima,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "text-accent" : "text-border-strong"}
          fill={i < count ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof REVIEWS)[number] }) {
  return (
    <div className="glass w-[320px] sm:w-[360px] shrink-0 p-7 rounded-sm flex flex-col gap-4">
      <Stars count={review.rating} />
      <p className="text-text/90 text-sm leading-relaxed">{review.text}</p>
      <div className="flex items-center gap-3 mt-auto">
        <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-border-strong">
          <Image
            src={review.photo.src}
            alt={review.photo.alt}
            fill
            sizes="32px"
            className="object-cover"
          />
        </div>
        <p className="text-muted text-xs label-track">{review.name}</p>
      </div>
    </div>
  );
}

export default function Reviews() {
  // Duplicate the array for a seamless marquee loop.
  const loop = [...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="relative py-28 lg:py-36 bg-bg overflow-hidden">
      <div className="px-6 lg:px-10 mx-auto max-w-7xl">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <SectionLabel>What Members Say</SectionLabel>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-5">
              TRUSTED BY <span className="text-accent">REAL RESULTS</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-display text-6xl text-accent">4.3</span>
            <div>
              <Stars count={4} />
              <p className="text-muted text-xs mt-1">Google Rating</p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 relative">
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 animate-marquee w-max">
          {loop.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
