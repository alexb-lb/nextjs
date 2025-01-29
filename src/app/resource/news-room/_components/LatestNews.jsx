"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LatestNews = () => {
  const [tabIndex, setTabIndex] = useState(2);
const route = useRouter()
  return (
    <section className="w-full px-4 py-[40px]">
      <div className="relative w-full">
        <div className="max-md:px-4 md:w-min w-full m-auto mb-[39px] md:mb-[77px] flex items-center max-md:justify-between overflow-hidden md:gap-4 gap-[13px] p-2 text-primary_black font-urbanist para3B border border-solid border-zinc-300 rounded-[60px] max-md:max-w-full">
          <button
            type="button"
            className={`md:gap-2.5 md:self-stretch md:py-4 py-2 max-md:px-[9.5px]  rounded-[60px] w-[130px] md:w-[200px]  max-md:text-[14px] max-md:leading-[16.8px] ${
              tabIndex === 1 && "bg-primary_green font-semibold"
            }`}
            onClick={() => setTabIndex(1)}
          >
            Blog
          </button>
          <button
            type="button"
            className={`md:gap-2.5 md:self-stretch md:py-4 py-2  rounded-[60px] md:w-[200px] w-[130px] ${
              tabIndex === 2 && "bg-primary_green font-semibold"
            }`}
            onClick={() => setTabIndex(2)}
          >
            Newsroom
          </button>
          <button
            type="button"
            className={`md:gap-2.5 md:self-stretch md:py-4 py-2  rounded-[60px] md:w-[200px] w-[130px] ${
              tabIndex === 3 && "bg-primary_green font-semibold"
            }`}
            onClick={() => setTabIndex(3)}
          >
            White papers
          </button>
        </div>
        <div className="w-full flex  justify-center">
          {tabIndex === 1 || tabIndex === 2 || tabIndex === 3 ? (
            <div className="flex gap-[22px] flex-col md:flex-row md:p-2">
              <div className="flex flex-col gap-[41px]">
                <p className="text-[32px] leading-[40px] max-md:text-center md:text-[48px] md:leading-[60px] font-sora font-[600] text-[#000000]">
                  Latest News
                </p>

                <div
                  className="relative rounded-[20px] w-[343px] h-[237px] md:w-[629px] md:h-[462px] bg-cover bg-center px-[19px] py-[12px] md:px-[36px] md:py-[32px] md:mt-[-20px]"
                  style={{
                    backgroundImage: "url('/images/resource/hero.png')",
                  }}
                >
                  <div className="w-full flex justify-between">
                    <div className="flex gap-2 items-center">
                      <div>
                        <img
                          src="/images/resource/user.png"
                          alt="user"
                          className="w-10 h-10 lg:w-[36px] lg:h-[36px]"
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-primary_white font-urbanist text-[12px] md:text-[20px]">
                          Sharon Farber
                        </p>
                        <p className="text-[#F0F0F0] text-[10px] font-medium md:text-[12px]">
                          Jan 4, 2024
                        </p>
                      </div>
                    </div>

                    <div className="text-[12px] md:text-[22px] text-white font-[600]font-urbanist flex gap-2 items-center" onClick={()=>route.push("/resource/news-details")}>
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

                  <div className="w-full absolute bottom-12 pr-4">
                    <p className="text-[16px] md:text-[32px] font-[600] font-sora text-[#FFFFFF] leading-[20px] md:leading-[40px]">
                      4 Trends That Will Shape AI and <br /> Data Security in
                      2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[41px] ">
                <p className="text-[32px] leading-[40px] max-md:text-center md:text-[48px] font-sora font-[600] text-[#000000]">
                  Trending Updates
                </p>
                <div className="flex flex-col gap-[22px] ">
                  <div
                    className="relative rounded-[20px] w-auto h-[237px] md:w-[629px] md:h-[220px] bg-cover bg-center px-[19px] py-[12px] md:px-[36px] md:py-[32px]"
                    style={{
                      backgroundImage: "url('/images/resource/hero.png')",
                    }}
                  >
                    <div className="w-full flex justify-between">
                      <div className="flex gap-2 items-center">
                        <img
                          src="/images/resource/user.png"
                          alt="user"
                          className="w-10 h-10 lg:w-[36px] lg:h-[36px]"
                        />
                        <p className="text-primary_white font-urbanist text-[12px] ">
                          Sharon Farber
                          <span className="text-[#F0F0F0] text-[10px] font-medium md:text-[12px] ml-4">
                            {" "}
                            Jan 4, 2024
                          </span>
                        </p>
                      </div>

                      <div className="text-[12px] md:text-[22px] text-white font-[600]font-urbanist flex gap-2 items-center" onClick={()=>route.push("/resource/news-details")}>
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

                    <div className="w-full absolute bottom-12 pr-4">
                      <p className="text-[16px] md:text-[32px] font-[600] font-sora text-[#FFFFFF] leading-[20px] md:leading-[40px]">
                        4 Trends That Will Shape AI and <br /> Data Security in
                        2024
                      </p>
                    </div>
                  </div>
                  <div
                    className="relative rounded-[20px] w-auto h-[237px] md:w-[629px] md:h-[220px] bg-cover bg-center px-[19px] py-[12px] md:px-[36px] md:py-[32px]"
                    style={{
                      backgroundImage: "url('/images/resource/hero.png')",
                    }}
                  >
                    <div className="w-full flex justify-between">
                      <div className="flex gap-2 items-center">
                        <img
                          src="/images/resource/user.png"
                          alt="user"
                          className="w-10 h-10 lg:w-[36px] lg:h-[36px]"
                        />
                        <p className="text-primary_white font-urbanist text-[12px]">
                          Sharon Farber
                          <span className="text-[#F0F0F0] text-[10px] font-medium md:text-[12px] ml-4">
                            {" "}
                            Jan 4, 2024
                          </span>
                        </p>
                      </div>

                      <div className="text-[12px] md:text-[22px] text-white font-[600]font-urbanist flex gap-2 items-center" onClick={()=>route.push("/resource/news-details")}>
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

                    <div className="w-full absolute bottom-12 pr-4">
                      <p className="text-[16px] md:text-[32px] font-[600] font-sora text-[#FFFFFF] leading-[20px] md:leading-[40px]">
                        4 Trends That Will Shape AI and <br /> Data Security in
                        2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
