import React from "react";
import assets from "../assets/assets";
import Button from "./Button";

const Hero = () => {
  return (
    <div className=" flex justify-between px-20 py-10 bg-primary">
      <div className=" flex flex-col items-start justify-center">
        <h2 className=" text-7xl leading-5xl font-normal text-textPrimary">
          Lessons and insights <br />{" "}
          <span className=" text-secondary font-semibold">from 8 years</span>
        </h2>
        <p className=" text-[18px] mt-4 left-0">
          Where to grow your business as a photographer: site or social media?
        </p>
        <Button
          title="Register"
          className=" px-4 py-2 bg-secondary rounded-md mt-4 text-2xl hover:translate-y-2.5 duration-500 cursor-pointer text-white text-center items-center"
        />
      </div>
      <div className=" pr-20 mt-20">
        <img className=" w-[400px] h-[400px]" src={assets.Hero_Img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
