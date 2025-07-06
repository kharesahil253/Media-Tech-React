import React from "react";
import Navbar2 from "../Navcomponets/Navbar2";
import { navbaroptions } from "../Navbar";
import Footer from "../Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  return (
    <div className="">
      <Navbar2 navLinks={navbaroptions} />
      <h1 className="bg-gradient-to-r from-[#d0e8ef] via-white to-[#fcd3bb] text-4xl text-center font-bold  pt-4 pb-4">
        Digital Marketing Services In India
      </h1>
      <section1 className="flex">
        <img
          className="w-2xl ml-10 mr-10"
          src="https://www.mediatechtemple.com/wp-content/uploads/2024/11/Best-Digital-marketing-Agency.webp"
          alt=""
        />
        <div>
          <p>
            <b>Digital marketing services </b>also known as
            <b>internet marketing services,</b> is the advertise business
            through internet and other types of digital communication.
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
            services
          </p>
        </div>
      </section1>
      <section2>
        <div>
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            TO CREATE EFFECTIVE MARKETING CAMPAIGNS AND ENGAGE WITH THEIR TARGET
            MARKET, WE CAN USE THE 5 R’S OF DIGITAL MARKETING.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {datacon.map((item, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br  from-[#f0f9ff] to-[#fff7ed]"
              >
                <CardHeader>
                  <CardTitle className="bg-orange-600 text-white">
                    {item.head}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section2>
      <section3>
        <h3 className="font-boldbold">
          DIGITAL MARKETING SERVICES IN INDIA PROVIDE BY US
        </h3>
        <div>
          <h6>SEM(Search Engine Marketing)</h6>
          <p>
            Through the use of paid search engine advertising, SEM assists
            businesses in attracting customers’ attention to their goods and
            services. Using the SEM method, businesses purchase targeted ad
            space at the top of search engine result pages.
          </p>
          <h6>SMM(Social Media Marketing)</h6>
          <p>
            In order to develop a company’s brand, boost sales, and enhance
            website traffic, social media marketing (SMM) makes advantage of the
            platforms where people may create social networks and share
            information. Data analytics specifically designed for social media
            marketing (SMM) enable marketers to monitor the effectiveness of
            their initiatives and find further engagement opportunities.
          </p>
          <h6>Affiliate Marketing</h6>
          <p>
            An affiliate can make money by promoting the goods of another
            individual or business by using affiliate marketing. The affiliate
            merely looks for a product they are interested in, promotes it, and
            receives a cut of the revenue from each transaction. Through
            affiliate connections from one website to another, the sales are
            monitored.
            <br />
            Affiliate marketing utilises the skills of a range of people for a
            more successful marketing plan while giving contributors a piece of
            the profit since it works by dividing the responsibility of product
            promotion and creation between parties.
            <p> Three parties must cooperate for this to succeed:</p>
            <ul>
              <li>Creators and sellers of the goods.</li>
              <li>the advertiser or affiliate.</li>
              <li>the buyer.</li>
            </ul>
          </p>
          <p>
            If you have just started your business or have an established
            business, then digital marketing is the only way to accomplish your
            goals. You can choose us as we offer Digital marketing and help take
            your business to the next level.
          </p>
        </div>
      </section3>
      <section4>
        <h2>DIGITAL MARKETING HELPS:</h2>
        <div>
          <img
            src="https://www.mediatechtemple.com/wp-content/uploads/2024/11/Digital-Marketing-Customer-Help.webp"
            alt=""
          />
          <ul>
            <li>– Drive traffic to your website, store or profile</li>
            <li>– Convert visitors to your permanent customers</li>
            <li>– Enhance online presence</li>
            <li>– Deliver conversation</li>
            <li>– Generate better revenues</li>
            <li>- Facilitate interaction with target audience</li>
            <li>- Build brand reputation</li>
            <li>- Offer better ROI on your investments</li>
            <li>- Earn trust of people</li>
            <li>- Make sure business survival online</li>
          </ul>
        </div>
      </section4>
      <section5>
        <h3>GOOGLE MY BUSINESS REGISTRATION & OPTIMIZATION</h3>
        <ul>
          <li>Google Map Registration</li>
          <li>Google My Business Registration</li>
          <li>Service Input</li>
          <li>Area Input</li>
          <li>Listing Optimization</li>
        </ul>
      </section5>
      <section6>
        <div1>
          <img
            src="https://www.mediatechtemple.com/wp-content/uploads/2024/11/Social-media-Marketing-Services.webp"
            alt=""
          />
          <h4>SOCIAL MEDIA MARKETING</h4>
          <p>
            {" "}
            We have best team of experts to promote your business using Social
            media channels. There are so many social networking sites that have
            become so much popular. We never leave any stone unturned and keep
            trying to make connection with your target audience.
          </p>
        </div1>
        <div2>
          <img
            src="https://www.mediatechtemple.com/wp-content/uploads/2024/11/Pay-Per-Click-PPC-Marketing-Services.webp"
            alt=""
          />
          <h4>PAY PER CLICK (PPC)</h4>
          <p>
            We use pay-per-click options or paid advisement options to make your
            brand popular. You have to pay for each click on your ads. The most
            popular platform for social media ads is Google Ads, Google &
            Associate Ads, Facebook Ads, Instagram Ads, Facebook & Associate
            Ads, and many more platforms which are emerging.
          </p>
        </div2>
      </section6>
      <section7>
        <h3>CONTENT MARKETING</h3>
        <p>
          We use all possible content marketing channels to circulate
          information about the business/brand. People will easily find you
          online and talk about you.
          <br />
          What makes us different from others?
        </p>
        <p>
          There are so many reasons to choose our team or give us a chance to
          serve you and some of them we have listed below:
          <ul>
            <li>
              We have team of trained and experienced digital marketing
              executives who understand each and every business.
            </li>
            <li>Our services are cost effective.</li>
            <li>We are open for communication and suggestions.</li>
            <li>We are committed to offer quality results.</li>
            <li>We have satisfied clients.</li>
          </ul>
        </p>
        <p>
          Stay in touch with us!
          <br />
          If you have been looking for the best digital marketing company, then
          look no further than our services. We are ready to serve you.
        </p>
      </section7>
      <Footer />
    </div>
  );
};

export default Digital;
