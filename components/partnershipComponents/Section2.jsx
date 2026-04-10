"use client";
import { CaretRight } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";

function Section2() {
  const data = [
    {
      id: 1,
      title: "HR Consulting",
      subtitle:
        "Get expert support on global hiring, onboarding, and people operations. I help organizations streamline their systems, stay compliant, and create experiences that attract and retain top talent.",
      image: "/hr.avif",
    },
    {
      id: 2,
      title: "Workshops & Corporate Training",
      subtitle:
        " Equip your teams with the skills and strategies to thrive in the new world of work. From remote readiness to leadership and career development, I design and deliver practical, high-impact sessions tailored to your organization.",
      image: "/workshop.avif",
    },
    {
      id: 3,
      title: "Campaigns & Influencer Partnerships",
      subtitle:
        "Partner with me to reach a highly engaged audience of ambitious professionals across Africa and beyond. With 80,000+ combined followers and a track record of trust, I create authentic content that moves people to action.",
      image: "/campaign.avif",
    },
  ];

  return (
    <section className="px-5 pt-16 mt-16 lg:px-24">
      <div data-aos="fade-up" data-aos-duration="1000">
        <h2 className="mb-12 text-3xl text-center md:mb-20 font-ivy-presto lg:text-5xl">
           How We Can Work Together
        </h2>
      </div>
      {data.map((item, index) => (
        <div
          key={item.id}
          className={`flex ${
            index % 2 === 1 ? "md:flex-row" : "md:flex-row-reverse"
          } gap-5 mb-10 flex-col md:items-center lg:gap-32 md:mx-auto md:px-12 lg:px-40`}
        >
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="h-[400px]! object-cover lg:w-[500px]! lg:h-[500px]! rounded-lg"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <h3 className="text-3xl font-ivy-presto lg:text-4xl mt-7">
              {item.title}
            </h3>
            <p className="font-work-sans mt-7 lg:text-lg max-w-[500px]">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Section2;
