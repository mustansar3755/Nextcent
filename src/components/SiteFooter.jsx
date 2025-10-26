import React from "react";
import assets from "../assets/assets";
import Button from "./Button";

const SiteFooter = () => {
  return (
    <div className=" flex py-20 mt-10 justify-center items-center gap-6">
      <div className="flex-1">
        <img className=" w-[300px] ml-60" src={assets.MobileLogin} alt="" />
      </div>
      <div className="flex flex-1 flex-col gap-6 items-start justify-center  max-w-[780px] pr-20">
        <h2 className=" text-5xl font-semibold text-textPrimary">How to design your site footer like we did</h2>
        <p>
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <Button title="Learn More" className="px-4 py-2.5 bg-secondary
         text-white text-xl items-center text-center rounded-md"/>
      </div>
    </div>
  );
};

export default SiteFooter;
