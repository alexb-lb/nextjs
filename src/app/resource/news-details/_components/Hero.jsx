import React from "react";

const Hero = ({ content = [] }) => {
  return (
    <>
      <section className="px-8 pt-[50px] md:pt-[70px] w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full text-center mb-10 md:mb-0">
            <p className="text-primary_white font-urbanist text-[20px]">
              {/* 21 May 2025 */}
              {/* {content[0]?.title} */}
            </p>
            <h1 className="text-center my-[12px] font-sora text-[#FFFFFF] title1 font-[600]">
              {/* 4 Trends That Will Shape AI <br /> and Data Security in 2024 */}
              {content[0]?.title}
            </h1>
            <div className="w-full justify-center items-center flex gap-5">
              <img
                src={content[0]?.author?.image || "/images/home/prweb-logo.png"}
                alt="user"
                className="w-10 h-10 lg:w-[36px] lg:h-[36px]"
              />
              <p className="text-primary_white font-urbanist text-[20px]">
                {/* Sharon Farber */}
                {content[0]?.author?.name}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
