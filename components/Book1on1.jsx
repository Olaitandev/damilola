"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Book1on1({
  title,
  description,
  button1Text,
  button2Text,
  button1Route,
  button2Route,
  onButton1Click,
}) {
  const router = useRouter();

  const handleButton1Click = () => {
    router.push(button1Route);
  };

  const handleButton2Click = () => {
    router.push(button2Route);
  };

  return (
    <section className="bg-[#27221F] w-full px-5 lg:px-24 pt-16 pb-16 lg:pb-24">
      <div className="flex flex-col items-center justify-center pt-10">
        <p className="text-lg font-bold text-center text-white font-work-sans">
          {title}
        </p>
        <h2 className="mt-6 text-4xl text-center text-white lg:text-5xl font-ivy-presto lg:max-w-full">
          {description}
        </h2>
        <div className="flex flex-row gap-4">
          <button
            className="bg-[#EDF296] text-black rounded-full p-3 mt-10 text-sm font-medium lg:p-4.5 lg:text-md"
            onClick={handleButton1Click}
          >
            {button1Text}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Book1on1;
