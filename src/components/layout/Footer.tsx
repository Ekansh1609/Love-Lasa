import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const { footer } = SITE_CONFIG;

  return (
    <footer className="bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] pt-20 pb-12 transition-colors">
      <Container size="wide">
        {/* Top Section: Brand Statement & Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[var(--border-subtle)]">
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <span className="font-display text-4xl sm:text-5xl font-light tracking-[0.2em] text-[var(--text-primary)] block">
                {footer.brandMark}
              </span>
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-[var(--accent-red)] font-medium mt-2">
                {footer.tagline}
              </p>
              <p className="font-sans text-xs text-[var(--text-muted)] leading-relaxed mt-4 max-w-sm">
                Architectural silhouettes, heritage Mulberry silks, and unhurried luxury. Crafted for collectors of timeless form.
              </p>
            </div>

            <div className="pt-2">
              <span className="inline-block text-[11px] uppercase tracking-widest text-[var(--text-muted)]">
                Atelier Location
              </span>
              <p className="font-display text-base text-[var(--text-primary)] mt-1">
                New Delhi • Paris • Milan
              </p>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footer.columns.map((column) => (
              <div key={column.title} className="flex flex-col space-y-4">
                <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-[var(--text-primary)] font-semibold">
                  {column.title}
                </span>
                <ul className="flex flex-col space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-sans text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:translate-x-0.5 transition-all duration-200 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Social, Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[var(--text-muted)]">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {footer.social.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs uppercase tracking-wider hover:text-[var(--accent-red)] transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>

          {/* Copyright Note */}
          <p className="font-sans text-center text-[11px] tracking-wide text-[var(--text-light)]">
            {footer.copyright}
          </p>

          {/* Legal Links */}
          <div className="flex items-center space-x-5 text-[11px]">
            {footer.legal.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-[var(--text-primary)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
