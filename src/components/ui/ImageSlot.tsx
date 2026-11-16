"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ImageAsset } from "@/types";
import { cn } from "@/lib/utils";

interface ImageSlotProps {
  image: ImageAsset;
  alt?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  aspectRatioClass?: string;
  zoomOnHover?: boolean;
}

export function ImageSlot({
  image,
  alt,
  fill = true,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className,
  aspectRatioClass,
  zoomOnHover = false,
}: ImageSlotProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[var(--bg-surface)]",
        aspectRatioClass || (fill ? "w-full h-full" : ""),
        className
      )}
    >
      <Image
        src={image.src}
        alt={alt || image.alt}
        fill={fill}
        width={!fill ? image.width || 1200 : undefined}
        height={!fill ? image.height || 1600 : undefined}
        priority={priority}
        sizes={sizes}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "object-cover object-center transition-all duration-700 ease-out",
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105",
          zoomOnHover && "group-hover:scale-105 transition-transform duration-700 ease-out"
        )}
      />
    </div>
  );
}
