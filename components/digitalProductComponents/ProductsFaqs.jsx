import React from "react";
import { Dot } from "lucide-react";
function ProductsFaqs() {
  const data = [
    {
      id: 1,
      title:
        "I'm not sure which product to start with. How do I choose the right one?",
      subtitle:
        "It depends on where you are in your job search:  <br/> • Want everything in one place? Start with the Premium Remote Job Kit or the Bundle. You'll get the full system for resumes, LinkedIn, applications, and interviews; no guesswork, just results. This is what most clients choose when they want a complete fix. <br/> • Struggling to get interviews? Go for Remote Ready™. It helps you stand out, get noticed by recruiters, and start landing callbacks. <br/> • Already getting interviews? Choose the Interview Prep Masterclass. It's designed to turn interviews into actual job offers. <br/> Each option gives you a proven path forward. The key is to start with the product that matches your current challenge, then grow from there.",
    },
    {
      id: 2,
      title: "Will these products guarantee me a job?",
      subtitle:
        "No product can guarantee jobs. What these products guarantee is proven strategies and tools that have helped hundreds of people land interviews and offers.",
    },
    {
      id: 3,
      title: "How do I get access after I pay?",
      subtitle:
        "Instantly. You’ll receive an email with your login details and immediate access to your product.",
    },
    {
      id: 4,
      title: "Do I need prior experience to use these?",
      subtitle:
        "Not at all. Some products are designed specifically for beginners with no corporate experience.",
    },
    {
      id: 5,
      title: "What if I already bought coaching?",
      subtitle:
        "If you’re a coaching client, you already have access to these products as part of your subscription.",
    },
  ];

  return (
    <section className="w-full px-5 py-16 lg:px-48">
      <div>
        <h2 className="text-4xl font-ivy-presto">FAQs</h2>
        <p className="mt-5 md:max-w-[600px]">
          Got Questions? Let’s Clear Them Up.
        </p>
      </div>

      <div>
        {data.map((item) => (
          <div key={item.id} className="flex flex-col mt-10 ">
            <hr className="opacity-15" />
            <div className="md:flex md:flex-row md:justify-between">
              <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
              <p
                className="mt-8 md:max-w-[500px] lg:max-w-[700px]"
                dangerouslySetInnerHTML={{ __html: item.subtitle }}
              />
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="mt-10 text-2xl font-semibold">Still have questions?</h2>
        {/* <p className="mt-4 md:max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p> */}
        <button className="bg-[#EDF296] text-black font-semibold rounded-full p-3 mt-4">
          Contact me
        </button>
      </div>
    </section>
  );
}

export default ProductsFaqs;
