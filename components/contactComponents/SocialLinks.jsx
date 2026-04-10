import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";


function SocialLinks() {
  return (
    <section
      className="
        bg-[#FFEBE0] w-full px-5 lg:px-20  py-16 flex flex-col items-center  gap-8"
    >
      <div className="flex flex-col gap-8 lg:flex-row md:gap-10 lg:gap-18">
        <Link
          href="mailto:info@dami.com"
          className="flex flex-row items-center gap-3 transition-opacity lg:flex-col hover:opacity-70 lg:items-start"
        >
          <CiMail size={30} />
          <p className="font-medium">info@dami.com</p>
        </Link>
        <Link
          href="https://www.linkedin.com/in/damifayanjuola"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center gap-3 transition-opacity lg:items-start lg:flex-col hover:opacity-70"
        >
          <CiLinkedin size={30} />

          <p className="font-medium">Dami Fayanjuola</p>
        </Link>
        <Link
          href="https://www.youtube.com/@damifayanjuola"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center gap-3 transition-opacity lg:items-start lg:flex-col hover:opacity-70"
        >
          <AiOutlineYoutube size={30} />
          <p className="font-medium">@damifayanjuola</p>
        </Link>
        <Link
          href="https://www.instagram.com/damifayanjuol"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center gap-3 transition-opacity lg:items-start lg:flex-col hover:opacity-70"
        >
          <FaInstagram size={30} />
          <p className="font-medium">@damifayanjuol</p>
        </Link>
        <Link
          href="https://x.com/damifayanjuola"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center gap-3 transition-opacity lg:items-start lg:flex-col hover:opacity-70"
        >
          <RiTwitterXFill size={30} />

          <p className="font-medium">@damifayanjuola</p>
        </Link>
      </div>
    </section>
  );
}

export default SocialLinks;
