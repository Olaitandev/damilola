"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";


function AboutHero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/abt.avif"
          fill
          alt="Background Image"
          //   className="object-cover object-center md:object-cover "
          className="object-cover object-[40%_40%] md:object-[center_60%] lg:object-[40%_25%]"
          priority
        />

        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-between h-full p-10 pt-20 md:p-10 lg:p-20">
        <div className="flex-shrink-0">
          <h1
            className="text-4xl sm:text-6xl mt-4 md:mt-10 lg:text-[90px] font-bold text-white font-ivy-presto leading-tight italic"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Hi, I’m Dami
          </h1>
        </div>

        {/* Lorem text - Bottom Right */}
        <div className="flex justify-end">
          <div
            className="max-w-[650px] text-left"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <p className="text-lg leading-relaxed text-white md:text-xl lg:text-2xl font-work-sans">
              I’m an entrepreneur, coach, educator, speaker, and founder. My
              work is simple: helping professionals land global remote jobs,
              earn in foreign currency, and build lives without borders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
