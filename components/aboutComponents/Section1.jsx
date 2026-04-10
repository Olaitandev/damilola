"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";



// ---------- Data ----------
const timelineData = [
  {
    image: "/2020.jpg",
    date: "2020",
    text: " COVID wiped out my seven-year business overnight. I was skilled, ambitious, and hardworking — but broke and invisible.",
  },
  {
    image: "/2021.avif",
    date: "2021",
    text: "I landed my first remote job and discovered how global hiring really works. For the first time, I saw that my skills had global value.",
  },
  {
    image: "/front.avif",
    date: "Now",
    text: " I’ve held multiple international roles, managed hiring across 30+ countries, coached thousands, and built Peepuu — a platform that connects credible talent with serious global employers.",
  },
  // {
  //   image: "/image8.jpg",
  //   date: "Nov 2022",
  //   text: "Built my first SaaS product that gained paying customers.",
  // },
  {
    image: "/image9.avif",
    date: "Jun 2023",
    text: "Started mentoring beginners and giving back to the community.",
  },
];

const responsive = {
  0: {
    items: 1,
  },
  568: {
    items: 2,
  },
  1024: {
    items: 3,
    itemsFit: "contain",
  },
};



export default function Section1() {


  return (
    <section className="bg-[#FFFFFF] w-full px-5 lg:px-24 py-16">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center">
        <p
          className="font-ivy-presto font-medium text-2xl  lg:text-4xl text-[#1E211C]"
          data-aos="fade-up"
            data-aos-duration="800"
        >
          The shift
        </p>
      </div>

      {/* Carousel */}
      <div
        className="relative flex justify-center mt-16"
        data-aos="fade-up"
          data-aos-duration="800"
        data-aos-delay="100"
      >
        <AliceCarousel
          mouseTracking
          controlsStrategy="alternate"
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={3000}
          animationDuration={1000}
          infinite
          // disableDotsControls
          disableButtonsControls
          items={timelineData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center -mx-2"
            >
              <Image
                src={item.image}
                alt={item.date}
                width={300}
                height={200}
                className="rounded-lg shadow-lg h-[400px]! w-[300px] object-cover"
              />
              <div className="relative w-full">
                <div className="pointer-events-none absolute left-1 right-1 top-[28px] lg:top-[25px] h-[3px] bg-[#1E211C] " />
                <span className="absolute inline-block w-6 h-6 -translate-x-1/2 bg-white rounded-full left-1/2 top-5 lg:top-4" />
                <span className="absolute left-1/2 -translate-x-1/2 top-5 inline-block h-4 w-4 rounded-full bg-[#1E211C]" />

                <div className="pt-10 text-center">
                  <h4 className="font-ivy-presto text-xl text-[#1E211C]">
                    {item.date}
                  </h4>
                  <p className="mt-3 max-w-[280px] mx-auto text-[#5B5E57] text-sm">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
          responsive={responsive}
        />
      </div>
    </section>
  );
}
