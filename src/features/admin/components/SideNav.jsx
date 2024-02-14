import React, { useState } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { MdUploadFile, MdStorefront } from "react-icons/md";
import { LuUserCog } from "react-icons/lu";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const naviLinks = [
  {
    id: 1,
    title: "Dashboard",
    icon: <HiOutlineHome />,
    subLinks: [],
    link:"/analytics"
  },
  {
    id: 2,
    title: "Upload",
    subLinks: [
      { id: 22, title: "Banner uploads", link: "/bannerupload" },
      { id: 23, title: "Products uploads", link: "/upload" },
    ],
    icon: <MdUploadFile />,
    link:"#"
  },
  {
    id: 3,
    title: "Admin",
    subLinks: [
      { id: 33, title: "Staffs", link: "/admin" },
      { id: 34, title: "Orders", link: "/admin/orders" },
    ],
    icon: <LuUserCog />,
    link:"#"
  },
  {
    id: 4,
    title: "Store",
    subLinks: [
      { id: 44, title: "All products", link: "/store" },
      { id: 45, title: "All Orders", link: "/store/allorders" },
    ],
    icon: <MdStorefront />,
    link:"#"
  },
];

function SideNav() {
  const [navid, setNavId] = useState(null);
  const handleDropDown = (nav) => {
    setNavId((prevNavID) => (prevNavID === nav.id ? null : nav.id));
  };
  return (
    <div className="w-[20%] bg-gray-800">
      <div className="p-4">
        {naviLinks.map((navs) => (
          <div key={navs?.id} className="relative bg-yellow-400 rounded-md">
            <div className="flex items-center ml-1 p-2 gap-1 rounded-md cursor-pointer mt-4 text-white">
              <div className="text-xl">{navs?.icon}</div>
              <Link to={navs?.link} className="flex-1 text-white hover:text-gray-700 transition-all duration-300 ease-in font-medium px-2 rounded-lg cursor-pointer">
              <div className="text-lg ">{navs?.title}</div>
              </Link>
              
              {navs?.subLinks.length > 1 && (
                <IoMdArrowDropdown onClick={() => handleDropDown(navs)} />
              )}
            </div>
            {navid === navs?.id && (
              <div className=" h-auto px-5 flex-1 text-gray-50">
                {navs?.subLinks.map((subnav) => (
                  <div>
                    {" "}
                    <div className="text-lg flex-1 flex items-center gap-2 py-2 hover:text-gray-700 transition-all duration-300 ease-in font-medium px-2 rounded-lg cursor-pointer">
                      <IoRemoveOutline size={12} />
                      <Link to={subnav?.link} className="text-white">
                        <span className="text-[14px] text-white hover:text-gray-700">{subnav?.title}</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
