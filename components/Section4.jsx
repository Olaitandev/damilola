import Image from "next/image";
import React from "react";

function Section4() {
  const stats = [
    { value: "80,000+", label: "audience across platforms" },
    { value: "$1M+", label: "combined gross salary offers" },
    { value: "200+", label: "remote jobs landed" },
    { value: "10,000+", label: "digital products downloaded" },
    { value: "50+", label: "global stages spoken on" },
  ];

  // { value: "10,000+", label: "lives impacted" },
  // { value: "50+", label: "Stages" },
  // { value: "3000+", label: "Jobs landed" },
  // { value: "", label: "" },

  return (
    <section className="w-full px-5 mx-auto mt-32 lg:mt-40 max-w-7xl">
      {/* Top text */}
      <div className="flex flex-col md:flex-row md:items-center lg:gap-20 md:gap-10">
        <div
          className="md:w-1/2"
          data-aos="fade-right"
            data-aos-duration="800"
        >
          <h2 className="text-3xl leading-tight font-ivy-presto md:text-4xl lg:text-5xl">
            The Numbers Tell the Story.
          </h2>
        </div>
        <div className="md:w-1/2" data-aos="fade-left"   data-aos-duration="800">
          <p className="font-work-sans mt-7 lg:text-xl md:max-w-[400px] lg:max-w-[700px]">
            Every figure here represents a career transformed, a platform built,
            or a room moved. This is why people trust me. Not because I talk
            about impact, but because they can see it.
          </p>
        </div>
      </div>

      {/* Stats grid */}
      <div
        className="grid grid-cols-1 gap-6 pb-20 mt-10 md:grid-cols-3"
        data-aos="fade-up"
          data-aos-duration="800"
        data-aos-delay="200"
      >
        {/* Tall card */}
        <div className=" relative bg-gray-100 rounded-md p-6 flex flex-col justify-end  md:row-span-2 min-h-[300px] md:min-h-[700px]">
          <Image
            src="/audience.avif"
            className="absolute inset-0 object-cover object-top w-full h-full rounded-md"
            height={400}
            width={200}
            alt="hello"
          />
          {/* Overlay */}
          <div className="absolute inset-0 rounded-md pointer-events-none bg-black/50" />
          <p className="z-10 text-6xl font-semibold text-white md:text-5xl lg:text-6xl text-end font-work-sans">
            {stats[0].value}
          </p>
          <hr className="my-4 opacity-15" />
          <span className="z-10 mt-2 text-end font-work-sans text-nowrap text-white/90">
            {stats[0].label}
          </span>
        </div>

        <div className="relative bg-gray-100 rounded-md p-6 flex flex-col justify-end min-h-[300px]">
          <Image
            src="/download.avif"
            className="absolute inset-0 object-cover object-top w-full h-full rounded-md"
            height={400}
            width={200}
            alt="hello"
          />
          {/* Overlay */}
          <div className="absolute inset-0 rounded-md pointer-events-none bg-black/50" />
          <p className="z-10 text-6xl font-semibold text-white md:text-5xl lg:text-6xl text-end font-work-sans">
            {stats[3].value}
          </p>
          <hr className="z-10 my-4 opacity-15" />
          <span className="z-10 mt-2 text-white/90 text-end font-work-sans text-nowrap">
            {stats[3].label}
          </span>
        </div>

        <div className="bg-gray-100 rounded-md p-6 flex flex-col justify-end min-h-[300px] relative">
          <Image
            src="/salary.avif"
            className="absolute inset-0 object-cover object-top w-full h-full rounded-md"
            height={400}
            width={200}
            alt="hello"
          />
          {/* Overlay */}
          <div className="absolute inset-0 rounded-md pointer-events-none bg-black/50" />
          <p className="z-10 text-6xl font-semibold text-white md:text-5xl lg:text-6xl text-end font-work-sans">
            {stats[1].value}
          </p>
          <hr className="z-10 my-4 opacity-15" />
          <span className="z-10 mt-2 text-white/90 text-end font-work-sans text-nowrap">
            {stats[1].label}
          </span>
        </div>
        <div className="relative bg-gray-100 rounded-md p-6 flex flex-col justify-end min-h-[300px]">
          <Image
            src="/jobslanded.avif"
            className="absolute inset-0 object-cover object-top w-full h-full rounded-md"
            height={400}
            width={200}
            alt="hello"
          />
          {/* Overlay */}
          <div className="absolute inset-0 rounded-md pointer-events-none bg-black/50" />
          <p className="z-10 text-6xl font-semibold text-white md:text-5xl lg:text-6xl text-end font-work-sans">
            {stats[2].value}
          </p>
          <hr className="z-10 my-4 opacity-15" />
          <span className="z-10 mt-2 text-white/90 text-end font-work-sans text-nowrap">
            {stats[2].label}
          </span>
        </div>
        <div className="relative bg-gray-100 rounded-md p-6 flex flex-col justify-end min-h-[300px]">
          <Image
            src="/speaker.avif"
            className="absolute inset-0 object-cover object-top w-full h-full rounded-md"
            height={400}
            width={200}
            alt="hello"
          />
          {/* Overlay */}
          <div className="absolute inset-0 rounded-md pointer-events-none bg-black/50" />
          <p className="z-10 text-6xl font-semibold text-white md:text-5xl lg:text-6xl text-end font-work-sans">
            {stats[4].value}
          </p>
          <hr className="z-10 my-4 opacity-15" />
          <span className="z-10 mt-2 text-white/90 text-end font-work-sans text-nowrap">
            {stats[4].label}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Section4;
