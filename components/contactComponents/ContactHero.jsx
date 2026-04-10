import Image from "next/image";
import React from "react";

function ContactHero() {
  return (
    <section className="relative h-[55vh] lg:h-[45vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/abouthero.jpg"
          fill
          alt="Background Image"
          //   className="object-cover object-center md:object-cover "
          className="object-cover object-[40%_40%] md:object-[center_60%] lg:object-[40%_25%]"
          //   style={{ objectPosition: "40% 40%" }}
          priority
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-between h-full p-10 pt-28 md:p-10 md:pt-60 lg:p-12 top-20 ">
        {/* Lorem text - Bottom Right */}
        <div className="flex lg:ml-[550px]">
          <div className="mx-auto text-left max-w-7xl">
            <h2 className="text-4xl text-white font-ivy-presto lg:text-nowrap">
              Ready to Work With Me
            </h2>
            <p className="text-sm text-white md:text-lg lg:text-xl font-work-sans lg:leading-relaxed md:mt-3">
              Whether you want a speaker for your next event, strategy for your
              career, or a partner who delivers results, this is where the
              conversation starts
            </p>
            {/* <button className="bg-[#EDF296] text-black rounded-full p-2 px-4 md:px-10 font-medium mt-2">
              Contact Me
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
