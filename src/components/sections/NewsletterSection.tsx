"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function NewsletterSection() {
  const { newsletter } = SITE_CONFIG;
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section
      id="newsletter"
      className="w-full bg-[var(--bg-primary)] py-20 lg:py-28"
      aria-label="Private Access Newsletter"
    >
      <Container size="narrow" className="text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-red)]" aria-hidden="true" />
          <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)] font-medium">
            {newsletter.eyebrow}
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-[var(--text-primary)] tracking-tight">
          {newsletter.title}
        </h2>

        <p className="font-sans text-xs sm:text-sm text-[var(--text-muted)] max-w-md mx-auto mt-3 sm:mt-4 leading-relaxed">
          {newsletter.description}
        </p>

        {/* Form UI */}
        <div className="mt-8 max-w-md mx-auto">
          {isSubmitted ? (
            <div className="p-6 bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-center animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-red)] inline-block mb-2" />
              <p className="font-display text-xl text-[var(--text-primary)]">
                Invitation Requested
              </p>
              <p className="font-sans text-xs text-[var(--text-muted)] mt-1">
                You will receive private dispatches at <span className="font-medium text-[var(--text-primary)]">{email}</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={newsletter.placeholder}
                  aria-label="Email address"
                  className="w-full px-4 py-3.5 bg-transparent border border-[var(--border-strong)] text-xs text-[var(--text-primary)] placeholder:text-[var(--text-light)] focus:border-[var(--text-primary)] focus:outline-none transition-colors"
                />
              </div>
              <Button type="submit" size="md" className="sm:w-auto">
                {newsletter.cta}
              </Button>
            </form>
          )}

          <p className="font-sans text-[11px] text-[var(--text-light)] mt-4">
            {newsletter.disclaimer}
          </p>
        </div>
      </Container>
    </section>
  );
}
