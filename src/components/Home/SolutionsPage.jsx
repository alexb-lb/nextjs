/* eslint-disable jsx-a11y/alt-text */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useRouter } from "next/navigation";

import "./SolutionPage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BorderButton from "../Animation/Button";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const solutionsData = [
  {
    id: "01",
    title: "PCI-DSS",
    subtitle: "Your PCI Compliance Partner",
    description:
      "LightBeam's Zero Trust Data Protection platform streamlines and simplifies PCI compliance for organizations of all sizes",
  },
  {
    id: "02",
    title: "GLBA",
    subtitle: "Your GLBA Compliance Partner",
    description:
      "LightBeam's Zero Trust Data Protection platform empowers financial institutions to achieve and maintain seamless GLBA compliance",
  },
  {
    id: "03",
    title: "HIPAA",
    subtitle: "Your Partner in HIPAA Compliance",
    description:
      "LightBeam's Zero Trust Data Protection platform empowers financial institutions to achieve and maintain seamless GLBA compliance",
  },
  {
    id: "04",
    title: "GDPR",
    subtitle: "Your Partner in GDPR Compliance",
    description:
      "By leveraging LightBeam's automation and data intelligence, you can focus on your core business while ensuring user privacy and regulatory peace of mind.",
  },
  {
    id: "05",
    title: "CPRA",
    subtitle: "Your Partner in Privacy Compliance",
    description:
      "LightBeam's Zero Trust Data Protection Platform empowers businesses to navigate the complexities of US privacy laws.",
  },
  {
    id: "06",
    title: "Quebec Law 25",
    subtitle: "Ensure Continuous Compliance & Reduce Risk",
    description:
      "Automate compliance for Quebec's Law 25 through LightBeam’s Zero Trust Data Protection platform",
  },
];

