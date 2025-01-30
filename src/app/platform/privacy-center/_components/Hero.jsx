import React from "react";
import Image from "next/image";

const Hero = ({ sectionData, imageData = {} }) => {
  return (
    <>
      <section className=" px-8 pt-[152px] max-md:pt-[50px] w-full bg-blend-normal lg:max-h-[100vh] max-lg:min-h-[521px] max-md:px-5 max-md:max-w-full ">
        {/* <div className=" mt-16 text-7xl font-bold tracking-tighter max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          <h1 className="bg-clip-text gradient_heading max-md:max-w-full max-md:text-4xl  text-center font-sora">
            Platform <br /> Data Protection
          </h1>
        </div>
        <p className=" font-urbanist mt-6 text-xl leading-snug text-[#EAEAEA] max-md:max-w-full mb-40 max-lg:text-center">
          Accelerate your growth in new markets with speed and confidence.
        </p> */}

        <div className="flex flex-col xl:flex-row items-center justify-center">
          <section className="flex flex-col w-full text-center xl:text-left">
            <p className="text-[14px] md:text-[20px] leading-[28px] mb-4 font-urbanist bg-gradient-to-r from-[#DABEF6] to-[#8D83F5] text-transparent bg-clip-text">
              {/* Powered by Generative AI */}
              {sectionData?.content?.title}
            </p>
            <h3
              className="bg-clip-text gradient_heading w-full max-md:text-4xl font-sora font-bold text-[38px] 
            md:text-[70px] leading-[70px] mb-[20px]"
            >
              {/* Privacy Center */}
              {sectionData?.content?.description}
            </h3>
            <p className=" font-urbanist md:mt-6 text-[14px] md:text-[24px] leading-[26px] text-[#EAEAEA] max-md:max-w-full mb-40 max-lg:text-center">
              {/* Automated privacy-aware data security with 360 visibility and
              control of sensitive <br /> information across SaaS, Cloud &
              On-prem applications. */}
              {sectionData?.content?.content}
            </p>
          </section>
          <section className="w-[354px] md:min-w-[632px] mt-[-150px] md:mt-[-200px] md:mr-[-100px]">
            {imageData?.card?.image?.data?.attributes?.url && (
              <Image
                src={imageData?.card?.image?.data?.attributes?.url}
                alt=""
                width={632}
                height={400}
                layout="responsive"
              />
            )}
          </section>
        </div>
      </section>
    </>
  );
};

export default Hero;
