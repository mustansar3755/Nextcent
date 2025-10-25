import React from "react";
import { CommunityData } from "../assets/data";
import assets from "../assets/assets";

const Community = () => {
  return (
    <div>
      <h2 className=" text-6xl font-semibold text-textPrimary text-center  mt-20">
        Manage your entire community <br /> in a single system
      </h2>
      <p className=" text-lg text-center mt-4">Who is Nextcent suitable for?</p>
      <div className="flex mt-8 gap-4 items-center justify-center px-20">
        {CommunityData.map((data, index) => (
          <div
            key={index}
            className=" border border-gray-500 rounded-md w-[300px] flex flex-col items-center text-center gap-4 relative"
          >
            <img className=" w-16 h-16 mt-4 relative z-20" src={data.icon} alt="" />
            <img className=" w-20 h-20 absolute z-0 top-4" src={assets.Rectangle} alt="" />
            <h2 className=" text-4xl text-textPrimary px-6 font-semibold text-center">
              {data.heading}
            </h2>
            <p className=" text-lg text-center px-2 py-2">{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
