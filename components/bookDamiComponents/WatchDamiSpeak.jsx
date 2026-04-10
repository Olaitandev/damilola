import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa";


function WatchDamiSpeak() {
  return (
    <section className="bg-[#FFF7F3] relative pb-20 lg:pt-20 ">
      <div className="mx-auto max-w-7xl">
        <h2
          data-aos="fade-up"
          data-aos-duration="800"
          className="pt-20 text-3xl font-semibold text-center md:font-work-sans lg:text-5xl md:text-4xl md:pb-20 font-ivy-presto md:pt-10"
        >
          See Me in Action
        </h2>

        <div
          className="flex flex-col gap-5 px-5 mx-auto mt-5 md:flex-row lg:gap-20 lg:items-center md:justify-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {[
            {
              src: "/image9.avif",
              title: "The Future of Work is Now",
              href: "https://africatechradio.com/why-you-are-not-getting-that-remote-job/",
            },
            {
              src: "/image10.avif",
              title: "How Remote Work is Changing Africa’s Talent Story",
              href: "https://www.youtube.com/watch?v=sM7cq1c7--g",
            },
            // {
            //   src: "/image8.jpg",
            //   title: "Entrepreneurship in Uncertain Times",
            //   action: "watch >",
            // },
          ].map((video, i) => (
            <a
              key={i}
              className="relative w-full  h-[100%] lg:h-[700px] lg:w-[400px]"
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={video.src}
                className="w-full h-[500px] lg:h-[700px]  object-cover rounded-md"
                height={400}
                width={200}
                alt={video.title}
              />
              {/* 25% darkness overlay */}
              <div className="absolute inset-0 rounded-md pointer-events-none bg-black/25" />
              <div className="absolute text-white bottom-4 left-4">
                <p className="font-semibold underline">{video.title}</p>
                <p className="flex flex-row items-center gap-1 mt-2 text-sm font-semibold">
                  Watch <FaAngleRight />
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WatchDamiSpeak;
