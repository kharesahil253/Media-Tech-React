import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  GamepadIcon
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 px-6 md:px-20 py-12 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr_0.9fr] gap-4">
        <div className="ml-[29px]">
          <img
            className="h-10 mb-3"
            src="https://www.mediatechtemple.com/wp-content/uploads/2023/09/mtt-5-1.png"
            alt="MediaTechTemple Logo"
          />
          <p className="text-sm text-gray-600 mb-4 font-semibold">
            MediaTechTemple, technology driving company which focusing on
            traditional as well as Innovation solutions.
          </p>

          <div className="flex gap-4 mb-6">
            <Facebook className="w-5 h-5 text-purple-600 hover:text-purple-800 cursor-pointer" />
            <Instagram className="w-5 h-5 text-purple-600 hover:text-purple-800 cursor-pointer" />
            <Linkedin className="w-5 h-5 text-purple-600 hover:text-purple-800 cursor-pointer" />
            <GamepadIcon className="w-5 h-5 text-purple-600 hover:text-purple-800 cursor-pointer"/>
          </div>

          <div className="flex items-start gap-2 text-sm mb-2 font-semibold">
            <Phone className="text-purple-600 w-4 h-4 mt-1" />
            <p>+91-7220867768</p>
          </div>
          <div className="flex items-start gap-2 text-sm mb-2 font-semibold">
            <Mail className="text-purple-600 w-4 h-4 mt-1" />
            <p>info@mediatechtemple.com</p>
          </div>
          <div className="flex items-start gap-2 text-sm font-semibold">
            <MapPin className="text-purple-600 w-4 h-4 mt-1" />
            <p>
              57, SWRAN JAYANTI NAGAR, BHARATPUR, Bharatpur,
              <br />
              Rajasthan 321001
            </p>
          </div>
        </div>

        <div className="mt-2 ml-50">
          <h4 className="text-2xl font-bold text-blue-950 mb-5">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm font-bold">
            <li>Home</li>
            <li>About Us</li>
            <li>Product & Services</li>
            <li>Our Ventures</li>
            <li>Clients</li>
            <li>Blogs</li>
            <li>Career</li>
            <li>Photo Gallery</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="mt-2 ml-20">
          <h4 className="text-2xl font-bold text-blue-950 mb-5">
            Legal Policies
          </h4>
          <ul className="space-y-2  font-bold text-sm">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
            <li>Website Acceptable Use Policy</li>
            <li>Downloads</li>
          </ul>
        </div>
      </div>
      <h6 className=" align-text-bottom ml-15 mt-10">© 2023 — Media Tech Temple. All Rights Reserved.</h6>
    </footer>
  );
};
 
export default Footer;
