import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  showAccentDot?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  description,
  align = "left",
  showAccentDot = true,
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col space-y-3.5 mb-10 md:mb-16",
        isCenter ? "items-center text-center mx-auto max-w-2xl" : "items-start text-left max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-2.5">
          {showAccentDot && (
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent-red)]"
              aria-hidden="true"
            />
          )}
          <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[var(--text-muted)] font-medium">
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[var(--text-primary)] leading-[1.12]">
        {title}
      </h2>

      {subtitle && (
        <p className="font-display italic text-lg sm:text-xl text-[var(--text-muted)] font-normal">
          {subtitle}
        </p>
      )}

      {description && (
        <p className="font-sans text-sm sm:text-base text-[var(--text-muted)] leading-relaxed pt-1 max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}
