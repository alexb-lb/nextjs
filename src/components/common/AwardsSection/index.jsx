"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CenterMode = () => {
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth <= 768) {
          setSlidesToShow(1);
        } else if (window.innerWidth <= 1024) {
          setSlidesToShow(3);
        } else {
          setSlidesToShow(5);
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const handleSlideChange = () => {
    if (typeof window !== "undefined") {
      const slides = document.querySelectorAll(".slick-slide");

      slides.forEach((slide) => {
        const index = parseInt(slide.getAttribute("data-index"), 10);
        const centerIndex = parseInt(
          document.querySelector(".slick-center")?.getAttribute("data-index"),
          10
        );

        let scale = 0.7; // default smallest scale

        if (index === centerIndex) {
          scale = 1.2; // center slide
        } else if (index === centerIndex - 1 || index === centerIndex + 1) {
          scale = 0.9; // adjacent slides
        }

        slide.style.transform = `scale(${scale})`;
      });
    }
  };

  useEffect(() => {
    handleSlideChange(); // initial adjustment
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: slidesToShow,
    speed: 500,
    dots: false,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
    afterChange: handleSlideChange,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className="awardSection px-15 py-16 max-md:pb-0 sm:mt-20 max-md:max-w-full bg-primary_white">
      <h2 className="title2 text-primary_black text-center font-sora capitalize max-md:max-w-full max-md:text-[30px]">
        Awards & <br className="block md:hidden" /> Recognition
      </h2>
      <Slider {...settings} id="award_section">
        <div>
          <div className="sliderBox" data-index="0">
            <img
              loading="lazy"
              src="/images/company/award3.svg"
              alt=""
              className="mx-auto"
            />
            <p className="text-center text-[#020103] font-urbanist mt-2">
              2023
            </p>
            <p className="font-medium text-[10px] sm:text-[16px] tracking-tight leading-5 text-gray-500 text-center para font-urbanist">
              Excellence Awards Winner
            </p>
          </div>
        </div>
        <div>
          <div className="sliderBox" data-index="1">
            <img
              loading="lazy"
              src="/images/company/award4.svg"
              alt=""
              className="mx-auto"
            />
            <p className="text-center text-[#020103] mt-2 font-urbanist">
              2023
            </p>
            <p className="font-medium text-[10px] sm:text-[16px]  tracking-tight leading-5 text-gray-500 text-center para font-urbanist">
              Excellence Awards Winner
            </p>
          </div>
        </div>
        <div>
          <div className="sliderBox" data-index="2">
            <img
              loading="lazy"
              src="/images/company/award5.svg"
              alt=""
              className="mx-auto"
            />
            <p className="text-center text-[#020103] mt-2 font-urbanist">
              2023
            </p>
            <p className="font-medium text-[10px] sm:text-[16px]  tracking-tight leading-5 text-gray-500 font-urbanist text-center para">
              Excellence Awards Winner
            </p>
          </div>
        </div>
        <div>
          <div className="sliderBox" data-index="3">
            <img
              loading="lazy"
              src="/images/company/award1.svg"
              alt=""
              className="mx-auto"
            />
            <p className="text-center text-[#020103] mt-2 font-urbanist">
              2023
            </p>
            <p className="font-medium text-[10px] sm:text-[16px]  tracking-tight leading-5 text-gray-500 font-urbanist text-center para">
              Excellence Awards Winner
            </p>
          </div>
        </div>
        <div>
          <div className="sliderBox" data-index="4">
            <img
              loading="lazy"
              src="/images/company/award2.svg"
              alt=""
              className="mx-auto"
            />
            <p className="text-center text-[#020103] mt-2 font-urbanist">
              2023
            </p>
            <p className="font-medium text-[10px] sm:text-[16px]  tracking-tight leading-5 text-gray-500 font-urbanist text-center para">
              Excellence Awards Winner
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CenterMode;
