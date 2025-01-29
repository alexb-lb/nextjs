"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import BorderButton from "@/components/Animation/Button";
import { useMediaQuery } from "react-responsive";
import "../../../components/Home/home.css";

const ContentPage = ({ contentList }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Define a media query for mobile screens
  const mobileQuery = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    setIsMobile(mobileQuery);
  }, [mobileQuery]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    adaptiveHeight: true,
  };

  return (
    <div className="w-full" id="white_paper_slider">
      {isMobile ? (
        <Slider {...settings} className="trendBlogMob">
          {contentList.map(
            ({ title, description, ctaLink, imageUrl }, index) => (
              <div key={index} className="p-4">
                {/* Card */}
                <div

                  className={`w-full bg-white rounded-2xl p-6 flex flex-col justify-center ${
                    imageUrl ? "min-h-[441px]" : "h-[266px]"

                  }`}
                >
                  <div>
                    <h2 className="lg:text-[20px] font-semibold mb-2 font-sora">
                      {title}
                    </h2>
                    {/* Description */}
                    <p className="text-base mb-10 font-urbanist">
                      {description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <BorderButton
                      content={"Download"}
                      href={ctaLink}
                      className={
                        "text-xl font-semibold leading-none text-center text-[#020103] md:px-[34px] md:py-[16px] rounded-full max-md:px-5 bg-primary_white"
                      }
                    />
                  </div>
                  {imageUrl && (
                    <div className="">
                      <img
                        src={imageUrl}
                        alt="Optional Visual"
                        className="mx-auto max-w-full h-auto"
                      />
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </Slider>
      ) : (
        <div className="flex items-center justify-center gap-4 md:gap-[40px]">
          {contentList.map(
            ({ title, description, ctaLink, imageUrl }, index) => (
              <div
                key={index}
                className={`w-auto md:w-[403px] bg-white rounded-2xl p-6 flex flex-col justify-between ${
                  imageUrl ? "h-[537px]" : "h-[238px]"
                }`}
              >
                <div>
                  <h2 className="lg:text-[20px] font-semibold mb-2 font-sora">
                    {title}
                  </h2>
                  <p className="text-base mb-10 font-urbanist">{description}</p>
                </div>
                <div className="mt-auto">
                  <BorderButton
                    content={"Download"}
                    href={ctaLink}
                    className={
                      "text-xl font-semibold leading-none text-center text-[#020103] md:px-[34px] md:py-[16px] rounded-full max-md:px-5 bg-primary_white"
                    }
                  />
                </div>
                {imageUrl && (
                  <div className="relative">
                    <img
                      src={imageUrl}
                      alt="Optional Visual"
                      className="mx-auto max-w-full h-auto"
                    />
                  </div>
                )}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ContentPage;
