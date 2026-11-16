# LOVE LASA — Haute Couture & Editorial Fashion

A premium, editorial, photography-led fashion and lifestyle brand website built with Next.js (App Router), React 19, TypeScript, Tailwind CSS, GSAP ScrollTrigger, and Motion for React.

---

## 1. Project Overview

- **Design Philosophy**: Minimalist, architectural silhouettes, generous negative space, quiet luxury, and cinematic storytelling.
- **Color Palette**: Warm ivory surfaces (`#FAF8F5`, `#F3EFEA`), deep charcoal typography (`#1A1918`), and restrained vivid red accents (`#D32F2F`).
- **Typography**: 
  - Display / Headings: `Cormorant Garamond`
  - Body / UI / Labels: `DM Sans`
- **Current Milestone**: Design MVP (Frontend & Visual Experience). Backend services (Supabase, Razorpay, Resend) are scheduled for later phases.

---

## 2. Project Architecture

```text
Love-Lasa/
├── public/
│   └── images/                     # Static fallback assets & brand marks
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout: fonts, metadata & viewport
│   │   ├── page.tsx                # Homepage assembling all editorial sections
│   │   └── globals.css             # Tailwind 4 theme tokens, color variables & reset
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Minimal transparent-to-solid navigation header
│   │   │   ├── Footer.tsx          # Editorial footer (brand mark, links, copyright)
│   │   │   └── MobileMenu.tsx      # Responsive overlay navigation (Motion for React)
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx     # Full-viewport campaign hero with scroll cue
│   │   │   ├── PinnedRevealSection.tsx # Signature GSAP ScrollTrigger 3-image pinned scene
│   │   │   ├── DiscoveryDestinations.tsx # New Arrivals, Signature Pieces, Bestsellers
│   │   │   ├── ProductDiscovery.tsx # Image-led discovery showcase with hover alternate imagery
│   │   │   ├── BrandStorySection.tsx # Editorial storytelling & brand philosophy
│   │   │   └── NewsletterSection.tsx # Minimal visual newsletter subscription UI
│   │   └── ui/
│   │       ├── Button.tsx          # Minimalist button component
│   │       ├── Container.tsx       # Standard responsive width wrapper
│   │       ├── SectionHeading.tsx  # Editorial section heading (eyebrow + Cormorant title)
│   │       ├── ScrollCue.tsx       # Minimal animated scroll indicator
│   │       └── ImageSlot.tsx       # Centralized image wrapper with graceful loading states
│   ├── config/
│   │   ├── images.ts               # Centralized image catalog (easily swappable for client assets)
│   │   └── site.ts                 # Brand configuration, navigation links, and editorial copy
│   ├── lib/
│   │   ├── utils.ts                # Class merging utility
│   │   └── gsap.ts                 # Safe GSAP + ScrollTrigger SSR registration & cleanup
│   └── types/
│       └── index.ts                # TypeScript interfaces for products, images, and navigation
├── .env.example                    # Placeholder environment variables for future phases
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 3. How to Replace Image Assets

As specified in the technical requirements, all imagery is centralized in:
`src/config/images.ts`

To replace temporary editorial placeholders with the client's official photoshoot assets:
1. Place new high-resolution images in `public/images/` or host them on a CDN.
2. Update the corresponding image slots in `src/config/images.ts`.
3. No layout or animation code needs to be modified.

---

## 4. Local Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

To run a production build:

```bash
npm run build
```

---

## 5. Roadmap

- **Phase 1 (Current)**: Design MVP & Cinematic Interactions.
- **Phase 2 (Future)**: Supabase PostgreSQL, Authentication (Email & Google OAuth), Customer Profiles, Addresses.
- **Phase 3 (Future)**: Persistent Cart, Stock Verification, Razorpay Payment Gateway & Webhooks.
- **Phase 4 (Future)**: Resend Transactional Email & Phone OTP verification.
- **Phase 5 (Future)**: Admin Dashboard & Inventory Management.
