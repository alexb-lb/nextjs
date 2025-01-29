"use client";
import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import { useRouter } from "next/navigation";
import BorderButton from "../Animation/Button";

function PartnershipSection() {
  const router = useRouter();
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    // Check if window is defined (i.e., we're in the browser)
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWidth(window.innerWidth);
      }
    };

    // Set initial width
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="mt-[56px] max-md:mt-10 max-md:max-w-full max-md:px-4">
      <div className="flex flex-col items-center max-w-full text-center w-[849px] m-auto">
        <h2 className="title2 text-primary_black font-sora capitalize max-md:max-w-full max-md:text-[30px]">
          LightBeam <br className="sm:hidden" /> Partnership Program
        </h2>
        <p className="para3B text-[#303030] font-urbanist mt-5 max-md:max-w-full">
          Our consulting partners, such as Syren, Practical Privacy,
          InfoObjects, and Innovaccer, aid in implementing and scaling our Data
          Privacy Automation platform for enhanced compliance and security.
        </p>
      </div>
      <div className="relative lg:w-[1240px] m-auto lg:h-[560px] h-[480px] max-md:h-[600px]">
        <div className="absolute lg:-bottom-14  z-20 mt-8 w-full bg-white max-w-[1241px] m-auto rounded-[38px] max-md:rounded-[20px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col lg:w-6/12 max-md:ml-0 max-lg:w-full">
              <div className="flex overflow-hidden relative flex-col flex-wrap grow gap-10 items-start pt-1.5 pr-1.5 pb-0 pl-20 mt-24 lg:min-h-[399px] rounded-[38px] max-md:pb-10 max-lg:px-4 max-lg:mt-10 max-lg:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe9dfc7e832141ad8053ce624191a64c9bfbbe592962d3664037915561d7c470?placeholderIfAbsent=true&apiKey=faedc40a57794e3a93ca0ce63a18da4b"
                  alt=""
                  className="object-cover absolute inset-0 size-full -z-10"
                />
                <div className="flex gap-8 max-lg:max-w-[100%]">
                  {/* <div className="flex relative shrink-0 bg-primary_blue rounded-sm h-[111px] w-[3px]" /> */}
                  <div
                    className="lg:overflow-y-scroll overflow-scroll lg:h-[400px] max-lg:flex max-lg:max-w-full scroll-smooth scrollbar-thin scrollbar-thumb-primary_blue scrollbar-track-gray-200 border-l-2 max-md:border-0"
                    dir={width < 640 ? "ltr" : "rtl"}
                    style={{ scrollbarGutter: "stable" }}
                  >
                    <div
                      className="flex relative flex-col lg:grow lg:shrink-0 lg:basis-0 lg:w-fit w-full lg:ml-16"
                      dir="ltr"
                    >
                      <div className="flex flex-col max-w-full lg:w-[346px] w-[100vw]">
                        <h3 className="text-4xl font-semibold tracking-tighter font-sora leading-none text-[#121212] max-md:text-[28px]">
                          Solution Partners
                        </h3>
                        <p className="mt-7 para3B font-urbanist text-[#232323]">
                          AI technologies like ChatGPT are becoming very common
                          in workplaces, making tasks easier. However, they can
                          also pose privacy problems.
                        </p>
                      </div>

                      <div className="mt-10 mb-32 max-md:mb-0 ">
                        <BorderButton
                          content="Learn More"
                          className="bg-white text-black md:py-[20px] md:px-[40px]"
                          onClick={() => router.push("/company/about")}
                        />
                      </div>
                      <div className="flex lg:hidden justify-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1550d575e5498ba144e05f5d0ec08270a53616179532dbacb458af7ced3da4f8?placeholderIfAbsent=true&apiKey=faedc40a57794e3a93ca0ce63a18da4b"
                          alt="Partnership illustration"
                          className="object-contain z-10 max-w-full  w-auto  h-[255px]"
                        />
                      </div>
                    </div>
                    <div
                      className="flex relative flex-col grow shrink-0 basis-0 lg:w-fit w-full"
                      dir="ltr"
                    >
                      <div className="flex flex-col max-w-full lg:w-[346px] w-[100vw]">
                        <h3 className="text-4xl font-semibold tracking-tighter font-sora leading-none text-[#121212] max-md:text-[28px]">
                          Solution Partners
                        </h3>
                        <p className="mt-7 para3B font-urbanist text-[#232323]">
                          AI technologies like ChatGPT are becoming very common
                          in workplaces, making tasks easier. However, they can
                          also pose privacy problems.
                        </p>
                      </div>
                      <div className="mt-10 mb-32 max-md:mb-0 ">
                        <BorderButton
                          content="Learn More"
                          className="bg-white text-black md:py-[20px] md:px-[40px]"
                          onClick={() => router.push("/company/about")}
                        />
                      </div>
                      <div className="flex lg:hidden justify-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1550d575e5498ba144e05f5d0ec08270a53616179532dbacb458af7ced3da4f8?placeholderIfAbsent=true&apiKey=faedc40a57794e3a93ca0ce63a18da4b"
                          alt="Partnership illustration"
                          className="object-contain z-10 max-w-full  w-auto  h-[255px]"
                        />
                      </div>
                    </div>
                    <div
                      className="flex relative flex-col lg:grow lg:shrink-0 lg:basis-0 lg:w-fit w-full"
                      dir="ltr"
                    >
                      <div className="flex flex-col max-w-full lg:w-[346px] w-[100vw]">
                        <h3 className="text-4xl font-semibold tracking-tighter font-sora leading-none text-[#121212] max-md:text-[28px]">
                          Solution Partners
                        </h3>
                        <p className="mt-7 para3B font-urbanist text-[#232323]">
                          AI technologies like ChatGPT are becoming very common
                          in workplaces, making tasks easier. However, they can
                          also pose privacy problems.
                        </p>
                      </div>
                      <div className="mt-10 mb-32 max-md:mb-0 ">
                        <BorderButton
                          content="Learn More"
                          className="bg-white text-black md:py-[20px] md:px-[40px]"
                          onClick={() => router.push("/company/about")}
                        />
                      </div>
                      <div className="flex lg:hidden justify-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1550d575e5498ba144e05f5d0ec08270a53616179532dbacb458af7ced3da4f8?placeholderIfAbsent=true&apiKey=faedc40a57794e3a93ca0ce63a18da4b"
                          alt="Partnership illustration"
                          className="object-contain z-10 max-w-full  w-auto  h-[255px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-lg:ml-0 max-lg:w-full">
              <div className="lg:flex hidden overflow-hidden relative flex-col items-start px-8 pt-16 min-h-[399px]  rounded-[38px] max-lg:px-5 max-lg:mt-10 max-lg:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc1c09534e6d7eab5da1371ea0d9504507e2fda10dbca6e446cb1506617f608e?placeholderIfAbsent=true&apiKey=faedc40a57794e3a93ca0ce63a18da4b"
                  alt=""
                  className="object-cover absolute inset-0 size-full"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1550d575e5498ba144e05f5d0ec08270a53616179532dbacb458af7ced3da4f8?placeholderIfAbsent=true&apiKey=faedc40a57794e3a93ca0ce63a18da4b"
                  alt="Partnership illustration"
                  className="object-contain z-10 max-w-full aspect-[0.9] w-[366px] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnershipSection;
