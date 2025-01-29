import React from "react";
import Button from "../common/Button";
import BorderButton from "../Animation/Button";
import Link from "next/link";

interface IntegrationCardProps {
  imageSrc: string;
  name: string;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({
  imageSrc,
  name,
}) => {
  return (
    <div className="flex overflow-hidden flex-col lg:flex-1 shrink justify-center  sm:pb-6 my-auto bg-white rounded-2xl basis-0 lg:min-w-[240px] min-w-[47%] w-[47%]">
      <div className="flex overflow-hidden flex-col justify-center items-center lg:px-20 px-[35px] lg:py-10 py-[32px] w-full bg-white md:bg-violet-50 bg-blend-normal max-md:px-5 ">
        <img
          loading="lazy"
          src={imageSrc}
          alt={`${name} logo`}
          className="object-contain max-w-full rounded-3xl aspect-[1.07] w-[149px]"
        />
      </div>
      <h3 className="self-center hidden sm:block font-sora mt-6 lg:text-3xl text-lg font-semibold text-[#151617]">
        {name}
      </h3>
    </div>
  );
};

const IntegrationsSection: React.FC = () => {
  const integrations = [
    {
      imageSrc: "/images/home/m365.svg",
      name: "M365",
    },
    {
      imageSrc: "/images/home/snowflake.svg",
      name: "SnowFlake",
    },
    {
      imageSrc: "/images/home/salesforce.svg",
      name: "Salesforce",
    },
  ];

  return (
    <section className="flex  sm:mt-0 overflow-hidden z-10 flex-col items-center px-20 py-[56px]  w-full bg-primary_white max-md:px-5 max-md:max-w-full">
      <h2 className=" text-[30px] leading-[37px] md:text-5xl font-semibold font-sora text-center text-[#020103] md:text-black max-md:max-w-full max-md:text-[30px]">
        Our Featured Integrations
      </h2>
      <p className="mt-[28px] text-lg leading-7 font-urbanist text-center text-[#444444] w-[820px] max-md:max-w-full">
        With native API integration for key enterprise applications, LightBeam
        provides a unified platform for sensitive data discovery. Go ahead,
        connect your applications and see for yourself.
      </p>
      {/* <Button
        label="Learn More"
        className="flex flex-col mt-7 max-w-full text-xl font-semibold leading-none text-center text-black rounded-[50px] w-[204px] border border-[#8C70D2] px-[40px] py-[20px]"
      /> */}
      <div className="mt-8 w-full flex justify-center">
        <Link href={"/solution/integration"}>
          <BorderButton
            content={"Learn More"}
            className="text-[16px] md:text-xl font-semibold leading-none text-center text-black rounded-[50px] w-[204px] bg-primary_white px-[32px] py-[12px] md:px-[40px] md:py-[20px]"
            onClick={() => {}}
          />
        </Link>
      </div>
      <div className="flex flex-wrap gap-5 items-center lg:justify-normal justify-center self-stretch mt-10">
        {integrations.map((integration, index) => (
          <IntegrationCard
            key={index}
            imageSrc={integration.imageSrc}
            name={integration.name}
          />
        ))}
      </div>
    </section>
  );
};

export default IntegrationsSection;
