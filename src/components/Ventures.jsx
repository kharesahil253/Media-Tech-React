import React from "react";
import { Button } from "./ui/button";
export const ventures = [
    {
      logo: "https://www.mediatechtemple.com/wp-content/uploads/2023/09/cropped-cropped-NT-Logo-Png-2-removebg-preview-2.png",
      head: "News Temple",
      text: "News temple appears to be a Rajasthan news website that provides daily updates on the latest news from all over Rajasthan. Users can likely expect to find a wide range of topics covered. We provide all news updates in Hindi.",
    },
    {
      logo: "https://www.mediatechtemple.com/wp-content/uploads/2023/09/cropped-India-Sarkari-Naukri-Logo.png",
      head: "India Sarkari Job",
      text: "The website has a search function that allows users to search for govt vacancies, admit cards, and results based on location, qualification, and job type. This can be especially useful for users looking for specific job opportunities.",
    },
    {
      logo: "https://www.mediatechtemple.com/wp-content/uploads/2023/09/MT-Music-LOGO-1.png",
      head: "MT Dehati Music",
      text: "It is a music channel on YouTube. We provide dehati music like Haryanvi songs, Rajasthani songs, Madwari songs, Bhajans, Braj songs, Radha-Krishna bhajans, and Lok geets. We regularly update songs on our channel.",
    },
    {
      logo:"https://www.mediatechtemple.com/wp-content/uploads/2024/03/logo.png",
      head:"OpenChat Android Mobile App",
      text:"Open Chat Free Android Mobile App redefines the way you communicate by seamlessly integrating with WhatsApp, allowing you to effortlessly send direct messages to your contacts with ease."
    }
  ];
const Ventures = () => {
 

  return (
    <section className="py-8 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
        OUR VENTURES
      </h2>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-start px-4 md:px-16">
        {ventures.slice(0,3).map((item, index) => (
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
    </section>
  );
};

export default Ventures;
