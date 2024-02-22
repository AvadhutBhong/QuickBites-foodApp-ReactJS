import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]">
      <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
        <h1 className="w-full text-3xl font-bold text-orange-500">
          QuickBites
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe vero
          pariatur ullam autem omnis reiciendis quam eum culpa ad ipsam eaque
          neque, nostrum id, accusantium fugit voluptatem atque aut perferendis?
          Dicta neque nihil reamus corporis cupiditate?
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebook size={30} />
          <FaTwitter size={30} />
          <FaGithub size={30} />
          <FaInstagram size={30} />
        </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">Pune</li>
              <li className="py-2 text-sm">Mumbai</li>
              <li className="py-2 text-sm">Kolkata</li>
              <li className="py-2 text-sm">Bengalore</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">Pune</li>
              <li className="py-2 text-sm">Mumbai</li>
              <li className="py-2 text-sm">Kolkata</li>
              <li className="py-2 text-sm">Bengalore</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">Pune</li>
              <li className="py-2 text-sm">Mumbai</li>
              <li className="py-2 text-sm">Kolkata</li>
              <li className="py-2 text-sm">Bengalore</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 text-sm">Pune</li>
              <li className="py-2 text-sm">Mumbai</li>
              <li className="py-2 text-sm">Kolkata</li>
              <li className="py-2 text-sm">Bengalore</li>
            </ul>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
