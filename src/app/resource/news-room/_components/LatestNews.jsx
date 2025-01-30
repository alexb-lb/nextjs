"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LatestNews = ({ strapiData, latestNews, trendingNews }) => {
  const [tabIndex, setTabIndex] = useState(2);
  const route = useRouter();

  const ln = latestNews[0];
  const tr1 = trendingNews[0];
  const tr2 = trendingNews[1];

  return (
    <section className="w-full px-4 py-[40px] md:overflow-x-scroll">
      <div className="relative w-full">
        <div className="w-full flex  justify-center">
          {tabIndex === 1 || tabIndex === 2 || tabIndex === 3 ? (
            <div className="max-lg:w-full flex gap-[22px] flex-col md:flex-row md:p-2">
              <div className="flex flex-col gap-[41px]">
                <p className="text-[32px] leading-[40px] max-md:text-center md:text-[48px] md:leading-[60px] font-sora font-[600] text-[#000000]">
                  {strapiData?.sections[1]?.title}
                </p>

                <div
                  className="relative rounded-[20px] w-[343px] max-md:w-full h-[237px] md:w-[629px] md:h-[462px] bg-cover bg-center px-[19px] py-[12px] md:px-[36px] md:py-[32px] md:mt-[-20px]"
                  style={{
                    backgroundImage: `url(${ln.image})`,
                  }}
                >
                  <div className="w-full flex justify-between">
                    <div className="flex gap-2 items-center">
                      <div>
                        {ln?.author?.image && (
                          <Image
                            src={ln?.author?.image}
                            height={40}
                            width={40}
                            alt="user"
                            className="w-10 h-10 lg:w-[36px] lg:h-[36px]"
                          />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <p className="text-primary_white font-urbanist text-[12px] md:text-[20px]">
                          {ln?.author?.name}
                        </p>
                        <p className="text-[#F0F0F0] text-[10px] font-medium md:text-[12px]">
                          Jan 28, 2025
                        </p>
                      </div>
                    </div>

                    <div
                      className="text-[12px] md:text-[22px] text-white font-[600]font-urbanist flex gap-2 items-center cursor-pointer"
                      onClick={() =>
                        route.push(`/resources/news-detail/${ln?.slug}`)
                      }
                    >
                      {strapiData?.sections[2]?.cta_text}
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
                      {/* {ln.title} */}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[41px] ">
                <p className="text-[32px] leading-[40px] max-md:text-center md:text-[48px] font-sora font-[600] text-[#000000]">
                  {strapiData?.sections[2]?.title}
                </p>
                <div className="flex flex-col gap-[22px] ">
                  {tr1 && (
                    <div
                      className="relative rounded-[20px] w-auto h-[237px] md:w-[629px] md:h-[220px] bg-cover bg-center px-[19px] py-[12px] md:px-[36px] md:py-[32px]"
                      style={{
                        backgroundImage: `url(${tr1?.image})`,
                      }}
                    >
                      <div className="w-full flex justify-between">
                        <div className="flex gap-2 items-center">
                          {tr1?.author?.image && (
                            <Image
                              src={tr1?.author?.image}
                              alt="user"
                              height={40}
                              width={40}
                              className="w-10 h-10 lg:w-[36px] lg:h-[36px]"
                            />
                          )}

                          <p className="text-primary_white font-urbanist text-[12px] ">
                            {tr1?.author?.name}
                            <span className="text-[#F0F0F0] text-[10px] font-medium md:text-[12px] ml-4">
                              {" "}
                              Jan 28, 2025
                            </span>
                          </p>
                        </div>

                        <div
                          className="text-[12px] md:text-[22px] text-white font-[600]font-urbanist flex gap-2 items-center cursor-pointer"
                          onClick={() =>
                            route.push(`/resources/news-detail/${tr1?.slug}`)
                          }
                        >
                          {strapiData?.sections[4]?.cards[0]?.cta_text}
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
                        <p className="text-[16px] md:text-[32px] font-[600] font-sora text-[#FFFFFF] leading-[20px] md:leading-[40px] p-3">
                          {/* {tr1?.title} */}
                        </p>
                      </div>
                    </div>
                  )}
                  {tr2 && (
                    <div
                      className="relative rounded-[20px] w-auto h-[237px] md:w-[629px] md:h-[220px] bg-cover bg-center px-[19px] py-[12px] md:px-[36px] md:py-[32px]"
                      style={{
                        backgroundImage: `url(${tr2?.image})`,
                      }}
                    >
                      <div className="w-full flex justify-between">
                        <div className="flex gap-2 items-center">
                          {tr2?.author?.image && (
                            <Image
                              src={tr2?.author?.image}
                              alt="user"
                              height={40}
                              width={40}
                              className="w-10 h-10 lg:w-[36px] lg:h-[36px]"
                            />
                          )}

                          <p className="text-primary_white font-urbanist text-[12px]">
                            {tr2?.author?.name}
                            <span className="text-[#F0F0F0] text-[10px] font-medium md:text-[12px] ml-4">
                              {" "}
                              Jan 28, 2025
                            </span>
                          </p>
                        </div>

                        <div
                          className="text-[12px] md:text-[22px] text-white font-[600]font-urbanist flex gap-2 items-center cursor-pointer"
                          onClick={() =>
                            route.push(`/resources/news-detail/${tr2?.slug}`)
                          }
                        >
                          {strapiData?.sections[4]?.cards[1]?.cta_text}
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
                          {/* {tr2?.title} */}
                        </p>
                      </div>
                    </div>
                  )}
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
