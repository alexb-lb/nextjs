import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className=" px-8 pt-[152px] max-lg:pt-[52px] w-full bg-blend-normal lg:h-[820px] max-md:min-h-[606px] md:h-[906px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col xl:flex-row items-center md:gap-[55px]">
          <section className="flex md:items-center xl:items-start flex-col w-full text-center xl:text-left md:w-[65%] lg:w-[55%]">
            <h3
              className="bg-clip-text gradient_heading w-full max-md:text-4xl font-sora font-bold text-[38px] 
            md:text-[70px] leading-[70px] mb-[15px]"
            >
              Curated Articles
            </h3>
            <p className="font-urbanist md:mt-4 text-[14px] md:text-[18px] leading-[26px] text-[#EAEAEA] max-md:max-w-full mb-6 lg:mb-[100px] max-lg:text-center">
              Stay in the loop and keep up with all our news and
              <br /> updates! Join our newsletter for exclusive insights,
              <br />
              upcoming events, and special offers.
            </p>
            <form
              className="flex overflow-hidden gap-2.5  justify-between 
            items-center mb-6 md:mb-[50px] py-2 md:pl-6 md:pr-3 lg:px-6 lg:pr-3 pl-4 
            text-white rounded-[50px] max-md:px-5  w-full  
            lg:w-[530px] border border-[#fff]"
            >
              <input
                type="email"
                placeholder="Enter Email Address"
                className="basis-3/5 self-stretch md:text-md text-[14px] xl:text-[18px] font-urbanist bg-transparent border-none"
              />
              <HoverBorderGradientDemo
                content={"Subscribe"}
                className="basis-2/5 lg:px-[35px] font-urbanist px-[29px] lg:py-5 py-[11px] rounded-[52px]  text-[16px]"
              />
            </form>
          </section>
          <section className="md:w-[75%] xl:w-[45%] lg:mt-28">
            <div
              className="flex items-center justify-center relative w-[354px] md:w-full lg:w-[540px] lg:min-w-full md:mt-[-70px] 
                 bg-[#ffffff] bg-opacity-10 p-2 xl:p-4 rounded-[24px]"
            >
              <img
                loading="lazy"
                src="/images/resource/hero.png"
                alt=""
                className="rounded-[20px] w-full"
              />
              {/* Overlay content */}
              <div className="absolute flex top-0 md:top-2 lg:top-4 left-0 md:left-2 lg:left-4 p-4">
                <div>
                  <img
                    src="/images/resource/user.png"
                    alt="user"
                    className="w-10 h-10 lg:w-[48px] lg:h-[48px]"
                  />
                </div>
                <div className="flex flex-col text-[10px] lg:text-[12px] px-2">
                  <p className="text-white mt-2">Sharon Farber</p>
                  <p className="text-white">Jan 4, 2024</p>
                </div>
              </div>
              <div className="absolute flex items-center top-0 md:top-2 lg:top-4 right-0 md:right-2 lg:right-4 p-4 gap-1 mt-2">
                <button className="text-white text-sm lg:text-[22px] font-semibold">
                  Learn More
                </button>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 23 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5434 10.0141L12.6028 0L10.5719 1.96058L17.226 8.61368H0V11.3868H17.2745L10.5719 18.0394L12.6028 20L22.5434 10.0437L22.5281 10.0289L22.5434 10.0141Z"
                    fill="#F5F8FF"
                  />
                </svg>
              </div>
              <div className="absolute flex flex-col bottom-0 md:bottom-6 lg:bottom-8 left-0 md:left-2 lg:left-4 p-4 text-white">
                <p className="font-urbanist text-[10px] md:text-[16px] font-medium">
                  RECENT
                </p>
                <p className="font-urbanist text-[16px] md:text-[32px] font-semibold w-[70%] md:w-full xl:w-[80%]">
                  4 Trends That Will Shape AI and Data Security in 2024
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Hero;
