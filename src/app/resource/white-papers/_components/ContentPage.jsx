"use client";


import BorderButton from "@/components/Animation/Button";

import "../../../../components/Home/home.css";
import Image from "next/image";

const ContentPage = ({ contentList }) => {
  

  return (
    <div className="w-full">

      <div className="flex items-center justify-center md:justify-start gap-4 md:gap-[40px] flex-wrap">
        {contentList &&
          contentList?.map((item, index) => (
            <div
              key={index}
              className={`w-auto md:w-[403px] max-md:border bg-white rounded-2xl p-6 flex flex-col justify-between ${
                item?.attributes?.image?.data?.attributes?.url
                  ? "min-h-[537px]"
                  : "min-h-[238px]"
              }`}
            >
              <div>
                <h2 className="lg:text-[20px] font-semibold mb-2 font-sora">
                  {/* {title} */}
                  {item.attributes.title}
                </h2>
                <p className="text-base mb-10 font-urbanist">
                  {/* {description} */}
                  {item.attributes.description}
                </p>
              </div>
              <div className="mt-auto max-md:mt-0">
                <BorderButton
                  content={"Download"}
                  download={true}
                  // href={ctaLink}
                  href={item.attributes.pdf_url}
                  className={
                    "text-xl font-semibold leading-none text-center text-[#020103] md:px-[34px] md:py-[16px] rounded-full max-md:px-5 bg-primary_white"
                  }
                />
              </div>
              {item?.attributes?.image?.data?.attributes?.url && (
                <div className="relative">
                  <Image
                  height={250}
                  width={350}
                    src={item?.attributes?.image?.data?.attributes?.url }
                    alt="Optional Visual"
                    className="mx-auto max-w-full h-auto"
                  />
                </div>
              )}
            </div>
          ))}
      </div>
      {/* )} */}
    </div>
  );
};

export default ContentPage;
