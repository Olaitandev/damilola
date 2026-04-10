"use client";
import { CaretRight } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";

function Section3() {
  const data = [
    {
      id: 1,
      title: "Founder",
      subtitle:
        "I founded Peepuu to connect credible, remote-ready professionals with serious global employers. The mission is clear: make African talent too skilled to ignore and too valuable to underpay.",
      linkText: "View Peepuu Website",
      linkUrl: "https://www.peepuu.com/",
      image: "/image2.avif",
    },
    {
      id: 2,
      title: "Coach",
      subtitle:
        "Through my coaching community, I’ve helped 200+ professionals who were stuck on rejection emails to finally land remote jobs that pay in foreign currency. This isn’t motivation. It’s a system that delivers results, every single time.",
      linkText: "Join Coaching Community",
      linkUrl: "https://damiexpressions.selar.com/coachingcommunity",
      image: "/coach.avif",
    },
    {
      id: 3,
      title: "Educator",
      subtitle:
        "My digital products have helped thousands build world class resumes, dominate LinkedIn, and secure remote job interviews quickly. Every resource is built for one outcome: getting you hired faster!",
      linkText: "Explore Digital Products",
      linkUrl: "https://damiexpressions.selar.com/",
      image: "/educator.avif",
    },
    {
      id: 4,
      title: "Speaker",
      subtitle:
        "My digital products have helped thousands build world class resumes, dominate LinkedIn, and secure remote job interviews quickly. Every resource is built for one outcome: getting you hired faster!",
      linkText: "Book Dami to speak",
      linkUrl: "/partnership",
      image: "/speaker.avif",
    },
    {
      id: 5,
      title: "Brand Partner",
      subtitle:
        "With an engaged audience of over 60,000 professionals across platforms, I partner with brands and businesses who want authentic access to Africa’s talent market. My collaborations don’t just create buzz, they drive real results.",
      linkText: "Work with Dami",
      linkUrl: "/partnership",
      image: "/brandpartner.avif",
    },
  ];

  return (
    <section className="px-5 pt-16 lg:px-48">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-5 mb-10 md:flex-row md:items-center lg:gap-32"
        >
          <div>
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="w-[500px] h-[400px] object-cover lg:w-[500px] lg:h-[600px] rounded-lg object-top"
              priority
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </div>
          <div>
            <h3
              className="text-3xl font-ivy-presto lg:text-5xl mt-7"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {item.title}
            </h3>
            <p
              className="font-work-sans mt-7 lg:text-xl max-w-[500px]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              {item.subtitle}
            </p>
            <div
              className="flex flex-row items-center mt-7"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <a
                href={item.linkUrl}
                className="font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.linkText}
              </a>
              <CaretRight size={22} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Section3;
