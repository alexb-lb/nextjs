import Image from "next/image";
import React from "react";

function FeatureCard({ feature, iconImage }) {
  return (
    <div className="flex flex-col lg:w-[302px] w-[47%] max-md:ml-0 ">
      {/* w-[168px] */}
      <div className="flex overflow-hidden relative flex-col grow justify-start px-4 py-6 w-full capitalize rounded-3xl bg-[url('/images/company/hero_card_bg.svg')] bg-center bg-cover bg-no-repeat ">
        <div className="flex flex-col max-w-full w-[272px]">
          {iconImage && (
            <Image
              loading="lazy"
              // src="https://cdn.builder.io/api/v1/image/assets/TEMP/83872fb9cec18fab7b3949627804caa6be5fc6a58b053ff9e4a625c1942b65dd?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
              src={iconImage}
              height={60}
              width={60}
              alt=""
              className="object-contain rounded-xl aspect-square lg:w-[60px] w-[48px]"
            />
          )}

          <div className="flex flex-col mt-6 w-full">
            <div className="small_text !text-[18px] font-urbanist text-light_purple h-[44px]">
              {feature?.description}
            </div>
            <div className="para3A !text-[14px] mt-4 text-primary_white font-sora ">
              {feature?.title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
