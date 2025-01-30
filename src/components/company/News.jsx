"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const News = ({ sectionData = [], imageData, bgImage = "", latestNews }) => {

  function formatDate(dateStr) {
    const date = new Date(dateStr);
  
    // Options for formatting the date
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
  
    // Convert to desired format (default timezone of the browser)
    return date.toLocaleDateString('en-US', options);
  }

  const route = useRouter();
  return (
    <section
      className="flex overflow-hidden relative flex-col min-h-[954px] bg-cover bg-center bg-no-repeat pt-[54px] pb-[71px] md:px-[80px]"
      // bg-[url('/images/platform/deployment_bg.png')]
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="flex relative justify-center items-center flex-col pb-1 w-full min-h-[886px] max-md:px-5 max-md:max-w-full">
        <header className="flex relative flex-col items-center self-center max-w-full text-center w-[664px] xl:mb-[52px]">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center">
              <p className="gradient_subheading text-sm lg:text-xl leading-snug font-urbanist bg-clip-text">
                {sectionData?.[0]?.content?.title || "Powered by Generative AI"}
              </p>
              <h1 className="gradient_heading mt-4 py-2 text-[24px] md:text-5xl font-sora font-semibold capitalize max-md:text-4xl">
                {sectionData?.[0]?.content?.description ||
                  "Latest News & Updates"}
              </h1>
            </div>
            <p
              className="mt-5 text-[14px] lg:text-[20px] font-urbanist lg:leading-7 
            text-[#EAEAEA] max-md:max-w-full md:px-9 lg:px-0"
            >
              {sectionData?.[0]?.content?.content}
            </p>
          </div>
        </header>

        <div className="flex flex-col gap-3 md:gap-5 items-center">
          <div className="flex max-md:flex-col items-stretch justify-center gap-3 md:gap-5 mt-3 md:mt-0">
            {/* {sectionData?.[1]?.cards?.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="flex items-center max-md:items-start w-[343px] min-h-[156px] md:w-[630px] md:h-[203px] bg-[#ffffff] bg-opacity-10 rounded-[20px]"
              >
                <div className="p-3 basis-2/5 max-md:basis-1/2">
                  {imageData?.cards[index]?.image?.data?.attributes?.url && (
                    <Image
                      height={200}
                      width={300}
                      src={
                        imageData?.cards &&
                        imageData?.cards[index]?.image?.data?.attributes?.url
                      }
                      alt=""
                    />
                  )}
                </div>
                <div className="basis-3/5 max-md:basis-1/2 p-3">
                  <p className="mb-1 px-1 md:mb-4 md:px-4 text-[#FFFFFF] text-[16px] md:text-[26px] font-semibold md:leading-[28px] font-sora">
                    {item?.title}
                  </p>
                  <p className="px-1 md:px-4 text-[#FFFFFF] text-[12px] md:text-[14px] md:leading-[17px] font-sora">
                    {item?.description}
                  </p>
                </div>
              </div>
            ))} */}

            {latestNews?.slice(0, 2)?.map((item, ind) => (
              <div
                className="relative rounded-[20px] w-auto  md:w-[629px]  bg-cover bg-center px-[19px] py-[12px] md:px-[36px] md:py-[32px] bg-[#ffffff] bg-opacity-10"
                style={{
                  // backgroundImage: `url(${item?.image})`,
                }}
                key={ind}
              >
                <div className="w-full flex justify-between">
                  <div className="flex gap-2 items-center">
                    {item?.attributes?.author?.data?.attributes?.icon?.data?.attributes?.url && (
                      <Image
                        src={item?.attributes?.author?.data?.attributes?.icon?.data?.attributes?.url}
                        alt="user"
                        height={40}
                        width={40}
                        className="w-10 h-10 lg:w-[36px] lg:h-[36px]"
                      />
                    )}

                    <p className="text-primary_white font-urbanist text-[12px] ">
                      {item?.attributes?.author?.data?.attributes?.icon?.name}
                      <span className="text-[#F0F0F0] text-[10px] font-medium md:text-[12px] ml-4">
                        {/* Jan 4, 2024 */}
                        {formatDate(item?.attributes?.updatedAt)}
                      </span>
                    </p>
                  </div>

                  <div
                    className="text-[12px] md:text-[22px] text-white font-[600]font-urbanist flex gap-2 items-center cursor-pointer"
                    onClick={() =>
                      route.push(`/resources/news-detail/${item?.attributes?.slug}`)
                    }
                  >
                    Learn More 
                    <svg
                      width="23"
                      height="20"
                      viewBox="0 0 23 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="max-md:w-[12px]"
                    >
                      <path
                        d="M22.5434 10.0141L12.6028 0L10.5719 1.96058L17.226 8.61368H0V11.3868H17.2745L10.5719 18.0394L12.6028 20L22.5434 10.0437L22.5281 10.0289L22.5434 10.0141Z"
                        fill="#F5F8FF"
                      />
                    </svg>
                  </div>
                </div>

                <div className="w-full bottom-12 mt-4">
                  <p className="text-[16px] md:text-[28px] font-[600] font-sora text-[#FFFFFF] leading-[20px] md:leading-[40px] py-3">
                    {item?.attributes?.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex max-md:flex-col items-stretch justify-center gap-3 md:gap-5 md:mt-0">
            {/* {sectionData?.[1]?.cards?.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="flex items-center max-md:items-start w-[343px] min-h-[156px] md:w-[630px] md:h-[203px] bg-[#ffffff] bg-opacity-10 rounded-[20px]"
              >
                <div className="p-3 basis-2/5 max-md:basis-1/2">
                  {imageData?.cards[index]?.image?.data?.attributes?.url && (
                    <Image
                      height={200}
                      width={300}
                      src={
                        imageData?.cards &&
                        imageData?.cards[index]?.image?.data?.attributes?.url
                      }
                      alt=""
                    />
                  )}
                </div>
                <div className="basis-3/5 max-md:basis-1/2 p-3">
                  <p className="mb-1 px-1 md:mb-4 md:px-4 text-[#FFFFFF] text-[16px] md:text-[26px] font-semibold md:leading-[28px] font-sora">
                    {item?.title}
                  </p>
                  <p className="px-1 md:px-4 text-[#FFFFFF] text-[12px] md:text-[14px] md:leading-[17px] font-sora">
                    {item?.description}
                  </p>
                </div>
              </div>
            ))} */}

            {latestNews?.slice(2, 4)?.map((item, ind) => (
              <div
                className="relative rounded-[20px] w-auto md:w-[629px] bg-cover bg-center px-[19px] py-[12px] md:px-[36px] md:py-[32px] bg-[#ffffff] bg-opacity-10"
                style={{
                  // backgroundImage: `url(${item?.image})`,
                }}
                key={ind}
              >
                <div className="w-full flex justify-between">
                  <div className="flex gap-2 items-center">
                    {item?.attributes?.author?.data?.attributes?.icon?.data?.attributes?.url && (
                      <Image
                        src={item?.attributes?.author?.data?.attributes?.icon?.data?.attributes?.url}
                        alt="user"
                        height={40}
                        width={40}
                        className="w-10 h-10 lg:w-[36px] lg:h-[36px]"
                      />
                    )}

                    <p className="text-primary_white font-urbanist text-[12px] ">
                      {item?.attributes?.author?.data?.attributes?.icon?.name}
                      <span className="text-[#F0F0F0] text-[10px] font-medium md:text-[12px] ml-4">
                        {/* Jan 4, 2024 */}
                        {formatDate(item?.attributes?.updatedAt)}
                      </span>
                    </p>
                  </div>

                  <div
                    className="text-[12px] md:text-[22px] text-white font-[600]font-urbanist flex gap-2 items-center cursor-pointer"
                    onClick={() =>
                      route.push(`/resources/news-detail/${item?.attributes?.slug}`)
                    }
                  >
                    Learn More 
                    <svg
                      width="23"
                      height="20"
                      viewBox="0 0 23 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="max-md:w-[12px]"
                    >
                      <path
                        d="M22.5434 10.0141L12.6028 0L10.5719 1.96058L17.226 8.61368H0V11.3868H17.2745L10.5719 18.0394L12.6028 20L22.5434 10.0437L22.5281 10.0289L22.5434 10.0141Z"
                        fill="#F5F8FF"
                      />
                    </svg>
                  </div>
                </div>

                <div className="w-full bottom-12 mt-4">
                  <p className="text-[16px] md:text-[28px] font-[600] font-sora text-[#FFFFFF] leading-[20px] md:leading-[40px] py-3">
                    {item?.attributes?.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* {strapiData?.sections[4]?.cards[0]?.cta_text} */}

          {/* right side image */}
          {/* <div
            className="flex items-center justify-center 
            relative rounded-[24px] lg:p-4 mt-3
            md:mt-[80px] md:mb-[80px] xl:mt-0 lg:mb-0 overflow-hidden"
          >
            {imageData?.cards[2]?.image?.data?.attributes?.url && (
              <Image
                width={300}
                height={300}
                src={
                  imageData?.cards &&
                  imageData?.cards[2]?.image?.data?.attributes?.url
                }
                alt=""
                className="rounded-[20px] w-[343px] h-[237px] md:w-[631px] md:h-[430px] "
              />
            )} */}

          {/* Overlay content */}
          {/* <div className="absolute flex flex-col bottom-1/4 left-4 md:left-8 lg:left-8 p-4 max-md:pl-0 text-white">
              <p className="font-urbanist text-[10px] md:text-[14px] font-medium bg-white text-[#7B808A] w-[80px] h-[16px] md:w-[100px] md:h-[24px] text-center rounded-md">
                Industry News
              </p>
              <p className="mb-2 font-urbanist text-[16px] md:text-[32px] font-semibold w-[70%] md:w-full xl:w-[80%]">
                {sectionData?.[1]?.cards?.[2]?.title ||
                  "4 Trends That Will Shape AI and Data Security in 2024"}
              </p>
              <p className="font-urbanist text-[12px] md:text-[16px] w-full xl:w-[80%]">
                {sectionData?.[1]?.cards?.[2]?.description}
              </p>
            </div>
            <div className="absolute flex flex-col bottom-4 md:bottom-10 left-4 md:left-8 lg:left-8">
              <div className="flex items-start justify-start">

                <BorderButton
                  content={
                    sectionData?.[1]?.cards?.[2]?.cta_text || "Learn More"
                  }
                  onClick={() => route.push(sectionData[1]?.cards[2]?.cta_url)}
                  // href={ctaLink}
                  className={
                    "text-sm md:text-xl font-semibold leading-none text-center text-white md:px-[34px] py-2 md:py-[16px] rounded-full max-md:px-5 border border-white bg-black"
                  }
                />

              </div>
            </div> */}
          {/* </div> */}
        </div>
        {/* <div className="mt-8">
          <HoverBorderGradientDemo
            onClick={() => route.push("/resource/news-room")}
            content={sectionData?.[0]?.cta?.[0]?.text || "Know More"}
            className="self-stretch  py-5 px-[41px] my-auto text-xl font-semibold leading-none  rounded-[50px] "
          />
        </div> */}
      </div>
    </section>
  );
};

export default News;
