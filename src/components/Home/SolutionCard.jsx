import React from "react";

function SolutionCard({
  id,
  title,
  subtitle,
  description,
  label,
  isActive,
  handleNextClick,
  handlePreClick,
  index,
  currentInd,
  totalInd,
}) {
  return (
    <>
      {currentInd === index && (
        <article className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[541px]">
            <h2 className="self-start text-4xl font-bold text-center font-urbanist text-white">
              {id}. {title}
            </h2>
            <h3 className="mt-6 text-2xl font-semibold text-zinc-100 font-urbanist">
              {subtitle}
            </h3>
            <p className="mt-6 text-xl leading-7 text-zinc-300 max-md:max-w-full font-urbanist">
              {description}
            </p>
          </div>
          <div className="flex gap-5 justify-between px-px mt-10 max-w-full text-xl text-white w-[364px]">
            <button className="flex flex-col font-semibold leading-none text-center rounded-[50px]">
              <div className="flex flex-col rounded-[52px]">
                <div className="px-8 py-5 rounded-[52px]  border border-[#8C70D2]">
                  Know More
                </div>
              </div>
            </button>
            <div className="flex gap-4 justify-center items-center my-auto whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7344fb6cb157a14b1410a04c98344a5ff6c5d6ee1daa005cf5367af62f5a4d56?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square cursor-pointer"
                onClick={handlePreClick}
              />
              <span className="self-stretch my-auto font-urbanist">
                0{currentInd + 1}/0{totalInd}
              </span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/55560e2bb5213fd04a2a99d06db6019f5373452d2f09926b6c1cbb7b0c742f03?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square cursor-pointer"
                onClick={handleNextClick}
              />
            </div>
          </div>
        </article>
      )}
    </>
  );
}

export default SolutionCard;
