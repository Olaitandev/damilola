"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

function PartnershipHero({
  title,
  description,
  button1Text,
  button2Text,
  button1Route,
  button2Route,
  DialogComponent,
  mobileRoute, // Add this prop for mobile routing
}) {
  const router = useRouter();
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleButton1Click = () => {
    if (button1Route) {
      router.push(button1Route);
    } else if (!isLargeScreen && mobileRoute) {
      router.push(mobileRoute);
    }
  };

  const handleButton2Click = () => {
    if (button2Route) {
      router.push(button2Route);
    }
  };

  return (
    <div>
      <section className="bg-[#27221F] w-full px-5 lg:px-24 pt-16 pb-16 lg:pb-24">
        <div className="flex flex-col items-center justify-center pt-10 lg:pt-20">
          <h2
            className="text-4xl text-center text-white lg:text-5xl font-ivy-presto lg:max-w-full"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {title}
          </h2>

          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="mt-3 text-sm font-light text-center text-white md:mt-5 md:text-md lg:text-xl font-work-sans md:px-14 lg:px-20"
          >
            {description}
          </p>

          <div
            className="flex flex-row gap-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            {DialogComponent && isLargeScreen ? (
              <DialogComponent
                triggerText={button1Text}
                className="bg-[#EDF296] text-black rounded-full p-3 mt-10 text-sm font-medium lg:p-4.5 lg:text-md"
              />
            ) : (
              <button
                className="bg-[#EDF296] text-black rounded-full p-3 mt-10 text-sm font-medium lg:p-4.5 lg:text-md"
                onClick={handleButton1Click}
              >
                {button1Text}
              </button>
            )}

            {button2Text && (
              <button
                className="bg-[#FFEEE6] text-black rounded-full p-3 mt-10 text-sm font-medium lg:p-4.5 lg:text-md"
                onClick={handleButton2Click}
              >
                {button2Text}
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PartnershipHero;
