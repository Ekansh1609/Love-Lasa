import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide" | "full";
  className?: string;
}

export function Container({
  children,
  size = "default",
  className,
  ...props
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1440px]",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "w-full mx-auto px-5 sm:px-8 md:px-12 lg:px-16",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
