import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactDialog from "../modals/ContactDialog";
import { Book } from "lucide-react";
import BookDamiDialog from "../modals/BookDamiDialog";

function BookDamiSection1() {
  return (
    <section className="mb-20 overflow-x-clip">
      <div className="grid items-center grid-cols-1 gap-10 md:grid-cols-3 md:mt-10">
        <div className="" data-aos="fade-right" data-aos-duration="1000">
          <Image
            src="/image6.avif"
            alt="Description"
            width={500}
            height={500}
            className="object-cover object-top-right h-[540px] md:w-[300px] lg:w-[800px] lg:h-[650px] rounded-md"
          />
        </div>

        <div className="px-5 md:px-5 lg:px-16 mt-5 md:max-w-[300px] lg:max-w-[700px]">
          <h2 className="text-2xl font-ivy-presto lg:text-4xl">
            Bring Clarity to the Future of Work — Today
          </h2>
          <p className="mt-2">
            Organizations and professionals are facing seismic shifts in how we
            work. My keynotes cut through the noise with data, stories, and
            strategies that prepare your audience to adapt, thrive, and lead in
            the new world of work.
          </p>
          <div className="flex justify-center">
            {/* <span className=""> */}
            <BookDamiDialog
              triggerText="Book Dami to Speak"
              triggerClassName="flex items-center mt-10 bg-[#EDF296] text-black px-6 py-3 rounded-full  items-center gap-2 mx-auto font-medium"
            />
            {/* </span> */}
          </div>
        </div>

        <div
          className="relative w-full h-[420px]"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          {/* Top-right image */}
          <Image
            src="/back.avif"
            alt="Description"
            width={245}
            height={280}
            priority
            className="absolute top-0 left-20 lg:left-40 right-0 w-[445px] h-[380px] object-cover object-top rounded-xl z-[1]"
          />
          {/* Bottom-left image — overlaps on top */}
          <Image
            src="/front.avif"
            alt="Description"
            width={225}
            height={260}
            priority
            className="absolute bottom-0 top-40 left-0 w-[250px] lg:w-[300px] h-[300px] object-cover object-top rounded-xl z-[2]"
          />
        </div>
      </div>
    </section>
  );
}

export default BookDamiSection1;
