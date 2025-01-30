import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Management = ({ sectionData }) => {
  return (
    <div className="">
      <section className="flex items-stretch gap-[40px] lg:mt-[143px] mt-12 lg:pr-[83px]">
        <div className="relative hidden xl:flex xl:w-[47%]">
          <div className="flex items-center gap-4">
            {sectionData[0]?.images?.data &&
              sectionData[0]?.images?.data[0]?.attributes?.url && (
                <Image
                  loading="lazy"
                  src={
                    sectionData[0]?.images?.data &&
                    sectionData[0]?.images?.data[0]?.attributes?.url
                  }
                  alt=""
                  width={355}
                  height={507}
                />
              )}

            {sectionData[0]?.images?.data &&
              sectionData[0]?.images?.data[1]?.attributes?.url && (
                <Image
                  loading="lazy"
                  src={
                    sectionData[0]?.images?.data &&
                    sectionData[0]?.images?.data[1]?.attributes?.url
                  }
                  alt=""
                  height={611}
                  width={372}
                  className="size-full"
                />
              )}
          </div>
        </div>
        <div className="xl:w-[53%] relative">
          <h3
            className="font-sora text-[30px] md:text-[48px] md:leading-[60px] 
            text-[#020103] font-semibold mb-4 md:mb-[39px] text-center xl:text-left px-4 lg:px-0"
          >
            {/* Consent Management - <br /> Universal and Cookie/Pixel */}
            {sectionData[0]?.content?.title}
          </h3>
          <p
            className="font-urbanist text-[14px] md:text-[24px] leading-[28px] text-[#444444] 
            md:mb-[47px] mb-[25px] text-center xl:text-left px-6 md:px-[100px] lg:px-0"
          >
            {/* LightBeam ai pioneers zero-trust data protection, merging data security, privacy, and AI governance. It ensures compliance with regulations like PCI, GLBA, GDPR, and HIPAA for businesses&apos; growth. */}
            {sectionData[0]?.content?.description}
          </p>

          <div className="max-md:mt-8 mt-[47px] max-md:px-6 px-10 xl:px-0">
            <div className="flex gap-[26px] mb-6 md:mb-[32px] items-start">
              <div>
                <Image
                  loading="lazy"
                  src="/images/platform/pOne.png"
                  alt=""
                  className="max-w-[35.99px] lg:max-w-none"
                  height={52}
                  width={52}
                />
              </div>

              <p className="font-urbanist text-[12px] md:text-[18px] leading-[18px] md:leading-[21px] text-[#232323] ">
                {/* LightBeam Privacy Ops connects to all your data sources where
                you capture customers&apos; consents, and ensure consistency and
                adherence to your policies. */}
                {sectionData[1]?.title}
              </p>
            </div>
            <div className="flex gap-[26px] mb-6 md:mb-[32px] items-start">
              <div>
                <Image
                  loading="lazy"
                  src="/images/platform/pTwo.png"
                  alt=""
                  className="max-w-[35.99px] lg:max-w-none"
                  height={52}
                  width={52}
                />
              </div>

              <p
                className="font-urbanist text-[12px] md:text-[18px] leading-[18px] 
                md:leading-[21px] text-[#232323]"
              >
                {/* Operationalize cookie compliance for CCPA, GDPR, LGPD and many
                more */}
                {sectionData[2]?.title}
              </p>
            </div>
            <div className="flex gap-[26px] mb-6 md:mb-[32px] items-start">
              <div>
                <Image
                  loading="lazy"
                  src="/images/platform/pThree.png"
                  alt=""
                  className="max-w-[35.99px] lg:max-w-none"
                  height={52}
                  width={52}
                />
              </div>

              <p className="font-urbanist text-[12px] md:text-[18px] leading-[18px] md:leading-[21px] text-[#232323] ">
                {/* Lightbeam Cookie management enables you to configure branded
                banners, integrated with your website and track consent of your
                website visitors. */}
                {sectionData[3]?.title}
              </p>
            </div>
          </div>

          <div className="relative xl:absolute ">
            <Link href={sectionData[0]?.cta[0]?.url || "#"}>
              <HoverBorderGradientDemo
                content={sectionData[0]?.cta[0]?.text}
                className=""
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Management;
