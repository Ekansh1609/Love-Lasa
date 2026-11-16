"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { SITE_CONFIG } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";

export function PinnedRevealSection() {
  const { pinnedReveal } = SITE_CONFIG;
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelLeftRef = useRef<HTMLDivElement>(null);
  const panelCenterRef = useRef<HTMLDivElement>(null);
  const panelRightRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced-motion preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !sectionRef.current) return;

    // Use GSAP context for safe cleanup in React 19 / Next.js
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop Cinematic Pinned Scene (>= 1024px)
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=120%",
            pin: true,
            scrub: 1.2,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Initial setup for desktop reveal
        gsap.set([panelLeftRef.current, panelRightRef.current], {
          y: 120,
          opacity: 0.15,
          scale: 0.94,
        });
        gsap.set(panelCenterRef.current, {
          y: 70,
          opacity: 0.2,
          scale: 0.96,
        });

        // Sequence:
        // 1. Center hero panel emerges first (lead presence)
        tl.to(panelCenterRef.current, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        })
          // 2. Flanking panels (Left & Right) rise and settle into 1fr / 1.15fr / 1fr triad
          .to(
            [panelLeftRef.current, panelRightRef.current],
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1.1,
              stagger: 0.15,
              ease: "power2.out",
            },
            "-=0.6"
          )
          // 3. Subtle atmospheric hold in place before releasing naturally
          .to({}, { duration: 0.8 });
      });

      // Tablet / Mobile Natural Flow (< 1024px)
      mm.add("(max-width: 1023px)", () => {
        // Natural gentle reveal without pinning to prevent viewport trapping
        const panels = [panelCenterRef.current, panelLeftRef.current, panelRightRef.current];
        panels.forEach((panel) => {
          if (!panel) return;
          gsap.fromTo(
            panel,
            { opacity: 0.2, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 85%",
                end: "top 40%",
                scrub: 0.8,
              },
            }
          );
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pinned-reveal"
      className="relative w-full min-h-screen bg-[var(--bg-primary)] py-16 lg:py-24 flex flex-col justify-center overflow-hidden border-b border-[var(--border-subtle)]"
      aria-label="Signature Pinned Image Reveal"
    >
      <Container size="wide" className="h-full flex flex-col justify-between">
        {/* Section Header */}
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-red)]" aria-hidden="true" />
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)] font-medium">
              {pinnedReveal.eyebrow}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-[var(--text-primary)] tracking-tight">
            {pinnedReveal.title}
          </h2>
          <p className="font-display italic text-base sm:text-lg text-[var(--text-muted)] mt-2">
            {pinnedReveal.subtitle}
          </p>
        </div>

        {/* 
          Three-Image Grid Layout:
          - Desktop (lg): 1fr / 1.15fr / 1fr relationship
          - Tablet (md): Full lead center panel + paired secondary panels
          - Mobile (sm): Stacked imagery
        */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.18fr_1fr] gap-6 sm:gap-8 lg:gap-10 items-center justify-center"
        >
          {/* Panel I — Left (1fr) */}
          <div
            ref={panelLeftRef}
            className="group flex flex-col space-y-3 order-2 md:order-2 lg:order-1"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-xs border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
              <ImageSlot
                image={pinnedReveal.panels[0].image}
                aspectRatioClass="aspect-[3/4]"
                zoomOnHover
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
              />
              <span className="absolute top-4 left-4 font-sans text-[10px] tracking-widest text-white/90 bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                {pinnedReveal.panels[0].number}
              </span>
            </div>
            <div className="pt-1">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--text-primary)] font-medium">
                {pinnedReveal.panels[0].label}
              </span>
              <p className="font-sans text-xs text-[var(--text-muted)] mt-0.5 leading-relaxed">
                {pinnedReveal.panels[0].detail}
              </p>
            </div>
          </div>

          {/* Panel II — Center Lead (1.18fr) */}
          <div
            ref={panelCenterRef}
            className="group flex flex-col space-y-3 order-1 md:order-1 md:col-span-2 lg:col-span-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xs border border-[var(--border-strong)] bg-[var(--bg-surface)] shadow-[0_20px_60px_rgba(0,0,0,0.07)]">
              <ImageSlot
                image={pinnedReveal.panels[1].image}
                aspectRatioClass="aspect-[4/5]"
                zoomOnHover
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="font-sans text-[10px] tracking-widest text-white/90 bg-black/45 px-2.5 py-0.5 rounded backdrop-blur-xs">
                  {pinnedReveal.panels[1].number}
                </span>
                <span className="font-sans text-[9px] uppercase tracking-widest text-white/95 bg-[var(--accent-red)] px-2 py-0.5 rounded font-medium">
                  Atelier Lead
                </span>
              </div>
            </div>
            <div className="pt-1 text-left lg:text-center">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--text-primary)] font-semibold">
                {pinnedReveal.panels[1].label}
              </span>
              <p className="font-sans text-xs text-[var(--text-muted)] mt-0.5 leading-relaxed max-w-sm mx-auto">
                {pinnedReveal.panels[1].detail}
              </p>
            </div>
          </div>

          {/* Panel III — Right (1fr) */}
          <div
            ref={panelRightRef}
            className="group flex flex-col space-y-3 order-3 md:order-3 lg:order-3"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-xs border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
              <ImageSlot
                image={pinnedReveal.panels[2].image}
                aspectRatioClass="aspect-[3/4]"
                zoomOnHover
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
              />
              <span className="absolute top-4 left-4 font-sans text-[10px] tracking-widest text-white/90 bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                {pinnedReveal.panels[2].number}
              </span>
            </div>
            <div className="pt-1">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--text-primary)] font-medium">
                {pinnedReveal.panels[2].label}
              </span>
              <p className="font-sans text-xs text-[var(--text-muted)] mt-0.5 leading-relaxed">
                {pinnedReveal.panels[2].detail}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
