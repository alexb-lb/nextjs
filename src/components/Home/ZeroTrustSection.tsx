"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./home.css";
import AnimateIcon from "./AnimateIcon";

gsap.registerPlugin(ScrollTrigger);

const ZeroTrustSection = ({ sectionData = [], bgImage }: any) => {
  const sectionRef: any = useRef();
  const [cardsActive, setCardsActive] = useState(0);

  useEffect(() => {
    const boxes = gsap.utils.toArray(".card-box1") as any;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top-=200px",
        end: "+=1500",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const currentBox = Math.floor(progress * boxes.length);
          setCardsActive(currentBox);
        },
      },
    });

    let topPosition = 30;

    boxes.forEach((box: any, index: any) => {
      tl.fromTo(
        box,
        { y: window.innerWidth > 768 ? 1000 : 900 },
        {
          y: topPosition,
          duration: 0.4,
          delay: 2 * 0.2, // Stagger effect based on index
          ease: "power1.out",
        }
      );
      topPosition = topPosition + 30;
    });

    return () => {
      // Clean up ScrollTrigger instance
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const bg_img =
    sectionData[0]?.images?.data &&
    sectionData[0]?.images?.data[0]?.attributes?.url;

  const bookIcon =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/a85ec012211f6c4f5ce7824f9ea9da444a327c1309998903b53ccca0d7d415aa?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8";

  return (
    <section className="lg:h-full max-md:h-full relative" ref={sectionRef}>
      <div
        className="flex sticky lg:h-[962px]  top-0 left-0 z-1 flex-col items-center px-20 pt-[87px] pb-[62px] w-full  bg-center bg-cover bg-no-repeat max-md:px-5 max-md:max-w-full"
        // bg-[url('/images/home/zero_trust_bg.png')]
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <h2 className="relative sm:ml-12 title2 gradient_heading text-center capitalize  max-md:max-w-full font-sora">
          {/* Zero Trust In Action */}
          {sectionData[0]?.content?.title}
        </h2>
        <p className="relative mt-6 sm:ml-12 para2 font-urbanist text-[#F0F0F0] text-center  w-[599px] max-md:max-w-full">
          {/* Secure your applications wherever they are without data or metadata
          ever leaving your network. */}
          {sectionData[0]?.content?.description}
        </p>

        <div className="relative self-stretch mt-10 max-md:mt-10 max-md:max-w-full">
          <div
            className={`flex gap-5 max-lg:flex-col-reverse lg:h-[538.719px] md:h-[615.633px]  lg:relative no-scrollbar`}
          >
            <div className="flex flex-col lg:w-2/5 z-10 w-full max-md:ml-0 max-md:w-full lg:sticky lg:top-0  ">
              <div className="lg:h-[540px] max-md:-rotate-90 max-md:mx-auto  max-md:mb-[-135px] max-sm:mb-[0px] mt-[100px] max-md:mt-[40px]">
                {/* <motion.img
                  loading="lazy"
                  src="/images/home/Animation.svg"
                  alt="Zero Trust Illustration"
                  className="object-contain grow  lg:h-full lg:aspect-[0.93] max-md:max-w-full "
                /> */}
                <AnimateIcon cardsActive={cardsActive} />
              </div>
            </div>
            <div
              className={`lg:absolute top-0  flex-col lg:ml-5 lg:w-3/5 w-full max-md:ml-0 max-md:w-full md:mt-5 lg:top-0 max-md:h-[364px] right-0  max-md:relative no-scrollbar relative zeroTrustCard`}
            >
              {/* {cards_data.map((item, ind) => (
                <div key={ind} className="flex">
                  <div className="">{item.data}</div>
                </div>
              ))} */}
              {sectionData
                .filter((ele: any, ind: any) => ind > 0)
                .map((item: any, ind: any) => (
                  <div key={ind} className="flex">
                    <div className="">
                      <div
                        className={`${
                          ind > 0 ? "card-box1" : ""
                        } flex flex-col justify-center self-stretch px-9 py-12 my-auto w-full rounded-3xl bg-[#303355] md:min-h-[406px] max-md:p-8 max-md:mt-[18px] max-md:max-w-full absolute`}
                        style={{ boxShadow: "0 -4px 6px #2121217d" }}
                      >
                        <div className="flex flex-col max-w-full ">
                          <h3 className="title3 md:text-[36px] md:leading-[46px]  text-[#CCC0FC] ">
                            {/* On-Premises (On Prem) */}
                            {item?.card?.title}
                          </h3>
                          <p className="md:mt-6 mt-3  text-[12px] leading-[15.15px] md:text-[26px] md:leading-[32px] font-normal text-white max-md:max-w-full ">
                            {/* Detect and classify sensitive data within your
                            databases and file servers running on-premises. */}
                            {item?.card?.description}
                          </p>
                          <hr className="md:mt-6 mt-3 w-full min-h-[1px]" />
                          <div className="flex flex-col md:mt-6 mt-3 w-full max-md:max-w-full">
                            {item?.faqs.map((element: any, index: any) => (
                              <div
                                key={index}
                                className="flex flex-wrap gap-3.5 items-start w-full max-md:max-w-full md:mt-8 mt-4 first:mt-0"
                              >
                                <img
                                  src={element?.icon || bookIcon}
                                  alt="icon"
                                  className="object-contain shrink-0 aspect-square md:min-w-[33px] max-w-[15px]"
                                />
                                <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
                                  <h4 className="md:text-2xl text-sm font-semibold leading-none text-white max-md:max-w-full">
                                    {element.title}
                                  </h4>
                                  <p className="md:mt-4 mt-2 md:text-lg text-[8.37px] leading-[12.98px] md:leading-loose text-white text-opacity-90 max-md:max-w-full">
                                    {element.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZeroTrustSection;
