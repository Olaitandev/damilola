"use client";
import { ChatTeardropTextIcon } from "@phosphor-icons/react";
import {

  MessageCircleMore,
  NotebookPen,
  SquareStack,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import Image5 from "@/public/image5.svg";
import { GoLightBulb } from "react-icons/go";
import { SlNotebook } from "react-icons/sl";
import { PiChatTeardropText } from "react-icons/pi";
import { PiRobotLight } from "react-icons/pi";

import { HiOutlinePuzzlePiece } from "react-icons/hi2";





function Section3() {
  return (
    <section className="px-5 pt-16 pb-20 mx-auto lg:max-w-7xl">
      <div className="flex flex-col items-center gap-10 md:flex-row ">
        <div className="md:w-1/2">
          <h2
            className="text-3xl font-bold font-ivy-presto "
            data-aos="fade-right"
            data-aos-duration="800"
          >
            Random Facts About Me
          </h2>
          <div className="flex flex-col mt-10 gap-7">
            <div
              className="flex flex-row justify-start gap-5"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <GoLightBulb className="size-[25px] shrink-0" />

              <p className="font-work-sans text-md">
                I once sent the same cold email three times before someone
                finally said yes. That yes changed my life.
              </p>
            </div>
            <div
              className="flex flex-row justify-start gap-5"
              data-aos="fade-right"
              data-aos-duration="800"
     
            >
              <SlNotebook className="size-[25px] shrink-0" />
              <p>
                My coaching students have landed more than 200jobs that pay in
                foreign currency
              </p>
            </div>
            <div
              className="flex flex-row justify-start gap-5"
              data-aos="fade-right"
              data-aos-duration="800"

            >
              <PiChatTeardropText className="size-[25px] shrink-0" />

              <p>
                I’ve spoken on over 50 stages, but I still rehearse like it’s my
                first.
              </p>
            </div>
            <div
              className="flex flex-row justify-start gap-5"
              data-aos="fade-right"
              data-aos-duration="800"
             
            >
              <PiRobotLight className="size-[25px] shrink-0" />

              <p>
                I test every single tool and strategy on myself before I ever
                teach it.
              </p>
            </div>
            <div
              className="flex flex-row justify-start gap-5"
              data-aos="fade-right"
                data-aos-duration="800"
              
    
            >
              <HiOutlinePuzzlePiece className="size-[30px] shrink-0" />
              <p>I believe execution beats motivation, always</p>
            </div>
          </div>
        </div>
        <div
          className="md:w-1/2"
          data-aos="fade-left"
            data-aos-duration="800"
       
        >
          <Image
            src={"/liedown.avif"}
            width={500}
            height={500}
            alt="Random Fact"
            className=""
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Section3;
