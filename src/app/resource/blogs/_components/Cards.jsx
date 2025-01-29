import { useRouter } from "next/navigation";

const BlogCard = ({ image, title, description, category }) => {
  const route = useRouter()
  return (
    <div className="flex flex-col overflow-hidden flex-1 shrink self-stretch pb-6 my-auto bg-white rounded-2xl basis-0 min-w-[240px]">
      <div className="flex flex-col overflow-hidden w-full rounded-xl">
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="object-contain w-full aspect-[1.72]"
        />
      </div>
      <div className="flex overflow-hidden flex-col px-6 pt-6 pb-2 w-full leading-7 text-neutral-900 max-md:px-5">
        <h3 className="para2 text-[#151617] font-sora font-semibold tracking-tight">
          {title}
        </h3>
        <p className="mt-2 link_text text-[#151617] font-urbanist font-normal text-base">
          {description}
        </p>
      </div>
      <div className="flex gap-10 justify-between items-center px-6 py-6 w-full min-h-[80px] max-md:px-5">
        <div className="self-stretch px-[6.5px] py-[5px] my-auto text-sm font-medium tracking-tight leading-none text-[#7B808A] rounded bg-[#F5F7FA] w-[107px]">
          {category}
        </div>
        <div className="flex gap-2 justify-center items-center self-stretch pb-2 my-auto para1 font-semibold text-[#545CF6] font-urbanist">
          <span className="self-stretch my-auto" onClick={()=>route.push("/resource/news-details")}>Read More</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/081ae5060143a0274d3d2f0984290f92d569b8f66cb6f62d1983e00c135fc020?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.15] w-[23px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
