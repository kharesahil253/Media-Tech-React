import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z
    .string()
    .regex(/^\d{10}$/, "Phone must be 10 digits")
    .optional()
    .or(z.literal("")),
  query: z.string().min(1, "Query is required"),
});

const Tag = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors(fieldErrors);
    } else {
      setErrors({});
      setFormData({ name: "", email: "", phone: "", query: "" });
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen contact px-4">
      <Card className="w-full max-w-2xl rounded-xl shadow-lg p-6 bg-white h-80">
        <CardHeader className="text-center">
          <CardTitle className="text-xs font-bold text-gray-800 uppercase">
            Contact Us
          </CardTitle>
          <CardDescription className="text-2xl font-semibold text-blue-950">
            Feel Free to Contact Us
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4"
            onSubmit={handleSubmit}
          >
            <div>
              <Input
                name="name"
                placeholder="Your Name*"
                value={formData.name}
                onChange={handleChange}
                className="border-b-violet-700"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name[0]}</p>
              )}
            </div>

            <div>
              <Input
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="border-b-violet-700"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>
              )}
            </div>

            <div>
              <Input
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                 className="border-b-violet-700"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone[0]}</p>
              )}
            </div>

            <div>
              <Input
                name="query"
                placeholder="Type your Query*"
                value={formData.query}
                onChange={handleChange}
                className="border-b-violet-700"
              />
              {errors.query && (
                <p className="text-red-500 text-sm mt-1">{errors.query[0]}</p>
              )}
            </div>

            <div className="sm:col-span-2 flex justify-center mt-4">
              <Button
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-6  py-2 rounded-md hover:opacity-90"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default Tag;
