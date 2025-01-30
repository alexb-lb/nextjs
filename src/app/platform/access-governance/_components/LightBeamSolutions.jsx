import Image from "next/image";
// const integrations = [
//   {
//     id: "m365-suite",
//     title: "M365",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
//     image: "/images/solution/integration/int1.svg",
//     reverse: false,
//   },
//   {
//     id: "suite-google",
//     title: "SuiteGoogle",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
//     image: "/images/solution/integration/int2.svg",
//     reverse: true,
//   },
//   {
//     id: "gsuite",
//     title: "Gsuite",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
//     image: "/images/solution/integration/int3.svg",
//     reverse: false,
//   },
// ];

const LightBeamSolutions = ({ sectionData, imageData }) => {
  return (
    <section className="flex flex-col items-center max-md:px-8 max-lg:px-[80px] max-lg:py-[32px]">
      <h3 className="font-semibold text-[#020103] font-sora text-[30px] md:text-[48px] leading-[44px] text-center lg:mb-[28px]">
        {/* Explore LightBeam Solutions */}
        {sectionData[0]?.title}
      </h3>
      {sectionData[1]?.cards?.map((integration, index) => (
        // <IntegrationBox  key={index} {...integration} />
        <div
          key={integration?.id}
          //   ref={(el) => (cardRefs.current[index] = el)}
          className={`flex max-lg:flex-col lg:gap-[88px] gap-4 items-center lg:mt-[100px] mt-10 max-lg:text-center ${
            index % 2 !== 0 ? "flex-row-reverse" : ""
          }`}
          //   id={exp[index]}
        >
          <div className="lg:w-[542px] w-full">
            <h2 className="text-[28px] leading-[35px] md:title2 font-sora font-semibold">
              {integration?.title}
            </h2>
            <p className="font-urbanist text-[14px] leading-[20px] md:text-[20px] md:leading-[28px] text-[#444444] lg:my-[32px] mt-4">
              {integration?.description}
            </p>
          </div>
          <div className=" lg:w-[649px] w-full lg:h-[315px] rounded-[16px] overflow-hidden">
            {imageData?.cards[index]?.image?.data?.attributes?.url && (
              <Image
                src={imageData?.cards[index]?.image?.data?.attributes?.url}
                alt={imageData?.cards[index]?.title}
                layout="fill"
                objectFit="cover"
                className="min-h-[315px] min-w-full"
              />
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
export default LightBeamSolutions;
