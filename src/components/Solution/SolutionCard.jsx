import Image from "next/image";
import Link from "next/link";
import React from "react";

function SolutionCard({ title, image, icon }) {
  return (
    <Link
      href={"/template/template2"}
      className="flex flex-col w-[168px] h-[183px] md:h-[266px] md:w-[32%] relative"
    >
      <div className="flex overflow-hidden flex-col grow w-full font-semibold text-white bg-violet-500 rounded-2xl max-md:mt-5 ">
        <div className="flex relative flex-col w-full aspect-[1.553]">
          <img
            loading="lazy"
            src={image}
            alt={`${title} background`}
            className="object-cover absolute inset-0 size-full"
            style={{ filter: "brightness(0.5)" }}
          />
          <div className="flex relative flex-col items-start pt-3 pb-8 md:py-8 pr-20 md:pl-8 max-md:px-3">
            <img
              loading="lazy"
              src={icon}
              alt={`${title} icon`}
              className="object-contain w-9 aspect-square"
            />

            <div className="mt-28 text-[14px] md:text-base max-md:mt-10 font-urbanist">
              Lightbeam for
            </div>
            <div className="mt-1.5 text-[20px] md:text-3xl font-sora">
              {title}
            </div>

            <div className="absolute right-10 bottom-9 max-md:hidden">
              <Image
                src="/images/solution/arrow-right.svg"
                width={30}
                height={30}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SolutionCard;
