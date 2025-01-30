import Image from "next/image";
import Link from "next/link";
import React from "react";

const ResourceOverview = ({
  whatsNew = [],
  blogs = [],
  navChild = [],
  ebook = [],
  whitePaper = [],
}) => {
  const blog = blogs[0];

  const newsroomURL = navChild[0]?.custom_path;
  const blogURL = navChild[1]?.custom_path;

  return (
    <main className=" px-7 pt-[30px] pb-10 rounded-none bg-primary_white max-xl:w-[1000px] xl:min-w-[1219px] rounded-b-lg">
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
          <p className="mt-3 text-sm font-medium font-urbanist leading-[22px] text-[#808080]">
            LightBeam.ai converges data security, privacy, and governance,
            enabling businesses to secure their data,
            <br />
            remediate access risks, and comply with regulations with a single
            sensitive data platform
          </p>
          <hr className="shrink-1 self-stretch  mt-7 h-px border border-solid border-zinc-300 border-opacity-80 " />
        </div>
        <div className="flex items-center  gap-[62px] mt-[28px]">
          {/* blogs */}

          <div>
            <Link href={`${blogURL ? blogURL : "/resource/blogs"}`}>
              <h3 className="font-semibold mt-[18px] mb-[15px] text-[16px] font-sora text-[#221F20]">
                {"Blogs"}
              </h3>
            </Link>
            <Link href={`/resource/blogs/` + blog?.slug}>
              <div className="relative">
                <img
                  loading="lazy"
                  src={blog?.image}
                  alt=""
                  className="rounded-3xl w-[350px] h-[200px]"
                />
                <div className="absolute top-[12px] left-[19px]">
                  <div className="flex gap-[98px]">
                    <div className="flex gap-[12px] max-sm:px-5 items-center ">
                      <img
                        loading="lazy"
                        src={blog?.author?.image}
                        alt=""
                        className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square rounded-[32px]"
                      />
                      <div className="flex flex-col self-stretch px-px my-auto w-[78px]">
                        <div className="text-white text-[12px] leading-[14px] font-semibold mb-[6px] font-urbanist">
                          {blog?.author?.name}
                        </div>
                        <div className="self-start text-white text-[10px] font-medium leading-[14px] font-urbanist">
                          Jan 4, 2024
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 justify-center items-center self-stretch pb-2 my-auto para1 font-semibold text-[#F5F8FF] font-urbanist max-sm:absolute max-sm:bottom-[18px] max-sm:right-[18px] max-sm:text-[13px] cursor-pointer">
                      <span className="self-stretch my-auto text-[12px]">
                        Learn More
                      </span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 23 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[12px]"
                      >
                        <path
                          d="M22.5434 10.0141L12.6028 0L10.5719 1.96058L17.226 8.61368H0V11.3868H17.2745L10.5719 18.0394L12.6028 20L22.5434 10.0437L22.5281 10.0289L22.5434 10.0141Z"
                          fill="#F5F8FF"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-[44px]">
                    <h4 className="mb-[6px]">RECENT</h4>
                    <p className="text-white font-semibold font-sora leading-[20px] ">
                      {blog?.title && blog?.title.length > 30
                        ? blog?.title?.slice(0, 30) + "..."
                        : blog?.title}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* white paper  */}
          <div>
            <Link href={"/resource/white-papers"}>
              <h3 className="font-semibold mt-[18px] mb-[15px] text-[16px] font-sora text-[#221F20] cursor-pointer">
                {"White Papers"}
              </h3>
            </Link>
            <Link
              href={
                whitePaper?.data?.[0]?.attributes?.pdf_url
                  ? whitePaper?.data?.[0]?.attributes?.pdf_url
                  : ""
              }
            >
              <div className="relative">
                {whitePaper?.data?.[0]?.attributes?.backgroundImage?.data
                  ?.attributes?.url && (
                  <Image
                    loading="lazy"
                    src={
                      whitePaper?.data?.[0]?.attributes?.backgroundImage?.data
                        ?.attributes?.url
                    }
                    alt=""
                    height={200}
                    width={350}
                    className="rounded-3xl w-[350px] h-[200px]"
                  />
                )}

                <div className="absolute top-[12px] left-[19px] w-[86%]">
                  <div className="flex flex-row-reverse w-full">
                    {/* <div className="flex gap-[12px] max-sm:px-5 items-center ">
                      {news?.author?.image && (
                        <Image
                          loading="lazy"
                          src={news?.author?.image}
                          alt=""
                          height={20}
                          width={32}
                          className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square rounded-[32px]"
                        />
                      )}

                      <div className="flex flex-col self-stretch px-px my-auto w-[78px]">
                        <div className="text-white text-[12px] leading-[14px] font-semibold mb-[6px] font-urbanist">
                          {news?.author?.name}
                        </div>
                        <div className="self-start text-white text-[10px] font-medium leading-[14px] font-urbanist">
                          Jan 4, 2024
                        </div>
                      </div>
                    </div> */}
                    <div className="flex gap-2 justify-center items-center self-stretch pb-2 my-auto para1 font-semibold text-[#F5F8FF] font-urbanist max-sm:absolute max-sm:bottom-[18px] max-sm:right-[18px] max-sm:text-[13px] cursor-pointer">
                      <span className="self-stretch my-auto text-[12px]">
                        Learn More
                      </span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 23 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[12px]"
                      >
                        <path
                          d="M22.5434 10.0141L12.6028 0L10.5719 1.96058L17.226 8.61368H0V11.3868H17.2745L10.5719 18.0394L12.6028 20L22.5434 10.0437L22.5281 10.0289L22.5434 10.0141Z"
                          fill="#F5F8FF"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-[44px]">
                    <h4 className="mb-[6px]">RECENT</h4>
                    <p className="text-white font-semibold font-sora leading-[20px] ">
                      {whitePaper?.data?.[0]?.attributes?.title > 30
                        ? whitePaper?.data?.[0]?.attributes?.title?.slice(
                            0,
                            30
                          ) + "..."
                        : whitePaper?.data?.[0]?.attributes?.title}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* e-book */}
          <div>
            <Link href={"/resource/e-books"}>
              <h3 className="font-semibold mt-[18px] mb-[15px] text-[16px] font-sora text-[#221F20] cursor-pointer">
                {"E-Books"}
              </h3>
            </Link>
            <Link
              href={
                ebook?.data?.[0]?.attributes?.pdf_url
                  ? ebook?.data?.[0]?.attributes?.pdf_url
                  : ""
              }
            >
              <div className="relative">
                {ebook?.data?.[0]?.attributes?.backgroundImage?.data?.attributes
                  ?.url && (
                  <Image
                    loading="lazy"
                    src={
                      ebook?.data?.[0]?.attributes?.backgroundImage?.data
                        ?.attributes?.url
                    }
                    alt=""
                    height={200}
                    width={350}
                    className="rounded-3xl w-[350px] h-[200px]"
                  />
                )}

                <div className="absolute top-[12px] left-[19px] w-[86%]">
                  <div className="flex flex-row-reverse w-full">
                    {/* <div className="flex gap-[12px] max-sm:px-5 items-center ">
                      {news?.author?.image && (
                        <Image
                          loading="lazy"
                          src={news?.author?.image}
                          alt=""
                          height={20}
                          width={32}
                          className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square rounded-[32px]"
                        />
                      )}

                      <div className="flex flex-col self-stretch px-px my-auto w-[78px]">
                        <div className="text-white text-[12px] leading-[14px] font-semibold mb-[6px] font-urbanist">
                          {news?.author?.name}
                        </div>
                        <div className="self-start text-white text-[10px] font-medium leading-[14px] font-urbanist">
                          Jan 4, 2024
                        </div>
                      </div>
                    </div> */}
                    <div className="flex gap-2 justify-center items-center self-stretch pb-2 my-auto para1 font-semibold text-[#F5F8FF] font-urbanist max-sm:absolute max-sm:bottom-[18px] max-sm:right-[18px] max-sm:text-[13px] cursor-pointer">
                      <span className="self-stretch my-auto text-[12px]">
                        Learn More
                      </span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 23 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[12px]"
                      >
                        <path
                          d="M22.5434 10.0141L12.6028 0L10.5719 1.96058L17.226 8.61368H0V11.3868H17.2745L10.5719 18.0394L12.6028 20L22.5434 10.0437L22.5281 10.0289L22.5434 10.0141Z"
                          fill="#F5F8FF"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-[44px]">
                    <h4 className="mb-[6px]">RECENT</h4>
                    <p className="text-white font-semibold font-sora leading-[20px] ">
                      {ebook?.data?.[0]?.attributes?.title > 30
                        ? ebook?.data?.[0]?.attributes?.title?.slice(0, 30) +
                          "..."
                        : ebook?.data?.[0]?.attributes?.title}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResourceOverview;
