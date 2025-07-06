import React from "react";

const Solutions = () => {
  const data = [
    {
      num: 112567,
      text: "EXCELLENT CUSTOMER SUPPORT",
      para: "We have strong customer support team available to assist you on working days.",
    },
    {
      num: 1200,
      text: "INNOVATION & EXCELLENCE",
      para: "Our mission is to make our clients excel in sales, support, and management.",
    },
    {
      num: 1600,
      text: "REGULAR RELATIONS WITH CLIENTS",
      para: "We help you generate regular referrals and maintain excellent relationships with your clients.",
    },
    {
      num: 5000,
      text: "WORLDWIDE CUSTOMER SERVICE",
      para: "Every customer matters to us, no matter what volume. It’s every customer for us.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
          The Best Solutions for Our Clients
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {data.map((item, index) => (
            <div key={index} className="space-y-4 px-4">
              <h1 className="text-5xl font-bold text-indigo-600">{item.num}</h1>
              <h4 className="text-lg font-semibold text-gray-900 uppercase tracking-wide">
                {item.text}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
