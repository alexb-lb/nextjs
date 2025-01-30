/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import React from "react";

const FeatureSection = ({ title, items, link }) => {
  return (
    <div className="flex flex-col p-1 rounded-lg h-full">
      <div className="flex flex-col gap-2">
        <h2 className="ml-1 font-semibold font-sora uppercase text-[16px] leading-[22px] text-[#221F20] cursor-pointer">
          <Link href={link}>{title}</Link>
        </h2>
        <ul className="flex flex-col items-start gap-2 w-full text-sm tracking-normal leading-none text-neutral-800 text-opacity-90">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2 mt-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd9e775b55899ed36b6ed8a0b6dde826216133b06da02f66bb3fbad2721f5ec2?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
                className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
              />
              <Link
                href={item.custom_path}
                className="text-wrap font-urbanist opacity-[90%] text-[#232323]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeatureSection;
