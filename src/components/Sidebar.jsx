import React from "react";
import { IoClose } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlineFavorite } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";

function Sidebar({ sideNav, setSideNav }) {
  return (
    <div
      className={
        sideNav
          ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
          : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
      }
    >
      <IoClose
        onClick={() => {
          setSideNav(!sideNav);
        }}
        size={25}
        className="absolute right-4 top-4 cursor-pointer"
      />
      <h2 className="text-2xl p-4">
        Quick<span className="text-orange-700 font-bold">Bites</span>
      </h2>
      <nav>
        <ul className="flex flex-col p-4 text-gray-900 ">
          <li className="text-xl py-4 flex items-center">
            <IoPersonCircle
              size={25}
              className="mr-4 text-white bg-black rounded-full"
            />{" "}
            My Account
          </li>
          <li className="text-xl py-4 flex items-center">
            <TbTruckReturn size={25} className="mr-4 rounded-full" /> Delivery
          </li>
          <li className="text-xl py-4 flex items-center">
            <MdOutlineFavorite size={25} className="mr-4 rounded-full" /> My
            Favorite
          </li>
          <li className="text-xl py-4 flex items-center">
            <FaWallet size={25} className="mr-4 " /> My Wallet
          </li>
          <li className="text-xl py-4 flex items-center">
            <IoMdHelpCircleOutline size={25} className="mr-4 rounded-full" />{" "}
            Help
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
