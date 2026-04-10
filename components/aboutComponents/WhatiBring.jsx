"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function WhatiBring() {
  const [currentImage, setCurrentImage] = useState("/tabpane1.svg");
  const [activeService, setActiveService] = useState(1); // Set first service as active

  const services = [
    { id: 1, title: "01 Job Board for Nigerians", image: "/tabpane1.svg" },
    { id: 2, title: "02 CV Writing Services", image: "/tabpane1.svg" },
    { id: 3, title: "03 Remote Job Hunting", image: "/tabpane1.svg" },
    { id: 4, title: "04 Strategic Positioning", image: "/tabpane1.svg" },
    { id: 5, title: "05 Interview Coaching", image: "/tabpane1.svg" },
  ];

  return (
    <section className="w-full px-5 py-16 mx-auto lg:max-w-7xl">
      <div>
        <h2 className="font-ivy-presto text-3xl lg:text-5xl leading-tight text-center text-[#1E211C]">
          What I bring to you
        </h2>

        <div className="flex flex-row items-center justify-between gap-0 lg:px-30">
          <div className="w-full mt-10 lg:w-1/2">
            {services.map((service) => (
              <div key={service.id} className="text-black ">
                <span
                  // href="#"
                  className={`text-black transition-all duration-300 hover:no-underline ${
                    activeService === service.id
                      ? "opacity-100 text-2xl lg:text-3xl font-ivy-presto"
                      : "text-xl opacity-15 hover:opacity-100 lg:text-3xl lg:hover:font-ivy-presto lg:hover:text-2xl font-ivy-presto md:font-work-sans"
                  }`}
                  onMouseEnter={() => {
                    setCurrentImage(service.image);
                    setActiveService(service.id);
                  }}
                  onMouseLeave={() => {
                    setCurrentImage("/Tabpane1.svg");
                    setActiveService(1); // Reset to first service
                  }}
                >
                  {service.title}
                </span>
                <hr className="w-full mt-4 mb-3" />
              </div>
            ))}
          </div>
          <div>
            <Image
              src={currentImage}
              alt="Description"
              width={500}
              height={400}
              className="hidden md:block"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
