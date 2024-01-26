import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Layout() {
  return (
    <div className="bg-[#f5f5f5] w-full">
      <div className="relative w-screen h-full">
        <div className="w-full h-screen">
          <Header />
          <Outlet />
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Layout;
