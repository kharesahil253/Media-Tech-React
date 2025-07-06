import React, { useState } from "react";
import Navbar2 from "../Navcomponets/Navbar2";
import { navbaroptions } from "../Navbar";
import Footer from "../Footer";
import { Card, CardHeader, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const faqs = [
  "What is Political Campaign Management, and how can it help my election?",
  "How do you create a winning strategy for a political campaign?",
  "What services are included in Political Campaign Management?",
  "How much does Political Campaign Management cost?",
  "Why should I choose your company for Political Campaign Management?",
];

const Political = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <Navbar2 navLinks={navbaroptions} />
      <h1 className="bg-gradient-to-r from-[#d0e8ef] via-white to-[#fcd3bb] text-4xl text-center font-bold  pt-4 pb-4">
        Political Campaign Management Company
      </h1>
      <section1 className="text-center px-4 py-12 bg-gray-50">
        <h2 className="text-5xl max-w-9xl  md:text-3xl font-bold text-blue-950 mb-5 ml-10 mr-10 pl-55 pr-45">
          POWER YOUR POLITICAL MANAGEMENT CAMPAIGN IN INDIA WITH OUR EXPERT
          MANAGEMENT SERVICES
        </h2>

        <p className="text-blue-950  text-lg max-w-5xl mx-auto mb-6">
          <strong className="font-semibold">
            Political management campaigns
          </strong>{" "}
          are complex and require a lot of resources to be successful. That’s
          why it is important to have a reliable political campaign management
          company on your side. A political campaign management company can help
          you with everything from strategizing, budgeting, and organizing your
          events to developing effective messaging and advertising. They can
          also help you with data analysis, fundraising, and voter outreach.
          With the right political campaign management company on your side, you
          can ensure that your political campaign is successful and that you
          reach the desired outcome.
        </p>

        <p className="text-blue-950  text-lg max-w-5xl mx-auto mb-6">
          <strong className="font-semibold">Political campaign services</strong>{" "}
          are essential for any candidate who wants to win an election. They
          provide a wide range of services that are designed to help candidates
          reach their target audience, communicate their message effectively and
          mobilize their supporters. Whether you are running for local office or
          national office, political campaign services can help you to develop a
          winning campaign strategy and execute it effectively.
        </p>

        <img
          src="https://www.mediatechtemple.com/wp-content/uploads/2023/11/Voting-amico-400x400.png"
          alt="Voting illustration"
          className="mx-auto mb-10 w-2xl"
        />

        <h4 className="text-lg md:text-2xl font-semibold text-blue-950 mb-4">
          MAXIMIZE YOUR POLITICAL REACH WITH OUR STRATEGIC DIGITAL MARKETING
          SOLUTIONS
        </h4>

        <p className="text-blue-950 ml-10 mr-10 pl-2 pr-2 ">
          Digital marketing for politicians is a powerful tool that helps
          candidates connect and engage with their target audience. From social
          media advertising to search engine optimization and content marketing,
          there are a variety of digital marketing strategies that can be used
          to effectively promote a political campaign. By utilizing these tools,
          politicians can reach a wider audience, build a strong brand image,
          and ultimately increase their chances of success on election day. At
          our political campaign management company, we specialize in creating
          customized digital marketing solutions tailored to the unique needs of
          each candidate.
        </p>
      </section1>

      <section2 className="bg-white py-12 px-4">
        <h2 className="text-3xl md:text-3xl font-bold text-blue-950 text-center mt-7 mb-10 ">
          OUR SERVICES THAT HELPS IN YOUR POLITICAL CAMPAIGN
        </h2>

        <ul className="list-disc list-inside max-w-7xl mx-auto text-blue-950 text-lg ">
          <li>Bulk SMS</li>
          <li>Bulk Voice Call</li>
          <li>Survey Voice Call</li>
          <li>Bulk Whats App</li>
          <li>Facebook Management</li>
          <li>Instagram Management</li>
          <li>Twitter Management</li>
          <li>YouTube Management</li>
          <li>Instagram Reels</li>
          <li>Creative Designs</li>
          <li>Personal Call</li>
          <li>And Many More..</li>
        </ul>
      </section2>

      <section3 className="text-center text-lg">
        <h6 className="text-blue-950 font-semibold m-2 ml-25 mt-10 mr-15">
          Digital marketing has become an essential tool for politicians looking
          to connect with voters and build their brand. Here are some effective
          digital marketing strategies that politicians can use to reach their
          target audience:
        </h6>
        <ul className=" text-blue-950 list-disc items-start list-inside text-small ml-20 mr-20">
          <li>
            Social media marketing: Social media platforms like Facebook,
            Twitter, and Instagram are ideal for politicians to connect with
            voters and share their message. They can use social media to share
            updates, engage with voters, and even run targeted ads to reach
            specific groups of people
          </li>
          <li>
            Video marketing: Video marketing is a powerful way for politicians
            to connect with voters and share their message. They can use
            platforms like YouTube and Vimeo to create videos that showcase
            their personality, values, and vision for the future.
          </li>
          <li>
            Search engine optimization: Search engine optimization (SEO) is
            important for politicians who want to improve their online
            visibility and reach more voters. By optimizing their website and
            online content for search engines, they can increase their
            visibility and attract more traffic to their website.
          </li>
          <li>
            Mobile marketing: With more and more people using smartphones and
            mobile devices, politicians can use mobile marketing strategies like
            SMS marketing and mobile apps to connect with voters on-the-go.
          </li>
        </ul>

        <h5 className="text-blue-950 mt-20 font-semibold m-2 ml-15 mr-15">
          Political campaign services can help politicians to plan, execute and
          manage their election campaigns effectively. Some of the common
          services offered by political campaign services are:
        </h5>

        <ul className=" text-blue-950 list-disc items-start list-inside text-small ml-20 mr-20">
          <li>
            Campaign strategy and planning: This involves developing a
            comprehensive campaign strategy, setting goals and objectives,
            identifying target audience, and planning campaign activities.
          </li>
          <li>
            Fundraising: Political campaign services help politicians to raise
            funds for their campaigns by organizing fundraising events,
            developing donation campaigns, and providing guidance on how to
            raise money for campaigns.
          </li>
          <li>
            Voter targeting and data analysis: Political campaign services can
            help politicians to identify potential voters and create targeted
            messaging strategies to reach out to them. They can also provide
            data analysis services to help politicians understand their target
            audience better.
          </li>
          <li>
            Advertising and media planning: Political campaign services can help
            politicians to plan and execute advertising campaigns through
            digital marketing. They can also help to develop messaging
            strategies for political ads.
          </li>
        </ul>
      </section3>
      <section4 className="max-w-4xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold text-center mb-8">
          Frequently Asked Questions
        </h3>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border rounded-md p-4 ml-55 gap-4 cursor-pointer hover:bg-gray-50 transition"
              onClick={() => toggleFAQ(index)}
            >
              <button className="text-xl font-bold text-blue-600">
                {openIndex === index ? "−" : "+"}
              </button>
              <strong className="text-gray-800 text-left">{item}</strong>
            </div>
          ))}
        </div>
      </section4>
     <div className="flex justify-end px-4 py-8 mr-20 mt-10">
  <div className="w-full md:w-1/2">
    <Card className="shadow-lg boxi">
      <CardHeader className="text-xl font-semibold text-center">
        Drop Us a Line <br />
        Feel free to contact us anytime
      </CardHeader>

      <CardContent className="space-y-4">
        <Input placeholder="Your Name" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Phone" type="tel" />
        <Input placeholder="Website" />
        <Textarea placeholder="Your Message" rows={4} />
        <Button className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white">
          Send Message
        </Button>
      </CardContent>
    </Card>
  </div>
</div>

      <Footer />
    </div>
  );
};

export default Political;
