import React, { useState, useRef, useEffect } from "react";
import Navbar2 from "./Navbar2";
import { navbaroptions } from "../Navbar";
import Footer from "../Footer";
import { Card, CardHeader, CardContent } from "../ui/card";
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

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    query: "",
  });

  const [errors, setErrors] = useState({});
  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

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
        Contact Us
      </h1>

      {/* Intro Section */}
      <div className="text-center px-4 md:px-0 max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl font-bold mb-2">
          Find the Perfect Solution for Your Business
        </h2>
        <p className="text-gray-600 text-base">
          The world of e-commerce gives its very own set of challenges and
          possibilities. Media Tech Temple assists e-trade agencies in
          optimizing their online stores for maximum visibility and conversions.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-center gap-8 px-4 md:px-20 mb-16">
        {/* Contact Info */}
        <div className="md:w-1/2 space-y-4 text-sm leading-relaxed">
          <h3 className="text-xl font-semibold mb-2">Reach Us At:</h3>
          <p>
            <strong>General Enquiry:</strong> +91-7220867768
          </p>
          <p>
            <strong>HR & Recruitment:</strong> +91-7428646593, +91-9950377433
          </p>
          <p>
            <strong>Sales & Ads:</strong> +91-9521144331, +91-8094040222,
            +91-8094740999
          </p>
          <p>
            <strong>Social Media & Digital Marketing:</strong> +91-7665579562,
            +91-9982671017
          </p>
          <p>
            <strong>Web Development:</strong> +91-8094740888
          </p>
          <p>
            <strong>Call Centre:</strong> +91-8290819406
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@mediatechtemple.com"
              className="text-blue-600 underline"
            >
              info@mediatechtemple.com
            </a>
          </p>
          <p>
            <strong>Address:</strong> Petrol Pump, 57, behind Kali Ki Bagichi,
            Swarn Jayanti Nagar, Jawahar Nagar, Bharatpur, Rajasthan 321001
          </p>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2">
          <Card className="bg-purple-100 p-8 rounded-lg shadow-lg drop">
            <CardHeader className="text-center mb-4">
              <h2 className="text-2xl font-bold text-grey-900">
                Drop Us a Line
              </h2>
              <p className="text-grey-700 mt-1">
                Feel free to contact us anytime
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              <form className="mt-5" onSubmit={handleSub}>
                <div className="m-3">
                  <Input
                    ref={nameRef}
                    name="name"
                    value={formData.name}
                    placeholder="Your Name"
                    onChange={handleChange}
                    className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
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
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
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
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
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
                    className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                  {errors.website && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.website[0]}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <Textarea
                    name="query"
                    placeholder="Your Message"
                    rows={4}
                    value={formData.query}
                    onChange={handleChange}
                    className="w-full p-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                  {errors.query && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.query[0]}
                    </p>
                  )}
                </div>

                <Button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white py-2 px-6 rounded hover:opacity-90">
                  SEND MESSAGE
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
