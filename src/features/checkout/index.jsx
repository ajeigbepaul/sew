import React, { useState } from "react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaRegCircle } from "react-icons/fa";
import AddressItem from "../../components/AddressItem";
import AddressForm from "../../components/AddressForm";
function Checkout() {
  const navigate = useNavigate();
  const [showaddr, setShowAddr] = useState(false);
  return (
    <div className="w-full relative">
      <div className="w-full h-screen max-w-5xl mx-auto overflow-hidden flex items-start justify-between space-x-2 mt-0 ">
        <div className="flex items-start w-2/4 justify-between flex-col p-4 bg-white shadow-lg mt-10">
          <span className="font-semibold mb-5">
            Summary of items checking out
          </span>
          <div className="flex items-center w-full justify-between shadow-xl mb-5">
            <h2 className="w-full">Items</h2>
            <h2 className="w-[80%]">Price</h2>
            <h2 className="w-[80%] pl-0">Quantity</h2>
            <h2 className="w-[80%]">Total Price</h2>
          </div>
          <div className="flex items-center w-full justify-between mb-5">
            <div className="w-full flex space-x-2">
              <div className="w-14 h-14 object-cover rounded-md relative">
                <div className="w-4 h-4 absolute right-0 cursor-pointer object-cover rounded-full z-30 flex items-center justify-center bg-red-500">
                  {" "}
                  <FaTimes size={12} color="white" />
                </div>

                <img
                  src="/womenprint2.jpg"
                  alt="productdetails"
                  className="w-14 h-14 object-cover rounded-md"
                  width={500}
                  height={500}
                />
              </div>

              <div className="flex flex-col">
                <span>Womens Clothes</span>
                <span className="text-xs">Multi-color</span>
                <span className="text-xs">lg</span>
              </div>
            </div>
            <div className="w-[80%]">
              <span className="font-semibold">#325,000</span>
            </div>
            <div className="flex items-center w-[80%] space-x-2">
              {/* <div className="flex items-center justify-center w-8 h-8 bg-red-400 cursor-pointer">
                  <FaPlus />
                </div> */}
              <span className="font-semibold">1</span>
              {/* <div className="flex items-center justify-center w-8 h-8 bg-red-400 cursor-pointer">
                  <FaMinus />
                </div> */}
            </div>
            <div className="w-[80%]">
              <span className="font-semibold">#325,000</span>
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-200" />
        </div>
        <div className="w-1/4 mt-10">
          <div className="bg-orange-200 h-auto p-2">
            <h2>Delivery Address</h2>
            <button
              className="p-2 rounded-md mb-5 bg-red-400 text-white border-0 text-[12px]"
              onClick={() => setShowAddr(!showaddr)}
            >
              Add New Address
            </button>
            <div>
              <h2 className=" font-semibold text-[14px]">Address Book</h2>
              <span className="text-xs">Choose an address</span>
              <div className="flex items-center gap-4 border border-gray-500 p-2 rounded-md mb-4">
                <FaRegCircle size={24} />
                <span className="text-sm">
                  No 28, Alonge Street, Alimustapha, Ayobo, Lagos, Nigeria
                </span>
              </div>
              <AddressItem />
            </div>
          </div>
        </div>
        <div className="w-1/4 mt-10">
          <div className="bg-white flex flex-col p-4 border border-gray-100 shadow-md rounded-md">
            <h2 className="mb-5 font-semibold">Checkout Summary</h2>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm text-gray-500 font-semibold">Sub Total</h2>
              <h2 className="text-[16px] font-semibold">#325,000</h2>
            </div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm text-gray-500 font-semibold">discount</h2>
              <h2 className="text-[16px] font-medium">#25,000</h2>
            </div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm text-gray-500 font-semibold">
                Shipping fee
              </h2>
              <h2 className="text-[16px] font-medium">#25,000</h2>
            </div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm text-red-400 font-semibold">Total</h2>
              <h2 className="text-[18px] font-semibold text-red-400">
                #375,000
              </h2>
            </div>
            <div
              className="w-full p-2 rounded-md border border-gray-200 mb-3 items-center justify-center flex cursor-pointer hover:text-red-400 transition-all ease-in duration-75"
              onClick={() => navigate("/cart")}
            >
              Back to cart
            </div>
            <div
              className="w-full p-2 rounded-md bg-red-400 text-white items-center justify-center flex cursor-pointer hover:translate-y-2 transition-all ease-in duration-200"
              onClick={() => navigate("/checkout")}
            >
              Make Payment
            </div>
          </div>
        </div>
      </div>
      {showaddr && (
        <div className="w-full h-screen flex items-center justify-center bg-black/30 absolute top-0 z-30">
          <div className="w-[25%] h-auto bg-white rounded-md">
            <div className="w-full justify-between items-center flex p-2">
              <h2 className="font-semibold">My Address</h2>
              <FaTimes
                // color="black"
                size={18}
                onClick={() => setShowAddr(!showaddr)}
                className="cursor-pointer text-gray-600"
              />
            </div>
            <AddressForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
