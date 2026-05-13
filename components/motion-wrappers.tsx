"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import {
  fadeUpVariants,
  fadeUpFastVariants,
  scaleInVariants,
  containerStagger,
  containerStaggerFast,
  heroContainer,
  heroItem,
  viewportOnce,
} from "@/lib/motion";

/**
 * Client motion wrappers. Server pages import these to add animations without
 * losing server-component status.
 *
 * Defaults: whileInView reveal with `viewportOnce` config and `fadeUpVariants`.
 * Pass your own initial/animate/whileInView/variants to override.
 */

const onView = {
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: viewportOnce,
};

const onMount = {
  initial: "hidden" as const,
  animate: "visible" as const,
};

/* ───── Single elements that reveal on viewport entry ───── */
export const RevealH1   = (p: HTMLMotionProps<"h1">)   => <motion.h1   {...onView} variants={fadeUpVariants} {...p} />;
export const RevealH2   = (p: HTMLMotionProps<"h2">)   => <motion.h2   {...onView} variants={fadeUpVariants} {...p} />;
export const RevealH3   = (p: HTMLMotionProps<"h3">)   => <motion.h3   {...onView} variants={fadeUpVariants} {...p} />;
export const RevealP    = (p: HTMLMotionProps<"p">)    => <motion.p    {...onView} variants={fadeUpVariants} {...p} />;
export const RevealSpan = (p: HTMLMotionProps<"span">) => <motion.span {...onView} variants={fadeUpVariants} {...p} />;
export const RevealDiv  = (p: HTMLMotionProps<"div">)  => <motion.div  {...onView} variants={fadeUpVariants} {...p} />;

/* Image with subtle scale-in (slightly stronger feel) */
export const RevealImg = (p: HTMLMotionProps<"img">) => (
  <motion.img {...onView} variants={scaleInVariants} {...p} />
);

/* ───── Hero — autoplay stagger on mount ───── */
export const HeroBlock = (p: HTMLMotionProps<"div">) => (
  <motion.div {...onMount} variants={heroContainer} {...p} />
);
export const HeroItem = (p: HTMLMotionProps<"div">) => (
  <motion.div variants={heroItem} {...p} />
);
export const HeroH1 = (p: HTMLMotionProps<"h1">) => (
  <motion.h1 variants={heroItem} {...p} />
);
export const HeroP = (p: HTMLMotionProps<"p">) => (
  <motion.p variants={heroItem} {...p} />
);
export const HeroSpan = (p: HTMLMotionProps<"span">) => (
  <motion.span variants={heroItem} {...p} />
);

/* ───── Stagger grid (children reveal sequentially when scrolled into view) ───── */
export const StaggerGrid = (p: HTMLMotionProps<"div">) => (
  <motion.div {...onView} variants={containerStagger} {...p} />
);
export const StaggerGridFast = (p: HTMLMotionProps<"div">) => (
  <motion.div {...onView} variants={containerStaggerFast} {...p} />
);
export const StaggerUl = (p: HTMLMotionProps<"ul">) => (
  <motion.ul {...onView} variants={containerStagger} {...p} />
);
export const StaggerItem = (p: HTMLMotionProps<"div">) => (
  <motion.div variants={fadeUpFastVariants} {...p} />
);
export const StaggerArticle = (p: HTMLMotionProps<"article">) => (
  <motion.article variants={fadeUpFastVariants} {...p} />
);
export const StaggerLi = (p: HTMLMotionProps<"li">) => (
  <motion.li variants={fadeUpFastVariants} {...p} />
);

export const StaggerDetails = (p: HTMLMotionProps<"details">) => (
  <motion.details variants={fadeUpFastVariants} {...p} />
);
export const StaggerFigure = (p: HTMLMotionProps<"figure">) => (
  <motion.figure variants={fadeUpFastVariants} {...p} />
);
export const StaggerSection = (p: HTMLMotionProps<"section">) => (
  <motion.section {...onView} variants={containerStagger} {...p} />
);

/* ───── Auto-trigger reveals — each item fades up when scrolled into view ───── */
export const RevealDetails = (p: HTMLMotionProps<"details">) => (
  <motion.details {...onView} variants={fadeUpFastVariants} {...p} />
);
export const RevealFigure = (p: HTMLMotionProps<"figure">) => (
  <motion.figure {...onView} variants={fadeUpFastVariants} {...p} />
);
export const RevealArticle = (p: HTMLMotionProps<"article">) => (
  <motion.article {...onView} variants={fadeUpFastVariants} {...p} />
);
export const RevealLi = (p: HTMLMotionProps<"li">) => (
  <motion.li {...onView} variants={fadeUpFastVariants} {...p} />
);

/* ───── Card with hover lift ───── */
export const HoverCard = (p: HTMLMotionProps<"div">) => (
  <motion.div whileHover={{ y: -4, transition: { duration: 0.25 } }} {...p} />
);
