import React from "react";
import CollaborateModal from "./CollaborateModal";
import Image from "next/image";

function LetsCollaborate() {
  return (
    <section className="relative bg-[#27221F] w-full px-5 lg:px-24 pt-16 pb-16 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/thisisme.avif"
          alt="Background"
          className="object-cover object-center w-full h-full opacity-25"
        />
      </div>
      <div className="relative flex flex-col items-center justify-center pt-10">
        {/* <p className="text-lg font-bold text-white font-work-sans">
          Her Mission
        </p> */}
        <h2 className="text-4xl lg:text-5xl font-ivy-presto text-white mt-6 text-center lg:max-w-[800px]">
          looking for a credible African partner with reach, results, and
          resonance
        </h2>
        <p className="text-md font-medium text-white font-work-sans text-center mt-4 lg:max-w-[800px] md:max-w-[600px]">
          I work with high-growth companies and ecosystems to develop talent
          pipelines, rethink workforce development, and build hiring systems
          that reflect Africa’s true capacity—not the outdated story the world
          keeps telling.
        </p>
        <CollaborateModal />
      </div>
    </section>
  );
}

export default LetsCollaborate;
