import { useAnimation, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

// Common animation variants
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -60,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 60,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const slideInUp = {
  hidden: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

// Custom hook for scroll animations
export const useScrollAnimation = (threshold = 0.1) => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    once: true,
    threshold,
    margin: "-50px 0px -50px 0px",
  });

  useEffect(() => {
    if (isInView && !prefersReducedMotion) {
      controls.start("visible");
    } else if (prefersReducedMotion) {
      controls.start("visible");
    }
  }, [isInView, controls, prefersReducedMotion]);

  return {
    ref,
    controls,
    isInView: prefersReducedMotion ? true : isInView,
  };
};

// Hook for staggered animations
export const useStaggerAnimation = (delay = 0.1) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return { ref, controls };
};
