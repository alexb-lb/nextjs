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

const SolutionMenu = ({ changeNavMenu, navData }) => {
  const solution_navItems = [
    {
      title: "SECURITY",
      link: "security",
      body: [
        {
          data: "PCI Compliance",
          img: "/images/Header/icons/dummy.svg",
          link: "/template/template1",
        },
        {
          data: "Classification",
          img: "/images/Header/icons/light.svg",
          link: "/template/template1",
        },
        {
          data: "HIPAA",
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
    {
      title: "PRIVACY",
      link: "privacy",
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
      link: "governance",
      body: [
        {
          data: "Labelling",
          img: "/images/Header/icons/circle.svg",
          link: "/template/template1",
        },
        {
          data: "Access",
          img: "/images/Header/icons/light.svg",
          link: "/template/template1",
        },
        {
          data: "All Bias Materials",
          img: "/images/Header/icons/bag.svg",
          link: "/template/template1",
        },
        {
          data: "All Bias Detection",
          img: "/images/Header/icons/dummy.svg",
          link: "/template/template1",
        },
      ],
    },
  ];
  const integration_list = [
    { title: "Web Apps", link: "/solution/integration#web-apps" },
    { title: "On-Prem Storage", link: "/solution/integration#cloud-storage" },
    {
      title: "Ticketing Systems",
      link: "/solution/integration#ticketing-system",
    },
    { title: "SQl Database", link: "/solution/integration#sql-database" },
    { title: "Cloud Storage", link: "/solution/integration#cloud-storage" },
    { title: "CRM Systems", link: "/solution/integration#crm-system" },
    { title: "HR Systems", link: "/solution/integration#hr-system" },
    { title: "M365 Suite", link: "/solution/integration#m365-suite" },
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
                  <span>
                    <FaAngleDown />
                  </span>
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
                    src={body?.img || solution_navItems[index]?.body[ind]?.img}
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
      <div className="bg-[#EEF2FF] rounded-[8px] p-[16px] mb-[53px]">
        <Link href={"/solution/integration"}>
          <h3 className="font-sora font-semibold text-[18px] leading-[22.68px] mb-[22px]">
            Integration
          </h3>
        </Link>
        <div className="">
          {integration_list.map((item) => (
            <div key={item} className="mb-[26px] flex items-center gap-[10px]">
              <img loading="lazy" src="/images/navbar/team.svg" alt="" />
              <Link href={item.link}>
                <p className="font-urbanist font-normal text-[18px] leading-[20.65px] text-[#232323E5]/[.90]">
                  {item.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default SolutionMenu;
