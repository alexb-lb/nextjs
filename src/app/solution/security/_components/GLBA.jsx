"use client";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import { useRouter } from "next/navigation";

const GLBA = () => {
  const router = useRouter();
  return (
    <div
      className="lg:pt-[68px]  lg:pb-[118px] lg:px-[80px] px-4"
      style={{
        backgroundImage: "url('/images/platform/accessBg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h3 className="font-semibold text-[#020103] font-sora text-[30px] md:text-[48px] leading-[44px] text-center mb-[28px]">
        GLBA Compliance
      </h3>
      <p className="text-[#4D4D4D] font-urbanist text-[16px] md:text-[20px] md:leading-[28px] max-w-[100%] md:max-w-[63%] text-center mx-auto mb-[28px]">
        Clearly identify risks associated with access to your sensitive data,
        both from inside and outside your organization. With continuous
        monitoring of sensitive data sharing, get alerted on any unauthorized
        external sharing of data within a few seconds. Know More
      </p>
      <HoverBorderGradientDemo
        content="Know More"
        // className="bg-indigo-500 text-white mt-3.5 px-[40px] py-[20px] rounded-[50px]"
        onClick={() => router.push("/template/template2")}
      />

      <div className="mt-[65px] flex items-center justify-center flex-wrap gap-[20px]">
        <div className="w-[343.07px] h-[400.31px] md:w-[388px] md:h-[482px] rounded-[20px] bg-white p-2 md:p-[12px]">
          <img loading="lazy" src="/images/platform/access1.png" alt="" />
          <p className="md:px-[27px] pt-6 font-urbanist text-[#444444] text-[16px] md:text-[20px] md:leading-[27px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="w-[343.07px] h-[400.31px] md:w-[388px] md:h-[482px] rounded-[20px] bg-white p-2 md:p-[12px]">
          <img loading="lazy" src="/images/platform/access1.png" alt="" />
          <p className="md:px-[27px] pt-6 font-urbanist text-[#444444] text-[16px] md:text-[20px] md:leading-[27px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="w-[343.07px] h-[400.31px] md:w-[388px] md:h-[482px] rounded-[20px] bg-white p-2 md:p-[12px]">
          <img loading="lazy" src="/images/platform/access1.png" alt="" />
          <p className="md:px-[27px] pt-6 font-urbanist text-[#444444] text-[16px] md:text-[20px] md:leading-[27px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};
export default GLBA;
