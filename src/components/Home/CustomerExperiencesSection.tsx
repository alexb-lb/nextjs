import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import BorderButton from "../Animation/Button";
import Link from "next/link";
import Image from "next/image";

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  image: string;
  // logo: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote = "", // Provide a default value
  author,
  company,
  image,
  // logo,
}) => {
  const [showFullText, setShowFullText] = useState(false);

  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };

  const truncateText = (text: string, limit: number) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  const truncatedQuote = truncateText(quote, 100);
  // const truncatedQuoteName = truncateText(quote, 30);
  return (
    <div
      className="flex overflow-hidden flex-col px-6 py-[21px] md:py-11 mt-4 w-full text-white max-w-[246px] md:max-w-[309px] shadow-[3px_6px_22px_rgba(0,0,0,0.05)] max-md:px-5 max-md:ml-3"
      style={{
        background: "rgba( 255, 255, 255, 0.1 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 21px )",
        borderWidth: "1px",
        borderImage: "linear-gradient( transparent, #FFFFFF, transparent) 0.9",
        borderRadius: "12.38px",
        // border: "1px solid rgba( 255, 255, 255, 0.18 )",
      }}
    >
      <p className="text-[12px] leading-[14px] md:text-[1.1rem] md:leading-[1.4rem] font-urbanist lg:min-h-[90px] min-h-[60px] md:min-h-[90px]">
        {/* {showFullText ? quote : truncatedQuote} */}
        {quote}
        {quote.length > 100 && (
          <span
            onClick={handleToggleText}
            style={{ cursor: "pointer", color: "blue", display: "none" }}
          >
            {showFullText ? " Show less" : " Show more"}
          </span>
        )}
      </p>
      <div className="flex gap-[22px] self-start mt-8 text-[22px] leading-[26.49px] font-semibold text-center max-md:mt-5">
        {/* {image && (
          <Image
            loading="lazy"
            src={image}
            alt={author}
            height={50}
            width={50}
            className="object-contain shrink-0 rounded-md aspect-[0.98] w-[32px] md:w-[47px] text-[10px]"
          />
        )} */}

        <div className="">
          <div className="max-md:text-[15px] max-md:leading-[18px]  font-urbanist text-[14px] italic">
            {author}
          </div>
          {/* <img
            loading="lazy"
            src={logo}
            alt={company}
            className="object-contain mt-3 max-w-full aspect-[4.63] w-[69px] md:w-[102px]"
          /> */}
        </div>
      </div>
    </div>
  );
};

const CustomerExperiencesSection = ({
  setionData,
  imageData,
  bgImage,
}: any) => {
  if (!setionData || setionData.length === 0) {
    return null; // Return null if navigation is undefined or empty
  }

  return (
    <section
      className=" overflow-hidden px-16 w-full max-md:px-3 max-md:mt-10 max-md:max-w-full  bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* bg-[url('/images/home/experience_bg.png')] */}
      <div className="flex gap-5 max-xl:flex-col">
        <div className="flex flex-col w-[45%] max-md:ml-0 max-xl:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col md:pl-2.5 max-md:max-w-full">
              <h2 className="text-[48px] leading-[61px] font-sora font-semibold capitalize gradient_heading max-md:max-w-full max-md:text-center max-md:text-[30px] max-md:leading-[38px] max-md:font-bold">
                {/* Customer <br className="block md:hidden" /> Experiences{" "}
                <br className="hidden md:block" /> That{" "}
                <br className="block md:hidden" /> Speak Volumes */}
                {setionData[0]?.content?.title}
              </h2>
              <p className="self-start mt-6 text-xl max-md:text-center  leading-7 text-[#D9D9D9] font-urbanist max-md:max-w-full">
                {setionData[0]?.content?.description ||
                  " We've worked with hundreds of incredible people on ventures across all industries. One thing they all have in common is that they love our service."}
              </p>
            </div>
            {/* <button className="flex flex-col font-semibold leading-none text-center rounded-[50px] mt-6">
              <div className="flex flex-col rounded-[52px]">
                <div className="px-10 py-5 rounded-[52px] text-white border border-[#8C70D2]">
                  Book Demo
                </div>
              </div>
            </button> */}
            <div className="mt-6 max-md:text-center ">
              <Link href={setionData[0]?.cta[0]?.url || "/contact"}>
                <BorderButton
                  content={setionData[0]?.cta[0]?.text}
                  className={
                    "max-md:text-[16px] max-md:leading-[20px] px-8 py-3 md:px-10  md:py-5 rounded-[52px] text-white bg-black font-semibold leading-none text-center"
                  }
                  onClick={() => {}}
                  href={""}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className=" relative ml-5 w-[55%] max-md:ml-0 max-xl:w-full hidden xl:flex">
          <div className="grow max-md:mt-10 max-md:max-w-full">
            <div
              className="flex gap-5 max-md:flex-row "
              style={{ height: "800px" }}
            >
              <div className="max-w-[300px] absolute xl:right-[500px] 2xl:right-[670px]">
                {/* <div className="max-w-[300px] absolute xl:right-[550px] 2xl:right-[750px]"> */}
                <Marquee
                  direction="down"
                  className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full overflow-visible"
                  gradient={false}
                  style={{ overflow: "visible" }}
                >
                  {setionData[1]?.cards?.map((testimonial: any, index: any) => (
                    <Testimonial
                      key={index}
                      quote={testimonial.title}
                      author={testimonial.description}
                      company={testimonial.company_name}
                      image={
                        (imageData?.cards &&
                          imageData?.cards[index]?.image?.data?.attributes
                            ?.url) ||
                        "/images/home/human_image.png"
                      }
                    />
                  ))}
                </Marquee>
              </div>
              {/* <div
                className="max-w-[300px]
               absolute xl:right-[290px] 2xl:right-[350px]"
              >
                <Marquee
                  direction="up"
                  className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"
                  gradient={false}
                  style={{ overflow: "visible" }}
                >
                  {setionData[1]?.cards?.map((testimonial: any, index: any) => (
                    <Testimonial
                      key={index}
                      quote={testimonial.title}
                      author={testimonial.description}
                      company={testimonial.company_name}
                      image={
                        (imageData?.cards &&
                          imageData?.cards[index]?.image?.data?.attributes
                            ?.url) ||
                        "/images/home/human_image.png"
                      }
                    />
                  ))}
                </Marquee>
              </div> */}
            </div>
          </div>
        </div>

        {/* Mobile Marquee */}

        <div className="block xl:hidden pb-[44px] ">
          <Marquee>
            {setionData[1]?.cards?.map((testimonial: any, index: any) => (
              <Testimonial
                key={index}
                quote={testimonial.title}
                author={testimonial.description}
                company={testimonial.company_name}
                image={
                  (imageData?.cards &&
                    imageData?.cards[index]?.image?.data?.attributes?.url) ||
                  "/images/home/human_image.png"
                }
                // logo={testimonial.logo_url}
              />
            ))}
          </Marquee>
          <Marquee direction="right">
            {setionData[1]?.cards?.map((testimonial: any, index: any) => (
              <Testimonial
                key={index}
                quote={testimonial.title}
                author={testimonial.description}
                company={testimonial.company_name}
                image={
                  (imageData?.cards &&
                    imageData?.cards[index]?.image?.data?.attributes?.url) ||
                  "/images/home/human_image.png"
                }
                // logo={testimonial.logo_url}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default CustomerExperiencesSection;
