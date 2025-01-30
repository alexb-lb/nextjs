import React from "react";
import WhatsNewCard from "./WhatsNewCard";

const WhatsNewSection = ({ whatsNew, blogs }) => {
  const newsItem = (whatsNew && whatsNew[0]) || [];
  const blogItem = (blogs && blogs[0]) || [];

  return (
    <aside className="flex flex-col ml-5 w-[398px]">
      <div className="flex overflow-hidden flex-col px-6 py-8 mx-auto w-full bg-indigo-50 rounded-[32px] text-neutral-800 max-md:px-5 max-md:mt-10">
        <h2 className="self-start text-[22px] leading-[27px] font-sora font-semibold text-center text-black">
          What&apos;s New
        </h2>
        {/* {whatsNew &&
          whatsNew
            ?.filter((item, ind) => ind < 2)
            .map((item, index) => {
              const date = new Date(item?.createdAt);
              return (
                <WhatsNewCard
                  key={index}
                  author={item?.author?.name}
                  date={date?.toLocaleString()}
                  title={item?.title}
                  imageSrc={item?.image}
                  link={item?.link || "/resource/news-room"}
                />
              );
            })} */}

        <WhatsNewCard
          authorName={newsItem?.author?.name}
          authorImage={newsItem?.author?.image}
          date={newsItem?.createdAt}
          title={newsItem?.title}
          thumbnail={newsItem.thumbnail}
          link={newsItem?.link || "/resources/news-detail/" + newsItem?.slug}
        />

        <WhatsNewCard
          authorName={blogItem?.author?.name}
          authorImage={blogItem?.author?.image}
          date={blogItem?.createdAt}
          title={blogItem?.title}
          thumbnail={blogItem.thumbnail}
          link={blogItem?.link || "/resource/blogs/" + blogItem?.slug}
        />
      </div>
    </aside>
  );
};

export default WhatsNewSection;
