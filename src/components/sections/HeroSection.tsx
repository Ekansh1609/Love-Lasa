import React from "react";
import { SITE_CONFIG } from "@/config/site";
import { IMAGES } from "@/config/images";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Button } from "@/components/ui/Button";
import { ScrollCue } from "@/components/ui/ScrollCue";

export function HeroSection() {
  const { hero } = SITE_CONFIG;

  return (
    <section
      id="collection"
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
      aria-label="Campaign Hero"
    >
      {/* Background Campaign Photography */}
      <div className="absolute inset-0 z-0">
        <ImageSlot
          image={IMAGES.hero}
          priority
          sizes="100vw"
          className="w-full h-full brightness-[0.82] contrast-[1.05]"
        />
        {/* Cinematic Atmospheric Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center pt-16">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-red)]" aria-hidden="true" />
          <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.3em] text-white/90 font-medium">
            {hero.eyebrow}
          </span>
        </div>

        {/* Brand Display Title */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-white tracking-[0.16em] uppercase leading-none drop-shadow-md">
          {hero.title}
        </h1>

        {/* Subtitle & Poetic Description */}
        <p className="font-display italic text-xl sm:text-2xl md:text-3xl text-white/95 mt-4 sm:mt-6 font-light max-w-2xl">
          {hero.subtitle}
        </p>

        <p className="font-sans text-xs sm:text-sm text-white/80 max-w-md mt-3 sm:mt-4 leading-relaxed tracking-wide">
          {hero.description}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-8 sm:mt-10">
          <Button
            href={hero.ctaPrimaryHref}
            size="lg"
            className="w-full sm:w-auto bg-white text-black hover:bg-[var(--bg-primary)] hover:text-black border border-white"
          >
            {hero.ctaPrimary}
          </Button>
          <Button
            href={hero.ctaSecondaryHref}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-white/70 text-white hover:bg-white hover:text-black"
          >
            {hero.ctaSecondary}
          </Button>
        </div>
      </div>

      {/* Subtle Scroll Cue at bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <ScrollCue targetId="pinned-reveal" label={hero.scrollIndicatorText} />
      </div>
    </section>
  );
}
