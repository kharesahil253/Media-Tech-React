import React from "react";
import { Link } from "react-router-dom";
const NavDropDown = ({ item }) => {
  return (
    <div className="relative group">
      <span className="cursor-pointer text-gray-700 font-bold hover:text-indigo-600">
        {item.text}
      </span>
      <div className="absolute top-full left-0 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50 min-w-[250px]">
        {item.dropdown.map((drop, indec) => (
          <div key={indec} className="relative group/item">
            {drop.subdropdown ? (
              <>
                <div className="px-4 py-2 font-medium text-gray-800 hover:bg-gray-100 cursor-default">
                  {drop.text}
                </div>
                <div className="absolute top-0 left-full bg-white shadow-lg rounded-md opacity-0 group-hover/item:opacity-100 invisible group-hover/item:visible transition-all duration-300 z-50 min-w-[220px]">
                  {drop.subdropdown.map((sub, index) => (
                    <Link
                      key={index}
                      to={`/${sub.link}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
                    >
                      {sub.text}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link
                to={`/${drop.link}`}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100"
              >
                {drop.text}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavDropDown;
