import React from "react";
import Image from "next/image";

const Hero = ({ sectionData }) => {
  return (
    <>
      <section className=" px-8 pt-[152px] max-md:pt-[52px] w-full bg-blend-normal lg:max-h-[100vh] max-lg:min-h-[606px] max-md:px-5 max-md:max-w-full">
        {/* <div className=" mt-16 text-7xl font-bold tracking-tighter max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          <h1 className="bg-clip-text gradient_heading max-md:max-w-full max-md:text-4xl  text-center font-sora">
            Platform <br /> Data Protection
          </h1>
        </div>
        <p className=" font-urbanist mt-6 text-xl leading-snug text-[#EAEAEA] max-md:max-w-full mb-40 max-lg:text-center">
          Accelerate your growth in new markets with speed and confidence.
        </p> */}

        <div className="flex flex-col lg:flex-row items-center justify-center">
          <section className="flex flex-col w-full text-center lg:text-left">
            <p className="text-[14px] md:text-[20px] leading-[28px] mb-4 font-urbanist bg-gradient-to-r from-[#DABEF6] to-[#8D83F5] text-transparent bg-clip-text">
              {/* Powered by Generative AI */}
              {/* {sectionData?.content?.title} */}
            </p>
            <h3 className="bg-clip-text gradient_heading w-full font-sora font-bold title1 mb-[20px] ">
              {/* LightBeam Access Governance */}
              {sectionData?.content?.title}
            </h3>
            <p className=" font-urbanist md:mt-6 text-[14px] md:text-[24px] leading-[26px] text-[#EAEAEA] max-md:max-w-full mb-40 max-lg:text-center">
              {/* LightBeam.ai ensures secure data across locations, maintaining
              control, compliance, and privacy for all data types, enabling a
              zero-trust data protection approach. */}
              {sectionData?.content?.description}
            </p>
          </section>
          <section className="w-[354px] md:min-w-[620px] mt-[-150px] md:mt-[-200px] md:mr-[-100px]">
            <Image
              src="/images/platform/governanceHero.png"
              alt=""
              width={620}
              height={300}
              layout="responsive"
            />
          </section>
        </div>
      </section>
    </>
  );
};

export default Hero;
