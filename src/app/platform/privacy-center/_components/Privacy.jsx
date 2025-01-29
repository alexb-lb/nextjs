import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import React from "react";
import Link from "next/link";

const Privacy = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: "url('/images/platform/privacyBg.png')",
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
              Privacy Impact Assessment (PIA)
            </h3>
            <p
              className="font-urbanist text-[16px] md:text-[20px] leading-[28px] 
            text-[#000] md:mb-[20px] lg:mb-[58px] text-center xl:text-left"
            >
              Onboarding a new process? Wondering what sensitive information you
              might have in a particular system of record?
            </p>
            <div className="relative xl:absolute max-md:my-6">
              <Link href={"/template/template1"}>
                <HoverBorderGradientDemo content="Know More" className="" />
              </Link>
            </div>
          </div>
          <div className="relative lg:max-w-[49%] ">
            <img
              loading="lazy"
              src="/images/platform/privacy.png"
              alt=""
              className="max-lg:w-full min-h-[342px] object-cover rounded-lg"
            />
            <div
              className="w-full lg:w-[600px] md:py-[24px] px-[42px] bg-[#1c1152] rounded-[16px] 
              absolute lg:left-[180px] bottom-[-15px] md:bottom-[-40px] z-10 scale-[1.01] max-md:bg-none bg-[url('/images/platform/lineBg.png')] bg-cover bg-center"
            >
              <p
                className="font-urbanist text-white text-[14px] md:text-[17px] 
              md:leading-[27px] italic text-center p-1"
              >
                Privacy Ops will visualize what&apos;s in there and who has
                access to it.
              </p>
            </div>
          </div>
        </section>
        <section className="flex md:items-start xl:gap-[35px] mt-[100px] lg:mt-[143px] xl:pr-[103px]">
          <div className="relative hidden xl:flex xl:w-[50%]">
            <div className="flex items-center gap-4 md:gap-8">
              <img loading="lazy" src="/images/platform/p1.png" alt="" />

              <img loading="lazy" src="/images/platform/p2.png" alt="" />
            </div>
          </div>
          <div className="xl:w-[50%] relative">
            <h3
              className="font-sora text-[30px] md:text-[48px] md:leading-[60px] 
            text-[#020103] font-semibold mb-4 md:mb-[39px] text-center xl:text-left px-4 lg:px-0 lg:mt-[-10px]"
            >
              Consent Management - Universal And Cookie/Pixel
            </h3>
            <p
              className="font-urbanist text-[14px] md:text-[22px] leading-[28px] text-[#444444] 
            md:mb-[32px] text-center xl:text-left px-4 md:px-[100px] lg:px-0"
            >
              LightBeam ai pioneers zero-trust data protection, merging data
              security, privacy, and AI governance. It ensures compliance with
              regulations like PCI, GLBA, GDPR, and HIPAA for businesses&apos;
              growth.
            </p>

            <div className="relative max-md:my-8 lg:hidden">
              <Link href={"/template/template1"}>
                <HoverBorderGradientDemo content="Know More" className="" />
              </Link>
            </div>

            <div className="md:my-[47px]  px-4 xl:px-0">
              <div className="flex gap-[26px] mb-6 md:mb-[32px] items-start">
                <div>
                  <img
                    loading="lazy"
                    src="/images/platform/pOne.png"
                    alt=""
                    className="max-w-[35.99px] lg:max-w-none"
                  />
                </div>

                <p className="font-urbanist text-[12px] md:text-[18px] leading-[18px] md:leading-[21px] text-[#232323] ">
                  LightBeam Privacy Ops connects to all your data sources where
                  you capture customers&apos; consents, and ensure consistency
                  and adherence to your policies.
                </p>
              </div>
              <div className="flex gap-[26px] mb-6 md:mb-[32px] items-center">
                <div>
                  <img
                    loading="lazy"
                    src="/images/platform/pTwo.png"
                    alt=""
                    className="max-w-[35.99px] lg:max-w-none"
                  />
                </div>

                <p
                  className="font-urbanist text-[12px] md:text-[18px] leading-[18px] 
                md:leading-[21px] text-[#232323]"
                >
                  Operationalize cookie compliance for CCPA, GDPR, LGPD and many
                  more
                </p>
              </div>
              <div className="flex gap-[26px] mb-6 md:mb-[32px] items-start">
                <div>
                  <img
                    loading="lazy"
                    src="/images/platform/pThree.png"
                    alt=""
                    className="max-w-[35.99px] lg:max-w-none"
                  />
                </div>

                <p className="font-urbanist text-[12px] md:text-[18px] leading-[18px] md:leading-[21px] text-[#232323] ">
                  Lightbeam Cookie management enables you to configure branded
                  banners, integrated with your website and track consent of
                  your website visitors.
                </p>
              </div>
            </div>
            {/* button for mobile  */}
            <div className="w-full justify-start  relative max-md:my-8 hidden lg:flex ">
              <Link href={"/template/template1"}>
                <HoverBorderGradientDemo content="Know More" className="" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
