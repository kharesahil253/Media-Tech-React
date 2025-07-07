import React from "react";
import Navbar2 from "./Navbar2";
import { navbaroptions } from "../Navbar";
import Footer from "../Footer";
import Whatsapp from "../Whatsapp";

const About = () => {
  // const content = [
  //   {
  //     symbol:
  //       "https://www.mediatechtemple.com/wp-content/uploads/2019/07/chek_b.png",
  //     head: "OUR MISSION",
  //     text: "The idea of using technology to empower and simplify our lives is one of the core values that inspire minds to come up with new ways of improving our society by leveraging technology for personal development as well as for society at large.",
  //   },
  //   {
  //     symbol:
  //       "https://www.mediatechtemple.com/wp-content/uploads/2019/07/chek_o.png",
  //     head: "OUR VISION",
  //     text: "To develop as next-generation services organization with a deep focus on development, analytics, market intelligence and advertisement through support and innovation that all uniquely delivered by professionals.",
  //   },
  //   {
  //     symbol:
  //       "https://www.mediatechtemple.com/wp-content/uploads/2019/07/chek_g.png",
  //     head: "MEET OUR TEAM",
  //     text: "A blend of veteran professional with enthusiastic young professional are exploring new horizon, building new bridges and ladder with their creative ideas to generate best solutions. We are start by an idea of providing best and innovative solution to small and mid-level enterprises and organizations. “Here each people are work with sense of ownership and customer centric.”",
  //   },
  // ];
  return (
    <>
    <Whatsapp/>
      <Navbar2 navLinks={navbaroptions} />
      <h1 className="bg-gradient-to-r from-[#d0e8ef] via-white to-[#fcd3bb] text-4xl text-center font-bold  pt-4 pb-4">
        About Us
      </h1>
      <section className="bg-white text-gray-800 px-6 py-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-blue-950">Who We Are</h2>
            <p className="text-blue-950 semi-bold">
              MediaTechTemple, technology driving company which focusing on
              traditional as well as Innovation solutions. We are providing
              integrated solutions as most beneficial for our client. We are
              focusing on <b>IT Solutions, Marketing Solutions, Tele Solutions and
              Advertisement.</b> We provide customized <b>products and solutions</b> to
              meet your goals. At Media Tech Temple, we believe that our
              partnership led service approach, addresses the critical
              components that ensure a long-term successful strategy for our
              clients.
            </p>
          </div>
          <div>
            <img
              src="https://www.mediatechtemple.com/wp-content/uploads/2023/10/shutterstock_93821116.jpg"
              alt="Team"
              className="rounded-xl shadow-md w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center md:justify-end">
            <img
              src="https://www.mediatechtemple.com/wp-content/uploads/2019/09/home_img-03.png"
              alt=""
              className="w-full max-w-lg"
            />
          </div>
          <div className="space-y-8">
            <div className="flex items-start gap-4 bg-white border border-gray-200 shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://www.mediatechtemple.com/wp-content/uploads/2019/07/chek_b.png"
                alt="mission"
                className="w-10 h-10 mt-1"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  OUR MISSION
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The idea of using technology to empower and simplify our lives
                  is one of the core values that inspire minds to come up with
                  new ways of improving our society by leveraging technology for
                  personal development as well as for society at large.
                </p>
              </div>
            </div>

            {/* OUR VISION */}
            <div className="flex items-start gap-4 bg-white border border-gray-200 shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://www.mediatechtemple.com/wp-content/uploads/2019/07/chek_o.png"
                alt="vision"
                className="w-10 h-10 mt-1"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  OUR VISION
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To develop as next-generation services organization with a
                  deep focus on development, analytics, market intelligence and
                  advertisement through support and innovation that all uniquely
                  delivered by professionals.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white border border-gray-200 shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <img
                src="https://www.mediatechtemple.com/wp-content/uploads/2019/07/chek_g.png"
                alt="team"
                className="w-10 h-10 mt-1"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  MEET OUR TEAM
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A blend of veteran professional with enthusiastic young
                  professional are exploring new horizon, building new bridges
                  and ladder with their creative ideas to generate best
                  solutions. We are start by an idea of providing best and
                  innovative solution to small and mid-level enterprises and
                  organizations. “Here each people are work with sense of
                  ownership and customer centric.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
