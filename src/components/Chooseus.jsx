import React from "react";
import { Button } from "./ui/button";
import Solutions from "./Solutions";
import Clients from "./clients";
import Ventures from "./Ventures";
import Tag from "./Tag";
import { useNavigate } from "react-router-dom";

const ChooseUs = () => {
  const navigate = useNavigate();
  return (
    <section className="choose py-20 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <img
          className="mx-auto w-full max-w-3xl rounded-md shadow-md mb-10"
          src="https://www.mediatechtemple.com/wp-content/uploads/2023/09/about-home.jpg"
          alt="Why Choose Us"
        />
        <h6 className="text-sm text-blue-200 uppercase tracking-wide font-semibold mb-2">
          Why Choose Us
        </h6>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Save Time & Effort With the Media Tech Temple
        </h3>
        <p className="text-white max-w-3xl mx-auto text-base md:text-lg mb-8">
          We are providing integrated solutions as most beneficial for our
          client. We are focusing on IT Solutions, Marketing Solutions, Tele
          Solutions and Advertisement. We provide customized products and
          solutions to meet your goals.
        </p>
        <Button
          onClick={() => navigate("/contactus")}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 mb-6 rounded-md font-semibold text-sm tracking-wide"
        >
          REQUEST FREE QUOTE
        </Button>
      </div>
      <Solutions />
      <Clients />
      <Ventures />
      <Tag />
    </section>
  );
};

export default ChooseUs;
