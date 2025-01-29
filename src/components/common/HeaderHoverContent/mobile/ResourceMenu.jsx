import Link from "next/link";
import { MobileNavheader } from "../../Header";

const ResourceMenu = ({ changeNavMenu }) => {
  const resource_navItems = [
    {
      title: "Newsroom",
      link: "/resource/news-room",
    },
    {
      title: "Blogs",
      link: "/resource/blogs",
    },
    {
      title: "WHITE PAPERS",
      link: "/resource/news-details",
    },
  ];
  return (
    <>
      <MobileNavheader
        title={"Resource"}
        changeNavMenu={changeNavMenu}
        link={"/resource"}
      />
      {resource_navItems.map((item) => (
        <h2 className="flex items-center gap-[12px] mb-[35px]" key={item.title}>
          <Link href={item.link}>
            <span className="font-sora font-semibold text-[16px] leading-[22px] text-[#221F20] capitalize">
              {item.title}
            </span>
          </Link>
        </h2>
      ))}
      <div className="bg-[#EEF2FF] rounded-[8px] p-[16px] mb-[53px]">
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
      </div>
    </>
  );
};
export default ResourceMenu;
