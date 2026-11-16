import React from "react";
import { SITE_CONFIG } from "@/config/site";
import { IMAGES } from "@/config/images";
import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BrandStorySection() {
  const { brandStory } = SITE_CONFIG;

  return (
    <section
      id="brand-story"
      className="w-full bg-[var(--bg-surface)] py-20 lg:py-32 border-b border-[var(--border-subtle)]"
      aria-label="Brand Story and Atelier Philosophy"
    >
      <Container size="wide">
        {/* Editorial Two-Column Storytelling Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Atelier Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] overflow-hidden rounded-xs border border-[var(--border-subtle)] bg-[var(--bg-primary)] shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              <ImageSlot
                image={IMAGES.story}
                aspectRatioClass="w-full h-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Subtle decorative caption */}
            <div className="mt-4 flex items-center justify-between text-[11px] font-sans text-[var(--text-muted)]">
              <span>Figure IV — Pattern Cutting & Fiber Selection</span>
              <span className="text-[var(--accent-red)] font-medium">Archive Vol. 26</span>
            </div>
          </div>

          {/* Right Column: Editorial Philosophy & Copy */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            <SectionHeading
              eyebrow={brandStory.eyebrow}
              title={brandStory.title}
              className="mb-0"
            />

            {/* Pull Quote */}
            <blockquote className="border-l-2 border-[var(--accent-red)] pl-6 my-2">
              <p className="font-display italic text-xl sm:text-2xl text-[var(--text-primary)] font-light leading-relaxed">
                {brandStory.quote}
              </p>
              <footer className="mt-3 font-sans text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] font-medium">
                — {brandStory.author}
              </footer>
            </blockquote>

            {/* Narrative Paragraphs */}
            <div className="flex flex-col space-y-4 text-sm text-[var(--text-muted)] leading-relaxed font-sans">
              {brandStory.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Artisan Highlights / Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[var(--border-strong)]/60">
              {brandStory.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display text-3xl sm:text-4xl text-[var(--text-primary)] font-light">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[11px] uppercase tracking-wider text-[var(--text-muted)] mt-1 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
