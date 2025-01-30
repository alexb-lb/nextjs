import Image from "next/image";

const IntegrationCard = ({ imageSrc, name }) => {
  return (
    <div className="flex overflow-hidden flex-col lg:flex-1 shrink justify-center  sm:pb-6 my-auto bg-white rounded-2xl basis-0 lg:min-w-[240px] min-w-[150px] lg:w-[150px] w-[48%]">
      <div className="flex overflow-hidden flex-col justify-center items-center lg:px-20 px-[35px] lg:py-10 py-[32px] w-full bg-white max-lg:shadow-md bg-blend-normal ">
        {imageSrc && (
          <Image
            loading="lazy"
            width={150}
            height={100}
            src={imageSrc}
            alt={`${name} logo`}
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

const Integration = ({ sectionData, imagesData }) => {
  return (
    <section className="flex mt-[57px] sm:mt-0 overflow-hidden z-10 flex-col items-center lg:px-20 lg:pt-20 pb-[20px]  w-full bg-primary_white max-md:max-w-full">
      <h2 className="text-5xl font-semibold font-sora text-center text-black max-md:max-w-full max-md:text-[30px] max-md:leading-[37px]">
        {/* Featured <br className="md:hidden" /> Integrations */}
        {sectionData[0]?.title}
      </h2>
      <div className="flex flex-wrap gap-5 items-center lg:justify-normal justify-center self-stretch mt-10">
        {sectionData[1]?.cards.map((integration, index) => (
          <IntegrationCard
            key={index}
            imageSrc={
              (imagesData?.cards &&
                imagesData?.cards[index]?.image?.data?.attributes?.url) ||
              `/images/solution/integration/inte${index + 1}.svg`
            }
            name={integration?.title}
          />
        ))}
      </div>
    </section>
  );
};
export default Integration;
