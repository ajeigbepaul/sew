import React from "react";
const Tabs = [""];
import { GiShoppingBag } from "react-icons/gi";
import { IoBagCheckSharp } from "react-icons/io5";
import { Badge } from "@mui/material";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
function Staff() {
  return (
    <div className="w-screen h-screen bg-orange-200">
      <div className="max-w-5xl mx-auto bg-white rounded-md text-gray-600 flex items-center gap-2">
        <div className="w-1/4 bg-gray-700 h-screen flex items-start">
          <div className="w-full flex flex-col items-center justify-center p-4">
            {/* <h2 className="text-2xl text-red-200 font-semibold mb-5">
              My Profile
            </h2> */}
            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white">
              <img
                src="/profilepics.jpg"
                alt="profile"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col text-white items-center justify-center">
              <h2 className="text-3xl text-red-300 font-semibold">
                Ajeigbe Paul
              </h2>
              <div className="w-full h-[1px] bg-gray-100" />
              <h2 className="text-[14px] text-gray-200">
                ajeigbepaul@gmail.com
              </h2>
              <h2 className="text-[14px] text-gray-200">+234-8104560227</h2>
              <h2 className="text-[14px] text-gray-200">Fashion Designer</h2>
              <h2 className="text-[14px] text-gray-200">Mens Outfit</h2>
            </div>
            <div className="w-full p-2 flex items-center justify-center mt-5 flex-col">
              <div className="mb-2 flex items-center w-fit">
                <div className="bg-white p-2 rounded-l-md rounded-bl-md cursor-pointer hover:bg-orange-400 hover:text-white transition ease-in duration-700 ">
                  <h2 className="flex items-center justify-center">Orders</h2>
                </div>
                <div className="bg-white w-10 h-10 ml-2 flex items-center justify-center rounded-r-md rounded-br-md">
                  {" "}
                  <Badge badgeContent={4}>
                    <GiShoppingBag size={24} color="orange" />
                  </Badge>
                </div>
              </div>
              <div className="mb-2 flex items-center w-fit  ">
                <div className="bg-white p-2 rounded-l-md rounded-bl-md cursor-pointer hover:bg-orange-400 hover:text-white transition ease-in duration-700 ">
                  <h2 className="flex items-center justify-center">
                    Notification
                  </h2>
                </div>
                <div className="bg-white w-10 h-10 ml-2 flex items-center justify-center rounded-r-md rounded-br-md">
                  {" "}
                  <Badge badgeContent={4}>
                    <FaRegBell size={24} color="orange" />
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4 h-screen flex flex-col">
          <div className="flex items-center justify-between p-4">
            <div className="flex w-48 p-4 items-center justify-center flex-col bg-orange-300 rounded-lg">
              <div className="flex items-center justify-center space-x-2">
                <h2 className="font-semibold text-white">Orders</h2>
                <GiShoppingBag size={24} />
              </div>

              <span className="text-3xl font-bold text-gray-100">10</span>
            </div>
            <div className="w-52 p-4 flex items-center justify-center flex-col bg-blue-300 rounded-lg">
              <div className="flex items-center justify-center  space-x-2">
                <h2 className="font-semibold text-white">Done succesfully</h2>
                <IoBagCheckSharp size={24} />
              </div>

              <span className="text-3xl font-bold text-gray-100">10</span>
            </div>

            <div className="flex items-center justify-center flex-col w-48 p-4 bg-gray-100 rounded-lg">
              <div className="flex items-center justify-center space-x-2">
                <h2 className="font-semibold text-red-400">Rejected</h2>
                < MdOutlineCancel  size={24} />
              </div>
              <span className="text-3xl font-bold text-red-400">10</span>
            </div>
          </div>
          <div className="p-4">
            <h2>Incoming Orders</h2>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staff;
