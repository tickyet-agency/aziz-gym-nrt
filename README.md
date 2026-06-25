# Body Grow Gym Aziz — Landing Page

A premium, animated landing page built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, GSAP, and Lenis.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts (Bebas Neue + Inter), metadata
│   ├── page.tsx          # Composes all 9 sections in order
│   └── globals.css       # Design tokens (colors, glass, grain, marquee, etc.)
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, WhyUs, GymExperience, Trainers, Membership,
│   │                       Reviews, Stats, Contact, FinalCta
│   ├── providers/        # Lenis smooth-scroll provider
│   └── ui/                # Button, Counter, PhotoPanel, SectionLabel
└── lib/
    └── motion.tsx        # Shared Framer Motion variants (Reveal, RevealLines)
```

## Photography

The Hero background, Free Weight Zone, Cardio Floor, and Equipment Bay now use **real, freely-licensed
photos from Unsplash** (see `src/lib/photos.ts` for the source URLs and photographer credit — also
listed in the footer). The Functional Zone and the 3 trainer cards still use the stylized gradient-mesh
placeholder (`components/ui/PhotoPanel.tsx`):

- **Functional Zone** has no strong matching stock photo yet — swap it in once you have one.
- **Trainer photos are intentionally placeholders.** The names and bios (Mohammed Aziz, Rahul Verma,
  Sana Khan, years of experience, specializations) are invented for this template. Pairing invented
  bios with photos of real strangers would misrepresent them as your staff, so use actual photos of
  your actual trainers here.

To swap any panel for a real photo, pass a `photo` object (see the shape in `src/lib/photos.ts`) into
`<PhotoPanel photo={...} />`, or for the Hero's full-bleed background, edit the `<Image>` `src` directly
in `Hero.tsx`. To use your own image files instead of a URL, drop them in `public/images/` and reference
them as `/images/your-file.jpg`.

## Editable Content

All copy, prices, hours, phone numbers, and the WhatsApp link (`https://wa.me/910000000000`) are
placeholders — search for `910000000000` and the address block in `Contact.tsx` to update with the
real business details.

## Notes on Animation

- **Lenis** drives the global smooth-scroll feel (`SmoothScrollProvider.tsx`).
- **Framer Motion** handles scroll-reveals, the hero line-by-line text animation, hover states, and
  the navbar's gold scroll-progress bar (the page's signature element).
- **GSAP + ScrollTrigger** drives the pinned horizontal-scroll gallery in the Gym Experience section.
- All animations respect `prefers-reduced-motion`.