function SolutionsPage({ sectionData, bgImage }) {
  const router = useRouter();
  let sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [oldInd, setOldind] = useState(0);
  const handleNextClick = () => {
    if (currentIndex !== solutionsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setOldind(currentIndex);
      sliderRef.slickNext();
    }
  };
  const handlePreClick = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
      setOldind(currentIndex);
      sliderRef.slickPrev();
    }
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
  };

  const sectionRef = useRef();
  const [cardsActive, setCardsActive] = useState(0);
  const [direction, setDirection] = useState("down");

  useEffect(() => {
    if (cardsActive > 0) {
      if (direction === "down") sliderRef.slickNext();
      if (direction === "up") sliderRef.slickPrev();
    }
  }, [cardsActive]);

  const prevProgressRef = useRef(0);

  // useEffect(() => {
  //   const boxes = gsap.utils.toArray(".card-box2");
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       start: "top top",
  //       end: "+=3000",
  //       scrub: true,
  //       pin: true,
  //       pinSpacing: true,
  //       onUpdate: (self) => {
  //         const progress = self.progress;

  //         // Determine scroll direction
  //         if (progress > prevProgressRef.current) {
  //           setDirection("down");
  //         } else if (progress < prevProgressRef.current) {
  //           setDirection("up");
  //         }

  //         prevProgressRef.current = progress;

  //         const currentBox = Math.floor(progress * boxes.length);
  //         setCardsActive(currentBox);
  //       },
  //     },
  //   });

  //   boxes.forEach((box, index) => {
  //     tl.fromTo(
  //       box,
  //       { x: 0 },
  //       {
  //         x: 0,
  //         duration: 2,
  //         delay: 2 * 0.2, // Stagger effect based on index
  //         ease: "power1.out",
  //       }
  //     );
  //   });

  //   return () => {
  //     // Clean up ScrollTrigger instance
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  return (
    <main
      className="flex overflow-hidden relative flex-col flex-wrap lg:min-h-[910px] md:h-[770px] lg:h-[710px] h-[710px]  bg-center bg-cover bg-no-repeat"
      // bg-[url('/images/home/solution_bg.png')]
      style={{ backgroundImage: `url(${bgImage})` }}
      id="solutions"
    >
      <section className="flex relative flex-col grow shrink-0 px-20 pt-20 basis-0 lg:min-h-[810px] h-[610px]  max-md:px-5 w-full ">
        <h1 className="relative self-center gradient_heading text-5xl font-sora font-semibold text-center capitalize max-md:text-[30px] ">
          {/* Our Solutions */}
          {sectionData[0]?.title}
        </h1>
        <div className="flex relative flex-col mt-12 w-full  mx-auto  max-md:mt-10 max-md:max-w-full">
          <div className=" max-w-full w-full relative z-50">
            {/* {solutionsData.map((solution, index) => (
              <SolutionCard
                key={solution.id}
                {...solution}
                isActive={index === 0}
                handleNextClick={handleNextClick}
                handlePreClick={handlePreClick}
                currentInd={currentIndex}
                totalInd={solutionsData.length}
                index={index}
              />
            ))} */}
            <div className="slider-container" id="slick-list-custom">
              <Slider
                ref={(slider) => {
                  sliderRef = slider;
                }}
                {...settings}
              >
                {sectionData[1]?.cards.map((solution, index) => (
                  <div key={solution.id} className="card-box2">
                    {" "}
                    <article className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                      <div className="flex flex-col max-w-full w-[541px]">
                        <h2 className="self-start text-[26px] md:text-5xl font-bold text-center text-white font-urbanist">
                          {solution.title}
                        </h2>
                        <h3 className="mt-6 text-[20px] md:text-2xl font-semibold text-zinc-100 font-urbanist">
                          {solution.description}
                        </h3>
                        <p className="mt-6 text-[16px] md:text-xl leading-7 text-zinc-300 max-md:max-w-full font-urbanist h-[85px]">
                          {solution.content}
                        </p>
                      </div>
                      <div className="flex gap-5 justify-between px-px mt-10 max-w-full text-[16px] md:text-xl text-white w-[364px]">
                        <div className=" max-md:text-center ">
                          <BorderButton
                            content={solution.cta_text}
                            className={
                              "px-10 py-5 max-md:py-3 max-md:px-7 rounded-[52px] text-white bg-black font-semibold leading-none text-center cursor-pointer"
                            }
                            onClick={() =>
                              router.push(
                                solution.cta_url || "/template/template2"
                              )
                            }
                          />
                        </div>
                        <div className="flex gap-4 justify-center items-center my-auto whitespace-nowrap font-urbanist">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7344fb6cb157a14b1410a04c98344a5ff6c5d6ee1daa005cf5367af62f5a4d56?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
                            alt="left"
                            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square cursor-pointer"
                            onClick={handlePreClick}
                          />
                          <span className="self-stretch my-auto">
                            0{currentIndex + 1}/0{solutionsData.length}
                          </span>
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/55560e2bb5213fd04a2a99d06db6019f5373452d2f09926b6c1cbb7b0c742f03?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
                            alt="right"
                            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square cursor-pointer"
                            onClick={handleNextClick}
                          />
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          {/* <NavigationDots totalDots={6} activeDot={1} /> */}
          <div className=" w-full flex justify-center relative mt-0 max-md:mt-10 max-lg:mt-10">
            {/* <motion.img
              loading="lazy"
              src="/images/home/globe_img.svg"
              alt=""
              initial={{ rotate: `-${oldInd * 20}deg` }}
              animate={{
                rotate: `-${currentIndex * 20}deg`,
              }}
              transition={{ duration: 1.5, type: "spring", bounce: 0.2 }}
            /> */}
            <motion.img
              loading="lazy"
              src="/images/home/frame_anim.png"
              alt=""
              initial={{ rotate: `-${oldInd * 20}deg` }}
              animate={{
                rotate: `-${currentIndex * 20}deg`,
              }}
              transition={{ duration: 1.5, type: "spring", bounce: 0.2 }}
              className="absolute top-0 min-w-[100%] max-md:max-w-[120%] max-lg:min-w-[140%]"
              width={1380}
            />
            <Image
              src={"/images/home/globe_anim.png"}
              height={400}
              width={1100}
              className="absolute top-32 max-md:top-10 max-lg:top-20 min-w-[80%] max-md:max-w-[100%] max-lg:min-w-[120%] globeImage"
            />
            <div className="absolute top-[150px] max-md:top-[50px] h-[350px] max-md:h-[160px] w-full max-lg:w-[130%] bg-gradient-to-b from-black/0 to-black/90"></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SolutionsPage;
