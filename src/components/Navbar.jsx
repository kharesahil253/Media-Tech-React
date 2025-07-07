import { Link } from "react-router-dom";
import { RiArrowDownSFill } from "@remixicon/react";
import { Menu } from "lucide-react";
import Boxing from "./Navcomponets/Boxing";
import { useState } from "react";
import NavDropDown from "./NavDropDown";
export const navbaroptions = [
  { link: "home", text: "Home" },
  { link: "about", text: "About Us" },
  {
    link: "product&services",
    text: (
      <>
        Product & Services
        <RiArrowDownSFill size={16} className="inline ml-1" />
      </>
    ),
    dropdown: [
      {
        text: (
          <>
            Marketing & Advertisement
            <RiArrowDownSFill size={16} className="inline " />
          </>
        ),
        subdropdown: [
          { link: "bulksms", text: "Bulk SMS Marketing" },
          { link: "voicecall", text: "Voice Call Services" },
          { link: "whatsapp", text: "Bulk WhatsApp Marketing" },
          { link: "seo", text: "Search Engine Optimization (SEO)" },
          { link: "smo", text: "Social Media Optimization" },
          { link: "ppc", text: "Best PPC Advertising" },
          { link: "digital", text: "Digital Marketing Services" },
          { link: "political", text: "Political Campaign Management" },
        ],
      },
      {
        text: (
          <>
            Design & Development{" "}
            <RiArrowDownSFill size={16} className="inline ml-1" />
          </>
        ),
        subdropdown: [{ link: "webdev", text: "Website Development" }],
      },
      {
        text: (
          <>
            Data Tools
            <RiArrowDownSFill size={16} className="inline " />
          </>
        ),
        subdropdown: [
          { link: "dataextractor", text: "Data Extractor" },
          { link: "googlemap", text: "Google Map Extractor" },
        ],
      },
      { link: "callcenter", text: "Call Center" },
      {
        text: (
          <>
            Software Management System
            <RiArrowDownSFill size={16} className="inline " />
          </>
        ),
        subdropdown: [
          { link: "transport", text: "Transport Management System" },
          { link: "account", text: "Account Management Software" },
        ],
      },
    ],
  },
  { link: "ourventures", text: "Our Ventures" },
  { link: "clients", text: "Clients" },
  { link: "career", text: "Career" },
  { link: "contactus", text: "Contact Us" },
];

const Navbar = () => {
  const [showbox, setshowbox] = useState(false);
  // const menuRef = useRef(null);
  const sbox = () => {
    setshowbox((prev) => !prev);
  };

  //   const handleClickOutside = (event) => {
  //     if (
  //       boxRef.current &&
  //       !boxRef.current.contains(event.target) &&
  //       menuRef.current &&
  //       !menuRef.current.contains(event.target)
  //     ) {
  //       setshowbox(false);
  //     }
  //   };

  //   window.addEventListener("click", handleClickOutside);
  //   return () => window.removeEventListener("click", handleClickOutside);
  // }, []);
  return (
    <nav className="w-full p-4 bg-white shadow-md fixed top-0 left-0 z-50">
      <div
        className={`absolute right-0 top-0 transition-opacity duration-300 ${
          showbox
            ? "opacity-100"
            : "opacity-0 pointer-events-none transition left-box"
        }`}
      >
        <Boxing />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-3 md:mb-0">
          <img
            src="https://www.mediatechtemple.com/wp-content/uploads/2023/09/mtt-5-1.png"
            alt="Media Tech Temple"
            className="h-10 w-auto"
          />
        </div>

        <div className="flex md:justify-start gap-6 font-bold text-gray-700 mr-25">
          {navbaroptions.map((item) =>
            item.dropdown ? (
              <NavDropDown item={item} />
            ) : (
              <Link
                key={item.link}
                to={`/${item.link}`}
                className="hover:text-indigo-600 transition-colors"
              >
                {item.text}
              </Link>
            )
          )}
        </div>

        <div className="flex items-centre justify-end gap-3 mt-3 ml-10 md:mt-0">
          <h4 className="text-sm font-semibold text-blue-700">
            Call Us: 7220867768
          </h4>
          <Menu className="text-black " onClick={sbox} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
