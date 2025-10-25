import React from "react";
import assets from "../assets/assets";
import { links } from "../assets/data";
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className=" bg-primary flex justify-between items-center px-20 py-4">
      <div className="flex gap-2 items-center text-2xl font-bold">
        <img src={assets.Logo} alt="" />
        Nextcent
      </div>
      {/* Links & Button */}
      <div className="flex items-center gap-8">
        <ul className=" flex gap-6 items-center text-2xl">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.path}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className=" ">
          <button className="flex items-center gap-2
           bg-secondary text-xl font-semibold rounded-md px-4 py-4 text-white group hover:-translate-x-2 duration-500 cursor-pointer ">
            Register Now
            <FaArrowRightLong className=" group-hover:translate-x-2 duration-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
