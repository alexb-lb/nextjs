import React from "react";
import Button from "../common/Button";

function ContentBlock({ title, description, features, imageSrc }) {
  return (
    <div className="overflow-hidden py-12 pl-12 mt-12 max-w-full bg-white rounded-xl shadow-[0px_12px_80px_rgba(50,50,50,0.08)] w-[1102px] max-md:pl-5 max-md:mt-10 mx-auto">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto font-semibold max-md:mt-10 max-md:max-w-full">
            <h3 className="text-4xl text-black">{title}</h3>
            <div className="flex flex-col mt-6 max-w-full text-lg leading-7 text-neutral-700 w-[495px]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`${index > 0 ? "mt-5" : ""} max-md:max-w-full`}
                >
                  <span className="font-semibold text-neutral-800">
                    {feature.title}:{" "}
                  </span>
                  {feature.description}
                </div>
              ))}
            </div>
            <Button label="Learn More" className="text-neutral-800 mt-6" />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={imageSrc}
            alt=""
            className="object-contain grow w-full rounded-3xl aspect-[1.08] shadow-[0px_4px_42px_rgba(50,50,50,0.08)] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default ContentBlock;
