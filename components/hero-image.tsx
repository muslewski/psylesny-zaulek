"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * HeroImage — load-fade + CSS hero-zoom, ported from liceum7bydgoszcz.
 *
 * Two coordinated effects:
 *
 *   1. Wrapper-level CSS animation (`animate-hero-zoom` in globals.css).
 *      Scales from 1.18 + blur(12px) → 1 + blur(0) over 2.2s using a
 *      smooth cubic-bezier easing. Runs independently of image load
 *      state — it's a pure CSS @keyframes animation that fires on mount.
 *
 *   2. Image-level opacity fade. The <img> starts at opacity:0 and
 *      transitions to opacity:1 over 700ms once onLoad fires. Decoupling
 *      the fade from the zoom means:
 *        - Cached images: opacity is instantly 1 (effect below catches
 *          this), zoom still plays for the cinematic feel.
 *        - Slow images: zoom plays on the (invisible) wrapper, image
 *          materialises with its own fade mid-animation. No "pop".
 *
 * SSR / cache edge case
 * ─────────────────────
 * If the browser has the image cached, the underlying <img> is `complete`
 * by the time React commits and `onLoad` will never fire for us. The
 * mount effect checks `ref.current.complete && naturalWidth > 0` and
 * skips straight to the loaded state — no stuck-invisible image.
 *
 * Reduce-motion is honoured at the CSS layer (the @media rule in
 * globals.css collapses the zoom animation to nothing).
 */
interface HeroImageProps {
  src: string;
  alt: string;
  /** Tailwind on the inner <img> — sizing, object-fit, filters, etc. */
  className?: string;
  /** Tailwind on the wrapper that holds the zoom animation */
  wrapperClassName?: string;
  /** Disable the hero-zoom keyframes (still keeps the load fade) */
  zoom?: boolean;
  /** loading attr for the underlying <img> — default eager (above the fold) */
  loading?: "eager" | "lazy";
  /** Hint to the browser this image is high-priority */
  fetchPriority?: "high" | "low" | "auto";
  style?: CSSProperties;
}

export function HeroImage({
  src,
  alt,
  className,
  wrapperClassName,
  zoom = true,
  loading = "eager",
  fetchPriority = "high",
  style,
}: HeroImageProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Cache / pre-hydration case: if the image is already complete by
    // the time React commits, onLoad never fires. Set loaded
    // synchronously so we don't get stuck at opacity:0 forever.
    // `naturalWidth > 0` guards against decode failures (broken src).
    if (ref.current?.complete && ref.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  return (
    // Wrapper is just a clipping box. The zoom animation lives on the
    // <img> below so the scaled visual is clipped by the wrapper's
    // overflow-hidden — no risk of the scaled image bleeding past
    // surrounding badges or layout siblings.
    <div className={cn("overflow-hidden", wrapperClassName)}>
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading={loading}
        // React 19 supports lowercase `fetchpriority` via the DOM
        // attribute. Cast through any-style because the React types
        // lag behind the platform — same trick used elsewhere.
        {...({ fetchpriority: fetchPriority } as { fetchpriority?: string })}
        onLoad={() => setLoaded(true)}
        className={cn(
          zoom && "animate-hero-zoom will-change-transform",
          "transition-opacity duration-700 ease-out",
          loaded ? "opacity-100" : "opacity-0",
          className,
        )}
        style={style}
      />
    </div>
  );
}
