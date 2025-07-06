import React from "react";

const Workprocess = ({ workpoccessdata }) => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h5 className="text-sm text-gray-600 font-bold uppercase tracking-wide">Work Process</h5>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 pl-95 pr-95 mb-10">
          Some easy steps to boost & grow your business
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {workpoccessdata.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-white shadow-md hover:shadow-lg p-6 rounded-lg transition-all duration-300"
            >
              <img src={item.image} alt={item.head} className="w-36 h-36 mx-auto object-contain mb-4" />
              <h4 className="text-lg font-semibold text-blue-700">{item.head}</h4>
              <h6 className="text-sm text-gray-600 mt-1">{item.subhead}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workprocess;
