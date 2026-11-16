"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/config/images";
import { ProductItem } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function ProductDiscovery() {
  const products: ProductItem[] = IMAGES.products;

  return (
    <section
      id="discovery"
      className="w-full bg-[var(--bg-primary)] py-20 lg:py-32 border-b border-[var(--border-subtle)]"
      aria-label="Product Discovery"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <SectionHeading
            eyebrow="Selected Works"
            title="Sculptural Archetypes"
            subtitle="Garments designed to exist beyond seasonal obsolescence."
            className="mb-0 max-w-xl"
          />
          <div className="flex items-center gap-3 text-xs font-sans text-[var(--text-muted)]">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-red)]" />
            <span className="tracking-wide">Hover imagery reveals tailoring detail</span>
          </div>
        </div>

        {/* 
          Large Image-led Product Discovery Presentation
          Generous spacing, alternate hover imagery, editorial details
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProductCard({ product }: { product: ProductItem }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="group flex flex-col cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Editorial Image Canvas */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--bg-surface)] border border-[var(--border-subtle)] transition-all duration-500 group-hover:border-[var(--border-strong)] group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.05)]">
        {/* Primary Image */}
        <Image
          src={product.primaryImage.src}
          alt={product.primaryImage.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={cn(
            "object-cover object-center transition-opacity duration-700 ease-in-out",
            isHovered && product.hoverImage ? "opacity-0" : "opacity-100"
          )}
        />

        {/* Hover Alternate Image */}
        {product.hoverImage && (
          <Image
            src={product.hoverImage.src}
            alt={product.hoverImage.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={cn(
              "object-cover object-center transition-opacity duration-700 ease-in-out scale-102",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          />
        )}

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          {product.tag ? (
            <span className="font-sans text-[9px] uppercase tracking-[0.2em] font-medium bg-[var(--bg-primary)]/90 backdrop-blur-xs text-[var(--text-primary)] px-2 py-0.5 rounded-xs border border-[var(--border-subtle)]">
              {product.tag}
            </span>
          ) : <span />}
          <span className="font-sans text-[10px] tracking-widest text-[var(--text-muted)] bg-[var(--bg-primary)]/80 backdrop-blur-xs px-1.5 py-0.5 rounded-xs">
            {product.category}
          </span>
        </div>

        {/* Subtle hover prompt */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-[var(--bg-primary)]/95 backdrop-blur-sm px-3 py-2 border border-[var(--border-subtle)] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--text-primary)] font-medium">
            Inquire Piece
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-red)]" />
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-4 flex flex-col space-y-1">
        <div className="flex items-baseline justify-between">
          <h3 className="font-display text-xl sm:text-2xl font-light text-[var(--text-primary)] group-hover:text-[var(--accent-red)] transition-colors duration-200">
            {product.name}
          </h3>
        </div>

        <p className="font-sans text-xs text-[var(--text-primary)] font-medium tracking-wide">
          {product.priceFormatted}
        </p>

        {product.editorialNote && (
          <p className="font-sans text-[11px] text-[var(--text-muted)] leading-relaxed pt-0.5">
            {product.editorialNote}
          </p>
        )}
      </div>
    </article>
  );
}
