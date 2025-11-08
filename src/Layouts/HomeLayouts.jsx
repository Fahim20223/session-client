import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

const HomeLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default HomeLayouts;
