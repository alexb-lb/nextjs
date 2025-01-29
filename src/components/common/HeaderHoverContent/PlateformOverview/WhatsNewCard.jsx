import React from "react";

const WhatsNewCard = ({ author, date, title, imageSrc, link }) => {
  return (
    <article className="flex overflow-hidden gap-4 justify-center px-3 py-2 mt-4 bg-white rounded-3xl min-h-[116px]">
      <div className="flex flex-col justify-center items-start my-auto w-[187px]">
        <div className="flex gap-1.5 justify-center items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fda9bf2de7c0ad86a9e545ea8e457a2407ee57f3dd2e253eb083d019bac92650?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square rounded-[32px]"
          />
          <div className="flex flex-col self-stretch px-px my-auto w-[78px]">
            <div className="text-xs font-semibold leading-none font-urbanist">
              {author}
            </div>
            <div className="self-start text-xs font-medium leading-none font-urbanist">
              {date}
            </div>
          </div>
        </div>
        <h3 className="self-stretch mt-4 text-sm font-semibold font-urbanist">
          {title}
        </h3>
        <a
          href={link}
          className="flex gap-1 justify-center items-center py-1 mt-4 text-xs font-semibold text-indigo-500 capitalize cursor-pointer"
        >
          <span className="self-stretch my-auto font-urbanist">Learn More</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cb6eecce5cf714c3dfb44842d057385813f76c17addf370e99ec990ddbbcb37?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-3 aspect-[1.2] fill-indigo-500"
          />
        </a>
      </div>
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-contain shrink-0 rounded-xl aspect-[1.26] w-[126px]"
      />
    </article>
  );
};

export default WhatsNewCard;
