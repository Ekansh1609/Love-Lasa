import { ImageAsset } from "@/types";

/**
 * LOVE LASA — Centralized Image Catalog
 *
 * All photography assets used throughout the website are defined here.
 * When the client photoshoot assets become available, simply update the URLs
 * or paths in this file without modifying any component layout or animation code.
 */

export const IMAGES = {
  // Hero Campaign Visual
  hero: {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2160&auto=format&fit=crop",
    alt: "Love Lasa Haute Couture Campaign — Model in architectural monochrome silhouette",
    aspectRatio: "16/9",
    width: 2160,
    height: 1440,
  } satisfies ImageAsset,

  // Signature Pinned 3-Image Reveal Scene (Desktop: 1fr / 1.15fr / 1fr)
  pinnedReveal: {
    panelLeft: {
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop",
      alt: "Panel I — Sculptural linen tailoring and contemporary structure",
      aspectRatio: "3/4",
      width: 1400,
      height: 1867,
    } satisfies ImageAsset,
    panelCenter: {
      src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
      alt: "Panel II — The Signature Editorial Ensemble with dramatic draping",
      aspectRatio: "4/5",
      width: 1600,
      height: 2000,
    } satisfies ImageAsset,
    panelRight: {
      src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1400&auto=format&fit=crop",
      alt: "Panel III — Tactile silk weave and handcrafted metallic finishes",
      aspectRatio: "3/4",
      width: 1400,
      height: 1867,
    } satisfies ImageAsset,
  },

  // Discovery Destinations
  destinations: {
    newArrivals: {
      src: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1400&auto=format&fit=crop",
      alt: "New Arrivals — Autumn/Winter Capsule Collection",
      aspectRatio: "3/4",
      width: 1400,
      height: 1867,
    } satisfies ImageAsset,
    signaturePieces: {
      src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1400&auto=format&fit=crop",
      alt: "Signature Pieces — Masterfully crafted timeless staples",
      aspectRatio: "3/4",
      width: 1400,
      height: 1867,
    } satisfies ImageAsset,
    bestsellers: {
      src: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=1400&auto=format&fit=crop",
      alt: "Bestsellers — Most coveted couture garments",
      aspectRatio: "3/4",
      width: 1400,
      height: 1867,
    } satisfies ImageAsset,
  },

  // Product Discovery (with alternate hover imagery)
  products: [
    {
      id: "prod-01",
      name: "The Sculptural Trench",
      category: "Outerwear",
      priceFormatted: "₹ 38,500",
      editorialNote: "Double-faced virgin wool with raw Japanese cotton binding.",
      tag: "Signature",
      primaryImage: {
        src: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1200&auto=format&fit=crop",
        alt: "The Sculptural Trench in Sandstone — Front view",
        aspectRatio: "3/4",
        width: 1200,
        height: 1600,
      },
      hoverImage: {
        src: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop",
        alt: "The Sculptural Trench — Silhouette movement",
        aspectRatio: "3/4",
        width: 1200,
        height: 1600,
      },
    },
    {
      id: "prod-02",
      name: "Aura Asymmetric Silk Gown",
      category: "Eveningwear",
      priceFormatted: "₹ 54,000",
      editorialNote: "Hand-pleated mulberry silk with flowing bias drape.",
      tag: "Limited Atelier",
      primaryImage: {
        src: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop",
        alt: "Aura Asymmetric Silk Gown in Pale Bone",
        aspectRatio: "3/4",
        width: 1200,
        height: 1600,
      },
      hoverImage: {
        src: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?q=80&w=1200&auto=format&fit=crop",
        alt: "Aura Asymmetric Silk Gown — Reverse detail",
        aspectRatio: "3/4",
        width: 1200,
        height: 1600,
      },
    },
    {
      id: "prod-03",
      name: "Monolith Oversized Blazer",
      category: "Tailoring",
      priceFormatted: "₹ 32,000",
      editorialNote: "Structured shoulder line in bespoke midnight slate twill.",
      tag: "New Arrival",
      primaryImage: {
        src: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1200&auto=format&fit=crop",
        alt: "Monolith Oversized Blazer in Slate",
        aspectRatio: "3/4",
        width: 1200,
        height: 1600,
      },
      hoverImage: {
        src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop",
        alt: "Monolith Oversized Blazer — Collar & button craftsmanship",
        aspectRatio: "3/4",
        width: 1200,
        height: 1600,
      },
    },
    {
      id: "prod-04",
      name: "Solstice Raw Silk Trousers",
      category: "Separates",
      priceFormatted: "₹ 24,500",
      editorialNote: "High-waisted pleated silhouette with natural slub texture.",
      primaryImage: {
        src: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?q=80&w=1200&auto=format&fit=crop",
        alt: "Solstice Raw Silk Trousers in Warm Ecru",
        aspectRatio: "3/4",
        width: 1200,
        height: 1600,
      },
      hoverImage: {
        src: "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=1200&auto=format&fit=crop",
        alt: "Solstice Raw Silk Trousers — Movement & drape",
        aspectRatio: "3/4",
        width: 1200,
        height: 1600,
      },
    },
  ],

  // Brand Story / Atelier Visual
  story: {
    src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1800&auto=format&fit=crop",
    alt: "Love Lasa Atelier — Tactile artisan fabrics and minimalist pattern design",
    aspectRatio: "16/10",
    width: 1800,
    height: 1125,
  } satisfies ImageAsset,
};
