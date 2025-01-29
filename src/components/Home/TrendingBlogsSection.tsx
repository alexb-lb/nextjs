"use client";
import React from "react";
import HoverBorderGradientDemo from "../common/HoverBorderGradientDemo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  description,
  category,
}) => {
  const route = useRouter();

  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink self-stretch pb-6 my-auto bg-white rounded-2xl basis-0 min-w-[240px]">
      <div className="flex overflow-hidden flex-col w-full rounded-xl">
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
      <div className="flex gap-10 justify-between items-center px-6 pt-6 pb-2 md:py-6 w-full min-h-[80px] max-md:px-5">
        <div className="self-stretch px-[6.5px] py-[5px] my-auto text-sm font-medium tracking-tight leading-none text-[#7B808A] rounded bg-[#F5F7FA] w-[107px]">
          {category}
        </div>
        <div className="flex gap-2 justify-center items-center self-stretch pb-2 my-auto para1 font-semibold text-[#545CF6] font-urbanist max-sm:hidden">
          <span
            className="self-stretch my-auto"
            onClick={() => route.push("/resource/news-details")}
          >
            Read More
          </span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/081ae5060143a0274d3d2f0984290f92d569b8f66cb6f62d1983e00c135fc020?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.15] w-[23px]"
          />
        </div>
      </div>
      <div className="flex gap-[12px] max-sm:px-5 items-center sm:hidden">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fda9bf2de7c0ad86a9e545ea8e457a2407ee57f3dd2e253eb083d019bac92650?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square rounded-[32px]"
        />
        <div className="flex flex-col self-stretch px-px my-auto w-[78px]">
          <div className="text-[#383B42] text-[12px] leading-[14px] font-semibold mb-[6px] font-urbanist">
            Sharon Farber
          </div>
          <div className="self-start text-[#7B808A] text-[10px] font-medium leading-[14px] font-urbanist">
            Jan 4, 2024
          </div>
        </div>
      </div>
    </div>
  );
};

const TrendingBlogsSection: React.FC = () => {
  const route = useRouter();
  const blogs = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4bc326f5dc2870191021bc9285bc280133943074eeb547f5c14141ee17bea235?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8",
      title: "Dig Security Named an Outperformer in GigaOm Radar...",
      description:
        "We're thrilled to share that Dig has been named an outperformer in GigaOm's Radar report evaluating data security platforms (DSPs).",
      category: "Industry News",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/46c5550b6de96c5317e7b551304f87335aba3df7b50b8178322f7682ef85738e?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8",
      title: "4 Trends That Will Shape AI and Data Security in 2024",
      description:
        "We're thrilled to share that Dig has been named an outperformer in GigaOm's Radar report evaluating data security platforms (DSPs).",
      category: "Industry News",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9f6eb81994ff2f0878a08f7477cbc0c27e17ffefb8f41f339cce511fbc61ac62?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8",
      title: "Dig Security Named an Outperformer in GigaOm Radar...",
      description:
        "We're thrilled to share that Dig has been named an outperformer in GigaOm's Radar report evaluating data security platforms (DSPs).",
      category: "Industry News",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <section
      className="flex flex-col items-center self-center pt-[132px] pb-2  w-full px-4 sm:px-[80px] m-auto max-md:pt-10 max-md:pb-[0px] max-md:max-w-full bg-[#F5F8FF] sm:bg-center max-sm:bg-custom-110"
      style={{
        backgroundImage:
          'url("https://cdn.builder.io/api/v1/image/assets/TEMP/8c429d9b6bce0b23291a73dabba5ebc0cd54e762c7f5eb27fa71fe6dd70d9051?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887")',
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col w-full max-md:max-w-full">
        <h2 className="self-center title2 text-[#020103] capitalize max-md:text-[30px]">
          Trending Blogs
        </h2>
        <div className="hidden sm:flex flex-wrap gap-5 items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>

        {/* mobile */}

        <div className="block sm:hidden flex-wrap gap-5 items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <Slider {...settings} className="trendBlogMob">
            {blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </Slider>
        </div>
      </div>
      {/* <button className="flex flex-col mt-8 max-w-full text-xl font-semibold leading-none text-center text-white bg-indigo-500 rounded-[50px] ">
        <div className="flex flex-col rounded-[52px]">
          <div className="px-14 py-5 rounded-[52px] max-md:px-5">View All</div>
        </div>
      </button> */}
      <div className="mt-[69px] md:mt-[30px] ">
        <Link href={"/resource/blogs"}>
          <HoverBorderGradientDemo
            content="View All"
            onClick={() => route.push("/resource/blogs")}
            className="max-sm:min-w-[130px] max-sm:min-h-[42px]"
          />
        </Link>
      </div>
    </section>
  );
};

export default TrendingBlogsSection;
