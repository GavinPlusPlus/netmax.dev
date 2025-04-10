import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageWithSkeletonProps {
  src: string;
  alt?: string;
  className?: string;
  aspectRatio?: string; // Tailwind class like 'aspect-square', 'aspect-video', etc.
}

export function ImageWithSkeleton({
  src,
  alt = "",
  className = "",
  aspectRatio = "aspect-square",
}: ImageWithSkeletonProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative w-full overflow-hidden ${aspectRatio} ${className}`}>
      {loading && <Skeleton className="absolute inset-0 w-full h-full rounded-xl" />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
        className={`w-full h-full object-cover rounded-xl transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}