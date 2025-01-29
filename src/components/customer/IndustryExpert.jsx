"use client";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import "./industry.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
const IndustryExpert = () => {
  let sliderRef = useRef(null);
  let sliderImgRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    if (currentIndex !== 3) {
      setCurrentIndex(currentIndex + 1);
      // setOldind(currentIndex);
      sliderRef.slickNext();
      sliderImgRef.slickNext();
    } else {
      setCurrentIndex(0);
    }
  };
  const handlePreClick = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
      // setOldind(currentIndex);
      sliderRef.slickPrev();
      sliderImgRef.slickPrev();
    } else {
      setCurrentIndex(3);
    }
  };

  const experts_settings = {
    dots: false,
    infinite: false,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
  };

  const settings = {
    // className: "image_center",
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    // initialSlide: 0,
    // centerPadding: "300px",
    nextArrow: <></>,
    prevArrow: <></>,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="flex lg:flex-row flex-col lg:gap-[110px] items-center mt-[49px] lg:mt-0 ">
      <div className="lg:w-[40%] w-full ">
        <h1 className="title2 mb-[20px] lg:text-left text-center lg:w-full w-[80%] mx-auto">
          Hear From Our Industry Experts
        </h1>
        {/* <p className="para1 lg:text-left text-center font-urbanist lg:mb-[60px] mb-[36px] font-[400] text-[#444444]">
          &quot;3MindsDigital has revolutionised our brand with their
          unparalleled design expertise. Highly recommended!&quot;
        </p>
        <div className="flex items-center gap-[24px]">
          <div className="w-[50px] h-[50px] rounded-[50px]">
            <img src="/images/customers/collin.svg" alt="" />
          </div>
          <div>
            <h4 className="font-urbanist font-semibold text-[22px] leading-[26.4px] text-[#444444] mb-[16px]">
              Collen Hoover
            </h4>
            <p className="font-urbanist font-[300] text-[18px] leading-[21.6px] text-[#444444]">
              XYZ company, CEO
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center mt-[64px]">
          <p className="border-2 border-black rounded-[50px] p-2">
            <FaArrowLeft />
          </p>
          <p>
            {"01"}/{"04"}
          </p>
          <p className="border-2 border-black rounded-[50px] p-2">
            <FaArrowRight />
          </p>
        </div> */}
        <div className="slider-container w-full" id="slick-list-custom">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...experts_settings}
          >
            {/* box 1st  */}
            <div className="">
              <p className="para1 lg:text-left text-center font-urbanist lg:mb-[60px] mb-[36px] font-[400] text-[#444444] lg:leading-[28.8px]">
                &quot;3MindsDigital has revolutionised our brand with their
                unparalleled design expertise. Highly recommended!&quot;
              </p>
              <div className="flex items-center lg:justify-normal justify-center gap-[24px]">
                <div className="w-[50px] h-[50px] rounded-[50px]">
                  <img
                    loading="lazy"
                    src="/images/customers/collin.svg"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="font-urbanist font-semibold text-[22px] leading-[26.4px] text-[#444444] mb-[16px]">
                    Collen Hoover
                  </h4>
                  <p className="font-urbanist font-[300] text-[18px] leading-[21.6px] text-[#444444]">
                    XYZ company, CEO
                  </p>
                </div>
              </div>
              <div className="flex lg:justify-normal justify-center gap-3 items-center lg:mt-[64px] mt-[47px]">
                <p
                  className="border-2 border-black rounded-[50px] p-2 cursor-pointer"
                  onClick={handlePreClick}
                >
                  <FaArrowLeft />
                </p>
                <p>
                  {"0" + (currentIndex + 1)}/{"04"}
                </p>
                <p
                  className="border-2 border-black rounded-[50px] p-2 cursor-pointer"
                  onClick={handleNextClick}
                >
                  <FaArrowRight />
                </p>
              </div>
            </div>
            {/* box 2nd  */}
            <div>
              <p className="para1 lg:text-left text-center font-urbanist lg:mb-[60px] mb-[36px] font-[400] text-[#444444] lg:leading-[28.8px]">
                &quot;3MindsDigital has revolutionised our brand with their
                unparalleled design expertise. Highly recommended!&quot;
              </p>
              <div className="flex items-center lg:justify-normal justify-center gap-[24px]">
                <div className="w-[50px] h-[50px] rounded-[50px]">
                  <img
                    loading="lazy"
                    src="/images/customers/collin.svg"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="font-urbanist font-semibold text-[22px] leading-[26.4px] text-[#444444] mb-[16px]">
                    James Hemilton
                  </h4>
                  <p className="font-urbanist font-[300] text-[18px] leading-[21.6px] text-[#444444]">
                    XYZ company, CTO
                  </p>
                </div>
              </div>
              <div className="flex lg:justify-normal justify-center gap-3 items-center lg:mt-[64px] mt-[47px] max-md:mb-[37px]">
                <p
                  className="border-2 border-black rounded-[50px] p-2 cursor-pointer"
                  onClick={handlePreClick}
                >
                  <FaArrowLeft />
                </p>
                <p>
                  {"0" + (currentIndex + 1)}/{"04"}
                </p>
                <p
                  className="border-2 border-black rounded-[50px] p-2 cursor-pointer"
                  onClick={handleNextClick}
                >
                  <FaArrowRight />
                </p>
              </div>
            </div>
            {/* box 3rd */}
            <div>
              <p className="para1 lg:text-left text-center font-urbanist lg:mb-[60px] mb-[36px] font-[400] text-[#444444] lg:leading-[28.8px]">
                &quot;3MindsDigital has revolutionised our brand with their
                unparalleled design expertise. Highly recommended!&quot;
              </p>
              <div className="flex items-center lg:justify-normal justify-center gap-[24px]">
                <div className="w-[50px] h-[50px] rounded-[50px]">
                  <img
                    loading="lazy"
                    src="/images/customers/collin.svg"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="font-urbanist font-semibold text-[22px] leading-[26.4px] text-[#444444] mb-[16px]">
                    Roger Sanchez
                  </h4>
                  <p className="font-urbanist font-[300] text-[18px] leading-[21.6px] text-[#444444]">
                    XYZ company, CEO
                  </p>
                </div>
              </div>
              <div className="flex lg:justify-normal justify-center gap-3 items-center lg:mt-[64px] mt-[47px]">
                <p
                  className="border-2 border-black rounded-[50px] p-2 cursor-pointer"
                  onClick={handlePreClick}
                >
                  <FaArrowLeft />
                </p>
                <p>
                  {"0" + (currentIndex + 1)}/{"04"}
                </p>
                <p
                  className="border-2 border-black rounded-[50px] p-2 cursor-pointer"
                  onClick={handleNextClick}
                >
                  <FaArrowRight />
                </p>
              </div>
            </div>
            {/* box 4th */}
            <div>
              <p className="para1 lg:text-left text-center font-urbanist lg:mb-[60px] mb-[36px] font-[400] text-[#444444] lg:leading-[28.8px]">
                &quot;3MindsDigital has revolutionised our brand with their
                unparalleled design expertise. Highly recommended!&quot;
              </p>
              <div className="flex items-center lg:justify-normal justify-center gap-[24px]">
                <div className="w-[50px] h-[50px] rounded-[50px]">
                  <img
                    loading="lazy"
                    src="/images/customers/collin.svg"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="font-urbanist font-semibold text-[22px] leading-[26.4px] text-[#444444] mb-[16px]">
                    Louis Fearen
                  </h4>
                  <p className="font-urbanist font-[300] text-[18px] leading-[21.6px] text-[#444444]">
                    XYZ company, CEO
                  </p>
                </div>
              </div>
              <div className="flex lg:justify-normal justify-center gap-3 items-center lg:mt-[64px] mt-[47px]">
                <p
                  className="border-2 border-black rounded-[50px] p-2 cursor-pointer"
                  onClick={handlePreClick}
                >
                  <FaArrowLeft />
                </p>
                <p>
                  {"0" + (currentIndex + 1)}/{"04"}
                </p>
                <p
                  className="border-2 border-black rounded-[50px] p-2 cursor-pointer"
                  onClick={handleNextClick}
                >
                  <FaArrowRight />
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="lg:w-[60%] w-full max-md:mb-[67px]">
        <div className="slider-container" id="slick-list-custom_img">
          <Slider
            ref={(slider) => {
              sliderImgRef = slider;
            }}
            {...settings}
          >
            <div>
              <img
                loading="lazy"
                src="images/customers/exp1.png"
                alt=""
                className="lg:w-[320px] w-[420px]  h-[416px] md:h-[523px]  overflow-visible"
              />
            </div>
            <div>
              <img
                loading="lazy"
                src="images/customers/exp2.png"
                alt=""
                className="lg:w-[320px] w-[420px]  h-[416px] md:h-[523px]  overflow-visible"
              />
            </div>
            <div>
              <img
                loading="lazy"
                src="images/customers/exp3.png"
                alt=""
                className="lg:w-[320px] w-[420px]  h-[416px] md:h-[523px] "
              />
            </div>
            <div>
              <img
                loading="lazy"
                src="images/customers/exp1.png"
                alt=""
                className="lg:w-[320px] w-[420px]  h-[416px] md:h-[523px] "
              />
            </div>
            <div>
              <img
                loading="lazy"
                src="images/customers/exp2.png"
                alt=""
                className="lg:w-[320px] w-[420px]  h-[416px] md:h-[523px] "
              />
            </div>
            <div>
              <img
                loading="lazy"
                src="images/customers/exp3.png"
                alt=""
                className="w-[300px]  h-[416px] md:h-[523px] "
              />
            </div>
          </Slider>
        </div>
        {/* <div>
          <img src="images/customers/exp_group.png" alt="" />
        </div> */}
      </div>
    </section>
  );
};
export default IndustryExpert;
