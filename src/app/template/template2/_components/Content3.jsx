import React from "react";

const Content3 = () => {
  return (
    <div className=" md:pb-[80px] md:px-[80px] px-4">
      <div className="max-md:mb-[42px]">
        <h3 className="font-sora font-semibold text-[28px] md:text-[40px] leading-[35px] md:leading-[50px] text-[#444444] mb-[32px] md:mb-[54px]">
          How LightBeam can help
        </h3>
        <ul className="px-7">
          <li className="list-disc font-urbanist  text-[14px] leading-[16px] md:text-[18px] md:leading-[27px] text-[#444444] mb-8">
            {" "}
            <span className="font-semibold">
              Automate and simplify compliance:
            </span>{" "}
            LightBeam automates and simplifies key security measures and
            compliance mandated by government regulations, reducing manual
            effort and human error.
          </li>
          <li className="list-disc font-urbanist  text-[14px] leading-[16px] md:text-[18px] md:leading-[27px] text-[#444444] mb-8">
            {" "}
            <span className="font-semibold">
              Identify and classify sensitive data:
            </span>{" "}
            Classify all sensitive customer financial data within your systems,
            ensuring appropriate security protocols
          </li>
          <li className="list-disc font-urbanist  text-[14px] leading-[16px] md:text-[18px] md:leading-[27px] text-[#444444] mb-8">
            {" "}
            <span className="font-semibold">
              Data Access Control and Monitoring:
            </span>{" "}
            Enforce robust access controls and continuously monitor data
            activity to detect suspicious behavior.
          </li>
          <li className="list-disc font-urbanist  text-[14px] leading-[16px] md:text-[18px] md:leading-[27px] text-[#444444] mb-8">
            {" "}
            <span className="font-semibold">Future-Proof Security: </span>{" "}
            LightBeam&apos;s platform adapts to evolving security threats and
            regulatory changes, keeping you ahead of bad actors and data
            security risks
          </li>
          <li className="list-disc font-urbanist  text-[14px] leading-[16px] md:text-[18px] md:leading-[27px] text-[#444444] ">
            {" "}
            <span className="font-semibold">Data Breach Notification:</span> In
            case of a data breach posing a high risk, businesses must notify the
            Commission d&apos;accès à l&apos;information du Québec (CAIQ) and
            affected individuals within 72 hours (effective September 22nd,
            2023)..
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Content3;
