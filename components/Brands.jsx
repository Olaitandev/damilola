"use client";
import Image from "next/image";
import React, { useMemo, Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedText } from "./animations/AnimatedText";

function Brands({ className = "" }) {
  const prefersReducedMotion = useReducedMotion();

  const brands = useMemo(
    () => [
      {
        src: "/techCabal.svg",
        alt: "TechCabal",
        className: "h-full w-40 -mt-3.5",
      },
      {
        src: "/theGuardian.svg",
        alt: "The Guardian",
        className: "h-full w-40",
      },
      {
        src: "/newsCentral.svg",
        alt: "News Central",
        className: "h-full w-40",
      },
      { src: "/thisDay.svg", alt: "ThisDay", className: "h-full w-40" },
      { src: "/atr.svg", alt: "ATR", className: "h-full w-40" },
    ],
    []
  );

  // Duplicate brands for seamless scrolling
  const duplicatedBrands = useMemo(() => [...brands, ...brands], [brands]);

  const animationProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" },
      };

  const scrollAnimation = prefersReducedMotion
    ? {}
    : {
        animate: {
          x: [0, -50 * brands.length + "%"],
        },
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        },
      };

  return (
    <motion.div
      className={`bg-[#FFDBC8] w-full py-5 md:py-16 overflow-hidden ${className}`}
      {...animationProps}
    >
      <AnimatedText delay={0.2}>
        <h2 className="mb-5 text-2xl font-bold text-center md:mb-12 md:text-4xl lg:text-5xl font-ivy-presto">
          You might have seen me on
        </h2>
      </AnimatedText>

      {/* Horizontal scrolling container */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex items-center gap-8 w-fit"
          {...scrollAnimation}
        >
          {[...new Array(5)].fill(0).map((_, idx) => (
            <Fragment key={idx}>
              {" "}
              {duplicatedBrands.map((brand, index) => (
                <div key={`${brand.alt}-${index}`} className="flex-shrink-0">
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    width={160}
                    height={60}
                    className={brand.className}
                    loading="lazy"
                  />
                </div>
              ))}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Brands;
