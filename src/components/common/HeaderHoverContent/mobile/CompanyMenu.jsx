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

const CompanyMenu = ({ changeNavMenu }) => {
  const company_navItems = [
    {
      title: "ABOUT US",
      link: "about",
      body: [
        {
          data: "Our Mission & Vision",
          img: "/images/Header/icons/circle.svg",
          link: "/template/template1",
        },
        {
          data: "Key Propositions",
          img: "/images/Header/icons/light.svg",
          link: "/template/template1",
        },
        {
          data: "Solutions",
          img: "/images/Header/icons/circle.svg",
          link: "/template/template1",
        },
        {
          data: "Platforms",
          img: "/images/Header/icons/bag.svg",
          link: "/template/template1",
        },
        {
          data: "Consent Mgmt",
          img: "/images/Header/icons/bag.svg",
          link: "/template/template1",
        },
      ],
    },
    {
      title: "PARTNERSHIP",
      link: "partnership",
      body: [
        {
          data: "Labelling",
          img: "/images/Header/icons/bag.svg",
          link: "/template/template1",
        },
        {
          data: "Access",
          img: "/images/Header/icons/light.svg",
          link: "/template/template1",
        },
        {
          data: "All Bias Materials",
          img: "/images/Header/icons/circle.svg",
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
      title: "CAREERS",
      link: "career",
    },
  ];
  return (
    <>
      <MobileNavheader
        title={"COMPANY"}
        changeNavMenu={changeNavMenu}
        link={"/company"}
      />
      <Accordion allowZeroExpanded>
        {company_navItems.map((item) => (
          <AccordionItem key={item.uuid} className="mb-[35px]">
            <AccordionItemHeading>
              <AccordionItemButton>
                <h2 className="flex items-center gap-[12px]">
                  <Link href={"/company/" + item.link}>
                    <span>{item.title}</span>
                  </Link>
                  {item.body && (
                    <span>
                      <FaAngleDown />
                    </span>
                  )}
                </h2>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {item?.body?.map((body, ind) => (
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
        <div className="bg-white rounded-[16px] p-[12px] flex gap-[12px] items-center mb-[12px]">
          <img
            loading="lazy"
            src="/images/navbar/award_img.svg"
            alt=""
            className="w-[144px] h-[74px] rounded-[13.21px] "
          />
          <div>
            <h2 className="font-sora font-semibold text-[13.21px] leading-[14.53px] text-[#232323] mb-[7px]">
              Info World 2023
            </h2>
            <p className="font-sora font-semibold text-[8.81px] leading-[11.89px] text-[#808080]">
              Cloud Compliance & Governance
            </p>
          </div>
        </div>
        <div className="bg-white rounded-[16px] p-[12px] flex gap-[12px] items-center mb-[12px]">
          <img
            loading="lazy"
            src="/images/navbar/award_img.svg"
            alt=""
            className="w-[144px] h-[74px] rounded-[13.21px] "
          />
          <div>
            <h2 className="font-sora font-semibold text-[13.21px] leading-[14.53px] text-[#232323] mb-[7px]">
              Info World 2023
            </h2>
            <p className="font-sora font-semibold text-[8.81px] leading-[11.89px] text-[#808080]">
              Cloud Compliance & Governance
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CompanyMenu;
