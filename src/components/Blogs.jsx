import { FaArrowRightLong } from "react-icons/fa6";
import assets from "../assets/assets";

const BlogCard = ({ src, desc }) => {
  return (
    <div className="mt-10 relative">
      <img className=" w-[250px] " src={src} alt="" />
      <div className=" bg-primary rounded-md w-[230px] left-4 flex flex-col gap-4 items-center justify-center text-center absolute top-32">
        <h2 className=" mt-4">{desc}</h2>
        <a
          className=" text-2xl text-secondary flex gap-4 items-center"
          href="#"
        >
          Read More <FaArrowRightLong />
        </a>
      </div>
    </div>
  );
};
const Blogs = () => {
  return (
    <div>
      <h2> Caring is new marketing</h2>
      <p>
        The Nextcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's more.
      </p>
      <div className="blogList flex gap-10 px-20 items-center justify-center pb-20">
        <BlogCard
          src={assets.Image_18}
          desc="Creating Streamlined Safeguarding Processes with OneRen"
        />
        <BlogCard
          src={assets.Image_19}
          desc="What are your safeguarding responsibilities and how can you manage them?"
        />
        <BlogCard
          src={assets.Image_20}
          desc="Revamping the Membership Model with Triathlon Australia"
        />
      </div>
    </div>
  );
};

export default Blogs;
