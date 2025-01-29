import React from "react";

function FeatureCard({ iconSrc, title, description }) {
  return (
    <div className="flex flex-col lg:w-[302px] w-[47%] max-md:ml-0 ">
      {/* w-[168px] */}
      <div className="flex overflow-hidden relative flex-col grow justify-center px-4 py-6 w-full capitalize rounded-3xl bg-[url('/images/company/hero_card_bg.svg')] bg-center bg-cover bg-no-repeat ">
        <div className="flex flex-col max-w-full w-[272px]">
          <img
            loading="lazy"
            src={iconSrc}
            alt=""
            className="object-contain rounded-xl aspect-square lg:w-[60px] w-[48px]"
          />
          <div className="flex flex-col mt-6 w-full">
            <div className="small_text font-urbanist text-light_purple">
              {description}
            </div>
            <div className="para3A mt-4 text-primary_white font-sora ">
              {title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
