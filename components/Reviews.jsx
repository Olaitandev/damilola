"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const Stars = () => (
  <div className="flex flex-row">
    <Star fill="#000000" />
    <Star fill="#000000" />
    <Star fill="#000000" />
    <Star fill="#000000" />
    <Star fill="#000000" />
  </div>
);

const Card = ({ t }) => (
  <div className="bg-white p-10 border border-solid border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] w-full h-full flex flex-col justify-between min-h-[240px] max-w-[325px]">
    <Stars />
    <p className="flex-1 mt-6">"{t.testimonial}"</p>
    <div className="flex flex-row items-center mt-6">
      <Image
        src={t.image}
        alt={t.name}
        width={56}
        height={56}
        className="rounded-full object-cover max-w-[56px] max-h-[56px] mr-4"
      />
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold leading-5 tracking-tight ">
          {t.name}
        </h3>
        <p className="text-sm leading-5 text-gray-600">{t.title}</p>
      </div>
    </div>
  </div>
);

const TestimonialsColumn = ({
  items,
  direction = "up",
  duration = 25,
  className,
}) => {
  const dir = direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div className={clsx("relative overflow-hidden", className)}>
      <motion.div
        aria-hidden
        className="flex flex-col gap-6 will-change-transform"
        animate={{ translateY: dir }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Stack A */}
        <div className="flex flex-col gap-6">
          {items.map((t) => (
            <Card key={`A-${t.id}`} t={t} />
          ))}
        </div>
        {/* Stack B (duplicate for seamless loop) */}
        <div className="flex flex-col gap-6">
          {items.map((t) => (
            <Card key={`B-${t.id}`} t={t} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

function Reviews() {
  const testimonials = [
    {
      id: 1,
      name: "Zita Uzoezie",
      title: "Coaching Client",
      testimonial:
        "My coaching experience with Dami has truly shown me that anything is possible when you have the right guidance from someone who has walked the path before you. My goal was to land my dream job, but Dami’s coaching went beyond just career advice,she helped me grow in every aspect of my life. Thank you for always showing up, for being a great coach, for keeping me accountable, and most importantly, for helping me stay confident and believe in myself. And the best part? I landed my dream job even before our sessions were over. We did it!!!",
      image: "/image2.svg",
    },
    {
      id: 2,
      name: "Tolulope Asua",
      title: "Coaching Client",
      testimonial:
        "Joining the Peepuu Community was a game-changer for me. I had the skills and experience for an international remote role, but I didn’t know how to position myself effectively. Within weeks, I learned how to rewrite my CV for ATS, craft compelling cover letters, and optimize my LinkedIn profile. The results have been incredible. Two recruiters reached out to me directly, and I’ve got multiple interview invitations. By the 2nd month, I landed a remote job with a Canadian company.",
      image: "/image2.svg",
    },
    {
      id: 3,
      name: "Praise Steve",
      title: "Digital Product Customer",
      testimonial:
        "The best use of my money and time. The material is so rich I can’t imagine the effort it took to put it together.",
      image: "/image2.svg",
    },
    {
      id: 4,
      name: "Cenoa App",
      title: "Brand Partner",
      testimonial:
        "Dami’s presence, energy, and knowledge made our event 10x better than we anticipated. We truly appreciate Dami and look forward to future endeavors together.",
      image: "/image2.svg",
    },
    {
      id: 5,
      name: "Adekemi Oyewusi",
      title: "1:1 Consultation Client",
      testimonial:
        "Dami was warm, attentive, and clear in her communication, took her time to understand me. She helped me reaffirm my potential, which made me feel comfortable enough to open up to her. This created a seamless flow in our conversation, allowing us to identify specific areas of focus to help me achieve my career goals.",
      image: "/image2.svg",
    },
    {
      id: 6,
      name: "Adunni Foster",
      title: "1:1 Consultation Client      ",
      testimonial:
        "Oluwadamilola, the journey you’ve undertaken to guide professionals in channeling their inner strengths and becoming the best versions of themselves is truly commendable. Even if you don’t hear it often, know that you’re making a real impact. Well done!",
      image: "/image2.svg",
    },
    // {
    //   id: 7,
    //   name: "Michael Johnson",
    //   title: "Sales Executive",
    //   testimonial:
    //     "The strategies I learned have boosted my sales significantly.",
    //   image: "/image2.svg",
    // },
    // {
    //   id: 8,
    //   name: "Olivia Martinez",
    //   title: "Graphic Designer",
    //   testimonial: "I love the personalized approach and support.",
    //   image: "/image2.svg",
    // },
  ];

  const firstColumn = testimonials.slice(0, 4);
  const secondColumn = testimonials.slice(4, 8);

  return (
    <section className="bg-[#FEFDFD] w-full px-5 lg:px-24 py-16">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="max-w-[500px]">
          {/* <p className="text-2xl">The Proof is Everywhere</p> */}
          <h2 className="mt-5 text-5xl leading-tight font-ivy-presto md:text-5xl">
            The Proof is <br className="hidden md:block" /> Everywhere
          </h2>
          <p className="mt-5 text-lg md:text-2xl font-work-sans">
            Clients who landed global offers. Professionals who found clarity
            through coaching. Brands that saw results. Media that keeps calling.
            The feedback speaks for itself.
          </p>
        </div>

        <div
          className={clsx(
            "grid grid-cols-1 md:grid-cols-2 mt-12 gap-6 lg:gap-2 lg:w-1/2",
            "[mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]",
            "max-h-[700px] overflow-hidden"
          )}
        >
          {/* Column 1: scrolls UP */}
          <TestimonialsColumn
            items={firstColumn}
            direction="up"
            duration={24}
          />

          {/* Column 2: scrolls DOWN */}
          <TestimonialsColumn
            items={secondColumn}
            direction="down"
            duration={28}
            className="hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}

export default Reviews;
