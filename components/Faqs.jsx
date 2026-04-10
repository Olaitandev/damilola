import Link from "next/link";
import React from "react";

function Faqs() {
  const data = [
    {
      id: 1,
      title: "Can you guarantee me a remote job?",
      subtitle:
        "No one can guarantee a job. What I do guarantee is a proven system and tools that have helped thousands secure global offers. If you commit, you will see results.",
    },
    {
      id: 2,
      title: "What if I’ve tried before and failed?",
      subtitle:
        "Many of my clients came to me after months of rejection. The problem was never their skills. It was the wrong approach. Together we fix that.",
    },
    {
      id: 3,
      title: "Do you only work with Africans?",
      subtitle:
        " My work is rooted in Africa, but the methods apply anywhere. If you want to build a borderless career, this is for you.",
    },
    {
      id: 4,
      title: "How do I book you as a speaker?",
      subtitle:
        "Visit the Speaking page and send a request. Whether it is a summit or corporate event, I bring a voice with global impact and real results.",
    },
    {
      id: 5,
      title: "What kind of brands do you partner with",
      subtitle:
        "I collaborate with Global Employers, EdTechs, HR techs, Fintechs, all businesses, brands and companies looking to reach professionals across Africa. If that is you, click on the collaboration link and let’s talk.",
    },
  ];

  return (
    <section className="w-full px-5 py-16 lg:px-24">
      <div data-aos="fade-right" data-aos-duration="1000">
        <h2 className="text-4xl font-ivy-presto">FAQs</h2>
        <p className="mt-5 md:max-w-[600px]">
          Got Questions? Let’s Clear Them Up.
        </p>
      </div>

      <div>
        {data.map((item) => (
          <div key={item.id} className="flex flex-col mt-10 ">
            <hr className="" />
            <div className="md:flex md:flex-row md:justify-between">
              <h3
                className="mt-6 text-xl font-semibold"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                {item.title}
              </h3>
              <p
                className="mt-8 md:max-w-[500px] lg:max-w-[700px]"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                {item.subtitle}
              </p>{" "}
            </div>
          </div>
        ))}
      </div>

      <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
        <h2 className="mt-10 text-2xl font-semibold">Still have questions?</h2>
        {/* <p className="mt-4 md:max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p> */}
        <Link href="/contact">
          <button className="bg-[#EDF296] text-black font-semibold rounded-full p-3 mt-4">
            Contact me
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Faqs;
