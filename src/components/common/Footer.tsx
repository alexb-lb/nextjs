/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import HoverBorderGradientDemo from "./HoverBorderGradientDemo";
import Link from "next/link";

const socialIcons = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/company/lightbeamai/",
  },
  {
    title: "Medium",
    link: "https://medium.com/lightbeam-ai",
  },
  {
    title: "Twitter",
    link: "https://x.com/i/flow/login?redirect_after_login=%2FLightBeamAI",
  },
  {
    title: "Youtube",
    link: "https://www.youtube.com/channel/UCa6JGOCNDhGysj_07ABIxxg",
  },
];

const Footer: React.FC = () => {
  return (
    <footer
      className={`flex overflow-hidden flex-col items-center pb-20 max-md:pb-10 mt-0 w-full bg-black max-md:mt-10 max-md:max-w-full relative z-20 `}
      style={{
        backgroundImage: "url('/images/footer/footerBottomBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-20 pt-16 pb-0 w-full min-h-[360px] max-md:px-5 max-md:max-w-full bg-[url('/images/contact/newsletter_bg.svg')] bg-cover bg-no-repeat bg-center">
        <div className="flex relative flex-col items-center max-w-full w-[717px]">
          <div className="flex flex-col pr-px pl-2 w-full">
            <h2 className="lg:text-5xl text-[32px] leading-[40.32px] font-sora font-semibold gradient_heading capitalize text-center max-md:max-w-full max-md:text-4xl">
              Subscribe to Our Newsletter
            </h2>
            <p className="self-center lg:mt-6 mt-4 font-urbanist font-normal text-[14px] lg:text-lg leading-[16.8px] text-white text-center max-md:max-w-full w-[90%] mx-auto">
              Stay in the loop and keep up with all our news and updates!
            </p>
          </div>
          <form className="flex overflow-hidden flex-wrap gap-2.5 md:justify-center justify-between items-center py-2 pr-3 md:pl-6 pl-4 md:mt-8 mt-[40px] text-white rounded-[50px] max-md:pl-5  max-md:w-full border border-[#fff]">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="self-stretch my-auto md:text-md text-[14px] md:w-[300px] w-[126px] font-urbanist bg-transparent border-none"
            />
            {/* <button
              type="submit"
              className="flex flex-col self-stretch my-auto lg:text-xl text-[16px] font-semibold leading-none text-center whitespace-nowrap bg-indigo-500 rounded-[50px] lg:w-[184px] w-[130px]"
            >
              <div className="flex flex-col rounded-[52px]">
                <div className="lg:px-12 font-urbanist px-[29px] lg:py-5 py-[11px] rounded-[52px] ">
                  Subscribe
                </div>
              </div>
            </button> */}
            <HoverBorderGradientDemo
              content={"Subscribe"}
              className="lg:px-12 font-urbanist px-[29px] lg:py-5 py-[11px] rounded-[52px]"
            />
          </form>
        </div>
      </div>

      <div className="mt-12 w-full max-w-[1282px] max-md:mt-2 max-md:max-w-full px-[16px] lg:px-0 z-20">
        <div className="flex gap-5 md:gap-15 max-md:flex-col">
          <div className="flex flex-col lg:w-[26%] w-[35%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start w-full text-lg tracking-wide text-white max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6924a76e24e1a9e7c0eacf1261c51a8274ef6a7dae57afec268e724bcfea1c56?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
                alt="Company Logo"
                className="object-contain max-w-full aspect-[4.2] w-[223px] max-md:w-[134px] max-md:h-[32px]"
              />
              <div className="flex gap-3 self-stretch mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a75a88750bf3f93a5e1844b7f48a2edc9fde2e7a59fc072a49812c8712d0ad7?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
                  alt="Email icon"
                  className="object-contain shrink-0 aspect-square w-[26px]"
                />
                <div className="flex-auto my-auto w-[247px]">
                  <span className="font-urbanist max-md:text-[16px]">
                    Email:{" "}
                  </span>
                  <span className="font-medium max-md:text-[16px] font-urbanist">
                    lightbeamai@gmail.com
                  </span>
                </div>
              </div>
              <div className="flex gap-2.5 mt-6">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/713ecab90253831310bbc68a763b392e72ee52b7b1c626fd82b46ee22b0298ee?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
                  alt="Phone icon"
                  className="object-contain shrink-0 aspect-square w-[26px]"
                />
                <div className="my-auto basis-auto max-md:text-[16px] font-urbanist">
                  Phone: +91 9876543210
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 lg:w-[74%] w-[65%] max-md:ml-0 max-md:w-full">
            <div className="flex w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-wrap flex-auto gap-10 md:gap-[72px] items-start max-md:mr-0 max-md:max-w-full">
                <FooterColumn
                  title="Platform"
                  link="/platform"
                  items={[
                    { title: "Privacy", link: "/platform/privacy-center" },
                    { title: "Security", link: "/platform/security" },
                    {
                      title: "Governance",
                      link: "/platform/governance-center",
                    },
                  ]}
                />
                <FooterColumn
                  title="Solution"
                  link="/solution"
                  items={[
                    { title: "Privacy", link: "/solution/privacy" },
                    { title: "Security", link: "/solution/security" },
                    {
                      title: "Governance",
                      link: "/solution/governance",
                    },
                    {
                      title: "Integration",
                      link: "/solution/integration",
                    },
                  ]}
                  // items={["Privacy", "Security", "Governance", "Integration"]}
                />
                <FooterColumn
                  title="Company"
                  link="/company"
                  items={[
                    { title: "Home", link: "/company" },
                    { title: "About Us", link: "/company/about" },
                    {
                      title: "Partnership",
                      link: "/company/partnership",
                    },
                    {
                      title: "Careers",
                      link: "/company/career",
                    },
                    {
                      title: "Contact Us",
                      link: "/contact",
                    },
                  ]}
                  // items={[
                  //   "Home",
                  //   "About Us",
                  //   "Partnership",
                  //   "Careers",
                  //   "Contact Us",
                  // ]}
                />
                <FooterColumn
                  title="Resources"
                  link="/resource"
                  items={[
                    { title: "Blogs", link: "/resource/blogs" },
                    {
                      title: "Newsroom",
                      link: "/resource/news-room",
                    },
                  ]}
                  // items={["Blogs", "Newsroom"]}
                />
                <FooterColumn
                  title="Legal"
                  link="/"
                  items={[
                    { title: "Privacy Policy", link: "/" },
                    {
                      title: "Terms and Conditions",
                      link: "/",
                    },
                  ]}
                  // items={["Privacy Policy", "Terms and Conditions"]}
                />
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/44a143d15fe9ab9dd68e6c42fa2bc7e1066e776e42e836f14ae33d32ee38f77a?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
                alt="Decorative element"
                className="object-contain shrink-0 self-end mt-32 aspect-[1.01] w-[81px] max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="shrink-0 mt-5 max-w-full h-px border border-solid border-white border-opacity-20 w-[1280px]" />
      <div className="flex flex-wrap gap-5  justify-between mt-12 w-full max-w-screen-xl px-[16px] lg:px-0 max-md:mt-10 max-md:max-w-full">
        <div className="my-auto text-base tracking-tight font-urbanist text-white bg-blend-normal">
          ©2024 Lightbeam.ai All rights reserved
        </div>
        <div className="flex gap-4 mt-[54px] lg:mt-auto justify-evenly lg:justify-normal items-start lg:w-auto w-full ">
          {socialIcons.map((social, index) => (
            <Link href={social.link} key={index}>
              <img
                loading="lazy"
                src={`/images/navbar/footer_logo${1 + index}.svg`}
                alt={`${social} icon`}
                className="object-contain shrink-0 aspect-square w-[45px]"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

interface FooterColumnProps {
  title: string;
  items: any;
  link: string;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, link, items }) => {
  return (
    <div className="flex flex-col whitespace-nowrap">
      <h3 className="text-lg font-semibold tracking-tight text-white font-urbanist">
        <Link href={link}>{title}</Link>
      </h3>
      <div className="flex flex-col items-start mt-8 text-base tracking-tight text-zinc-500">
        {items.map((item: any, index: number) => (
          <div
            key={index}
            className="flex flex-col justify-center mt-4 first:mt-0"
          >
            <div className="font-urbanist">
              <Link href={item.link}>{item.title}</Link>
            </div>
            <div className="mt-2 w-0 border border-black border-solid min-h-[1px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
