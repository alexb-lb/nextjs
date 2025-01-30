import Image from "next/image";
import React from "react";

const Globe = ({ strapiData }) => {


  return (
    <section
      // style={{ backgroundPositionY: `${value}`, paddingTop: `${pt}` }}
      className=" flex overflow-hidden relative flex-col self-stretch mt-0 w-full max-md:max-w-full bg-[url('/images/company/bgGlobe.png')]  bg-center bg-cover md:bg-cover bg-no-repeat  lg:pt-20"
      style={{ backgroundImage: `url(${strapiData?.sections?.[11]?.images?.data?.[0]?.attributes?.url})` }}
    >
      <div className="flex relative flex-col lg:pt-[80px] pt-0 w-full  max-md:pt-0 max-md:max-w-full ">
        <div className="flex relative flex-col items-center px-16  pb-32 w-full  max-lg:px-5 max-md:pb-[4rem] max-md:max-w-full ">
          <div className=" relative flex-wrap gap-5 justify-between mb-0 w-full max-w-[1175px] mx-auto max-md:mb-2.5 max-md:max-w-full ">
            <div className="flex  relative flex-col items-center   rounded-[347px] max-md:max-w-full">
              <h2 className="relative self-center title2 font-sora capitalize gradient_heading bg-clip-text max-md:max-w-full max-md:text-[30px] text-center max-lg:mt-[130px]">
                {/* Our Global Quote */}
                {/* {strapiData?.sections?.[11]?.title} */}
              </h2>
              {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bf8a028c1fe27218ccb24d36ff34f62152074aa38e93d4b45760cd1f366f40e?placeholderIfAbsent=true&apiKey=faedc40a57794e3a93ca0ce63a18da4b"
              alt="Quotation marks"
              className="object-contain self-center lg:mt-[86px] mt-[52px] max-w-full aspect-[3.3] w-[132px] "
            /> */}
              <div className="">
                <div className="absolute top-4 left-[-10px] md:left-[-100px] md:top-[0px] rotate-180">
                  <img
                    loading="lazy"
                    src="/images/common/quotes.png"
                    height={50}
                    width={50}
                    className="max-md:w-[70px] ]"
                    style={{
                      filter: " grayscale(100%)",
                    }}
                  />
                </div>
                <blockquote className="relative  lg:mt-16 mt-[75px] font-urbanist tracking-wide para2 text-[#EAEAEA] w-[95%] mx-auto max-md:max-w-full md:text-center">
                  {strapiData?.sections?.[11]?.content?.description}
                </blockquote>
                <div className="absolute  right-0 md:right-[-100px] md:bottom-[50px] ">
                  <img
                    loading="lazy"
                    src="/images/common/quotes.png"
                    height={50}
                    width={50}
                    className="max-md:w-[70px]"
                  />
                </div>
              </div>
              <p className="text-center lg:mt-16 mt-[102px] max-sm:mb-0 max-lg:mb-4 mr-0 para1 font-urbanist font-bold text-[#D9D9D9]  max-md:max-w-full text-[16px] italic">
                {/* Ryan O&apos;Leary, Research Manager, Privacy and Legal
              Technology <br /> International Data Corporation (IDC). */}
                {strapiData?.sections?.[11]?.content?.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Globe;
