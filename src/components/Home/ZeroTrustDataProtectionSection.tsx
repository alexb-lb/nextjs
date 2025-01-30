import React from "react";
import HoverBorderGradientDemo from "../common/HoverBorderGradientDemo";
import Link from "next/link";
import Image from "next/image";

interface StatCardProps {
  icon: string;
  title: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex overflow-hidden flex-col grow px-4 pt-6 lg:pb-10 pb-6 w-full text-black capitalize bg-white rounded-3xl lg:min-h-[221px] max-md:mt-5">
      <div className="flex flex-col max-w-full w-[272px]">
        {icon && (
          <Image
            loading="lazy"
            src={icon}
            alt=""
            width={60}
            height={60}
            className="object-contain rounded-xl aspect-square lg:w-[60px] w-[48px]"
          />
        )}

        <div className="flex flex-col mt-6 w-full">
          <p className="lg:text-lg text-[14px] font-urbanist font-medium lg:leading-loose !leading-[22px] h-[44px]">
            {description}
          </p>
          <h3 className="mt-4 lg:text-sm text-[12px] lg:leading-[28px] leading-[17.64px] font-semibold font-sora">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

const ZeroTrustDataProtectionSection = ({ sectionData, imageData }: any) => {
  const stats = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/83872fb9cec18fab7b3949627804caa6be5fc6a58b053ff9e4a625c1942b65dd?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8",
      title: "Customer across different verticals",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dac5c6bb032ea25c27e5f1ed17baee9f3e5af3d985cafff8c97b0894bebab4ce?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8",
      title: "Employees across 7 countries",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3eb850b20452e8d19dc38c8111f40c79afddb37086f1f51198edf893fa0994cb?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8",
      title: "Growing Partner Ecosystem across Globe",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/83872fb9cec18fab7b3949627804caa6be5fc6a58b053ff9e4a625c1942b65dd?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8",
      title: "Patented technology for Entity Resolution",
    },
  ];

  return (
    <section className="flex flex-col pt-[112px] items-center lg:px-0 px-[16px] pb-14 mt-0 w-full bg-primary_white bg-[url('/images/home/zeroBgMob.png')] md:bg-[url('/images/home/zeroBg.png')]  bg-cover bg-center max-md:pt-[54px] max-md:mt-0 max-md:max-w-full md:bg-custom-330">
      <h2 className="lg:text-5xl text-[30px] lg:leading-[60.48px] leading-[37.8px] font-bold md:font-semibold text-center text-[#020103] capitalize lg:w-[685px] w-full  font-sora">
        {/* Zero Trust <br /> Data Protection */}
        {sectionData[0]?.content?.title}
      </h2>
      <p className="lg:mt-6 mt-[16px] font-urbanist lg:text-2xl text-[14px] lg:leading-7 leading-[16.8px] text-center text-[#444444] lg:w-[685px] w-full max-md:max-w-full">
        {/* LightBeam ai pioneers zero-trust data protection, merging data security,
        privacy, and AI governance. It ensures compliance with regulations like
        PCI, GLBA, GDPR, and HIPAA for businesses&apos; growth. */}
        {sectionData[0]?.content?.description}
      </p>
      {/* <Button
        label="Know More"
        className="flex flex-col lg:mt-7 mt-[16.8px] max-w-full text-xl font-semibold leading-none text-center text-white bg-indigo-500 rounded-[50px] px-[40px] py-[20px]"
      /> */}
      <div className="lg:mt-7 mt-[16.8px]">
        <Link href={sectionData[0]?.cta[0]?.url || "#"}>
          <HoverBorderGradientDemo
            content={sectionData[0]?.cta[0]?.text}
            className=" max-w-full text-xl max-md:text-[16px] max-md:leading-[20px] font-semibold leading-none text-center text-white rounded-[50px] px-[40px] py-[20px] max-md:py-3 max-md:px-9 max-md:h-[42px]"
          />
        </Link>
      </div>
      <div className="self-stretch lg:mt-20 mt-[42px] max-md:max-w-full">
        <div className="flex gap-[7px] sm:gap-5 justify-center flex-wrap">
          {sectionData?.[1]?.cards.map((stat: any, index: any) => (
            <div
              key={index}
              className="flex flex-col lg:w-[280px]  2xl:w-[304px] w-[47%] max-md:ml-0 "
            >
              <StatCard
                icon={
                  imageData?.sections?.[16]?.cards?.[index]?.image?.data?.attributes?.url
                }
                title={stat.title}
                description={stat.description}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <h2 className="mt-52 text-5xl font-semibold text-center text-black capitalize max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Awards & Recognition
      </h2> */}
    </section>
  );
};

export default ZeroTrustDataProtectionSection;
