import React from "react";

const Content = ({ strapiData }) => {
  return (
    <div className="pt-[40px] md:pt-[93px] md:pb-[80px] md:px-[80px] px-4">
      <div className="max-md:mb-[40px]">
        <h3 className="font-sora font-semibold text-[28px] md:text-[40px] leading-[35px] md:leading-[50px] text-[#444444] mb-[32px] md:mb-[54px]">
          {strapiData[1]?.title}
        </h3>
        <ul className="px-7">
          {/* <li className="list-disc font-urbanist  text-[14px] leading-[16px]  md:text-[18px] md:leading-[21px] text-[#444444] mb-8">
            {" "}
            <span className="font-semibold">
              {strapiData[1]?.faqs[0]?.title}
            </span>{" "}
            {strapiData[1]?.faqs[0]?.description}
          </li>
          <li className="list-disc font-urbanist  text-[14px] leading-[16px]  md:text-[18px] md:leading-[21px] text-[#444444] mb-8">
            {" "}
            <span className="font-semibold">
              {strapiData[1]?.faqs[1]?.title}
            </span>{" "}
            {strapiData[1]?.faqs[1]?.description}.
          </li>
          <li className="list-disc font-urbanist  text-[14px] leading-[16px]  md:text-[18px] md:leading-[21px] text-[#444444] mb-8">
            {" "}
            <span className="font-semibold">
              {strapiData[1]?.faqs[2]?.title}
            </span>{" "}
            {strapiData[1]?.faqs[2]?.description}
          </li>
          <li className="list-disc font-urbanist  text-[14px] leading-[16px]  md:text-[18px] md:leading-[21px] text-[#444444] mb-8">
            {" "}
            <span className="font-semibold">
              {strapiData[1]?.faqs[3]?.title}
            </span>{" "}
            {strapiData[1]?.faqs[3]?.description}
          </li>
          <li className="list-disc font-urbanist  text-[14px] leading-[16px]  md:text-[18px] md:leading-[21px] text-[#444444] mb-8">
            {" "}
            <span className="font-semibold">
              {strapiData[1]?.faqs[4]?.title}
            </span>{" "}
            {strapiData[1]?.faqs[4]?.description}
          </li> */}
          {strapiData[1]?.faqs?.map((item, ind) => (
            <li
              className="list-disc font-urbanist  text-[14px] leading-[16px]  md:text-[18px] md:leading-[21px] text-[#444444] mb-8"
              key={ind}
            >
              <span className="font-semibold">{item?.title}</span>
              {item?.description}
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="max-md:mb-[40px]">
        <h3 className="font-sora font-semibold text-[28px] md:text-[40px] leading-[35px] md:leading-[50px] text-[#444444] mb-[32px] md:mb-[54px]">
          Automate Law 25 Compliance with LightBeam
        </h3>
        <p className="font-urbanist font-normal  text-[20px] md:text-[24px] leading-[24px] md:leading-[28px] text-[#444444] mb-10">
          LightBeam simplifies Law 25 compliance with its Zero Trust Data
          Protection platform. Here&apos;s how:
        </p>
        <ul className="px-7">
          <li className="list-disc font-urbanist  text-[14px] leading-[16px]  md:text-[18px] md:leading-[21px] text-[#444444] mb-8">
            {" "}
            <span className="font-semibold">
              Automated Data Subject Requests:
            </span>{" "}
            Manage access, rectification, erasure, and objection requests
            electronically.
          </li>
          <li className="list-disc font-urbanist  text-[14px] leading-[16px]  md:text-[18px] md:leading-[21px] text-[#444444] mb-8">
            {" "}
            <span className="font-semibold">
              Streamlined Consent Management:
            </span>{" "}
            Obtain, record, and manage data subject consent efficiently.
          </li>
          <li className="list-disc font-urbanist  text-[14px] leading-[16px]  md:text-[18px] md:leading-[21px] text-[#444444] mb-8">
            {" "}
            <span className="font-semibold">
              Effortless Privacy Notice Creation & Deployment:
            </span>{" "}
            Generate and deploy clear, compliant privacy notices.
          </li>
          <li className="list-disc font-urbanist  text-[14px] leading-[16px]  md:text-[18px] md:leading-[21px] text-[#444444] mb-8">
            {" "}
            <span className="font-semibold">
              Automated PIA Development:
            </span>{" "}
            Simplify PIA creation and risk assessment for high-risk projects.
          </li>
          <li className="list-disc font-urbanist  text-[14px] leading-[16px]  md:text-[18px] md:leading-[21px] text-[#444444] mb-8">
            {" "}
            <span className="font-semibold">Data Breach Notification:</span> In
            case of a data breach posing a high risk, businesses must notify the
            Commission d&apos;accès à l&apos;information du Québec (CAIQ) and
            affected individuals within 72 hours (effective September 22nd,
            2023)..
          </li>
        </ul>
      </div> */}
      {/* <div className="max-md:mb-[58px]">
        <h3 className="font-sora font-semibold text-[28px] md:text-[40px] leading-[35px] md:leading-[50px] text-[#444444] mb-[32px] md:mb-[54px]">
          Ensure Continuous Compliance & Reduce Risk
        </h3>
        <p className="font-urbanist font-normal  text-[20px] md:text-[24px] leading-[24px] md:leading-[28px] text-[#444444] ">
          LightBeam&apos;s platform simplifies Law 25 compliance, saving time
          and resources.
        </p>
      </div> */}
    </div>
  );
};

export default Content;
