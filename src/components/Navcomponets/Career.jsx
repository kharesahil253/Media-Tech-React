import React from "react";
import Navbar2 from "./Navbar2";
import { navbaroptions } from "../Navbar";
import Footer from "../Footer";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const Career = () => {
  return (
    <div>
      <Navbar2 navLinks={navbaroptions} />
      <h1 className="bg-gradient-to-r from-[#d0e8ef] via-white to-[#fcd3bb] text-4xl text-center font-bold  pt-4 pb-4">
        Career
      </h1>
          <div className="flex w-full justify-between px-8 py-10 gap-12">
        {/* Left Section - Job Listings */}
        <div className="w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Latest Jobs</h2>

          <div className="space-y-2">
            <h4 className="text-lg font-medium text-blue-700">+ Telecaller</h4>
            <h4 className="text-lg font-medium text-blue-700">
              + Business Development Executive
            </h4>
          </div>

          <p className="text-gray-700 text-base leading-relaxed">
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

        {/* Right Section - Application Form */}
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
              <Button className="w-1/8 mt-4 bg-blue-600">Submit</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Career;
