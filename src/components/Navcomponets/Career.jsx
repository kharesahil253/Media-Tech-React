import React, { useState } from "react";
import Navbar2 from "./Navbar2";
import { navbaroptions } from "../Navbar";
import Footer from "../Footer";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Whatsapp from "../Whatsapp";
const Career = () => {
  const [sttext, showtext] = useState("");
  const showcont = (content) => {
    showtext((prev) => (prev == content ? "" : content));
  };
  return (
    <div>
      <Whatsapp/>
      <Navbar2 navLinks={navbaroptions} />
      <h1 className="bg-gradient-to-r from-[#d0e8ef] via-white to-[#fcd3bb] text-4xl text-center font-bold  pt-4 pb-4">
        Career
      </h1>
      <div className="flex w-full justify-between px-8 py-10 gap-13">
        <div className="w-1/2 space-y-6 ml-20">
          <h2 className="text-3xl font-bold text-blue-950">Latest Jobs</h2>

          <div className="space-y-2">
            <div>
              <h4
                onClick={() => showcont("tele")}
                className="text-lg font-bold text-gray-700 mb-3 border-b-2"
              >
                + Telecaller
              </h4>
              {sttext === "tele" && (
                <div className="ml-4 text-gray-700 space-y-1">
                  <p>
                    <b>Experience:</b> 0-3 Years
                  </p>
                  <p>
                    <b>Qualification: </b>Graduated
                  </p>
                  <p>
                    <b>Required Skills:</b> Should have Good Communication
                    Skills, and Basic Computer Knowledge
                  </p>
                </div>
              )}
            </div>
            <div>
              <h4
                onClick={() => showcont("buisness")}
                className="text-lg font-bold text-gray-700 border-b-2 "
              >
                + Business Development Executive
              </h4>
              {sttext === "buisness" && (
                <div className="ml-4 text-gray-800 space-y-1">
                  <p>
                    {" "}
                    We are looking for an organised and experienced Business
                    Development Executive.
                  </p>

                  <h4>Roles & Responsibilities:</h4>
                  <p>
                    • Identifying, qualifying, and securing business
                    opportunities; coordinating business generation activities;
                    developing customized targeted sales strategies
                    <br />
                    • Building business relationships with current and potential
                    clients
                    <br />
                    • Understanding client needs and offering solutions and
                    support; answering potential client questions and follow-up
                    call questions; responding to client requests for proposals
                    (RFPs)
                    <br />
                    • Collaborating with sales and leadership to secure, retain,
                    and grow accounts
                    <br />
                    • Creating informative presentations; presenting and
                    delivering information to potential clients at client
                    meetings, industry exhibits, trade shows, and conferences
                    <br />
                    • Creating and maintaining a list/database of prospect
                    clients; maintaining a database (Salesforce, CRM, Excel,
                    etc.) of prospective client information
                    <br />
                    • Cold calling; making multiple outbound calls to potential
                    clients; closing sales and working with the client through
                    the closing process
                    <br />
                    • Meeting all quotas for cold, active, inactive calls,
                    appointments, and interviews; meeting or exceeding annual
                    sales goals
                    <br />
                    • Maintaining a pipeline of all sales administration using
                    CRM software
                    <br />• Collaborating with management on sales goals,
                    planning, and forecasting; maintaining short- and long-term
                    business development plans
                  </p>
                  <h4 className="mt-2">Required Skills:</h4>
                  <p>
                    • Proven work experience as a Business Development Executive
                    for 1 – 3 yrs.
                    <br />
                    • Relevant experience with B2B sales sales role in
                    International Market in IT / Services industry Consultative
                    sales skills with solution pitching to senior stake holders
                    <br />
                    • Excellent communication skills (Verbal and Written)
                    <br />
                    • Result driven/proactive who has passion for BD.
                    <br />
                    • Excellent verbal and written communication skills; the
                    ability to call, connect, and interact with potential
                    customers
                    <br />
                    Nice to Have
                    <br />
                    • MBA/PGDM in Marketing/BBA
                    <br />• Strong computer skills, including Microsoft Office
                    Suite (Word, PowerPoint, Outlook, and Excel) and
                    CRM/Salesforce experience preferred
                  </p>
                  <h4>Salary</h4>
                  <p>• 1.20LPA-1.80LPA +Incentive + Parks</p>
                </div>
              )}
            </div>
          </div>

          <p className="text-orange-600  font-bold text-base leading-relaxed">
            <span className="block">
              Recruitment Team: +91-7428646593, +91-9950377433
            </span>
            <span className="block">
              Recruitment Email:{" "}
              <a
                href="mailto:recruitment@mediatechtemple.com"
                className="text-blue-600 underline"
              >
                recruitment@mediatechtemple.com
              </a>
            </span>
          </p>
        </div>

        <div className="w-1/2 space-y-6 appli">
          <h2 className="text-2xl font-semibold text-gray-800">
            Apply From Here
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <Input placeholder="Enter your name" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <Input type="email" placeholder="Enter your email" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Applied For
              </label>
              <Input placeholder="Job title you're applying for" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Mobile Number
              </label>
              <Input type="tel" placeholder="Enter your mobile number" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Experience
              </label>
              <Input placeholder="e.g. 2 years in sales" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Your CV
              </label>
              <div className="flex items-center gap-4">
                <Button variant="outline">Choose File</Button>
                <span className="text-sm text-gray-500">No file chosen</span>
              </div>
            </div>

            <div>
              <Button className="w-1/8 mt-4 to-blue-800">Submit</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Career;
