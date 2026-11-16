import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans tracking-[0.16em] uppercase text-xs transition-all duration-300 select-none disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-4 py-2.5 text-[10px]",
    md: "px-6 py-3.5 text-xs",
    lg: "px-8 py-4 text-xs tracking-[0.2em]",
  };

  const variantStyles = {
    primary:
      "bg-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-[#33312E] active:bg-black shadow-sm",
    secondary:
      "bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:bg-[var(--bg-surface-elevated)] hover:border-[var(--border-strong)]",
    outline:
      "bg-transparent text-[var(--text-primary)] border border-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)]",
    ghost:
      "bg-transparent text-[var(--text-primary)] hover:text-[var(--accent-red)] px-0 py-1",
    accent:
      "bg-[var(--accent-red)] text-white hover:bg-[var(--accent-red-hover)] shadow-sm",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (isExternal || href.startsWith("http")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
