import React from "react";
import WhatsNewCard from "./WhatsNewCard";

const WhatsNewSection = () => {
  const newsItems = [
    {
      author: "Sharon Farber",
      date: "Jan 4, 2024",
      title: "AI and Employee Privacy",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/97cf3168f1c895497270f1f5b148e9ac400c02785d9da7a016047221dc3f5d4a?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
      link: "/resource/news-details",
    },
    {
      author: "Sharon Farber",
      date: "Jan 4, 2024",
      title: "AI and Employee Privacy",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/97cf3168f1c895497270f1f5b148e9ac400c02785d9da7a016047221dc3f5d4a?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
      link: "/resource/news-details",
    },
  ];

  return (
    <aside className="flex flex-col ml-5 w-[398px]">
      <div className="flex overflow-hidden flex-col px-6 py-8 mx-auto w-full bg-indigo-50 rounded-[32px] text-neutral-800 max-md:px-5 max-md:mt-10">
        <h2 className="self-start text-[22px] leading-[27px] font-sora font-semibold text-center text-black">
          What&apos;s New
        </h2>
        {newsItems.map((item, index) => (
          <WhatsNewCard key={index} {...item} />
        ))}
      </div>
    </aside>
  );
};

export default WhatsNewSection;
