import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti"; //menu
 //close
import { IoMdSearch } from "react-icons/io"; //search icon
import { AiFillTag } from "react-icons/ai"; // fill tag
import { FaCartShopping } from "react-icons/fa6"; //shopping cart
import { FaUserFriends } from "react-icons/fa";
import Sidebar from "./Sidebar";

function Navbar() {
  const [sideNav, setSideNav] = useState(false);

  return (
    <div className="max-w-[1520] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div
          className="cursor-pointer"
          onClick={() => {
            setSideNav(!sideNav);
          }}
        >
          <TiThMenu size={25} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Quick
          <span className="font-bold text-orange-700">Bites</span>
        </h1>
        <div className="hidden  lg:flex items-center rounded-full bg-gray-200 p-1 text-[14px]">
          <p className="bg-orange-600 text-white rounded-full p-2 text-bold">
            Free
          </p>
          <p className="p-2 text-bold">Delivery</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <IoMdSearch size={25} />
        <input
          type="text"
          className="w-full bg-transparent p-2 focus:outline-none"
          placeholder="search meals"
        />
      </div>

      <button className="bg-orange-600 text-white hidden md:flex items-center py-2 rounded-full">
        <FaCartShopping size={25} /> Cart
      </button>

      {sideNav ? (
        <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      <Sidebar sideNav={sideNav} setSideNav={setSideNav}/>
    </div>
  );
}

export default Navbar;
