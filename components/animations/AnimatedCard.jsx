"use client";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/lib/animations";

export const AnimatedCard = ({
  children,
  className = "",
  delay = 0,
  hoverScale = 1.02,
  ...props
}) => {
  const { ref, isInView } = useScrollAnimation();

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
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
      variants={cardVariants}
      whileHover={{
        scale: hoverScale,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
