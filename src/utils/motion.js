// ─── Reusable Framer Motion Animation Variants ───────────────────────────────

/** Fade in from left (left → right entrance) */
export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 0.6, ease: "easeOut" },
  },
};

/** Fade in from right (right → left entrance) */
export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 0.6, ease: "easeOut" },
  },
};

/** Fade in with slight upward motion */
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.6, ease: "easeOut" },
  },
};

/** Pure fade in */
export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { type: "tween", duration: 0.7, ease: "easeOut" },
  },
};

/** Scale + fade in (good for images / cards) */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

/**
 * Stagger container — controls how children animate in sequence.
 * @param {number} staggerChildren – delay between each child (seconds)
 * @param {number} delayChildren   – initial delay before first child
 */
export const staggerContainer = (staggerChildren = 0.15, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/**
 * Item variant for staggered lists — fades up.
 * @param {number} delay – extra per-item offset (seconds)
 */
export const staggerItem = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.55, ease: "easeOut", delay },
  },
});

/** Navbar slide down on load */
export const navbarVariant = {
  hidden: { opacity: 0, y: -30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.5, ease: "easeOut" },
  },
};

/** Logo entrance from left in navbar */
export const logoVariant = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 0.5, ease: "easeOut", delay: 0.1 },
  },
};

/** Nav links stagger on load */
export const navLinksContainerVariant = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

export const navLinkItemVariant = {
  hidden: { opacity: 0, y: -12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.4, ease: "easeOut" },
  },
};
