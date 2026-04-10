"use client";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/lib/animations";

export const AnimatedText = ({
  children,
  className = "",
  delay = 0,
  ...props
}) => {
  const { ref, isInView } = useScrollAnimation();

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={textVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
