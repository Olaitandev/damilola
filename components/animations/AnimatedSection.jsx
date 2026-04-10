"use client";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/lib/animations";

export const AnimatedSection = ({
  children,
  variant = "fadeInUp",
  className = "",
  delay = 0,
  ...props
}) => {
  const { ref, isInView } = useScrollAnimation();

  const variants = {
    fadeInUp: {
      hidden: { opacity: 0, y: 60 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut", delay },
      },
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -60 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut", delay },
      },
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 60 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut", delay },
      },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut", delay },
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
