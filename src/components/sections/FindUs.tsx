"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Clock, Mail } from "lucide-react";
import { Reveal } from "@/lib/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

// ─────────────────────────────────────────────────────────────────────────────
// GYM LOCATION CONFIG — easy to update in one place
//
// MAP EMBED URL:
//   1. Open https://maps.google.com
//   2. Search for "Body Grow Gym Aziz Narasaraopeta"
//   3. Click Share → Embed a map
//   4. Copy the src="..." value from the <iframe> snippet and paste below.
//
// DIRECTIONS URL:
//   Right-click the pin on Google Maps → "What's here?" → copy the URL
//   or use the format below with your Place ID.
// ─────────────────────────────────────────────────────────────────────────────
const GYM_MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Body+Grow+Gym+Aziz+Prakash+Nagar+Narasaraopeta+Andhra+Pradesh+522601+India&t=&z=16&ie=UTF8&iwloc=&output=embed";

const GYM_DIRECTIONS_URL =
  "https://maps.google.com/?q=Body+Grow+Gym+Aziz,+Prakash+Nagar,+Narasaraopeta,+Andhra+Pradesh+522601,+India";

const GYM_HOURS = [
  { days: "Mon – Sat", time: "5:00 AM – 9:00 PM" },
  { days: "Sunday", time: "5:00 AM – 12:00 PM" },
];

// Set to a string (e.g. "bodygrowgym@gmail.com") to display the email row.
const GYM_EMAIL: string | null = null;

export default function FindUs() {
  return (
    <section
      id="find-us"
      className="relative py-28 lg:py-36 px-6 lg:px-10 bg-bg overflow-hidden grain"
    >
      {/* Ambient glow blobs — consistent with other sections */}
      <div
        className="absolute -bottom-24 -left-24 w-[560px] h-[560px] rounded-full glow-gold opacity-20 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full glow-gold opacity-10 pointer-events-none"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ── Section header ── */}
        <Reveal>
          <SectionLabel>Find Us</SectionLabel>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-5 max-w-2xl">
            COME TRAIN{" "}
            <span className="text-accent">WITH US</span>
          </h2>
          <p className="text-muted text-base sm:text-lg mt-6 max-w-xl leading-relaxed">
            We&apos;re easy to find in Prakash Nagar, Narasaraopeta. Drop in any
            day — the doors are open early and we close late.
          </p>
        </Reveal>

        {/* Gold hairline divider */}
        <div className="hr-gold mt-10 mb-14" />

        {/* ── Main grid: map (left, 3/5) + info (right, 2/5) on desktop ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">

          {/* ── Interactive Google Map ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 relative h-full min-h-[300px] md:min-h-[480px] rounded-sm overflow-hidden border border-border"
          >
            <iframe
              src={GYM_MAP_EMBED_URL}
              title="Body Grow Gym Aziz — location on Google Maps"
              aria-label="Interactive Google Map showing the location of Body Grow Gym Aziz in Narasaraopeta, Andhra Pradesh"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
            />
            {/* Top accent hairline — blends iframe into dark border */}
            <div className="absolute inset-x-0 top-0 h-px bg-border pointer-events-none z-10" />
            {/* Bottom gradient fade to bg — softens the map edge */}
            <div
              className="absolute inset-x-0 bottom-0 h-10 pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(to top, rgba(5,5,5,0.55), transparent)",
              }}
            />
          </motion.div>

          {/* ── Info cards + CTA ── */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Address */}
            <Reveal delay={0.1}>
              <div className="glass p-7 rounded-sm flex items-start gap-4">
                <MapPin
                  size={22}
                  strokeWidth={1.5}
                  className="text-accent mt-0.5 shrink-0"
                />
                <div>
                  <p className="text-xs label-track text-muted mb-2">
                    Address
                  </p>
                  <address className="not-italic text-text leading-relaxed">
                    Body Grow Gym Aziz, Prakash Nagar,
                    <br />
                    Narasaraopeta, Andhra Pradesh 522601
                  </address>
                </div>
              </div>
            </Reveal>

            {/* Phone */}
            <Reveal delay={0.14}>
              <div className="glass p-7 rounded-sm flex items-start gap-4">
                <Phone
                  size={22}
                  strokeWidth={1.5}
                  className="text-accent mt-0.5 shrink-0"
                />
                <div>
                  <p className="text-xs label-track text-muted mb-2">
                    Phone
                  </p>
                  <a
                    href="tel:09247790025"
                    className="font-display text-2xl tracking-wide hover:text-accent transition-colors duration-300"
                  >
                    092477 90025
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Hours */}
            <Reveal delay={0.18}>
              <div className="glass p-7 rounded-sm flex items-start gap-4">
                <Clock
                  size={22}
                  strokeWidth={1.5}
                  className="text-accent mt-0.5 shrink-0"
                />
                <div className="w-full">
                  <p className="text-xs label-track text-muted mb-3">
                    Business Hours
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {GYM_HOURS.map((row) => (
                      <div
                        key={row.days}
                        className="flex items-center justify-between gap-4"
                      >
                        <span className="text-muted text-sm">{row.days}</span>
                        <span className="text-text text-sm font-medium tabular-nums">
                          {row.time}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="hr-gold mt-5" />
                </div>
              </div>
            </Reveal>

            {/* Email — only rendered when GYM_EMAIL is set */}
            {GYM_EMAIL && (
              <Reveal delay={0.22}>
                <div className="glass p-7 rounded-sm flex items-start gap-4">
                  <Mail
                    size={22}
                    strokeWidth={1.5}
                    className="text-accent mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-xs label-track text-muted mb-2">
                      Email
                    </p>
                    <a
                      href={`mailto:${GYM_EMAIL}`}
                      className="text-text hover:text-accent transition-colors duration-300 break-all"
                    >
                      {GYM_EMAIL}
                    </a>
                  </div>
                </div>
              </Reveal>
            )}

            {/* Get Directions — primary CTA */}
            <Reveal delay={GYM_EMAIL ? 0.26 : 0.22}>
              <Button
                href={GYM_DIRECTIONS_URL}
                external
                icon
                className="w-full justify-center"
              >
                <Navigation size={16} strokeWidth={1.5} className="shrink-0" />
                Get Directions
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
