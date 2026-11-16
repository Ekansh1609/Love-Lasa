"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { SITE_CONFIG } from "@/config/site";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onAccountClick?: () => void;
  onBagClick?: () => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  onAccountClick,
  onBagClick,
}: MobileMenuProps) {
  // Prevent background scrolling while menu is open & listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation Menu">
          {/* Backdrop Blur & Dim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Slide-in Panel from Left (natural top-aligned flow without excessive empty space) */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-[85%] max-w-[360px] h-full bg-[var(--bg-primary)] shadow-2xl flex flex-col p-6 sm:p-8 border-r border-[var(--border-subtle)] overflow-y-auto"
          >
            {/* 1. Top Bar: Wordmark and Close Button (Kept in current top positions) */}
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-5 shrink-0">
              <span className="font-display text-2xl font-light tracking-[0.2em] text-[var(--text-primary)]">
                {SITE_CONFIG.name}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="p-2 -mr-2 text-[var(--text-primary)] hover:text-[var(--accent-red)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-red)]"
                aria-label="Close menu"
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
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* 2. Navigation Links: Upper section directly below header divider with consistent vertical spacing */}
            <nav className="flex flex-col space-y-1 pt-6 pb-2 shrink-0" aria-label="Mobile Navigation">
              {SITE_CONFIG.nav.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.05 + index * 0.035,
                    duration: 0.28,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between py-2.5 sm:py-3 font-display text-2xl sm:text-3xl font-light tracking-tight text-[var(--text-primary)] hover:text-[var(--accent-red)] transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="font-sans text-xs text-[var(--text-light)]">→</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* 3. Quick Actions: Shopping Bag & Account positioned directly below navigation with a comfortable gap */}
            <div className="mt-4 pt-6 border-t border-[var(--border-subtle)] space-y-4 shrink-0">
              <div className="flex items-center gap-6">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onBagClick?.();
                  }}
                  className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.16em] text-[var(--text-primary)] hover:text-[var(--accent-red)] transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
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
                  <span>Shopping Bag</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onAccountClick?.();
                  }}
                  className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.16em] text-[var(--text-primary)] hover:text-[var(--accent-red)] transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
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
                  <span>Account</span>
                </button>
              </div>

              {/* Brand Footer Note */}
              <div className="pt-2 text-[11px] font-sans text-[var(--text-muted)] flex items-center justify-between">
                <span>Haute Couture & Editorial Design</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-red)]" />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
