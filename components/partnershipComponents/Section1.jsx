import Image from "next/image";
import React from "react";

function Section1() {
  return (
    <div className="mt-10">
      <div className="flex flex-col items-center gap-3 px-5 mx-auto lg:gap-6 md:px-10 lg:px-52 md:flex-row">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <Image
            src="/image12.avif"
            alt="Partnership"
            width={200}
            height={100}
            className="w-[200px] md:w-[950px] lg:w-[800px] h-auto rounded-lg"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <h2 className="text-[23px] leading-tight md:text-2xl lg:text-4xl font-ivy-presto mt-5  lg:mt-0">
            Trusted Voice. Proven Impact. <br className="hidden lg:block" />
            Real Influence.
          </h2>
          <p className="mt-5 lg:mt-10 ">
             I have spent a decade in HR, people operations, and global hiring,
            working across 30+ countries and helping professionals land
            high-paying remote jobs. Alongside that, I’ve built a digital
            audience of over 80,000 across platforms who look to me for guidance
            on careers, remote work, and personal growth. When you partner with
            me, you’re not just getting visibility. You’re tapping into
            credibility, influence, and a tested ability to connect with
            ambitious professionals across Africa and beyond.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
