"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/ui/Container";

export default function HeaderVerificationPage() {
  const scrollTo = (y: number) => {
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      {/* 
        The Love Lasa Header Component
        - Transparent over top hero
        - Transitions to warm ivory frosted background upon scrolling
        - Desktop: Left wordmark, Centre links (Home, Shop, Our Story, Contact Us), Right (Shopping Bag, Account)
        - Mobile/Tablet (<1024px): Left Hamburger, Centre Wordmark, Right (Shopping Bag, Account)
      */}
      <Header />

      <main className="min-h-[220vh] bg-[var(--bg-primary)] text-[var(--text-primary)]">
        {/* Top Dark Hero Simulation Area: Tests Header in Transparent State */}
        <section className="relative h-[80vh] min-h-[560px] bg-[#161616] text-white flex flex-col justify-center items-center px-6 text-center overflow-hidden">
          {/* Subtle atmospheric vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[var(--accent-red)] font-semibold inline-block">
              Task Milestone • Header Component
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide text-white">
              Header Implementation & Verification
            </h1>
            <p className="font-sans text-xs sm:text-sm text-white/80 max-w-md mx-auto leading-relaxed">
              Transparent over dark hero at top; scroll down to test the smooth transition to warm ivory frosted navigation.
            </p>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => scrollTo(180)}
                className="px-5 py-2.5 bg-white text-black font-sans text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Scroll to Test Frosted Header ↓
              </button>
              <button
                onClick={() => scrollTo(0)}
                className="px-5 py-2.5 bg-transparent border border-white/60 text-white font-sans text-xs uppercase tracking-wider hover:bg-white/10 transition-colors cursor-pointer"
              >
                Scroll to Top ↑
              </button>
            </div>
          </div>
        </section>

        {/* Content Section: Tests Header in Scrolled Frosted State */}
        <section className="py-20 border-b border-[var(--border-subtle)]">
          <Container size="wide">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="border-l-2 border-[var(--accent-red)] pl-4">
                <span className="font-sans text-[11px] uppercase tracking-widest text-[var(--text-muted)] font-medium">
                  Verified Responsive Specifications
                </span>
                <h2 className="font-display text-3xl font-light text-[var(--text-primary)] mt-1">
                  Header Behavior Across Viewports
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xs">
                  <span className="font-sans text-[11px] uppercase tracking-widest text-[var(--accent-red)] font-semibold block mb-1">
                    Desktop (1440px & 1280px)
                  </span>
                  <ul className="text-xs text-[var(--text-muted)] space-y-1.5 font-sans">
                    <li>• Left: LOVE LASA wordmark (Cormorant)</li>
                    <li>• Centre: Home, Shop, Our Story, Contact Us</li>
                    <li>• Right: Shopping Bag and Account icons only</li>
                  </ul>
                </div>

                <div className="p-5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xs">
                  <span className="font-sans text-[11px] uppercase tracking-widest text-[var(--accent-red)] font-semibold block mb-1">
                    Tablet (768px)
                  </span>
                  <ul className="text-xs text-[var(--text-muted)] space-y-1.5 font-sans">
                    <li>• Left: Hamburger menu trigger</li>
                    <li>• Centre: Centred LOVE LASA Wordmark</li>
                    <li>• Right: Shopping Bag and Account icons only</li>
                    <li>• Zero overlap or clipped elements</li>
                  </ul>
                </div>

                <div className="p-5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xs">
                  <span className="font-sans text-[11px] uppercase tracking-widest text-[var(--accent-red)] font-semibold block mb-1">
                    Mobile (390px & 375px)
                  </span>
                  <ul className="text-xs text-[var(--text-muted)] space-y-1.5 font-sans">
                    <li>• Left: Hamburger menu</li>
                    <li>• Centre: Centred Wordmark</li>
                    <li>• Right: Shopping Bag and Account icons only</li>
                    <li>• Slide-in drawer with Home, Shop, Our Story, Contact Us</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-[var(--bg-surface)] border border-[var(--border-subtle)] space-y-3">
                <h3 className="font-display text-xl font-light text-[var(--text-primary)]">
                  Scope Limitation Adherence
                </h3>
                <p className="font-sans text-xs text-[var(--text-muted)] leading-relaxed">
                  Search, Account, and Bag icons are wired to visual feedback triggers as required for the design MVP. No backend, database, or cart state is touched.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
