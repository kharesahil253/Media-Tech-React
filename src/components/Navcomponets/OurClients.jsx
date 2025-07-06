import React from "react";
import Navbar2 from "./Navbar2";
import { navbaroptions } from "../Navbar";
import Footer from "../Footer";
const OurClients = () => {
  return (
    <div>
      <Navbar2 navLinks={navbaroptions} />
      Our Clients are exploring day by day
      <Footer/>
    </div>
  );
};

export default OurClients;
