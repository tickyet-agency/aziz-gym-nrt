"use client";

import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Reveal } from "@/lib/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { PHOTOS } from "@/lib/photos";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 lg:py-36 px-6 lg:px-10 bg-bg">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>Visit Us</SectionLabel>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-5 max-w-2xl">
            YOUR FIRST <span className="text-accent">SESSION STARTS HERE</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Info column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Reveal delay={0.05}>
              <div className="glass p-7 rounded-sm flex items-start gap-4">
                <Phone size={22} className="text-accent mt-0.5" />
                <div>
                  <p className="text-xs label-track text-muted mb-1">Call Us</p>
                  <a
                    href="tel:09247790025"
                    className="font-display text-2xl tracking-wide hover:text-accent transition-colors"
                  >
                    092477 90025
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass p-7 rounded-sm flex items-start gap-4">
                <MapPin size={22} className="text-accent mt-0.5" />
                <div>
                  <p className="text-xs label-track text-muted mb-1">
                    Location
                  </p>
                  <p className="text-text leading-relaxed">
                    Body Grow Gym Aziz, Prakash Nagar,
                    <br />
                    Narasaraopeta, Andhra Pradesh 522601
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass p-7 rounded-sm flex items-start gap-4">
                <Clock size={22} className="text-accent mt-0.5" />
                <div className="w-full">
                  <p className="text-xs label-track text-muted mb-2">
                    Operating Hours
                  </p>
                  <div className="flex flex-col gap-1.5 mt-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-semibold text-rose-500 bg-rose-500/10 px-2.5 py-0.5 rounded-sm">
                        Closes soon
                      </span>
                      <span className="text-text text-sm font-medium">9 PM</span>
                      <span className="text-muted/60 text-xs">•</span>
                      <span className="text-muted text-sm">Opens 5 AM Fri</span>
                    </div>
                    <p className="text-xs text-[#c9a227] mt-1.5 font-light tracking-wide">
                      Ashura might affect these hours
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <Button
                href="https://wa.me/919247790025"
                external
                icon
                className="w-full justify-center"
              >
                <MessageCircle size={16} />
                Message Us on WhatsApp
              </Button>
            </Reveal>
          </div>

          {/* Map */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="relative h-full min-h-[300px] md:min-h-[420px] rounded-sm overflow-hidden border border-border grain">
              <div className="absolute inset-0">
                <Image
                  src={PHOTOS.mapBg.src}
                  alt={PHOTOS.mapBg.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-15"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(22,22,22,0.6), #050505 85%)",
                  }}
                />
              </div>
              {/* Map grid lines to suggest a location map without a live embed */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-accent" />
                  </span>
                  <p className="text-xs label-track text-muted">
                    Prakash Nagar, Narasaraopeta
                  </p>
                  <a
                    href="https://maps.google.com/?q=Body+Grow+Gym+Aziz+Prakash+Nagar+Narasaraopeta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-xs label-track underline underline-offset-4 hover:text-text transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
