import React, { useState } from "react";
import Navbar2 from "../Navcomponets/Navbar2";
import { navbaroptions } from "../Navbar";
import Footer from "../Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { z } from "zod";
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z
    .string()
    .regex(/^\d{10}$/, "Phone must be 10 digits")
    .optional()
    .or(z.literal("")),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  query: z.string().min(1, "Message is required"),
});

const Digital = () => {
  const datacon = [
    {
      head: "Reach",
      content:
        "R stands for reach. This is the total number of consumers that have come into contact with your brand as a result of your marketing initiatives. To increase your audience, you can use tactics like social media advertising, email marketing, and influencer marketing. It’s important to keep in mind that while reach is important, it’s not the only metric you should take into consideration. If your marketing efforts have a great reach but a low engagement rate, they might not be as effective as they could be..",
    },
    {
      head: "Relevance",
      content:
        "This refers to how well your marketing message satisfies the needs and preferences of your target audience.Once a business has identified its target audience, it must ensure that its message is relevant to that demographic. If you want to make sure that your marketing is relevant, you must be aware of the demographics, preferences, and issues that your audience faces. By performing market research and evaluating client data, you may create marketing techniques that are memorable to your audience.",
    },
    {
      head: "Resonance",
      content:
        "This has to do with how well your target audience can emotionally connect with your marketing message. If you want to develop resonance, your top goals should be storytelling and the creation of shareable, impact full content.",
    },
    {
      head: "Reaction",
      content:
        "This is discussed in relation to how your target market responds to your marketing message. After reaching their audience, proving their relevance, and connecting with them, businesses must elicit a response from them.",
    },
    {
      head: "Return On Investment",
      content:
        "Businesses must track and assess the results of their marketing initiatives in order to optimize and calibrate their plans. Calculating ROI requires tracking information on conversion rates, client lifetime value, and revenue from your adverts.",
    },
  ];
  const [faq, setfaq] = useState(null);
  const shoexplore = (text) => {
    setfaq((prev) => (prev == text ? null : text));
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    query: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSub = (e) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(fieldErrors);
    } else {
      setErrors({});
      // Reseting the form
      setFormData({
        name: "",
        email: "",
        phone: "",
        website: "",
        query: "",
      });
    }
  };
  return (
    <div>
      <Navbar2 navLinks={navbaroptions} />
      <h1 className="bg-gradient-to-r from-[#d0e8ef] via-white to-[#fcd3bb] text-4xl text-center font-bold  pt-4 pb-4">
        Digital Marketing Services In India
      </h1>
      <section1 className="px-4  md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 ml-30 mr-30 gap-8 items-center">
          <img
            className="rounded-lg shadow-md"
            src="https://www.mediatechtemple.com/wp-content/uploads/2024/11/Best-Digital-marketing-Agency.webp"
            alt="Digital Marketing"
          />
          <div className="text-blue-950 w-xl space-y-4">
            <p>
              <b>Digital marketing services</b>, also known as{" "}
              <b>internet marketing services</b>, advertise businesses through
              the internet and other types of digital communication.
            </p>
            <p>
              The creative, adaptable, and full-service{" "}
              <b>digital marketing agency near me</b> Media Tech Temple doesn’t
              rely on deceit to draw in new clients. Instead, we rely on our
              website’s search engine optimisation (SEO) and marketing abilities
              to bring in more visitors.
            </p>
            <p>
              We don’t run a stagnant business. We don’t confine ourselves to a
              single industry. Any big business in any industry can benefit from
              Media Tech Temple’s expertise and competence when it comes to
              creating a unique website and utilising other digital marketing
              services.
            </p>
          </div>
        </div>
      </section1>
      <section2 className="px-4 md:px-16">
        <div>
          <h2 className="text-3xl ml-30 mr-30 font-bold text-center mb-10 text-blue-950">
            TO CREATE EFFECTIVE MARKETING CAMPAIGNS AND ENGAGE WITH THEIR TARGET
            MARKET, WE CAN USE THE 5 R’S OF DIGITAL MARKETING.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16">
            {datacon.map((item, index) => (
              <Card
                key={index}
                className=" shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="bg-orange-400 rounded-t-lg px-4 py-3">
                  <CardTitle className="text-white text-center text-lg font-bold">
                    {item.head}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-sm font-semibold text-blue-950 ">
                    {item.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section2>
      <section3 className="w-full px-4 ml-10 mr-10 md:px-20 py-16">
        <h3 className="text-3xl font-bold text-center text-blue-950 mb-10">
          DIGITAL MARKETING SERVICES IN INDIA PROVIDE BY US
        </h3>

        <div className="space-y-8 text-blue-950 ml-30 mr-30 text-base leading-relaxed">
          <div>
            <h4 className="text-xl font-semibold mb-2">
              SEM (Search Engine Marketing)
            </h4>
            <p>
              Through the use of paid search engine advertising, SEM assists
              businesses in attracting customers’ attention to their goods and
              services. Using the SEM method, businesses purchase targeted ad
              space at the top of search engine result pages.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">
              SMM (Social Media Marketing)
            </h4>
            <p>
              In order to develop a company’s brand, boost sales, and enhance
              website traffic, social media marketing (SMM) makes advantage of
              the platforms where people may create social networks and share
              information. Data analytics specifically designed for SMM enable
              marketers to monitor the effectiveness of their initiatives and
              find further engagement opportunities.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Affiliate Marketing</h4>
            <p>
              An affiliate can make money by promoting the goods of another
              individual or business. The affiliate merely looks for a product
              they are interested in, promotes it, and receives a cut of the
              revenue from each transaction. Through affiliate connections from
              one website to another, the sales are monitored.
            </p>
            <p className="mt-2">
              Affiliate marketing utilises the skills of a range of people for a
              more successful marketing plan while giving contributors a piece
              of the profit since it works by dividing the responsibility of
              product promotion and creation between parties.
            </p>
            <p className="mt-2 font-medium">
              Three parties must cooperate for this to succeed:
            </p>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              <li>Creators and sellers of the goods</li>
              <li>The advertiser or affiliate</li>
              <li>The buyer</li>
            </ul>
          </div>

          <p className="mt-6">
            If you have just started your business or have an established
            business, then digital marketing is the only way to accomplish your
            goals. You can choose us as we offer digital marketing and help take
            your business to the next level.
          </p>
        </div>
      </section3>

      <section4 className="w-full px-4  md:px-20 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-950 ">
          DIGITAL MARKETING HELPS:
        </h2>

        <div className="grid grid-cols-1 ml-30 mr-20 md:grid-cols-2 gap-10 items-center text-blue-950">
          <img
            src="https://www.mediatechtemple.com/wp-content/uploads/2024/11/Digital-Marketing-Customer-Help.webp"
            alt="Digital Marketing Benefits"
            className="rounded-lg shadow-md w-full"
          />

          <ul className="list-disc list-inside space-y-3 text-base leading-relaxed">
            <li>Drive traffic to your website, store or profile</li>
            <li>Convert visitors to your permanent customers</li>
            <li>Enhance online presence</li>
            <li>Deliver conversation</li>
            <li>Generate better revenues</li>
            <li>Facilitate interaction with target audience</li>
            <li>Build brand reputation</li>
            <li>Offer better ROI on your investments</li>
            <li>Earn trust of people</li>
            <li>Make sure business survival online</li>
          </ul>
        </div>
      </section4>

      <section5 className="w-full px-4 md:px-20 py-16">
        <h3 className="text-3xl font-bold text-center text-blue-950 mb-10">
          GOOGLE MY BUSINESS REGISTRATION & OPTIMIZATION
        </h3>

        <ul className="max-w-3xl mx-auto list-disc list-inside  space-y-4 text-blue-950 text-base ">
          <li>Google Map Registration</li>
          <li>Google My Business Registration</li>
          <li>Service Input</li>
          <li>Area Input</li>
          <li>Listing Optimization</li>
        </ul>
      </section5>

      <section6 className="py-12 ">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className=" rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://www.mediatechtemple.com/wp-content/uploads/2024/11/Social-media-Marketing-Services.webp"
              alt="Social Media Marketing"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h4 className="text-xl font-semibold text-blue-950 mb-2">
              SOCIAL MEDIA MARKETING
            </h4>
            <p className="text-blue-950">
              We have the best team of experts to promote your business using
              social media channels. There are so many social networking sites
              that have become incredibly popular. We never leave any stone
              unturned and keep trying to connect with your target audience.
            </p>
          </div>

          <div className="rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://www.mediatechtemple.com/wp-content/uploads/2024/11/Pay-Per-Click-PPC-Marketing-Services.webp"
              alt="Pay Per Click Marketing"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h4 className="text-xl font-semibold text-blue-950 mb-2">
              PAY PER CLICK (PPC)
            </h4>
            <p className="text-blue-950">
              We use pay-per-click or paid advertisement options to make your
              brand popular. You pay for each click on your ads. The most
              popular platforms include Google Ads, Facebook Ads, Instagram Ads,
              and many more emerging platforms.
            </p>
          </div>
        </div>
      </section6>
      <section7 className="py-12">
        <div className="max-w-4xl ml-45 mt-15  px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-950 mb-6">
            CONTENT MARKETING
          </h3>

          <p className="text-blue-950 mb-4">
            We use all possible content marketing channels to circulate
            information about the business/brand. People will easily find you
            online and talk about you.
            <br />
            <span className="font-semibold text-blue-950">
              What makes us different from others?
            </span>
          </p>

          <div className="mb-6">
            <p className="text-blue-950 mb-2">
              There are so many reasons to choose our team or give us a chance
              to serve you, and some of them are listed below:
            </p>
            <ul className="list-disc list-inside space-y-2 text-blue-950">
              <li>
                We have a team of trained and experienced digital marketing
                executives who understand each and every business.
              </li>
              <li>Our services are cost-effective.</li>
              <li>We are open to communication and suggestions.</li>
              <li>We are committed to offering quality results.</li>
              <li>We have satisfied clients.</li>
            </ul>
          </div>

          <p className="text-blue-950">
            <span className="font-semibold text-blue-950">
              Stay in touch with us!
            </span>
            <br />
            If you have been looking for the best digital marketing company,
            then look no further than our services. We are ready to serve you.
          </p>
        </div>
      </section7>
      <faqs>
        <div className="text-center">
          <h3 className="text-blue-950 font-bold text-2xl mt-10 mb-5">
            {" "}
            Frequently Asked Questions
          </h3>
          <ul className=" ml-15 md:px-20 text-start">
            <li
              onClick={() => shoexplore("1")}
              className="py-2  text-lg font-bold text-[#696687] border-b cursor-pointer"
            >
              + What is Digital Marketing, and how can it benefit my business?
              {faq === "1" && (
                <div className="ml-4 mt-3 text-blue-950 space-y-3">
                  Digital Marketing helps businesses reach customers online,
                  boosting brand awareness and driving sales through platforms
                  like social media and search engines.
                </div>
              )}
            </li>
            <li
              onClick={() => shoexplore("2")}
              className="py-2 text-lg font-bold text-[#696687] border-b cursor-pointer"
            >
              + How soon will I see results from Digital Marketing efforts?
              {faq === "2" && (
                <div className="ml-4 text-gray-700 space-y-3">
                  While results can vary, most businesses start seeing
                  meaningful results in about 2-3 months with the right
                  strategy.
                </div>
              )}
            </li>
            <li
              onClick={() => shoexplore("3")}
              className="py-2 text-lg font-bold text-[#696687] border-b cursor-pointer"
            >
              + What types of Digital Marketing services do you offer?
              {faq === "3" && (
                <div className="ml-4 text-gray-700 space-y-3">
                  We offer SEO, Local SEO, Graphic Designing, content
                  marketing,SMM,Web Development, Bulk SMS, Voice Call, Whatsapp,
                  PPC, and email marketing Other Service to help businesses
                  grow.
                </div>
              )}
            </li>
            <li
              onClick={() => shoexplore("4")}
              className="py-2 text-lg font-bold text-[#696687] border-b cursor-pointer"
            >
              + What is the cost of Digital Marketing services in India?
              {faq === "4" && (
                <div className="ml-4 text-gray-700 space-y-3">
                  The cost depends on your goals, but we offer affordable and
                  customized plans for every budget.
                </div>
              )}
            </li>
            <li
              onClick={() => shoexplore("5")}
              className="py-2 text-lg font-bold text-[#696687] border-b cursor-pointer"
            >
              + Why should I trust your company for Digital Marketing?
              {faq === "5" && (
                <div className="ml-4 text-gray-700 space-y-3">
                  Offer going on
                </div>
              )}
            </li>
          </ul>
        </div>
      </faqs>
      <div className="flex  gap-10">
        <img
          src="https://www.mediatechtemple.com/wp-content/uploads/2024/11/Web-Design-And-Development-Services-contact-use.webp"
          alt=""
          className="w-xl ml-40"
        />
        <div className="flex justify-end px-4 py-8 mr-20 mt-10">
          <div className="w-full md:w-xl">
            <Card className="shadow-lg boxi">
              <CardHeader className="text-2xl font-bold text-start text-blue-950">
                Drop Us a Line
              </CardHeader>
              <CardHeader className="text-lg -mt-4 font-semibold text-start text-blue-950">
                Feel free to contact us anytime
              </CardHeader>

              <CardContent className="space-y-4">
                <form className="mt-5" onSubmit={handleSub}>
                  <div>
                    <Input
                      name="name"
                      value={formData.name}
                      placeholder="Your Name"
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name[0]}
                      </p>
                    )}
                  </div>

                  <div>
                    <Input
                      name="email"
                      placeholder="Email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email[0]}
                      </p>
                    )}
                  </div>

                  <div>
                    <Input
                      name="phone"
                      placeholder="Phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone[0]}
                      </p>
                    )}
                  </div>

                  <div>
                    <Input
                      name="website"
                      placeholder="Website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.website && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.website[0]}
                      </p>
                    )}
                  </div>

                  <div>
                    <Textarea
                      name="query"
                      placeholder="Your Message"
                      rows={4}
                      value={formData.query}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.query && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.query[0]}
                      </p>
                    )}
                  </div>

                  <Button className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Digital;
