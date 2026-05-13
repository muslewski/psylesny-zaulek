/**
 * Shared framer-motion variants.
 * Drop in as variants={...} on motion components.
 *
 * Pattern:
 *   <motion.section initial="hidden" whileInView="visible" viewport={viewportOnce} variants={containerStagger}>
 *     <motion.h2 variants={fadeUpVariants}>...</motion.h2>
 *     <motion.p  variants={fadeUpVariants}>...</motion.p>
 *   </motion.section>
 *
 * For hero (autoplay on mount): use `initial="hidden" animate="visible"` instead of whileInView.
 */

const ease = [0.2, 0.8, 0.2, 1] as const;

export const viewportOnce = { once: true, margin: "-10% 0px -10% 0px" } as const;
export const viewportEarly = { once: true, margin: "-5% 0px" } as const;

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export const fadeUpFastVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease } },
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease } },
};

export const fadeLeftVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

export const fadeRightVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

export const containerStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const containerStaggerFast = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

export const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export const heroItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export const cardHover = {
  whileHover: { y: -4, transition: { duration: 0.25, ease } },
};
