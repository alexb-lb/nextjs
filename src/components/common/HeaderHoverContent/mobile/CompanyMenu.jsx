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

const CompanyMenu = ({ changeNavMenu, navData }) => {
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
  ];
  return (
    <>
      <MobileNavheader
        title={navData?.name}
        changeNavMenu={changeNavMenu}
        link={navData?.custom_path}
      />
      <Accordion allowZeroExpanded>
        {navData?.children?.map((item, index) => (
          <AccordionItem key={item.uuid} className="mb-[35px]">
            <AccordionItemHeading>
              <AccordionItemButton>
                <h2 className="flex items-center gap-[12px]">
                  <Link href={item?.custom_path}>
                    <span>{item.name}</span>
                  </Link>
                  {item.children && (
                    <span>
                      <FaAngleDown />
                    </span>
                  )}
                </h2>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {item?.children?.map((body, ind) => (
                <div
                  className="mt-[14px] flex items-center gap-[9px]"
                  key={ind}
                >
                  <img
                    src={
                      body?.img || company_navItems[index]?.body[ind]?.img || ""
                    }
                    alt=""
                  />
                  <Link href={body?.custom_path}>
                    <p className="font-normal font-urbanist text-[14px] leading-[16px] text-[#232323E5]/[.90]">
                      {body.name}
                    </p>
                  </Link>
                </div>
              ))}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
      {/* <div className="bg-[#EEF2FF] rounded-[8px] p-[16px] mb-[53px]">
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
      </div> */}
      <aside className="flex flex-col w-full">
        <div className="flex overflow-hidden flex-col px-6 py-8 mx-auto w-full bg-indigo-50 rounded-[32px] text-neutral-800 max-md:px-5 ">
          <h2 className="self-start text-2xl font-semibold text-center font-sora text-black mb-[16px]">
            Awards & Recongnitions
          </h2>
          <div className="p-3 bg-white rounded-[13.31px] flex items-center gap-3 mb-[28px]">
            <img
              loading="lazy"
              src="/images/company/CRN.png"
              alt=""
              className="h-[80px] w-[60px] "
            />
            <div>
              <h3 className="text-[#000000] font-semibold font-sora text-[13.21px] leading-[14.53px] mb-[7px]">
                CRN
              </h3>
              <p className="text-[#808080] font-semibold font-sora text-[11.81px] leading-[11.89px] text-wrap">
                2023 Steller Startup
              </p>
            </div>
          </div>
          <div className="p-3 bg-white rounded-[13.31px] flex items-center gap-3 mb-[28px]">
            <img
              loading="lazy"
              src="/images/company/award2.svg"
              alt=""
              className="h-[80px] "
            />
            <div>
              <h3 className="text-[#000000] font-semibold  font-sora text-[13.21px] leading-[14.53px] mb-[7px]">
                RegTech Insight Awards
              </h3>
              <p className="text-[#808080] font-semibold font-sora text-[11.81px] leading-[11.89px] text-wrap">
                Best North America Startup
              </p>
            </div>
          </div>
          <div className="p-3 bg-white rounded-[13.31px] flex items-center gap-3 ">
            <img
              loading="lazy"
              src="/images/company/award3.svg"
              alt=""
              className="h-[80px] "
            />
            <div>
              <h3 className="text-[#000000] font-semibold font-sora text-[13.21px] leading-[14.53px] mb-[7px]">
                InfoWorld
              </h3>
              <p className="text-[#808080] font-semibold font-sora text-[11.81px] leading-[11.89px] text-wrap">
                Cloud Compliance and Governance
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
export default CompanyMenu;
