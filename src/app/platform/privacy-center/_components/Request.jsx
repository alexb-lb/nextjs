import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import Link from "next/link";
import React from "react";

const Request = () => {
  return (
    <div
      className="max-md:px-4 flex flex-col md:flex-row items-center lg:items-start justify-center md:py-[50px] lg:py-[150px] lg:pt-[190px] md:px-[30px] lg:px-[80px] gap-[78px] max-md:gap-1"
      style={{
        backgroundImage: "url('/images/platform/requestBg.png')",
        backgroundPosition: "50% 70% ",
        backgroundSize: "cover",
      }}
    >
      <div className="pt-[40px] md:pt-[0px] md:px-[0px] w-[49%] max-md:w-full">
        <div className="max-w-[553px] relative">
          <h3
            className="font-sora text-[30px] leading-[37px] lg:text-[48px] lg:leading-[60px] 
          text-[#020103] font-semibold pb-2 lg:mb-[39px] max-lg:mb-6  md:p-0 text-center lg:text-left"
          >
            Data Subject Request
          </h3>
          <p
            className="font-urbanist md:text-[16px] lg:text-[20px] leading-[28px] 
          text-[#000] mb-8 lg:mb-[58px] p-4 max-md:pt-0 pb-0 md:p-0 text-center lg:text-left"
          >
            Automate your DSR workflows leveraging LightBeam&apos;s
            comprehensive PII/PHI Graph. The information provided in the report
            includes data from all data repositories - structured and
            unstructured.
          </p>
          <div className="relative lg:absolute">
            <Link href={"/template/template1"}>
              <HoverBorderGradientDemo content="Know More" className="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="-mt-[120px] w-[49%] max-md:w-full lg:mt-0 mb-10  max-md:mt-[46px] max-lg:mt-0">
        <img
          loading="lazy"
          src="/images/platform/request.png"
          alt=""
          className="max-md:min-h-[342px] w-full object-fit"
        />
      </div>
    </div>
  );
};

export default Request;
