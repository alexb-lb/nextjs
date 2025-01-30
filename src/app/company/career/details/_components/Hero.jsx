import React from "react";



function Hero({ strapiData, jobData = [] }) {
  return (
    <section className="flex  flex-col items-center self-center lg:mt-16 mt-[45px] max-w-full text-center h-[200px] m-auto">
      <div className="flex flex-col items-start w-full max-lg:px-[24px]">
        <div className=" font-sora  flex flex-col items-start max-w-full">
          <h1 className="title1 gradient_heading mt-4 tracking-tighter mb-[12px] max-md:max-w-full ">
            {jobData[0]?.attributes?.title}
          </h1>
        </div>
        <p className=" para3B font-urbanist mb-8 text-[#EAEAEA] mt-1 pb-6 sm:pb-[1px] sm:mt-4 first-line:max-md:max-w-full lg:max-w-[561px] text-xl">
          {/* {jobData[0]?.attributes?.description ||
            "Location - India  o  Full-Time"} */}
          {`Location - ${jobData && jobData[0]?.attributes?.country} o ${
            jobData && jobData[0]?.attributes?.mode
          }`}
        </p>
      </div>
    </section>
  );
}

export default Hero;
