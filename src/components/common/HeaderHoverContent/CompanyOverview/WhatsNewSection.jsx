import React from "react";

const WhatsNewSection = () => {
  const newsItems = [
    {
      author: "Sharon Farber",
      date: "Jan 4, 2024",
      title: "AI and Employee Privacy",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/97cf3168f1c895497270f1f5b148e9ac400c02785d9da7a016047221dc3f5d4a?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    },
    {
      author: "Sharon Farber",
      date: "Jan 4, 2024",
      title: "AI and Employee Privacy",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/97cf3168f1c895497270f1f5b148e9ac400c02785d9da7a016047221dc3f5d4a?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    },
  ];

  return (
    <aside className="flex flex-col ml-5 w-[386px]">
      <div className="flex overflow-hidden flex-col px-6 py-8 mx-auto w-full bg-indigo-50 rounded-[32px] text-neutral-800 max-md:px-5 max-md:mt-10">
        <h2 className="self-start text-2xl font-semibold text-center font-sora text-black mb-[16px]">
          Awards & Recongnitions
        </h2>
        <div className="p-3 bg-white rounded-[13.31px] flex items-center gap-3 mb-[28px]">
          <img loading="lazy" src="/images/Header/Award.png" alt="" />
          <div>
            <h3 className="text-[#000000] font-semibold font-sora text-[13.21px] leading-[14.53px] mb-[7px]">
              Info World 2023
            </h3>
            <p className="text-[#808080] font-semibold font-sora text-[8.81px] leading-[11.89px] text-wrap">
              Cloud Compliance & Governance
            </p>
          </div>
        </div>
        <div className="p-3 bg-white rounded-[13.31px] flex items-center gap-3 mb-[28px]">
          <img loading="lazy" src="/images/Header/Award.png" alt="" />
          <div>
            <h3 className="text-[#000000] font-semibold  font-sora text-[13.21px] leading-[14.53px] mb-[7px]">
              Info World 2023
            </h3>
            <p className="text-[#808080] font-semibold font-sora text-[8.81px] leading-[11.89px] text-wrap">
              Cloud Compliance & Governance
            </p>
          </div>
        </div>
        <div className="p-3 bg-white rounded-[13.31px] flex items-center gap-3 ">
          <img loading="lazy" src="/images/Header/Award.png" alt="" />
          <div>
            <h3 className="text-[#000000] font-semibold font-sora text-[13.21px] leading-[14.53px] mb-[7px]">
              Info World 2023
            </h3>
            <p className="text-[#808080] font-semibold font-sora text-[8.81px] leading-[11.89px] text-wrap">
              Cloud Compliance & Governance
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default WhatsNewSection;
