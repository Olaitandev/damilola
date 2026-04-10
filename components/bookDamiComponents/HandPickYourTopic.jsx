import Image from "next/image";
import React from "react";
import BookDamiDialog from "@/components/modals/BookDamiDialog";

function HandPickYourTopic() {
  return (
    <section className="relative w-full px-5 pt-16 pb-16 mx-auto mt-20 bg-white lg:max-w-7xl lg:pb-24">
      <div>
        <h2 className="pt-20 text-3xl font-semibold leading-tight text-center md:font-work-sans lg:text-4xl md:text-4xl md:pb-20 font-ivy-presto md:pt-10">
          Topics That Shape Work, <br />
          Business, and Careers
        </h2>

        <div className="flex flex-col mt-5 md:flex-row md:items-center md:gap-5 lg:gap-10 ">
          <div className="">
            {/* <h3 className="relative text-5xl text-center font-ivy-presto top-5 lg:text-right lg:-right-8">
              01
            </h3> */}
            <Image
              src="/image12.avif"
              alt="Topic 1"
              width={200}
              height={100}
              className="w-full md:w-[600px] h-[400px] object-cover lg:w-[300px]!"
            />
          </div>
          <div className="mt-5 md:max-w-2/3 ">
            <h2 className="text-3xl md:text-4xl font-ivy-presto lg:mb-5">
              Remote Work & The Future of Work
            </h2>
            <p className="mt-2 md:pr-20">
              Work is no longer local. It’s global. Remote careers, distributed
              teams, and borderless hiring are rewriting the rules. I show
              organizations and professionals how to stay ahead, not just by
              predicting the future, but by preparing for it today. Drawing from
              years of building remote-first systems and coaching thousands into
              international roles, I bring both data and lived experience to
              every stage.
            </p>
            <div>
              <BookDamiDialog
                triggerText="Book Dami to Speak"
                triggerClassName="mt-10 bg-[#EDF296] text-black px-6 py-3 rounded-full gap-2 mx-auto font-medium"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-5 md:flex-row-reverse md:items-center md:gap-5 lg:gap-10">
          <div className="">
            {/* <h3 className="relative text-5xl text-center font-ivy-presto top-5 lg:text-left lg:right-8">
              02
            </h3> */}
            <Image
              src="/image13.avif"
              alt="Topic 1"
              width={200}
              height={100}
              className="w-full md:w-[600px] h-[400px] object-cover lg:w-[300px]!"
            />
          </div>
          <div className="mt-5 md:max-w-2/3 ">
            <h2 className="text-3xl md:text-4xl lg:mb-5 font-ivy-presto">
              Entrepreneurship in the Digital Economy
            </h2>
            <p className="mt-2 md:pr-20">
              Today’s entrepreneurs aren’t just building businesses. They’re
              building resilience in uncertain times, digital-first systems, and
              global reach from day one. As a founder scaling HR tech and
              digital education ventures, I share the lessons of starting,
              sustaining, and thriving in volatile markets. Audiences leave with
              strategies to spot opportunities, leverage technology, and build
              businesses designed for tomorrow's economy.
            </p>
            <div>
              <BookDamiDialog
                triggerText="Book Dami to Speak"
                triggerClassName="mt-10 bg-[#EDF296] text-black px-6 py-3 rounded-full gap-2 mx-auto font-medium"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5 md:flex-row md:items-center md:gap-5 lg:gap-10">
          <div className="md:max-w-1/3">
            {/* <h3 className="relative text-5xl text-center font-ivy-presto top-5 lg:text-right lg:-right-8">
              03
            </h3> */}
            <Image
              src="/image14.avif"
              alt="Topic 1"
              width={200}
              height={100}
              className="w-full md:w-[600px] h-[400px] object-cover lg:w-[300px]!"
            />
          </div>
          <div className="mt-5 md:max-w-2/3 ">
            <h2 className="text-3xl md:text-4xl lg:mb-5 font-ivy-presto">
              Career Development & Navigating Today’s Workspace
            </h2>
            <p className="mt-2 ">
              The career ladder is broken. The future belongs to professionals
              who build portable skills, design flexible careers, and own their
              growth. Having coached thousands of ambitious professionals, I
              know the patterns that keep people stuck — and the strategies that
              set them apart. I equip audiences with actionable steps to grow,
              pivot, and stay competitive in fast-changing workplaces.
            </p>
            <div>
              <BookDamiDialog
                triggerText="Book Dami to Speak"
                triggerClassName="mt-10 bg-[#EDF296] text-black px-6 py-3 rounded-full gap-2 mx-auto font-medium"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HandPickYourTopic;
