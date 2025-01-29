import React from "react";

const Content = () => {
  return (
    <div className="pt-[40px] md:pt-[93px] md:pb-[80px] md:px-[80px] px-4">
      <div className="mb-[0px]">
        <h3 className="font-sora font-semibold text-[28px] md:text-[40px] leading-[35px] md:leading-[50px] text-[#444444] mb-[54px]">
          Introduction
        </h3>
        <ul className="px-7">
          <li className="list-disc font-urbanist   text-[14px] leading-[16px]  md:text-[18px] md:leading-[21px] text-[#444444] mb-8">
            {" "}
            Over the past few years, banking practices have seen a significant
            change in day to day operations - most banking activities have
            shifted online, adoption of AI based technologies has gained
            prominence, and dependence on third party tools has increased.  All
            of these factors have affected a significant change in how data is
            being used, stored and exchanged in credit unions. Credit unions
            managing sensitive PIIs in their day-to-day operations are now
            exposed to data security and privacy concerns more than ever before.
          </li>
        </ul>
      </div>
      <div className="max-md:mb-[42px]">
        <h3 className="font-sora font-semibold text-[28px] md:text-[40px] leading-[35px] md:leading-[50px] text-[#444444] mb-[32px] md:mb-[54px]">
          Key sources of risks for Credit Unions
        </h3>

        <ul className="">
          <p className="font-urbanist font-normal   text-[14px] leading-[16px]  md:text-[18px] md:leading-[28px] text-[#444444]">
            Credit unions transact with sensitive customer PIIs on a regular
            basis. This makes them more susceptible and at risk. Some of the key
            sources of risk for Credit Unions are:
          </p>
          <li className="list-disc font-urbanist   text-[14px] leading-[16px]  md:text-[18px] md:leading-[28px] text-[#444444] mb-8 mx-7">
            Large volume of sensitive PIIs with Credit Unions
          </li>
          <p className="font-urbanist font-normal   text-[14px] leading-[16px]  md:text-[18px] md:leading-[28px] text-[#444444]">
            Credit unions deal with big amounts of sensitive financial and
            personal information of their customers - social security numbers,
            email addresses, passwords, account numbers, login details etc. Any
            leakage of such information can expose the individual to financial
            risk and fraud.
          </p>
          <li className="list-disc font-urbanist   text-[14px] leading-[16px]  md:text-[18px] md:leading-[28px] text-[#444444] mb-8 mx-7">
            AI and weaknesses in IT infrastructure of Credit unions
          </li>
          <p className="font-urbanist font-normal   text-[14px] leading-[16px]  md:text-[18px] md:leading-[28px] text-[#444444]">
            Technology is rapidly evolving and so are security risks. The
            adoption of AI based technology comes with its own pitfalls. It can
            pose a threat to traditional data security mechanisms which are in
            use by many credit unions even to this date
          </p>
          <li className="list-disc font-urbanist   text-[14px] leading-[16px]  md:text-[18px] md:leading-[28px] text-[#444444] mb-8 mx-7">
            Third-party data exposure. 
          </li>
          <p className="font-urbanist font-normal   text-[14px] leading-[16px]  md:text-[18px] md:leading-[28px] text-[#444444]">
            Data breaches at a third-party can risk the data security, and
            reputation of a credit union. While credit unions keep a close
            control over their own data, a compromise with an external vendor
            can prove to be equally risky.
          </p>
          <li className="list-disc font-urbanist   text-[14px] leading-[16px]  md:text-[18px] md:leading-[28px] text-[#444444] mb-8 mx-7">
            Phishing and identity theft
          </li>
          <p className="font-urbanist font-normal   text-[14px] leading-[16px]  md:text-[18px] md:leading-[28px] text-[#444444]">
            Credit unions and individual account holders constantly face
            phishing attempts and identity theft attempts. In most cases, the
            individual receives a link which eventually asks for personal
            information. Once shared, hackers gain access to the individual’s
            banking and financial details.
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Content;
