import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageSlot } from "@/components/ui/ImageSlot";

export function DiscoveryDestinations() {
  const { destinations } = SITE_CONFIG;

  return (
    <section
      id="destinations"
      className="w-full bg-[var(--bg-primary)] py-20 lg:py-28 border-b border-[var(--border-subtle)]"
      aria-label="Editorial Discovery Destinations"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="Curated Capsules"
          title="Discovery Destinations"
          subtitle="Three distinct perspectives defining the Love Lasa wardrobe."
          description="Explore our latest runway arrivals, enduring archive silhouettes, and most sought-after atelier works."
          align="left"
        />

        {/* Three Editorial Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {destinations.map((dest, index) => (
            <Link
              key={dest.id}
              href={dest.href}
              className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-red)]"
            >
              {/* Image Container with Editorial Aspect Ratio */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--bg-surface)] border border-[var(--border-subtle)] transition-all duration-500 group-hover:border-[var(--border-strong)] group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
                <ImageSlot
                  image={dest.image}
                  aspectRatioClass="aspect-[3/4]"
                  zoomOnHover
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Subtle bottom gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card Number Badge */}
                <div className="absolute top-4 left-4">
                  <span className="font-sans text-[10px] tracking-widest text-white/90 bg-black/40 px-2.5 py-0.5 rounded backdrop-blur-xs">
                    0{index + 1}
                  </span>
                </div>

                {/* Hover CTA prompt */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="font-sans text-xs uppercase tracking-[0.2em] font-medium">
                    Explore Capsule
                  </span>
                  <span className="text-sm">→</span>
                </div>
              </div>

              {/* Destination Metadata */}
              <div className="mt-5 flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[var(--accent-red)] font-semibold">
                    {dest.subtitle}
                  </span>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-light text-[var(--text-primary)] group-hover:text-[var(--accent-red)] transition-colors duration-200">
                  {dest.title}
                </h3>
                <p className="font-sans text-xs text-[var(--text-muted)] leading-relaxed pt-1 line-clamp-2">
                  {dest.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
