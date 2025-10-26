import React from "react";
import assets from "../assets/assets";
import { links } from "../assets/data";

const Footer = () => {
  return (
    <div className=" bg-[#E8F5E9]">
      <div className="top px-20 py-10 flex items-center justify-between">
        <div className="text-2xl flex gap-4">
          <img src={assets.Logo} alt="" />
          Nextcent
        </div>
        <div className="inner">
          <ul className=" text-2xl font-bold m-2 mt-6">
            Nextcent
            {links.map((link, index) => (
              <li className=" text-lg font-normal" key={index}>{link.title}</li>
            ))}
          </ul>
        </div>
      </div>
      <hr className=" text-textPrimary pt-10" />
      <div className=" flex justify-between px-20 pb-10">
        <h2>Term & Conditions | Privacy Policy</h2>
        <h2>©2025 Nextcent. All Rights Reserved</h2>
      </div>
    </div>
  );
};

export default Footer;
