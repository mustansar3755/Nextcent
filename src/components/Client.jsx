import React from "react";
import { BrandLogos } from "../assets/data";

const Client = () => {
  return (
    <div>
      <h2 className=" text-5xl text-textPrimary text-center font-semibold">
        {" "}
        Our Client
      </h2>
      <p className=" text-lg text-center mt-2">
        We have been working with some Fortune 500+ clients{" "}
      </p>
      <div className=" mt-16 flex gap-4 items-center justify-evenly">
        {BrandLogos.map((logo, index) => (
          <img className=" w-10 h-10" key={index} src={logo} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Client;
