"use client";
import React, { useState } from "react";
import Image from "next/image";

import Image3 from "@/public/image3.svg";

function Section2() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="w-full bg-[#ffebe0] bg-[url('/imageBg.svg')] bg-no-repeat bg-cover bg-center">
      <div className="max-w-5xl px-5 py-16 mx-auto lg:px-10">
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <h2
            className="mt-5 text-3xl leading-tight font-ivy-presto md:text-5xl lg:text-6xl"
            data-aos="fade-up"
              data-aos-duration="800"
          >
            This is me
          </h2>

          <p
            className="mt-5 text-[#1E211C]/80 text-start"
            data-aos="fade-up"
              data-aos-duration="800"
            data-aos-delay="100"
          >
            I know the frustration of sending hundreds of applications and
            getting silence in return. I know what it feels like to scroll
            LinkedIn and wonder if the opportunities you see are really meant
            for you. That was my reality.
          </p>

          <div
            className="relative w-full max-w-[800px] mt-4"
            data-aos="fade-up"
              data-aos-duration="800"
            data-aos-delay="150"
          >
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl" />
            )}
            <Image
              src="/thisisme.avif"
              width={800}
              height={1120}
              alt="Portrait illustration with warm tones"
              className={`w-full h-auto rounded-2xl transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              sizes="(min-width: 1024px) 800px, 100vw"
              priority
              onLoad={() => setImageLoaded(true)}
              placeholder="blur"
              quality={50}
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjExMjAiIHZpZXdCb3g9IjAgMCA4MDAgMTEyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSIxMTIwIiBmaWxsPSIjRjNGNEY2Ii8+Cjwvc3ZnPgo="
            />
          </div>

          <p
            className="mt-5 text-[#1E211C]/80 text-start"
            data-aos="fade-up"
              data-aos-duration="800"
            data-aos-delay="200"
          >
            But once I broke into remote work, everything changed. I went from
            being overlooked to managing global hiring pipelines, earning in
            currencies that matched my skills, and opening doors I never thought
            possible.
          </p>

          <div
            data-aos="fade-up"
              data-aos-duration="800"
            data-aos-delay="200"
            className="flex flex-col w-full mt-6 text-left md:flex-row md:items-start md:gap-6"
          >
     
            <Image
              src="/image3.svg"
              width={740}
              height={1036}
              className="w-full md:w-1/2 md:max-w-[468px] h-auto rounded-2xl"
              alt="dami"
            />

            <p className="mt-6 md:mt-0 md:w-1/2 text-[#1E211C]/80">
              Today, I’m a global hiring strategist, a tech founder, and the
              coach behind one of the most effective remote career communities
              in Africa. My systems help professionals stop applying blindly and
              start landing jobs that change their income and their lives.
              <br />
              <br />
              My work has been featured on platforms like News Central, Africa
              Tech Radio, TechCabal, and The Guardian. I’ve spoken on global
              stages, trained high-growth companies, and coached professionals
              who are now working across continents.
              <br />
              <br />
              If you’re ready to land a remote job, grow a career without
              borders, and finally get paid what you’re worth, this is where it
              begins
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
