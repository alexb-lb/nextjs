import Link from "next/link";
import { MobileNavheader } from "../../Header";
import Image from "next/image";

const ResourceMenu = ({
  changeNavMenu,
  navData,
  whatsNew,
  blogs,
  ebook,
  whitePaper,
}) => {
  const news = (whatsNew && whatsNew[0]) || [];
  const blog = (blogs && blogs[0]) || [];

  const navChild = navData?.children || [];

  const newsroomURL = navChild[0]?.custom_path;
  const blogURL = navChild[1]?.custom_path;

  return (
    <>
      <MobileNavheader
        title={navData?.name}
        changeNavMenu={changeNavMenu}
        link={navData?.url}
      />
      <hr className="shrink-1 self-stretch  mt-7 h-px border border-solid border-zinc-300 border-opacity-80 " />
      {/* {navData?.children?.map((item) => (
        <h2 className="flex items-center gap-[12px] mb-[35px]" key={item.title}>
          <Link href={item.url}>
            <span className="font-sora font-semibold text-[16px] leading-[22px] text-[#221F20] capitalize">
              {item.name}
            </span>
          </Link>
        </h2>
      ))} */}
      {/* <div className="bg-[#EEF2FF] rounded-[8px] p-[16px] mb-[53px]">
        <h3 className="font-sora font-semibold text-[18px] leading-[22.68px] mb-[22px]">
          What&apos;s New
        </h3>
        <div className="bg-white rounded-[16px] py-[8px] px-[12px] flex gap-[16px] items-center mb-[22px]">
          <div>
            <h2 className="font-sora font-semibold text-[14px] leading-[17.64px] text-[#232323] mb-[16px]">
              AI and Employee Privacy
            </h2>
            <div className="flex items-center gap-[4px]">
              <p className="font-urbanist font-semibold text-[12px] leading-[14.4px] text-[#545CF6]">
                Learn More
              </p>
              <img
                loading="lazy"
                src="/images/navbar/arrow_right_color.svg"
                alt=""
              />
            </div>
          </div>
          <img
            loading="lazy"
            src="/images/navbar/nav_img1.svg"
            alt=""
            className="w-[126px] h-[126px] rounded-[12px] "
          />
        </div>
        <div className="bg-white rounded-[16px] py-[8px] px-[12px] flex gap-[16px] items-center">
          <div>
            <h2 className="font-sora font-semibold text-[14px] leading-[17.64px] text-[#232323] mb-[16px]">
              AI and Employee Privacy
            </h2>
            <div className="flex items-center gap-[4px]">
              <p className="font-urbanist font-semibold text-[12px] leading-[14.4px] text-[#545CF6]">
                Learn More
              </p>
              <img
                loading="lazy"
                src="/images/navbar/arrow_right_color.svg"
                alt=""
              />
            </div>
          </div>
          <img
            loading="lazy"
            src="/images/navbar/nav_img1.svg"
            alt=""
            className="w-[126px] h-[126px] rounded-[12px] "
          />
        </div>
      </div> */}
      <div className="flex flex-wrap items-center  gap-[22px] mt-[28px] pb-10">
        {/* news  */}
        {/* <div className="w-full">
          <Link href={`${newsroomURL ? newsroomURL : "/resource/news-room"}`}>
            <h3 className="font-semibold mt-[18px] mb-[15px] text-[16px] font-sora text-[#221F20] cursor-pointer">
              {"Newsroom"}
            </h3>
          </Link>
          <Link href={`/resource/news-detail/` + news?.slug}>
            <div className="relative">
              <img
                loading="lazy"
                src={news?.image}
                alt=""
                className="rounded-3xl w-[350px] h-[200px]"
              />
              <div className="absolute top-[12px] left-[19px] ">
                <div className="flex gap-[98px]">
                  <div className="flex gap-[12px] max-sm:px-5 items-center ">
                    <img
                      loading="lazy"
                      src={news?.author?.image}
                      alt=""
                      className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square rounded-[32px]"
                    />
                    <div className="flex flex-col self-stretch px-px my-auto w-[78px]">
                      <div className="text-white text-[12px] leading-[14px] font-semibold mb-[6px] font-urbanist">
                        {news?.author?.name}
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
                    {news?.title && news?.title.length > 30
                      ? news?.title?.slice(0, 30) + "..."
                      : news?.title}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div> */}

        {/* blogs */}

        <div className="w-full">
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
              <div className="absolute top-[12px] left-[19px] w-[88%]">
                <div className="flex gap-[28px] justify-between">
                  <div className="flex gap-[12px]  items-center ">
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
                  <div className="flex gap-2 justify-center items-center self-stretch pb-2 my-auto para1 font-semibold text-[#F5F8FF] font-urbanist  max-sm:text-[13px] cursor-pointer">
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
                  <h4 className="mb-[6px] text-white">RECENT</h4>
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

              <div className="absolute top-[12px] left-[19px] w-[88%]">
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
                  <div className="flex gap-2 justify-center items-center self-stretch pb-2 my-auto para1 font-semibold text-[#F5F8FF] font-urbanist cursor-pointer">
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
                  <h4 className="mb-[6px] text-white">RECENT</h4>
                  <p className="text-white font-semibold font-sora leading-[20px] ">
                    {whitePaper?.data?.[0]?.attributes?.title > 30
                      ? whitePaper?.data?.[0]?.attributes?.title?.slice(0, 30) +
                        "..."
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
                    
                    <div className="flex gap-2 justify-center items-center self-stretch pb-2 my-auto para1 font-semibold text-[#F5F8FF] font-urbanist  cursor-pointer">
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
                    <h4 className="mb-[6px] text-white">RECENT</h4>
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
    </>
  );
};
export default ResourceMenu;
