import React from "react";

const Benefits = () => {
  return (
    <div
      className="bg-[url('/images/solution/governance/gover_hero_bg.svg')] bg-center bg-cover bg-no-repeat py-[42px] px-4 md:py-[99px] md:px-[80px]"
      id="benefits"
    >
      <h2 className="text-[30px] leading-[37px] md:title1 text-center mb-[20px] font-sora gradient_heading">
        Benefits
      </h2>
      <p className="font-poppins text-white text-[14px] leading-[17px] md:text-[18px] md:leading-[28px] text-center mb-[39px] md:mb-[73px] max-w-[497px] mx-auto">
        Partner with us to unlock exclusive benefits, rewards, and opportunities
        for business growth.
      </p>

      <div className="flex items-center justify-center flex-wrap gap-[20px]">
        <div className="w-[45%] h-[222px] md:w-[413px] md:h-[198px] rounded-[20px] bg-[#F8F8F91A] px-4 py-[24px] pt-[24px] md:px-[29px] md:pt-[31px]">
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
        </div>
      </div>
    </div>
  );
};

export default Benefits;
