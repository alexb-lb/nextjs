import Link from "next/link";
import { MobileNavheader } from "../../Header";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FaAngleDown } from "react-icons/fa6";

const PlatformMenu = ({ changeNavMenu }) => {
  const platform_navItems = [
    {
      title: "PRIVACY CENTER",
      link: "privacy-center",
      body: [
        {
          data: "Records of Processing Activity",
          img: "/images/Header/icons/light.svg",
          link: "/template/template1",
        },
        {
          data: "Data Subject Request",
          img: "/images/Header/icons/bag.svg",
          link: "/template/template1",
        },
        {
          data: "PIA",
          img: "/images/Header/icons/circle.svg",
          link: "/template/template1",
        },
        {
          data: "Cookie Mgmt",
          img: "/images/Header/icons/dummy.svg",
          link: "/template/template1",
        },
        {
          data: "Consent Mgmt",
          img: "/images/Header/icons/light.svg",
          link: "/template/template1",
        },
      ],
    },
    {
      title: "GOVERNANCE",
      link: "governance-center",
      body: [
        {
          data: "Labelling",
          img: "/images/Header/icons/bag.svg",
          link: "/template/template1",
        },
        {
          data: "Access",
          img: "/images/Header/icons/circle.svg",
          link: "/template/template1",
        },
        {
          data: "All Bias Materials",
          img: "/images/Header/icons/light.svg",
          link: "/template/template1",
        },
        {
          data: "All Bias Detection",
          img: "/images/Header/icons/dummy.svg",
          link: "/template/template1",
        },
      ],
    },
    {
      title: "SECURITY",
      link: "security",
      body: [
        {
          data: "Records of Processing Activity",
          img: "/images/Header/icons/dummy.svg",
          link: "/template/template1",
        },
        {
          data: "Data Subject Request",
          img: "/images/Header/icons/light.svg",
          link: "/template/template1",
        },
        {
          data: "PIA",
          img: "/images/Header/icons/bag.svg",
          link: "/template/template1",
        },
        {
          data: "Cookie Mgmt",
          img: "/images/Header/icons/light.svg",
          link: "/template/template1",
        },
        {
          data: "Consent Mgmt",
          img: "/images/Header/icons/circle.svg",
          link: "/template/template1",
        },
      ],
    },
  ];
  return (
    <>
      <MobileNavheader
        title={"Platform"}
        changeNavMenu={changeNavMenu}
        link={"/platform"}
      />
      <Accordion allowZeroExpanded>
        {platform_navItems.map((item) => (
          <AccordionItem key={item.uuid} className="mb-[35px]">
            <AccordionItemHeading>
              <AccordionItemButton>
                <h2 className="flex items-center gap-[12px] cursor-pointer">
                  <Link href={"/platform/" + item.link}>
                    <span>{item.title}</span>
                  </Link>
                  <span>
                    <FaAngleDown />
                  </span>
                </h2>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {item.body.map((body, ind) => (
                <div
                  className="mt-[14px] flex items-center gap-[9px]"
                  key={ind}
                >
                  <img src={body.img} alt="" />
                  <Link href={body?.link}>
                    <p className="font-normal font-urbanist text-[14px] leading-[16px] text-[#232323E5]/[.90]">
                      {body.data}
                    </p>
                  </Link>
                </div>
              ))}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="bg-[#EEF2FF] rounded-[8px] p-[16px] mb-[53px]">
        <h3 className="font-sora font-semibold text-[18px] leading-[22.68px] mb-[22px]">
          What&apos;s New
        </h3>
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
export default PlatformMenu;
