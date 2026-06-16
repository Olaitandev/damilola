"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function BookDamiSlider() {
  const posts = [
    {
      image: "https://github.com/evilrabbit.png",
      alt: "Book Dami",
      title: "High-Impact Speaker",
      subtitle: "Engaging & Action-Oriented",
      text: '"Every minute with Dami on stage is high energy and high impact. She connects with the audience instantly and leaves them with practical strategies they can use immediately."',
      name: "Ifunanya Njom",
      role: "Speakers’ Coordinator, Expedition Conference",
    },
    {
      image: "/falude.png",
      alt: "Book Dami 2",
      title: "Transformational Keynote Speaker",
      subtitle: "Insightful & Influential",
      text: '"Dami brings a rare combination of global perspective and deep cultural insight. She spoke with so much brilliance and impact. Her session had the most positive feedback during our conference."',
      name: "Emmanuel Falude",
      role: "Director of Education & Certification, Green Building Council of Nigeria",
    },
    {
      image: "https://github.com/shadcn.png",
      alt: "Book Dami 3",
      title: "Future of Work Expert",
      subtitle: "Strategic & Practical",
      text: '"Dami’s keynote on the future of work wasn’t just insightful — it was actionable. She gave our leaders clarity on how to adapt right now, not in five years."',
      name: "Judith Azi",
      role: "Country Operations Manager, Cenoa",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
    if (isManual) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % posts.length);
    }, 3000); // 3 seconds
    return () => clearInterval(timer);
  }, [posts.length, isManual]);

  const goToPrev = () => {
    setIsManual(true);
    setCurrent((prev) => (prev - 1 + posts.length) % posts.length);
  };
  const goToNext = () => {
    setIsManual(true);
    setCurrent((prev) => (prev + 1) % posts.length);
  };

  return (
    <section className="pt-20 pb-20">
      <div className="flex items-center justify-between px-3 mx-auto lg:max-w-7xl">
        <button
          onClick={goToPrev}
          className="bg-[#F2F2F2] p-2 bg-opacity-80 hover:bg-opacity-100 text-gray-800 font-bold rounded shadow"
          aria-label="Previous"
        >
          &#8592;
        </button>

        <div className="w-full lg:flex lg:items-center lg:justify-center">
          <div className="relative flex items-center flex-col lg:w-[800px] justify-center px-5 md:px-20 overflow-hidden h-[500px]">
            {posts.map((post, idx) => (
              <div
                key={idx}
                className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${
                  idx === current
                    ? "opacity-100 translate-x-0 z-10"
                    : "opacity-0 -translate-x-full z-0"
                }`}
              >
                <Image
                  src={post.image}
                  alt={post.alt}
                  width={500}
                  height={500}
                  className="object-cover object-center mx-auto rounded-full h-30 w-30 mb-5"
                />
                <div className="text-center flex gap-3 flex-col ">
                  <p className="font-serif text-4xl ">{post.title}</p>
                  {/* <h2 className="mt-2 text-4xl font-bold font-ivy-presto">
                    {post.subtitle}
                  </h2> */}
                  <p className="mt-3">{post.text}</p>
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-lg font-semibold">{post.name}</h3>
                  <p className="text-sm text-gray-600">{post.role}</p>
                </div>
              </div>
            ))}
            {/* <div className="absolute left-0 right-0 flex justify-between px-3 bottom-30"></div> */}
          </div>
        </div>
        <button
          onClick={goToNext}
          className="bg-[#F2F2F2] p-2 hover:bg-opacity-100 text-gray-800 font-bold  rounded shadow"
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}
export default BookDamiSlider;
