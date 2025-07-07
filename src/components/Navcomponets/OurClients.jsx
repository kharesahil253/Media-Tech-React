import React from "react";
import Navbar2 from "./Navbar2";
import { navbaroptions } from "../Navbar";
import Footer from "../Footer";
import Whatsapp from "../Whatsapp";
const OurClients = () => {
  return (
    <div>
      <Whatsapp/>
      <Navbar2 navLinks={navbaroptions} />
      Our Clients are exploring day by day
      <Footer/>
    </div>
  );
};

export default OurClients;
