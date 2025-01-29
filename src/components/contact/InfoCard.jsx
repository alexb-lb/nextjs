import React from "react";

const InfoCard = ({ imageSrc, altText, title, description, link }) => {
  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink justify-center items-start px-6 py-7 bg-white rounded-3xl basis-0 min-h-[220px] min-w-[240px] max-md:px-5">
      <div className="flex flex-col max-w-full w-[272px]">
        <img
          loading="lazy"
          src={imageSrc}
          alt={altText}
          className="object-contain rounded-xl aspect-square w-[60px]"
        />
        <div className="flex flex-col mt-6 w-full">
          <h2 className="leading-none text-[#020103] font-sora capitalize">
            {title}
          </h2>
          <p className="mt-4 text-sm font-urbanist text-[#808080]">
            {description}
          </p>
          <a
            href="#"
            className="mt-4 tracking-wide leading-loose font-urbanist text-[#232323]"
          >
            {link}
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
