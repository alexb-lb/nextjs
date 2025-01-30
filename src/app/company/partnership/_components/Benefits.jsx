import Image from "next/image";
import React from "react";

const Benefits = ({ strapiData, imagesData }) => {

  
  return (
    <div
      id="benefits"
      // bg-[url('/images/solution/governance/gover_hero_bg.png')]
      className=" bg-center bg-cover bg-no-repeat py-[42px] px-4 md:py-[99px] md:px-[80px]"
      style={{
        backgroundImage: `url(${imagesData?.sections?.[3]?.images?.data?.[0]?.attributes?.url})`
      }}
    >
      <h2 className="text-[30px] leading-[37px] md:title1 text-center mb-[20px] font-sora gradient_heading">
        {strapiData.sections[3]?.content?.title || "Benefits"}
      </h2>
      <p className="font-poppins text-white text-[14px] leading-[17px] md:text-[24px] md:leading-[28px] text-center mb-[39px] md:mb-[73px] max-w-[497px] mx-auto">
        {strapiData.sections[3]?.content?.description ||
          " Partner with us to unlock exclusive benefits, rewards, and opportunities for business growth."}
      </p>

      <div className="flex items-center justify-center flex-wrap gap-[20px]">
        {strapiData.sections[4].cards.map((data, index) => (
          <>
            <div
              className="w-[45%] h-[222px] md:w-[413px] md:h-[198px] rounded-[20px] bg-[#F8F8F91A] px-4 py-[24px] pt-[24px] md:px-[29px] md:pt-[31px]"
              key={index}
            >
              <div className="flex max-md:flex-col gap-[20px] mb-4 md:mb-8">
                {imagesData?.sections?.[4]?.cards?.[index]?.image?.data
                  ?.attributes?.url && (
                  <Image
                    // src="/images/company/bulbIcon.png"
                    src={
                      imagesData?.sections?.[4]?.cards?.[index]?.image?.data
                        ?.attributes?.url
                    }
                    alt=""
                    height={48}
                    width={48}
                    className="w-[48px] h-[48px]"
                  />
                )}

                <p className="font-sora text-[#F5F8FF] w-auto md:w-[200px] text-[14px] leading-[17px] md:text-[22px] md:leading-[28px] font-semibold">
                  {data.title}
                </p>
              </div>
              <p className="text-[#E2DDEC] font-medium text-[12px] leading-[14px] md:leading-[22px] md:text-[18px] font-urbanist">
                {data.description}
              </p>
            </div>
          </>
        ))}
        {/* <div className="w-[45%] h-[222px] md:w-[413px] md:h-[198px] rounded-[20px] bg-[#F8F8F91A] px-4 py-[24px] pt-[24px] md:px-[29px] md:pt-[31px]">
          <div className="flex max-md:flex-col gap-[20px] mb-4 md:mb-8">
            <img
              src="/images/company/bulbIcon.png"
              alt=""
              className="w-[48px] h-[48px]"
            />
            <p className="font-sora text-[#F5F8FF] text-[14px] leading-[17px] md:text-[22px] md:leading-[28px] font-semibold">
              Strategic <br /> Implementation
            </p>
          </div>
          <p className="text-[#E2DDEC] font-medium text-[12px] leading-[14px] md:leading-[22px] md:text-[18px] font-urbanist">
            Partners gain expertise for seamless integration and optimized
            performance.
          </p>
        </div>
        <div className="w-[45%] h-[222px] md:w-[413px] md:h-[198px] rounded-[20px] bg-[#F8F8F91A] px-4 py-[24px] pt-[24px] md:px-[29px] md:pt-[31px]">
          <div className="flex max-md:flex-col gap-[20px] mb-4 md:mb-8">
            <img
              src="/images/company/bulbIcon.png"
              alt=""
              className="w-[48px] h-[48px]"
            />
            <p className="font-sora text-[#F5F8FF] text-[14px] leading-[17px] md:text-[22px] md:leading-[28px] font-semibold">
              Continuous
              <br /> Compliance
            </p>
          </div>
          <p className="text-[#E2DDEC] font-medium text-[12px] leading-[14px] md:leading-[22px] md:text-[18px] font-urbanist">
            Empower executives for ongoing regulatory compliance and minimized
            risks.
          </p>
        </div>
        <div className="w-[45%] h-[222px] md:w-[413px] md:h-[198px] rounded-[20px] bg-[#F8F8F91A] px-4 py-[24px] pt-[24px] md:px-[29px] md:pt-[31px]">
          <div className="flex max-md:flex-col gap-[20px] mb-4 md:mb-8">
            <img
              src="/images/company/bulbIcon.png"
              alt=""
              className="w-[48px] h-[48px]"
            />
            <p className="font-sora text-[#F5F8FF] text-[14px] leading-[17px] md:text-[22px] md:leading-[28px] font-semibold">
              Secure data
              <br /> management
            </p>
          </div>
          <p className="text-[#E2DDEC] font-medium text-[12px] leading-[14px] md:leading-[22px] md:text-[18px] font-urbanist">
            Provide secure data usage and access for peace of mind assurance.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Benefits;
