// import { Badge } from "@mui/icons-material";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
function Header() {
  const { auth } = useAuth();
  console.log(auth)
  const navigate = useNavigate();
  const logOut = async () => {
    localStorage.removeItem("token");
    console.log("Token cleared");
    toast.success("You have logged out")
    navigate("/login");
  };
  return (
    <div className="w-full bg-amber-200 py-2 z-40 top-0">
      <div className="w-full mx-auto  flex flex-col md:flex-row items-center justify-center md:justify-between ">
        <div className="flex items-center space-x-2 justify-center w-full md:w-1/4 ">
          <FaFacebook size={24} />
          <FaInstagram size={24} />
          <FaLinkedin size={24} />
          <FaTwitter size={24} />
        </div>
        <div className="flex flex-1  w-full md:w-2/4 items-center justify-center">
          <Link to={"/"}>
            <h2 className="text-lg font-bold text-gray-700">S E W i T</h2>
          </Link>
        </div>
        <div className="flex items-center justify-center w-full md:w-1/4 ">
          {auth ? (
            <>
              <div className="flex items-center justify-center space-x-2">
                <span>
                  {auth?.email?.substring(0, 5)}...{auth?.email?.slice(-3)}
                </span>

                {auth.image ? (
                  <img
                    src={auth?.image}
                    alt="profilepics"
                    width={20}
                    height={20}
                    className="w-8 h-8 rounded-full object-cover "
                  />
                ) : (
                  <img
                    src={"/profilepics.jpg"}
                    alt="profilepics"
                    width={20}
                    height={20}
                    className="w-8 h-8 rounded-full object-cover "
                  />
                )}

                <span
                  className="bg-slate-800 text-white rounded-md py-1 px-2 mx-2 cursor-pointer text-sm"
                  onClick={logOut}
                >
                  Logout
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center space-x-2">
                <span
                  onClick={() => navigate("/login")}
                  className="cursor-pointer"
                >
                  Sign-In
                </span>
                <img
                  src="/profilepics.jpg"
                  alt="profilepics"
                  width={20}
                  height={20}
                  className="w-8 h-8 rounded-full object-cover "
                />
                <FaUser size={24} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
