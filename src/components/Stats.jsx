import React from "react";
import Button from "./Button";
import assets from "../assets/assets";
import { stats } from "../assets/data";

const Stats = () => {
  return (
    <>
      <div className=" flex justify-between px-32 py-10 items-center">
        <div className="flex-1">
          <img className=" w-[400px] h-[300px]" src={assets.Rafiki} alt="" />
        </div>
        <div className="flex flex-1 flex-col gap-4 items-start justify-center mt-20 py-10">
          <h2 className=" text-5xl font-semibold text-textPrimary">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <Button
            title="Learn More"
            className=" px-4 py-2 bg-secondary text-2xl text-white rounded-md"
          />
        </div>
      </div>
      {/* Section 2 */}
      <section className=" flex items-center justify-around">
        <div className="left">
          <h2 className=" text-5xl text-textPrimary">
            Helping a local <br />
            <span className=" text-secondary font-semibold">
              business reinvent itself
            </span>
          </h2>
          <p className=" text-lg mt-2">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="right">
          <div className=" flex flex-wrap w-[400px] mt-2 ">
            {stats.map((data, index) => (
              <div
                key={index}
                className=" w-[200px] flex gap-2 items-center mt-6"
              >
                <img className=" w-10 h-10" src={data.icon} alt="" />
                <div className=" flex flex-col gap-2">
                  <h3 className=" text-2xl font-semibold text-textPrimary">
                    {data.numbers}
                  </h3>
                  <p className=" text-lg">{data.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
