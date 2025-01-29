import React from "react";

function NavigationDots({ totalDots, activeDot }) {
  return (
    <div className="flex flex-col self-end px-16 mt-2 w-full rounded-full border-solid border-[3px] border-white border-opacity-30 max-w-[1175px] max-md:px-5 max-md:max-w-full">
      <div className="flex z-10 flex-col self-center -mt-2 ml-28 max-w-full w-[247px]">
        {Array.from({ length: totalDots }).map((_, index) => (
          <div
            key={index}
            className={`flex shrink-0 w-5 h-5 rounded-full ${
              index === activeDot - 1 ? "bg-white" : "bg-zinc-800"
            } ${index > 0 ? "self-end mt-7" : ""}`}
          />
        ))}
      </div>
      <div className="flex flex-wrap mt-4 max-md:max-w-full">
        <div className="flex relative flex-col grow shrink-0 justify-center items-start py-px rounded-full basis-0 min-h-[249px] shadow-[0px_-12px_54px_rgba(108,84,159,0.6)] w-fit max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbdca74901610c23482d143b438c6c1b99b9debf64aa0127be0ea56f63d63e1e?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex overflow-hidden relative flex-col items-end px-20 pt-20 pb-40 mr-0 w-full bg-blend-normal max-md:px-5 max-md:pb-24 max-md:max-w-full">
            <div className="flex shrink-0 mb-0 w-5 h-5 rounded-full bg-zinc-800 max-md:mb-2.5" />
          </div>
        </div>
        <div className="flex shrink-0 self-start mt-52 w-5 h-5 rounded-full bg-zinc-800 max-md:mt-10" />
      </div>
    </div>
  );
}

export default NavigationDots;
