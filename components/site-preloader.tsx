"use client";

/**
 * SitePreloader — first-paint preloader with brand block, themed per example.
 *
 * Pattern adapted from liceum7bydgoszcz: sessionStorage gate (per `storageKey`)
 * so the preloader only shows on first visit, default `loading=true` so SSR
 * renders the overlay, and `prefers-reduced-motion` respected. The brand block
 * sits on its own fixed layer above the react-bits Preloader so the variant's
 * exit animation (stairs / slide / curtain / etc.) still plays as designed.
 */
import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Preloader, {
  type PreloaderProps,
} from "@/components/react-bits/preloader";

export interface SitePreloaderProps {
  /** Session storage key — give each example a unique value */
  storageKey: string;
  /** How long the preloader stays before exiting */
  duration?: number;
  /** react-bits variant */
  variant?: PreloaderProps["variant"];
  /** Stairs configuration (only when variant="stairs") */
  stairCount?: number;
  stairsRevealFrom?: PreloaderProps["stairsRevealFrom"];

  /** Solid background color of the preloader */
  bgColor: string;

  /** Brand text (e.g. "PsyLeśny Zaułek") */
  brandName?: string;
  /** Brand subtitle (e.g. "Salon groomerski") */
  tagline?: string;
  /** Tailwind classes for the brand name */
  brandClassName?: string;
  /** Tailwind classes for the tagline */
  taglineClassName?: string;
  /** Replace the whole brand block (overrides brandName/tagline) */
  brand?: ReactNode;
}

const HOLD_DEFAULT = 1500;
const STORAGE_VALUE = "1";

export function SitePreloader({
  storageKey,
  duration = HOLD_DEFAULT,
  variant = "slide",
  stairCount,
  stairsRevealFrom,
  bgColor,
  brandName = "PsyLeśny Zaułek",
  tagline = "Salon groomerski",
  brandClassName = "text-4xl md:text-5xl font-bold tracking-tight",
  taglineClassName = "text-[10px] uppercase tracking-[0.4em] font-medium opacity-70",
  brand,
}: SitePreloaderProps) {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    setMounted(true);
    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(storageKey) === STORAGE_VALUE;
    } catch {
      alreadySeen = true; // private mode / blocked → skip
    }
    if (alreadySeen) {
      setSkip(true);
      setLoading(false);
      return;
    }
    const id = window.setTimeout(() => {
      setLoading(false);
      try {
        sessionStorage.setItem(storageKey, STORAGE_VALUE);
      } catch {
        /* noop */
      }
    }, duration);
    return () => window.clearTimeout(id);
  }, [storageKey, duration]);

  // Skip render entirely if already seen this session
  if (mounted && skip) return null;
  // Hide before mount to avoid SSR / hydration mismatch around sessionStorage
  if (!mounted) return null;

  return (
    <>
      <Preloader
        loading={loading}
        variant={variant}
        position="fixed"
        zIndex={70}
        bgColor={bgColor}
        duration={duration}
        stairCount={stairCount}
        stairsRevealFrom={stairsRevealFrom}
        respectReducedMotion
        reducedMotionFallback="fade"
        ariaLabel="Ładowanie strony"
      />
      <AnimatePresence>
        {loading && (
          <motion.div
            key="brand-block"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{
              duration: 0.55,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pointer-events-none fixed inset-0 z-[71] flex items-center justify-center px-6"
            aria-hidden
          >
            {brand ?? (
              <div className="flex flex-col items-center gap-3 text-center">
                <span className={brandClassName}>{brandName}</span>
                {tagline ? (
                  <span className={taglineClassName}>{tagline}</span>
                ) : null}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
