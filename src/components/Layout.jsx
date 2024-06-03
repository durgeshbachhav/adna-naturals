import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="">
      <Navbar />
      <div className="pt-[100px]">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
