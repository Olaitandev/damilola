import React from "react";

function remoteReadyFaq() {
  const data = [
    {
      id: 1,
      title: "Can you guarantee me a remote job?",
      subtitle:
        "No one can guarantee a job. What I do guarantee is a proven system and tools that have helped thousands secure global offers. If you commit, you will see results.",
    },
    {
      id: 2,
      title: "Can I pay in installments?",
      subtitle:
        "We don’t offer installments. Members who commit upfront show up fully — and they’re the ones who get results.",
    },
    {
      id: 3,
      title: "Do I need to buy other products if I join?",
      subtitle:
        " No. Coaching members get automatic access to all my digital products, templates, and resources.",
    },
    {
      id: 4,
      title: "How much time do I need each week?",
      subtitle:
        " At least 5–8 hours. If you can commit that, you’ll see results.",
    },
    {
      id: 5,
      title: "I’ve tried before and failed. Will this work for me?",
      subtitle:
        "Yes. Most members came after months of rejection. Once they applied our system, interviews and offers followed.",
    },
  ];
  return (
    <section className="w-full px-5 py-16 lg:px-24">
      <div>
        <h2 className="text-3xl font-ivy-presto">
          Questions People Ask Before Joining
        </h2>
        {/* <p className="mt-5 md:max-w-[600px]">
          Got Questions? Let’s Clear Them Up.
        </p> */}
      </div>

      <div>
        {data.map((item) => (
          <div key={item.id} className="flex flex-col mt-10 ">
            <hr className="opacity-15" />
            <div className="md:flex md:flex-row md:justify-between">
              <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
              <p className="mt-8 md:max-w-[500px] lg:max-w-[700px] ">
                {item.subtitle}
              </p>{" "}
            </div>
          </div>
        ))}
      </div>

      {/* <div>
        <h2 className="mt-10 text-2xl font-semibold">Still have questions?</h2>

        <button className="bg-[#EDF296] text-black font-semibold rounded-full p-3 mt-4">
          Contact me
        </button>
      </div> */}
    </section>
  );
}

export default remoteReadyFaq;
