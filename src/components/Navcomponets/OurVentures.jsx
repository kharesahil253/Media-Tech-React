import React from "react";
import Navbar2 from "./Navbar2";
import { Button } from "../ui/button";
import Footer from "../Footer";
import { ventures } from "../Ventures";
import { navbaroptions } from "../Navbar";
import Whatsapp from "../Whatsapp";

const OurVentures = () => {
  console.log("Ventures array:", ventures);

  return (
    <div>
      <Whatsapp/>
      <Navbar2 navLinks={navbaroptions} />
      <h1 className="bg-gradient-to-r from-[#d0e8ef] via-white to-[#fcd3bb] text-4xl text-center font-bold  pt-4 pb-4">
        Our Ventures
      </h1>
      <div className="flex flex-wrap md:flex gap-10 justify-center items-start px-4 md:px-16">
        {
          ventures.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 max-w-sm mx-auto text-center"
            >
              <img
                src={item.logo}
                alt={item.head}
                className="h-20 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.head}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.text}</p>
              <Button className="bg-gray-700 text-white hover:bg-gray-800">
                Learn More →
              </Button>
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default OurVentures;