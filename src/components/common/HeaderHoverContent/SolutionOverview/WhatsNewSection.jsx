import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const WhatsNewSection = () => {
  return (
    <aside className="flex flex-col ml-5 w-[413px]">
      <div className="flex overflow-hidden flex-col px-6 py-8 mx-auto w-full bg-indigo-50 rounded-[32px] text-neutral-800 max-md:px-5 max-md:mt-10">
        <Link href="/solution/integration">
          <h2 className="self-start text-2xl font-semibold  font-sora text-black mb-[32px]">
            Integration
          </h2>
        </Link>
        <div className="flex flex-wrap items-center ">
          <div className="flex items-center flex-wrap ">
            <Link
              href={"/solution/integration#web-apps"}
              className="flex gap-[10px] w-[50%] mb-5"
            >
              <img
                loading="lazy"
                src="/images/Header/integration.png"
                width="20px"
                alt=""
              />
              <p className="text-[#232323] font-urbanist text-[16px] opacity-[90%]">
                Web Apps
              </p>
            </Link>
            <Link
              href={"/solution/integration#cloud-storage"}
              className="flex gap-[10px]  w-[50%] mb-5"
            >
              <img
                loading="lazy"
                src="/images/Header/integration.png"
                width="20px"
                alt=""
              />
              <p className="text-[#232323] font-urbanist  text-[16px] opacity-[90%]">
                Cloud Storage
              </p>
            </Link>
            <Link
              href={"/solution/integration#onprem-storage"}
              className="flex gap-[10px]  w-[50%] mb-5"
            >
              <img
                loading="lazy"
                src="/images/Header/integration.png"
                width="20px"
                alt=""
              />
              <p className="text-[#232323] font-urbanist text-[16px] opacity-[90%]">
                On-Prem Storage
              </p>
            </Link>
            <Link
              href={"/solution/integration#crm-system"}
              className="flex gap-[10px]  w-[50%] mb-5"
            >
              <img
                loading="lazy"
                src="/images/Header/integration.png"
                width="20px"
                alt=""
              />
              <p className="text-[#232323] font-urbanist text-[16px] opacity-[90%]">
                CRM Systems
              </p>
            </Link>
            <Link
              href={"/solution/integration#ticketing-system"}
              className="flex gap-[10px]  w-[50%] mb-5"
            >
              <img
                loading="lazy"
                src="/images/Header/integration.png"
                width="20px"
                alt=""
              />
              <p className="text-[#232323] font-urbanist text-[16px] opacity-[90%]">
                Ticketing Systems
              </p>
            </Link>
            <Link
              href={"/solution/integration#hr-system"}
              className="flex gap-[10px]  w-[50%] mb-5"
            >
              <img
                loading="lazy"
                src="/images/Header/integration.png"
                width="20px"
                alt=""
              />
              <p className="text-[#232323] font-urbanist text-[16px] opacity-[90%]">
                HR Systems
              </p>
            </Link>
            <Link
              href={"/solution/integration#sql-database"}
              className="flex gap-[10px]  w-[50%] mb-5"
            >
              <img
                loading="lazy"
                src="/images/Header/integration.png"
                width="20px"
                alt=""
              />
              <p className="text-[#232323] font-urbanist text-[16px] opacity-[90%]">
                SQl Database
              </p>
            </Link>
            <Link
              href={"/solution/integration#m365-suite"}
              className="flex gap-[10px]  w-[50%] mb-5"
            >
              <img
                loading="lazy"
                src="/images/Header/integration.png"
                width="20px"
                alt=""
              />
              <p className="text-[#232323] font-urbanist text-[16px] opacity-[90%]">
                M365 Suite
              </p>
            </Link>
          </div>
          <Link
            href={"/solution/integration"}
            className="flex items-center gap-3 mt-[10px] "
          >
            <p className="text-[#545CF6] font-urbanist cursor-pointer">
              Learn more
            </p>
            <FaArrowRight className="text-[#545CF6]" />
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default WhatsNewSection;
