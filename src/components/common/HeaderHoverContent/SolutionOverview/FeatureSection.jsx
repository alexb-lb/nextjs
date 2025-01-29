import Link from "next/link";
import React from "react";

const FeatureSection = ({ title, items, link }) => {
  return (
    <div className="flex flex-col p-1 rounded-lg h-full">
      <div className="flex flex-col gap-2">
        <h2 className="ml-1 font-semibold font-sora uppercase text-[16px] leading-[22px] text-[#221F20] cursor-pointer">
          <Link href={"/solution/" + link}>{title}</Link>
        </h2>
        <ul className="flex flex-col items-start gap-2 w-full text-sm tracking-normal leading-none text-neutral-800 text-opacity-90">
          {items.map((item, index) => (
            <Link
              href={"/template/template1"}
              key={index}
              className="flex items-center gap-2 mt-2.5"
            >
              <img
                loading="lazy"
                src={item.icon}
                alt={item.text}
                className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
              />
              <span className="text-wrap font-urbanist opacity-[90%] text-[#232323]">
                {item.text}
              </span>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeatureSection;
