import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import SideNav from "../components/SideNav";
import useAuth from "../../../hooks/useAuth";
import { jwtDecode } from "jwt-decode";
import { Outlet } from "react-router-dom";
function Layout({ children }) {
    const { setAuth } = useAuth();
    // userId
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const decodedToken = jwtDecode(token);
        // console.log("Decoded Token:", decodedToken);
        const userId = decodedToken?.userId;
        const email = decodedToken?.email;
        const roles = decodedToken?.roles;
        // console.log(userId);
        setAuth({ userId, email, roles });
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      fetchUser();
    }, []);
  return (
    <div className="bg-[#f5f5f5] h-screen overflow-x-hidden w-screen">
      <div className="relative h-full">
        <Header />
        <div className="flex h-full">
          <SideNav />
          <main className="flex-1 bg-gray-50 p-4"><Outlet /></main>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
