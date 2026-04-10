"use client";
import Image from "next/image";
import React from "react";
import DamiImage from "@/public/image1.svg";
import Link from "next/link";

function Section2() {
  return (
    <section className="bg-[#FFEBE0] w-full px-4 pt-16 pb-10 lg:pb-20">
      <div className="gap-5 md:flex lg:flex-row md:justify-between md:items-center md:mx-auto max-w-7xl">
        <div className="md:w-[50%] lg:w-[40%]">
          <div className="">
            <h1
              className="font-semibold text-md lg:text-lg font-work-sans"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              HEYA!
            </h1>
            <h2
              className="mt-3 text-4xl font-bold lg:text-6xl font-ivy-presto"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              I'M DAMI
            </h2>
            <p
              className="mt-3 text-md lg:text-xl font-work-sans"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              My hunch is someone you trust mentioned my name, or you stumbled
              upon one of my videos online. Whatever path you took, I’m really
              glad you’re here. I know what it feels like to apply to remote
              jobs endlessly and get no response. I know what it feels like to
              be underpaid and overlooked, even with the skills. That was me
              once and the reason why I am committed to helping you. I’ve helped
              thousands of professionals stop applying for crumbs and start
              landing international offers that changed their income and their
              lives. My work is simple: turn overlooked African talents into
              global employees who get seen, get hired, and get paid.
            </p>
            <Link href="/about">
              <button
                className="bg-[#EDF296] text-black rounded-full py-2 px-4 shadow-lg border mt-6 text-sm font-medium lg:p-3 lg:text-md"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="">
          <Image
            alt="h"
            width={200}
            height={200}
            src="/heydami.avif"
            className="w-[380px] md:w-[400px] lg:w-[500px] h-auto mt-8 md:mt-2 rounded-lg"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="400"
          />
        </div>
      </div>
    </section>
  );
}

export default Section2;
