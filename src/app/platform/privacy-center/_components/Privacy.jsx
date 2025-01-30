import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Privacy = ({ sectionData }) => {
  return (
    <div
      className=""
      style={{
        backgroundImage: "url('/images/platform/privacyBg1.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundPositionY: "-350px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pt-[40px] lg:pt-[142px] pb-10  lg:pb-[161px] ">
        <section className="flex flex-col justify-center lg:justify-start xl:flex-row lg:gap-[78px] md:gap-[20px] px-[20px] lg:pl-[80px]">
          <div className="lg:max-w-[35%] relative">
            <h3
              className="font-sora text-[30px] md:text-[48px] md:leading-[60px] 
            text-[#020103] font-semibold mb-4 md:mb-[20px] lg:mb-[39px] text-center xl:text-left"
            >
              {/* Privacy Impact Assessment (PIA) */}
              {sectionData[0]?.content?.title}
            </h3>
            <p
              className="font-urbanist text-[16px] md:text-[24px] leading-[28px] 
            text-[#000] md:mb-[20px] lg:mb-[58px] text-center xl:text-left"
            >
              {/* Onboarding a new process? Wondering what sensitive information you
              might have in a particular system of record? */}
              {sectionData[0]?.content?.description}
            </p>
            <div className="relative xl:absolute max-md:my-6">
              <Link href={sectionData[0]?.cta[0]?.url || "#"}>
                <HoverBorderGradientDemo
                  content={sectionData[0]?.cta[0]?.text}
                  className=""
                />
              </Link>
            </div>
          </div>
          <div className="relative lg:max-w-[49%] ">
            {sectionData[0]?.images?.data[0]?.attributes?.url && (
              <Image
                src={
                  sectionData &&
                  sectionData[0]?.images?.data &&
                  sectionData[0]?.images?.data[0]?.attributes?.url
                }
                alt=""
                width={500}
                height={342}
                className="max-lg:w-full min-h-[342px] object-cover rounded-lg"
                layout="responsive"
              />
            )}

            <div
              className="w-full lg:w-[600px] md:py-[24px] px-[42px] bg-[#1c1152] rounded-[16px] 
              absolute lg:left-[180px] bottom-[-15px] md:bottom-[-40px] z-10 scale-[1.01] max-md:bg-none bg-[url('/images/platform/lineBg.png')] bg-cover bg-center"
            >
              <p
                className="font-urbanist text-white text-[14px] md:text-[17px] 
              md:leading-[27px] italic text-center p-1"
              >
                {sectionData[0]?.content?.content ||
                  "Privacy Ops will visualize what&apos;s in there and who has access to it."}
              </p>
            </div>
          </div>
        </section>
        <section className="flex md:items-start xl:gap-[35px] mt-[100px] lg:mt-[143px] xl:pr-[103px]">
          <div className="relative hidden xl:flex xl:w-[50%]">
            <div className="flex items-center gap-4 md:gap-8 w-full">
              {sectionData[1]?.images?.data[0]?.attributes?.url && (
                <Image
                  src={
                    sectionData[1]?.images?.data &&
                    sectionData[1]?.images?.data[0]?.attributes?.url
                  }
                  alt=""
                  width={355}
                  height={200}
                  className="max-w-[355px] w-[42%]"
                  layout="responsive"
                />
              )}

              {sectionData[1]?.images?.data[1]?.attributes?.url && (
                <Image
                  src={
                    sectionData[1]?.images?.data &&
                    sectionData[1]?.images?.data[1]?.attributes?.url
                  }
                  alt=""
                  width={372}
                  height={200}
                  className="max-w-[372px] w-[48%]"
                  layout="responsive"
                />
              )}
            </div>
          </div>
          <div className="xl:w-[50%] relative">
            <h3
              className="font-sora text-[30px] md:text-[48px] md:leading-[60px] 
            text-[#020103] font-semibold mb-4 md:mb-[39px] text-center xl:text-left px-4 lg:px-0 lg:mt-[-10px]"
            >
              {/* Consent Management - Universal And Cookie/Pixel */}
              {sectionData[1]?.content?.title}
            </h3>
            <p
              className="font-urbanist text-[14px] md:text-[24px] leading-[28px] text-[#444444] 
            md:mb-[32px] text-center xl:text-left px-4 md:px-[100px] lg:px-0"
            >
              {/* LightBeam ai pioneers zero-trust data protection, merging data
              security, privacy, and AI governance. It ensures compliance with
              regulations like PCI, GLBA, GDPR, and HIPAA for businesses&apos;
              growth. */}
              {sectionData[1]?.content?.description}
            </p>

            <div className="relative max-md:my-8 lg:hidden">
              <Link href={sectionData[1]?.cta[0]?.url || "#"}>
                <HoverBorderGradientDemo
                  content={sectionData[1]?.cta[0]?.text}
                  className=""
                />
              </Link>
            </div>

            <div className="md:my-[47px]  px-4 xl:px-0">
              <div className="flex gap-[26px] mb-6 md:mb-[32px] items-start">
                <div>
                  <Image
                    src="/images/platform/pOne.png"
                    alt=""
                    width={52}
                    height={52}
                    className="min-w-[35.99px] lg:min-w-[52px]"
                    layout="responsive"
                  />
                </div>

                <p className="font-urbanist text-[12px] md:text-[18px] leading-[18px] md:leading-[21px] text-[#232323] ">
                  {/* LightBeam Privacy Ops connects to all your data sources where
                  you capture customers&apos; consents, and ensure consistency
                  and adherence to your policies. */}
                  {sectionData[2]?.title}
                </p>
              </div>
              <div className="flex gap-[26px] mb-6 md:mb-[32px] items-center">
                <div>
                  <Image
                    src="/images/platform/pTwo.png"
                    alt=""
                    width={52}
                    height={52}
                    className="min-w-[35.99px] lg:min-w-[52px]"
                    layout="responsive"
                  />
                </div>

                <p
                  className="font-urbanist text-[12px] md:text-[18px] leading-[18px] 
                md:leading-[21px] text-[#232323]"
                >
                  {/* Operationalize cookie compliance for CCPA, GDPR, LGPD and many
                  more */}
                  {sectionData[3]?.title}
                </p>
              </div>
              <div className="flex gap-[26px] mb-6 md:mb-[32px] items-start">
                <div>
                  <Image
                    src="/images/platform/pThree.png"
                    alt=""
                    width={52}
                    height={52}
                    className="min-w-[35.99px] lg:min-w-[52px]"
                    layout="responsive"
                  />
                </div>

                <p className="font-urbanist text-[12px] md:text-[18px] leading-[18px] md:leading-[21px] text-[#232323] ">
                  {/* Lightbeam Cookie management enables you to configure branded
                  banners, integrated with your website and track consent of
                  your website visitors. */}
                  {sectionData[4]?.title}
                </p>
              </div>
            </div>
            {/* button for mobile  */}
            <div className="w-full justify-start  relative max-md:my-8 hidden lg:flex ">
              <Link href={sectionData[1]?.cta[0]?.url || "#"}>
                <HoverBorderGradientDemo
                  content={sectionData[1]?.cta[0]?.text}
                  className=""
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
