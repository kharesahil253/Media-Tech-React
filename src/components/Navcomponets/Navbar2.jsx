
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import Boxing from "./Boxing";
import { useState } from "react";
import NavDropDown from "../NavDropDown";
const Navbar2 = ({ navLinks }) => {
   const [showbox, setshowbox] = useState(false);
     const sbox = () => {
    setshowbox((prev) => !prev);
  };
  return (
    <>
    <nav className="bg-gradient-to-r from-[#d0e8ef] via-white to-[#fcd3bb] py-4 shadow-md w-full  sticky top-0">
      <div
        className={`absolute right-0 top-0 transition-opacity duration-300 ${
          showbox
            ? "opacity-100"
            : "opacity-0 pointer-events-none transition left-box"
        }`}
      >
        <Boxing />
      </div>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <img
          src="https://www.mediatechtemple.com/wp-content/uploads/2023/09/mtt-5-1.png"
          alt="logo"
          className="h-15 mr-20"
        />

        {/* Navbar*/}
        <ul className="hidden  ml-25 md:flex items-center gap-6 font-bold text-black text-medium">
          {navLinks.map((item, index) => (
             item.dropdown ? (
              <NavDropDown  item={item} />
            ) :
            <li key={index}>
              <Link
                to={`/${item.link}`}
                className="hover:text-orange-500 transition-colors duration-200"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4 ml-2">
          <Button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold text-xs  px-5">
            LOGIN
          </Button>
          <Menu className="text-black " onClick={sbox} />
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar2;