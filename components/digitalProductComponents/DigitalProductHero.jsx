import Image from "next/image";
import React from "react";

function DigitalProductHero() {
  return (
    <section className="relative h-[45vh] w-full overflow-hidden flex items-center justify-center bg-[url('/digital.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 w-full h-full bg-black opacity-45"></div>
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <h1 className="text-4xl font-bold text-center text-white md:leading-14 lg:leading-20 lg:text-6xl font-ivy-presto">
           Stop Getting Ghosted. <br className="flex-wrap " />
          Start Landing International Remote Jobs
        </h1>
      </div>
    </section>
  );
}

export default DigitalProductHero;
