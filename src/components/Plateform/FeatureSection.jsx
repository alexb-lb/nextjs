import React from "react";
import Button from "../common/Button";

function FeatureSection({ title, description, imageSrc, features }) {
  return (
    <section className="flex overflow-hidden flex-col items-center px-14 pt-4 pb-24 mt-16 w-full bg-primary_white max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="self-stretch max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={imageSrc}
              alt=""
              className="object-contain shrink-0 max-w-full aspect-square w-[199px] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center mt-6 text-xl font-semibold text-center max-md:mt-10 max-md:max-w-full">
              <h2 className="text-5xl text-black capitalize max-md:text-4xl">
                {title}
              </h2>
              <p className="self-stretch mt-6 leading-7 text-neutral-700 max-md:max-w-full">
                {description}
              </p>
              <Button
                label="Know More"
                className="bg-indigo-500 text-white mt-3.5 px-[40px] py-[20px] rounded-[50px]"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[16%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={imageSrc}
              alt=""
              className="object-contain shrink-0 mt-2 max-w-full aspect-square w-[199px] max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-between items-center mt-10 w-full text-2xl font-semibold leading-none border-b border-violet-400 max-w-[1282px] text-neutral-800 text-opacity-60 max-md:max-w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`gap-2.5 self-stretch px-6 pb-8 my-auto ${
              index === 0
                ? "font-bold border-indigo-500 border-b-[3px] text-neutral-800"
                : ""
            } max-md:px-5`}
          >
            {feature}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
