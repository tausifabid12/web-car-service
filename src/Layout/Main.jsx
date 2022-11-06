import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../SharedComponents/Footer";
import Navbar from "../SharedComponents/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
