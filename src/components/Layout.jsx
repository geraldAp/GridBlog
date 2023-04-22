import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import CaContact from "./CaContact";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="m-auto w-[80%] md:w-[80%]">
      {children}
      </div>
      <CaContact/>
      <Footer />
    </div>
  );
};

export default Layout;
