import assets from "../assets/assets";
import { BrandLogos } from "../assets/data";
import { FaArrowRightLong } from "react-icons/fa6";

const Customer = () => {
  return (
    <div className=" flex items-center justify-between gap-6 px-40">
      <div className="flex-1">
        <img className=" w-2xl" src={assets.Image_9} alt="" />
      </div>
      <div className="flex-3">
        <p className=" text-justify w-[800px]">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <h3 className=" mt-6 text-secondary text-2xl">Tim Smith</h3>
        <h4 className=" mt-6 text-textPrimary text-xl">
          British Dragon Boat Racing Association
        </h4>
        <div className=" flex gap-8 mt-6 ">
          {BrandLogos.map((logo, index) => (
            <div className="  gap-4" key={index}>
              <img className=" flex" src={logo} alt="" />
            </div>
          ))}
          <h3 className=" text-2xl font-medium text-secondary flex items-center gap-4">
            Meet all customers <FaArrowRightLong />{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Customer;
