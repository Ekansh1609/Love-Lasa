import { NavLink, CollectionDestination } from "@/types";
import { IMAGES } from "./images";

export const SITE_CONFIG = {
  name: "LOVE LASA",
  fullName: "Love Lasa Haute Couture",
  description:
    "A premium, editorial, photography-led fashion and lifestyle brand, defined by understated luxury, architectural silhouettes, and cinematic storytelling.",
  
  nav: [
    { label: "Home", href: "/" },
    { label: "Shop", href: "#shop" },
    { label: "Our Story", href: "#our-story" },
    { label: "Contact Us", href: "#contact-us" },
  ] satisfies NavLink[],

  hero: {
    eyebrow: "Autumn / Winter 2026 Collection",
    title: "LOVE LASA",
    subtitle: "The Poetics of Form & Silence",
    description:
      "A cinematic study in uncompromised tailoring, natural silks, and quiet architectural presence.",
    ctaPrimary: "Explore Collection",
    ctaPrimaryHref: "#pinned-reveal",
    ctaSecondary: "View Campaign",
    ctaSecondaryHref: "#brand-story",
    scrollIndicatorText: "Scroll to unveil",
  },

  pinnedReveal: {
    eyebrow: "Editorial Sequence",
    title: "Triad of Movement",
    subtitle: "Three perspectives on structure, fluidity, and tactile restraint.",
    panels: [
      {
        number: "01",
        label: "Structure",
        detail: "Sharp architectural shoulder lines balanced with unlined fluid drape.",
        image: IMAGES.pinnedReveal.panelLeft,
      },
      {
        number: "02",
        label: "The Signature",
        detail: "The central silhouette — hand-cut bias Mulberry silk and virgin wool.",
        image: IMAGES.pinnedReveal.panelCenter,
      },
      {
        number: "03",
        label: "Texture",
        detail: "Subtle tactile variations in raw slub yarns and natural ecru dyes.",
        image: IMAGES.pinnedReveal.panelRight,
      },
    ],
  },

  destinations: [
    {
      id: "dest-new",
      title: "New Arrivals",
      subtitle: "The Winter Capsule",
      description: "Recent expressions crafted with architectural discipline and pure fiber.",
      image: IMAGES.destinations.newArrivals,
      href: "#discovery",
    },
    {
      id: "dest-signature",
      title: "Signature Pieces",
      subtitle: "Permanent Archive",
      description: "Enduring garments engineered for quiet confidence and sculptural presence.",
      image: IMAGES.destinations.signaturePieces,
      href: "#discovery",
    },
    {
      id: "dest-bestsellers",
      title: "Bestsellers",
      subtitle: "The Coveted Icons",
      description: "Celebrated cuts cherished across private client wardrobes globally.",
      image: IMAGES.destinations.bestsellers,
      href: "#discovery",
    },
  ] satisfies CollectionDestination[],

  brandStory: {
    eyebrow: "Our Philosophy",
    title: "Designed in Silence. Finished with Precision.",
    quote:
      "“We reject the noise of transient trends. Love Lasa was founded on the belief that true luxury speaks in whispers — through pure proportion, uncompromised materials, and quiet gravity.”",
    author: "Lasa Atelier, Design Director",
    body: [
      "Every garment begins as a dialogue between weight and fluidity. We source natural fibers exclusively from heritage mills dedicated to artisanal integrity — raw mulberry silk, untreated virgin wools, and organic slub cottons.",
      "Rooted in mindful craftsmanship, our silhouettes embrace the human form without constriction. There are no ornamental distractions or synthetic embellishments — only the enduring beauty of pure structure.",
    ],
    stats: [
      { value: "100%", label: "Natural Fibers" },
      { value: "Limited", label: "Artisan Production" },
      { value: "Zero", label: "Synthetic Overlays" },
    ],
  },

  newsletter: {
    eyebrow: "Private Access",
    title: "Join the Inner Circle",
    description:
      "Receive private invitations to capsule presentations, editorial dispatches, and private client showings.",
    placeholder: "Enter your email address",
    cta: "Subscribe",
    disclaimer: "We honor your privacy. Unsubscribe at any time with a single tap.",
  },

  footer: {
    brandMark: "LOVE LASA",
    tagline: "Haute Couture & Editorial Design",
    columns: [
      {
        title: "Navigation",
        links: [
          { label: "Autumn/Winter 26", href: "#collection" },
          { label: "New Arrivals", href: "#destinations" },
          { label: "Signature Archive", href: "#destinations" },
          { label: "Product Discovery", href: "#discovery" },
        ],
      },
      {
        title: "The Brand",
        links: [
          { label: "Atelier Story", href: "#brand-story" },
          { label: "Sustainability & Fibers", href: "#brand-story" },
          { label: "Private Appointments", href: "#newsletter" },
          { label: "Press & Inquiries", href: "#newsletter" },
        ],
      },
      {
        title: "Client Care",
        links: [
          { label: "Care Instructions", href: "#" },
          { label: "Sizing Guide", href: "#" },
          { label: "Shipping Information", href: "#" },
          { label: "Client Concierge", href: "#" },
        ],
      },
    ],
    social: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Vogue Runway", href: "#" },
      { label: "Pinterest", href: "https://pinterest.com" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
    copyright: `© ${new Date().getFullYear()} LOVE LASA. All rights reserved. Crafted with editorial restraint.`,
  },
};
