import React from "react";

import BorderButton from "../Animation/Button";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IntegrationCardProps {
  imageSrc: string;
  name: string;
  img_url: string;
  cta_url?: string;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({
  imageSrc,
  name,
  img_url,
  cta_url,
}) => {
  const router = useRouter();
  return (
    <div
      className={`flex overflow-hidden flex-col lg:flex-1 shrink justify-center  sm:pb-6 my-auto bg-white rounded-2xl basis-0 lg:min-w-[240px] min-w-[47%] w-[47%] ${
        cta_url ? "cursor-pointer hover:shadow-md" : ""
      }`}
      onClick={() => cta_url && router.push(cta_url)}
    >
      <div className="flex overflow-hidden flex-col justify-center items-center lg:px-20 px-[35px] lg:py-10 py-[32px] w-full bg-white md:bg-violet-50 bg-blend-normal max-md:px-5 ">
        {img_url && (
          <Image
            loading="lazy"
            src={img_url}
            alt={`${name} logo`}
            height={70}
            width={70}
            className="object-contain max-w-full rounded-3xl aspect-[1.07] w-[149px]"
          />
        )}
      </div>
      <h3 className="self-center hidden sm:block font-sora mt-6 lg:text-3xl text-lg font-semibold text-[#151617]">
        {name}
      </h3>
    </div>
  );
};

const IntegrationsSection = ({ sectionData = [], imageData }: any) => {
  // const integrations = [
  //   {
  //     imageSrc: "/images/home/int1.svg",
  //     name: "M365",
  //   },
  //   {
  //     imageSrc: "/images/home/int2.svg",
  //     name: "SnowFlake",
  //   },
  //   {
  //     imageSrc: "/images/home/int3.svg",
  //     name: "Salesforce",
  //   },
  // ];

  return (
    <section className="flex  sm:mt-0 overflow-hidden z-10 flex-col items-center px-20 py-[56px]  w-full bg-primary_white max-md:px-5 max-md:max-w-full">
      <h2 className=" text-[30px] leading-[37px] md:text-5xl font-semibold font-sora text-center text-[#020103] md:text-black max-md:max-w-full max-md:text-[30px]">
        {/* Our Featured Integrations */}
        {sectionData && sectionData[0]?.content?.title}
      </h2>
      <p className="mt-[28px] text-2xl leading-7 font-urbanist text-center text-[#444444] w-[820px] max-md:max-w-full">
        {/* With native API integration for key enterprise applications, LightBeam
        provides a unified platform for sensitive data discovery. Go ahead,
        connect your applications and see for yourself. */}
        {sectionData && sectionData[0]?.content?.description}
      </p>
      {/* <Button
        label="Learn More"
        className="flex flex-col mt-7 max-w-full text-xl font-semibold leading-none text-center text-black rounded-[50px] w-[204px] border border-[#8C70D2] px-[40px] py-[20px]"
      /> */}
      <div className="mt-8 w-full flex justify-center">
        <Link
          href={
            (sectionData && sectionData[0]?.cta[0]?.url) ||
            "/solution/integration"
          }
        >
          <BorderButton
            content={sectionData && sectionData[0]?.cta[0]?.text}
            className="text-[16px] md:text-xl font-semibold leading-none text-center text-black rounded-[50px] w-[204px] bg-primary_white px-[32px] py-[12px] md:px-[40px] md:py-[20px]"
            onClick={() => {}}
            href={""}
          />
        </Link>
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-center  mt-10">
        {sectionData &&
          sectionData[1]?.cards?.map((integration: any, index: any) => (
            <IntegrationCard
              key={index}
              imageSrc={integration.img_url || null}
              name={integration.title}
              img_url={imageData?.cards[index]?.image?.data?.attributes?.url}
              cta_url={integration?.cta_url}
            />
          ))}
      </div>
    </section>
  );
};

export default IntegrationsSection;
