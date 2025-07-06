import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Clients = () => {
  const navigate= useNavigate();
  const images = [
    {
      img: "https://www.mediatechtemple.com/wp-content/uploads/2023/09/Mahindra-logo.png",
    },
    {
      img: "https://www.mediatechtemple.com/wp-content/uploads/2023/09/TVS-motors-logo.png",
    },
    {
      img: "https://www.mediatechtemple.com/wp-content/uploads/2023/09/Hero-logo.png",
    },
    {
      img: "https://www.mediatechtemple.com/wp-content/uploads/2023/09/INSYNC-removebg-preview.png",
    },
  ];

  return (
    <section className="w-full  py-20 bg-white text-center px-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-16">Our Clients</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {images.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-40 flex items-center justify-center bg-white shadow-lg rounded-xl overflow-hidden group"
          >
            <img
              src={item.img}
              alt={`client-${index}`}
              className="h-16 object-contain z-10 transition-transform duration-300 group-hover:scale-105"
            />
            {/* Bottom-up gradient overlay */}
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-pink-500 to-red-500 opacity-0 group-hover:opacity-80 transition-all duration-500 z-0" />
          </div>
        ))}
      </div>

      <div className="mt-20">
        <Button onClick={()=> navigate("/clients")} className="bg-gray-600 hover:bg-gray-800 text-white px-6 py-3 rounded-md text-lg">
          See More Clients →
        </Button>
      </div>
    </section>
  );
};

export default Clients;
