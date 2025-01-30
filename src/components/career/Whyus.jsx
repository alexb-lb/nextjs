import Image from "next/image";
import React from "react";

const Whyus = ({ strapiData }) => {


  return (
    <div
      className="flex flex-col items-center justify-center pt-12  w-full relative"
      style={{
        backgroundImage:
          'url("https://cdn.builder.io/api/v1/image/assets/TEMP/8c429d9b6bce0b23291a73dabba5ebc0cd54e762c7f5eb27fa71fe6dd70d9051?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887")',
        backgroundSize: "cover",

        backgroundPosition: "center",
        backgroundPositionY: "-130px",
      }}
      id="why_us"
    >
      <section className=" w-full text-center md:pt-12 max-md:px-[21px]">
        <h2 className="text-[30px] leading-[37px] md:text-[48px] font-semibold font-sora md:leading-[45px] mb-6">
          {strapiData.sections[8].title || "Why Us"}
        </h2>
        <p className="text-[14px] leading-[20px] md:text-[24px] font-normal font-urbanist md:leading-[26px] mb-[34px] md:mb-20 xl:max-w-[800px] mx-auto">
          {strapiData.sections[8]?.content?.description}
        </p>

        <div className="flex flex-col justify-center items-center gap-6 max-w-4xl mx-auto ">
          {/* Card 1 */}
          <div className=" flex   max-md:flex-col md:gap-5  bg-[#E0E7FF] p-6 border-[#fff] border-[2.3px] rounded-[20px] w-auto md:w-[530px] h-auto md:h-[140px]">
            <div className="text-[42px] max-md:text-start mt-[-10px] font-extrabold font-urbanist text-[#A9B4DE] md:mb-4">
              01
            </div>
            <div>
              <h3 className="text-[22px] text-left font-medium font-sora text-[#232323] leading-8 mb-[25px] md:mb-1">
                {strapiData.sections[9].cards[0].title ||
                  "Comprehensive Security Solutions "}
              </h3>
              <p className="text-[14px] font-normal text-left font-urbanist text-[#232323] leading-[20px] ">
                {strapiData.sections[9].cards[0].description ||
                  "LightBeam offers robust data protection, encryption, and secure access management for peace of mind."}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className=" flex max-md:flex-col md:gap-5 md:mr-[-30%] bg-[#E0F0FF] p-6 border-[#fff] border-[2.3px] rounded-[20px] w-auto md:w-[530px] h-auto md:h-[140px]">
            <div className=" text-[42px] sm:text-[60px] mt-[-10px] sm:mt-[0px]  leading-[70px] max-md:text-start font-extrabold font-urbanist text-[#A9B4DE] md:mb-4">
              02
            </div>
            <div>
              <h3 className="text-[22px] text-left font-medium font-sora text-[#232323] leading-8 mb-[25px] md:mb-1">
                {strapiData.sections[9].cards[1].title ||
                  "Efficient Compliance Management"}
              </h3>
              <p className="text-[14px] font-normal text-left font-urbanist text-[#232323] leading-[20px] ">
                {strapiData.sections[9].cards[1].description ||
                  "Automate regulatory compliance workflows with LightBeam's  intuitive tools and real-time monitoring capabilities."}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className=" flex  max-md:flex-col md:gap-5 md:mr-[-60%] bg-[#F4F6FB] p-6 border-[#fff] border-[2.3px] rounded-[20px] w-auto md:w-[560px] h-auto md:h-[140px]">
            <div className="text-[42px] sm:text-[60px] mt-[-10px] sm:mt-[0px]  leading-[70px]  max-md:text-start font-extrabold font-urbanist text-[#A9B4DE] md:mb-4">
              03
            </div>
            <div>
              <h3 className="text-[22px] text-left font-medium font-sora text-[#232323] leading-8 mb-[25px] md:mb-1">
                {strapiData.sections[9].cards[1].title ||
                  "Scalable Performance Enhancement"}
              </h3>
              <p className="text-[14px] font-normal text-left font-urbanist text-[#232323] leading-[20px] ">
                {strapiData.sections[9].cards[1].description ||
                  " LightBeam's advanced analytics and insights optimize system performance, ensuring operational efficiency and growth  readiness."}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* {strapiData?.sections?.[8]?.images?.data?.[0]?.attributes?.url && (
        <Image
          src={strapiData?.sections?.[8]?.images?.data?.[0]?.attributes?.url}
          alt="Question Mark"
          width={300}
          height={400}
          className="absolute bottom-14 left-14 max-md:hidden"
        />
      )} */}
    </div>
  );
};

export default Whyus;
