import React from "react";
import { Button } from "./ui/button";
import Workprocess from "./Workprocess";
import Services from "./Services";
import ChooseUs from "./Chooseus";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const HomeSection = () => {
  const workpoccessdata = [
    {
      image:
        "https://www.mediatechtemple.com/wp-content/uploads/2023/09/New-message-rafiki.png",
      head: "Bulk Sms",
      subhead: "Sender ID Sms",
    },
    {
      image:
        "https://www.mediatechtemple.com/wp-content/uploads/2023/09/Voice-control-rafiki.png",
      head: "Bulk Voice Call",
      subhead: "Caller ID Calls - Survey Call - OTP Calls",
    },
    {
      image:
        "https://www.mediatechtemple.com/wp-content/uploads/2023/09/Voice-chat-rafiki.png",
      head: "Bulk Whatsapp",
      subhead: "Bulk WhatsApp - WhatsApp API - Chat BOT",
    },
    {
      image:
        "https://www.mediatechtemple.com/wp-content/uploads/2023/09/Website-designer-rafiki.png",
      head: "Web Design & Development",
      subhead: "New Website - Maintains - Upgrading",
    },
    {
      image:
        "https://www.mediatechtemple.com/wp-content/uploads/2023/09/Website-designer-rafiki.png",
      head: "Web Software Development",
      subhead: "eCommerce - Web Portal - Automation",
    },
    {
      image:
        "https://www.mediatechtemple.com/wp-content/uploads/2023/09/Data-extraction-rafiki.png",
      head: "Data Extractor",
      subhead: "Google - Just Dial - India Mart - Linkedin",
    },
    {
      image:
        "https://www.mediatechtemple.com/wp-content/uploads/2023/09/Ecommerce-web-page-rafiki.png",
      head: "Digital marketing",
      subhead: "SEO - SEM - Keywords - Ranking",
    },
    {
      image:
        "https://www.mediatechtemple.com/wp-content/uploads/2023/09/Ecommerce-web-page-rafiki.png",
      head: "Social Media Management",
      subhead: "Creative - Videos - Paid Ads-Management",
    },

    {
      image:
        "https://www.mediatechtemple.com/wp-content/uploads/2023/09/Call-center-bro.png",
      head: "BPO & KPO",
      subhead: "Call Centre - Data Processing",
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Navbar />
      </div>
      <section className="min-h-screen mt-5 pt-38 homei text-white ">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <p className="text-lg uppercase tracking-widest">Welcome to</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Media Tech Temple <br /> Web Development
            </h1>
            <p className="text-base md:text-lg max-w-md">
              We are providing integrated solutions as most beneficial for our
              client. We are focusing on IT Solutions, Marketing Solutions, Tele
              Solutions and Advertisement.
            </p>
            <div className="flex space-x-4">
              <Button
                onClick={() => navigate("/about")}
                className="bg-purple-600 hover:bg-purple-700"
              >
                About Us
              </Button>
              <Button
                onClick={() => navigate("/contactus")}
                className="bg-orange-500 hover:bg-orange-600"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Image  */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="/home24_img.png"
              alt="Home Illustration"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>
      <Workprocess workpoccessdata={workpoccessdata} />
      <Services />
      <ChooseUs />
      <Footer />
    </>
  );
};

export default HomeSection;
