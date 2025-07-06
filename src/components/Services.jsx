import React from "react";

const Services = () => {
  const servicetdata = [
    {
      head: "Transport Management System",
      info: "A Transport Management System (TMS) is a comprehensive software solution designed to manage and optimize various aspects of transportation and logistics within an organization. It is particularly valuable for businesses that rely on shipping, freight, and transportation for their operations.",
      image:
        "https://www.mediatechtemple.com/wp-content/uploads/2019/12/home4_icon1-168x168.png",
    },
    {
      head: "General Account Management Software",
      info: "A General account management software, often referred to as accounting software, is a category of software applications designed to help individuals and businesses manage their financial transactions, track income and expenses, and maintain accurate financia; records..",
      image:
        "https://www.mediatechtemple.com/wp-content/uploads/2019/12/home4_icon2-168x168.png",
    },
    {
      head: "Tele-Communication Software",
      info: "Telecommunication software, often referred to as telecom software, is a category of software applications and tools designed to facilitate, enhance, and manage communication services over various telecommunication networks",
      image:
        "https://www.mediatechtemple.com/wp-content/uploads/2019/12/home4_icon3-168x168.png",
    },
    {
      head: "Salon Management Software",
      info: "Salon management software, also known as salon software or spa management software, is a specialized type of software designed to help salon and spa owners, as well as beauty professionals, manage their daily operations, streamline administrative tasks, and improve the overall customer experience.",
      image:
        "https://www.mediatechtemple.com/wp-content/uploads/2019/12/home4_icon4-168x168.png",
    },
    {
      head: "Social Leads Management Software",
      info: "Social leads management software, often referred to as social lead generation or social CRM (Customer Relationship Management) software, is a specialized type of software designed to help businesses and marketers identify, capture, track, and manage leads or potential customers through various social media channels.",
      image:
        "https://www.mediatechtemple.com/wp-content/uploads/2019/12/home4_icon5-168x168.png",
    },
    {
      head: "Sales Management Software",
      info: "Sales management software, also known as sales software or customer relationship management (CRM) software, is a category of software tools and platforms designed to assist businesses in managing and optimizing their sales processes.",
      image:
        "https://www.mediatechtemple.com/wp-content/uploads/2019/12/home4_icon6-168x168.png",
    },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        {/* Headings */}
        <h5 className="text-sm text-gray-500 font-semibold uppercase tracking-widest">
          Our Services
        </h5>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-16">
          How We Can Help?
        </h3>

        <div className="grid md:grid-cols-3 gap-6 items-center">
          {/* Left services */}
          <div className="space-y-10 text-left">
            {servicetdata.slice(0, 3).map((service, index) => (
              <div key={index} className="flex items-start gap-4 ml-10">
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg text-right ">
                    {service.head}
                  </h4>
                  <p className="text-gray-600  pl-3 mt-1 text-right">{service.info}</p>
                </div>
                 <img
                  src={service.image}
                  alt={service.head}
                  className="w-15 h-15 "
                />
              </div>
            ))}
          </div>

          {/* Center image */}
          <div className="hidden md:flex justify-center">
            <img
              src="https://www.mediatechtemple.com/wp-content/uploads/2019/12/man_with_laptop.png"
              alt="Man with laptop"
              className="max-h-[500px] object-contain"
            />
          </div>

          {/* Right services */}
          <div className="space-y-10 text-left">
            {servicetdata.slice(3).map((service, index) => (
              <div key={index} className="flex items-start gap-4">
                <img
                  src={service.image}
                  alt={service.head}
                  className="w-15 h-15"                />
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">
                    {service.head}
                  </h4>
                  <p className="text-gray-600  mt-1">{service.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
