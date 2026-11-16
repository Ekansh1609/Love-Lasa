"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

interface HeaderProps {
  /** Optional override to force solid/frosted header (e.g. on non-hero pages) */
  forceSolid?: boolean;
}

export function Header({ forceSolid = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeToast, setActiveToast] = useState<string | null>(null);

  // Monitor scroll position for smooth background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Visual interaction feedback helper (no backend)
  const triggerVisualFeedback = (featureName: string) => {
    setActiveToast(`${featureName} (Visual MVP Preview)`);
    const timer = setTimeout(() => setActiveToast(null), 2500);
    return () => clearTimeout(timer);
  };

  const isFrosted = forceSolid || isScrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-out",
          isFrosted
            ? "bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[var(--border-subtle)] py-4 text-[var(--text-primary)] shadow-[0_2px_16px_rgba(0,0,0,0.02)]"
            : "bg-gradient-to-b from-black/50 via-black/20 to-transparent py-5 sm:py-6 text-white"
        )}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          
          {/* =========================================================
              MOBILE & TABLET VIEWPORT (< 1024px)
              Left: Hamburger menu
              Centre: LOVE LASA wordmark
              Right: Shopping Bag icon + Account icon only (Search removed)
             ========================================================= */}
          <div className="grid grid-cols-[auto_1fr_auto] items-center w-full lg:hidden">
            {/* Left: Hamburger Menu Button */}
            <div className="flex items-center justify-start">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
                className={cn(
                  "p-2 -ml-2 rounded-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-red)]",
                  isFrosted ? "text-[var(--text-primary)] hover:text-[var(--accent-red)]" : "text-white hover:text-white/80"
                )}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </svg>
              </button>
            </div>

            {/* Centre: LOVE LASA Wordmark */}
            <div className="flex items-center justify-center text-center px-2">
              <Link
                href="/"
                className="flex items-center text-center focus-visible:outline-none group"
                aria-label="Love Lasa Homepage"
              >
                <span
                  className={cn(
                    "font-display text-xl sm:text-2xl font-light tracking-[0.22em] transition-colors duration-300",
                    isFrosted ? "text-[var(--text-primary)]" : "text-white drop-shadow-sm"
                  )}
                >
                  {SITE_CONFIG.name}
                </span>
              </Link>
            </div>

            {/* Right: Shopping Bag + Account Icons Only */}
            <div className="flex items-center justify-end space-x-1 sm:space-x-2">
              <button
                type="button"
                onClick={() => triggerVisualFeedback("Shopping Bag")}
                aria-label="Shopping Bag (0 items)"
                className={cn(
                  "p-2 relative rounded-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-red)]",
                  isFrosted ? "text-[var(--text-primary)] hover:text-[var(--accent-red)]" : "text-white hover:text-white/80"
                )}
              >
                <BagIcon />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-red)]" />
              </button>

              <button
                type="button"
                onClick={() => triggerVisualFeedback("Account")}
                aria-label="Account / Sign In"
                className={cn(
                  "p-2 -mr-2 rounded-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-red)]",
                  isFrosted ? "text-[var(--text-primary)] hover:text-[var(--accent-red)]" : "text-white hover:text-white/80"
                )}
              >
                <AccountIcon />
              </button>
            </div>
          </div>

          {/* =========================================================
              DESKTOP VIEWPORT (>= 1024px)
              Left: LOVE LASA wordmark
              Centre: Home, Shop, Our Story, Contact Us
              Right: Shopping Bag icon + Account icon only (Search removed)
             ========================================================= */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center w-full">
            {/* Left: LOVE LASA Wordmark */}
            <div className="flex items-center justify-start">
              <Link
                href="/"
                className="group flex items-center focus-visible:outline-none"
                aria-label="Love Lasa Homepage"
              >
                <span
                  className={cn(
                    "font-display text-2xl xl:text-3xl font-light tracking-[0.22em] transition-colors duration-300",
                    isFrosted ? "text-[var(--text-primary)]" : "text-white drop-shadow-sm"
                  )}
                >
                  {SITE_CONFIG.name}
                </span>
              </Link>
            </div>

            {/* Centre: Navigation Links (Home, Shop, Our Story, Contact Us) */}
            <nav className="flex items-center justify-center space-x-8 xl:space-x-10" aria-label="Main Navigation">
              {SITE_CONFIG.nav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "group relative py-1 font-sans text-xs uppercase tracking-[0.18em] transition-colors duration-200",
                    isFrosted
                      ? "text-[var(--text-primary)] hover:text-[var(--accent-red)]"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  <span>{item.label}</span>
                  {/* Subtle hover accent line */}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[var(--accent-red)] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Right: Shopping Bag + Account Icons Only */}
            <div className="flex items-center justify-end space-x-6 xl:space-x-7">
              <button
                type="button"
                onClick={() => triggerVisualFeedback("Shopping Bag")}
                aria-label="Shopping Bag (0 items)"
                className={cn(
                  "p-1.5 relative rounded-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-red)]",
                  isFrosted ? "text-[var(--text-primary)] hover:text-[var(--accent-red)]" : "text-white/90 hover:text-white"
                )}
              >
                <BagIcon />
                <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[var(--accent-red)]" />
              </button>

              <button
                type="button"
                onClick={() => triggerVisualFeedback("Account")}
                aria-label="Account / Sign In"
                className={cn(
                  "p-1.5 rounded-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-red)]",
                  isFrosted ? "text-[var(--text-primary)] hover:text-[var(--accent-red)]" : "text-white/90 hover:text-white"
                )}
              >
                <AccountIcon />
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* Visual Toast Notification for MVP scope */}
      {activeToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 bg-[var(--text-primary)] text-[var(--bg-primary)] px-4 py-2.5 rounded-xs shadow-lg text-xs font-sans tracking-wide border border-[var(--border-subtle)] animate-fade-in flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-red)]" />
          <span>{activeToast}</span>
        </div>
      )}

      {/* Slide-in Mobile & Tablet Navigation Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onAccountClick={() => triggerVisualFeedback("Account")}
        onBagClick={() => triggerVisualFeedback("Shopping Bag")}
      />
    </>
  );
}

/** Minimalist Luxury SVGs with Stroke Width 1.25 */
function BagIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
