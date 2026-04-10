import { AngleRightIcon } from "@phosphor-icons/react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function SignatureSpeakingTopics() {
  return (
    <section className="bg-[#FFF7F3] w-full px-5 lg:px-48 pt-16 pb-16 lg:pb-24">
      <h2
        className="text-2xl font-bold text-center md:text-3xl lg:text-4xl font-work-sans"
        data-aos="fade-up"
          data-aos-duration="800"
      >
        Signature Speaking Topics
      </h2>
      <div
        className="flex flex-col items-center justify-center mx-auto mt-15 lg:gap-10 lg:flex-row"
        data-aos="fade-up"
          data-aos-duration="800"
        data-aos-delay="100"
      >
        <div className="max-w-[410px] items-center text-center gap-3 ">
          <div className="lg:max-w-[410px] lg:max-h-[240px] max-w-[100%] max-h-[240px]">
            <Image
              src="/remote.svg"
              width={405}
              height={240}
              alt="Remote Job Hunting Speaking Topic"
              className="w-[100%] max-h-[240px] object-cover mb-5 lg:object-top rounded-lg"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLXqJvKO0IbW6g"
            />
          </div>
          <h2 className="text-lg font-bold md:text-2xl lg:text-3xl font-ivy-presto">
            Remote Career & The <br className="hidden lg:block" />
            Future of Work
          </h2>
          <p className="mt-4 text-sm font-work-sans">
             How professionals can land roles without borders and thrive in
            global teams.
          </p>
          <div className="flex flex-row items-center justify-center gap-2 mt-5 text-center">
            <p>Watch</p>
            <ChevronRight size={20} />
          </div>
        </div>
        <div className="max-w-[410px] items-center text-center gap-3">
          <div className="lg:max-w-[410px] lg:max-h-[240px] max-w-[100%] max-h-[240px]   ">
            <Image
              src="/enterp.jpg"
              width={405}
              height={240}
              alt="Image 1"
              className="w-[100%] max-h-[240px] object-cover mb-5 object-top rounded-lg"
              priority
            />{" "}
          </div>
          <h2 className="text-lg font-bold md:text-2xl lg:text-3xl font-ivy-presto">
            Entrepreneurship <br className="hidden lg:block" />
            Today
          </h2>
          <p className="mt-4 text-sm font-work-sans">
            Lessons from failing, rebuilding, and creating opportunities that
            last.
          </p>
          <div className="flex flex-row items-center justify-center gap-2 mt-5 text-center">
            <p>Watch</p>
            <ChevronRight size={20} />
          </div>
        </div>
        <div className="max-w-[410px] items-center text-center gap-3 ">
          <div className="max-w-[100%] max-h-[240px] ">
            <Image
              src="/financial.jpg"
              width={405}
              height={240}
              alt="Image 1"
              className="w-[100%] max-h-[240px] object-cover mb-5 object-top rounded-lg"
              priority
            />
          </div>
          <h2 className="text-lg font-bold md:text-2xl lg:text-3xl font-ivy-presto">
            Financial Freedom & <br className="hidden lg:block" />
            Self-Leadership
          </h2>
          <p className="mt-4 text-sm font-work-sans">
            How to turn skills into income and take control of your life.
          </p>
          <div className="flex flex-row items-center justify-center gap-2 mt-5 text-center">
            <p>Watch</p>
            <ChevronRight size={20} />
          </div>
        </div>
      </div>
      <Link href="/bookdami">
        <button
          className="mt-10 bg-[#EDF296] text-black px-6 py-3 rounded-full flex items-center gap-2 mx-auto font-medium"
          data-aos="fade-up"
            data-aos-duration="800"
          data-aos-delay="110"
        >
          Invite Dami to Speak
        </button>
      </Link>
    </section>
  );
}

export default SignatureSpeakingTopics;
