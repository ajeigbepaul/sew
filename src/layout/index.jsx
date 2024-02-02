import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { jwtDecode } from "jwt-decode";
import useAuth from "../hooks/useAuth";
function Layout() {
  const { setAuth } = useAuth();
// userId
const fetchUser = async () => {
  try {
    const token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token);
    console.log("Decoded Token:", decodedToken);
    const userId = decodedToken?.userId;
    const email = decodedToken?.email;
    const roles = decodedToken?.roles;
    console.log(userId);
    setAuth({ userId, email, roles });
  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  fetchUser();
}, []);
  return (
    <div className="bg-[#f5f5f5] w-full">
      <div className="relative w-screen h-full">
        <div className="w-full h-screen overflow-x-hidden">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
