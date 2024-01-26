import React from "react";

function Footer() {
  return (
    <div className="w-full h-70 flex justify-evenly ">
      <div className="w-full max-w-5xl mx-auto flex justify-evenly">
        <div className="w-1/4">
          {/* Logo here */}
          <h2>S O W I T</h2>
        </div>
        <div className="w-2/4">
          {/* Links to other places */}
          <h2>Useful links</h2>
          <ul>
            <li>Men</li>
            <li>African Fabrics</li>
            <li>Customised Shirt</li>
            <li>Women</li>
            <li>Orders</li>
          </ul>
        </div>
        <div className="w-1/4"> 
          {/* contact address */}
          <h2>Contact address</h2>
          <span>28, Alonge street, AL-Mustapha, Megida Ayobo, Nigeria</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
