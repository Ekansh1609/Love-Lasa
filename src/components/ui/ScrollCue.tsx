"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ScrollCueProps {
  targetId?: string;
  label?: string;
  className?: string;
}

export function ScrollCue({
  targetId = "pinned-reveal",
  label = "Scroll to unveil",
  className,
}: ScrollCueProps) {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label={`${label} - click to scroll down`}
      className={cn(
        "group inline-flex flex-col items-center gap-3 cursor-pointer text-white/90 hover:text-white transition-opacity duration-300",
        className
      )}
    >
      <span className="font-sans text-[10px] uppercase tracking-[0.25em] font-medium opacity-80 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
      <div className="relative w-[1px] h-12 bg-white/30 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[scrollLine_2s_cubic-bezier(0.65,0,0.35,1)_infinite]" />
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateY(200%);
            opacity: 0;
          }
        }
      `}</style>
    </button>
  );
}
