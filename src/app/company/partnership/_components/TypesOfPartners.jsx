import Image from "next/image";
import React from "react";

const TypesOfPartners = ({ strapiData, imagesData }) => {

  return (
    <>
      <div
        className="bg-[url('/images/company/typePartnerBg1.png')] bg-center bg-cover bg-no-repeat max-md:pt-[40px] pt-[110px] pb-[40px] md:pb-[142px] px-4 xl:px-[80px]"
        id="partnership"
      >
        <h2 className="font-sora text-[#020103] max-md:text-[30px] max-md:leading-[38px]  text-[48px] leading-[60px] font-semibold text-center max-md:mb-[28px] mb-[93px]">
          {strapiData.sections[1].title || "Types of Partners"}
        </h2>

        {/* first card */}
        {/* <div className="mx-auto w-auto xl:w-[100%] 2xl:w-[1276px] h-auto xl:h-[325px] rounded-[16px] bg-white md:pl-[44px] p-4 md:pr-[19px] md:pt-[20px] max-md:flex-col-reverse flex max-md:gap-0 gap-[42px] mb-[40px]">
          <section className="w-full xl:w-[50%]">
            <h2 className="font-sora text-[#020103] text-[28px] leading-[35px] md:text-[36px] md:leading-[45px] font-semibold  max-md:mt-[18px] mb-[16px] md:mb-8">
              {strapiData.sections[2].cards[0].title || "Solution Partner"}
            </h2>
            <p className="text-[#444444] text-[14px] leading-[23px] xl:text-[20px] xl:leading-[28px] font-urbanist mb-[20px] md:mb-8">
              {strapiData.sections[2].cards[0].description ||
                "LightBeam Solution partners provide our customers with the ability to procure our solutions from a trusted provider with a strong LightBeam partnership. Solution partners may act as local distributors."}
            </p>
            <div className="flex flex-wrap gap-[18px]">
              <button className="px-[16px] py-[6px]  border border-[#545CF6] rounded-[27px] text-[#545CF6] font-bold text-[14px] leading-[23px] md:text-[18px] md:leading-[28px] font-urbanist">
                Landmark
              </button>
              <button className="px-[16px] py-[6px] border border-[#545CF6] rounded-[27px] text-[#545CF6] font-bold text-[14px] leading-[23px] md:text-[18px] md:leading-[28px] font-urbanist">
                Efficio
              </button>
            </div>
          </section>
          <section className="w-full xl:w-[50%]">
            <Image
              src="/images/company/typePartner1.png"
              alt=""
              width={600}
              height={300}
              className="max-md:w-full max-md:h-[270px] min-h-full max-md:rounded-[16px]"
            />
          </section>
        </div> */}
        {/* second card */}
        {/* <div className="mx-auto w-auto xl:w-[100%] 2xl:w-[1276px] h-auto xl:h-[325px] rounded-[16px] bg-white md:pl-[19px] p-4 md:pr-[19px] md:pt-[20px] max-md:flex-col flex max-md:gap-0 gap-[42px] mb-[40px]">
          <section className="w-full xl:w-[50%]">
            <Image
              src="/images/company/typePartner2.png"
              alt=""
              width={600}
              height={300}
              className="max-md:w-full max-md:h-[270px] min-h-full min-w-full max-md:rounded-[16px]"
            />
          </section>
          <section className="w-full xl:w-[50%]">
            <h2 className="font-sora text-[#020103] text-[28px] leading-[35px] md:text-[36px] md:leading-[45px] font-semibold  max-md:mt-[18px] mb-[16px] md:mb-8">
              {strapiData.sections[2].cards[1].title || "Cloud Partner"}
            </h2>
            <p className="text-[#444444] text-[14px] leading-[23px] xl:text-[20px] xl:leading-[28px] font-urbanist mb-[20px] md:mb-8">
              {strapiData.sections[2].cards[1].description ||
                "LightBeam's cloud partners integrate software or solutions with the LightBeam platform, aligning to provide compelling joint  offerings to customers. This includes cloud service providers."}
            </p>
            <div className="flex flex-wrap gap-[18px]">
              <button className="px-[16px] py-[6px]  border border-[#545CF6] rounded-[27px] text-[#545CF6] font-bold text-[14px] leading-[23px] md:text-[18px] md:leading-[28px] font-urbanist">
                AWS
              </button>
              <button className="px-[16px] py-[6px] border border-[#545CF6] rounded-[27px] text-[#545CF6] font-bold text-[14px] leading-[23px] md:text-[18px] md:leading-[28px] font-urbanist">
                Azure
              </button>
              <button className="px-[16px] py-[6px] border border-[#545CF6] rounded-[27px] text-[#545CF6] font-bold text-[18px] leading-[28px] font-urbanist">
                GCP
              </button>
              <button className="px-[16px] py-[6px] border border-[#545CF6] rounded-[27px] text-[#545CF6] font-bold text-[14px] leading-[23px] md:text-[18px] md:leading-[28px] font-urbanist">
                Salesforce
              </button>
            </div>
          </section>
        </div> */}
        {/* Third card */}
        {/* <div className="mx-auto w-auto xl:w-[100%] 2xl:w-[1276px] h-auto xl:h-[325px] rounded-[16px] bg-white md:pl-[44px] p-4 md:pr-[19px] md:pt-[20px] max-md:flex-col-reverse flex max-md:gap-0 gap-[42px] mb-[40px]">
          <section className="w-full xl:w-[50%]">
            <h2 className="font-sora text-[#020103] text-[28px] leading-[35px] md:text-[36px] md:leading-[45px] font-semibold  max-md:mt-[18px] mb-[16px] md:mb-8">
              {strapiData.sections[2].cards[2].title || "Technology Partner"}
            </h2>
            <p className="text-[#444444] text-[14px] leading-[23px] xl:text-[20px] xl:leading-[28px] font-urbanist mb-[20px] md:mb-8">
              {strapiData.sections[2].cards[2].description ||
                " LightBeam's technology partners integrate software or solutions with the LightBeam platform, aligning to provide compelling joint offerings to customers. This includes independent software vendors (ISVs)."}
            </p>
            <div className="flex flex-wrap gap-[18px]">
              <button className="px-[16px] py-[6px]  border border-[#545CF6] rounded-[27px] text-[#545CF6] font-bold text-[14px] leading-[23px] md:text-[18px] md:leading-[28px] font-urbanist">
                Dropbox
              </button>
            </div>
          </section>
          <section className="w-full xl:w-[50%]">
            <Image
              src="/images/company/typePartner3.png"
              alt=""
              width={600}
              height={300}
              className="max-md:w-full max-md:h-[270px] min-h-full max-md:rounded-[16px]"
            />
          </section>
        </div> */}

        {strapiData?.sections?.[2]?.cards?.map((item, ind) => (
          <div
            key={ind}
            className="mx-auto w-auto xl:w-[100%] 2xl:w-[1276px] h-auto xl:h-[325px] rounded-[16px] bg-white md:pl-[44px] p-4 md:pr-[19px] md:pt-[20px] max-md:flex-col-reverse flex max-md:gap-0 gap-[42px] mb-[40px]"
          >
            <section className="w-full xl:w-[50%]">
              <h2 className="font-sora text-[#020103] text-[28px] leading-[35px] md:text-[36px] md:leading-[45px] font-semibold  max-md:mt-[18px] mb-[16px] md:mb-8">
                {item?.title}
              </h2>
              <p className="text-[#444444] text-[14px] leading-[23px] xl:text-[20px] xl:leading-[28px] font-urbanist mb-[20px] md:mb-8">
                {item?.description}
              </p>
              <div className="flex flex-wrap gap-[18px]">
                {item?.content?.split(",").map((ele) => (
                  <button key={ele} className="px-[16px] py-[6px]  border border-[#545CF6] rounded-[27px] text-[#545CF6] font-bold text-[14px] leading-[23px] md:text-[18px] md:leading-[28px] font-urbanist">
                    {ele}
                  </button>
                ))}
              </div>
            </section>
            <section className="w-full xl:w-[50%]">
              <Image
                // src="/images/company/typePartner3.png"
                src={imagesData?.sections?.[2]?.cards?.[ind]?.image?.data?.attributes?.url}
                alt=""
                width={600}
                height={300}
                className="max-md:w-full max-md:h-[270px] min-h-full max-md:rounded-[16px]"
              />
            </section>
          </div>
        ))}
      </div>
    </>
  );
};

export default TypesOfPartners;
