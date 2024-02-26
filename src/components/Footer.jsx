import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full h-auto flex justify-evenly bg-white ">
      <div className="w-full max-w-5xl mx-auto flex justify-evenly p-4">
        <div className="w-1/4 flex flex-col">
          {/* Logo here */}
          <h2 className="font-semibold">S E W I T</h2>
          <Link to={"/analytics"} className="text-gray-700 hover:text-gray-500">
            <span>admin</span>
          </Link>
          <Link to={"/staff"} className="text-gray-700 hover:text-gray-500">
            <span>MyDesk</span>
          </Link>
        </div>
        <div className="w-2/4">
          {/* Links to other places */}
          <h2 className="font-semibold">Useful links</h2>
          <ul className="text-xs underline cursor-pointer">
            <li>Men</li>
            <li>African Fabrics</li>
            <li>Customised Shirt</li>
            <li>Women</li>
            <li>Orders</li>
          </ul>
        </div>
        <div className="w-1/4">
          {/* contact address */}
          <h2 className="font-semibold">Contact address</h2>
          <span>28, Alonge street, AL-Mustapha, Megida Ayobo, Nigeria</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
