import Image from "next/image";
import React from "react";

function FeatureCard({ feature, imagesData }) {
  return (
    <div className="flex flex-col lg:w-[302px] w-[47%] max-md:ml-0 ">
      {/* w-[168px] */}
      <div className="flex overflow-hidden relative flex-col grow justify-start px-4 py-6 w-full capitalize rounded-3xl bg-[url('/images/company/hero_card_bg.svg')] bg-center bg-cover bg-no-repeat ">
        <div className="flex flex-col max-w-full w-[272px]">
          {imagesData && <Image
            loading="lazy"
            src={imagesData}
            height={48}
            width={48}
            // src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb26463089ae5e160bb5f5ec1ace053abc736571aedb82bedfd4f07a4ec92e78?placeholderIfAbsent=true&apiKey=faedc40a57794e3a93ca0ce63a18da4b"
            alt=""
            className="object-contain rounded-xl aspect-square lg:w-[60px] w-[48px]"
          />}
          
          <div className="flex flex-col mt-6 w-full">
            <div className=" para3A font-urbanist text-light_purple h-[44px]">
              {feature?.description}
            </div>
            <div className="small_text mt-4 text-primary_white font-sora ">
              {feature?.title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
