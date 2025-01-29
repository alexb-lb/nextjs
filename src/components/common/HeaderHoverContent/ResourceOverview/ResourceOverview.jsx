import Link from "next/link";
import React from "react";

const ResourceOverview = () => {
  return (
    <main className="overflow-hidden px-7 pt-[30px] pb-10 rounded-none bg-primary_white min-w-[1219px] rounded-b-lg">
      <section>
        <div className="flex flex-col items-start z-20">
          <header className="flex gap-3 text-lg font-semibold tracking-normal leading-[22px] font-sora text-[#221F20] cursor-pointer">
            <Link href="/resource" className="flex gap-3">
              <h1 className="grow">Resource Overview</h1>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c66db5a282615cff644cec3f5feda99ecb3e1fd7f4d1ea3b96a36285a8bc2092?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
                alt=""
                className="object-contain shrink-0 my-auto w-4 aspect-[1.14]"
              />
            </Link>
          </header>
          <p className="mt-3 text-sm font-medium font-urbanist leading-[22px] text-[#808080] ">
            Lightbeam is building a data security platform that delivers the{" "}
            <br />
            ease, agility, and robust protections that security teams demand
          </p>
          <hr className="shrink-1 self-stretch  mt-7 h-px border border-solid border-zinc-300 border-opacity-80 " />
        </div>
        <div className="flex items-center justify-between gap-[62px] mt-[28px]">
          <div>
            <Link href="/resource/news-room">
              <h3 className="font-semibold mt-[18px] mb-[15px] text-[16px] font-sora text-[#221F20]">
                Newsroom
              </h3>
              <img loading="lazy" src="/images/Header/Resource1.png" alt="" />
            </Link>
          </div>
          <div>
            <Link href="/resource/blogs">
              <h3 className="font-semibold mt-[18px] mb-[15px] text-[16px] font-sora text-[#221F20]">
                Blogs
              </h3>
              <img loading="lazy" src="/images/Header/Resource2.png" alt="" />
            </Link>
          </div>
          <div>
            <Link href="/resource/news-details">
              <h3 className="font-semibold mt-[18px] mb-[15px] text-[16px] font-sora text-[#221F20]">
                White Page
              </h3>
              <img loading="lazy" src="/images/Header/Resource3.png" alt="" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResourceOverview;
