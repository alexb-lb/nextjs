import React from "react";
import Marquee from "react-fast-marquee";
import BorderButton from "../Animation/Button";
import Link from "next/link";

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  image: string;
  logo: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  company,
  image,
  logo,
}) => {
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
      <p className=" text-[12px] leading-[14px] md:text-lg font-urbanist">
        {quote}
      </p>
      <div className="flex gap-[22px] self-start mt-12 text-2xl font-semibold text-center max-md:mt-5">
        <img
          loading="lazy"
          src={image}
          alt={author}
          className="object-contain shrink-0 rounded-md aspect-[0.98] w-[32px] md:w-[47px]"
        />
        <div className="flex flex-col">
          <div className="max-md:text-[15px] max-md:leading-[18px] self-start font-urbanist">
            {author}
          </div>
          <img
            loading="lazy"
            src={logo}
            alt={company}
            className="object-contain mt-3 max-w-full aspect-[4.63] w-[69px] md:w-[102px]"
          />
        </div>
      </div>
    </div>
  );
};

const CustomerExperiencesSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        "LightBeam is taking data privacy and compliance to the next level with deep data intelligence.",
      author: "Amit Sinha",
      company: "Company Name",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c0058f0a059698a752813bad329c04b694e218f488d1130f5022c1603775a757?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/d11ced8dbcf52e6516acfef041d98a48a2056628424dd32399c76dabe755be06?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8",
    },
    {
      quote:
        "LightBeam is taking data privacy and compliance to the next level with deep data intelligence.",
      author: "Amit Sinha",
      company: "Company Name",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4d493da6770e3b63670925e71de6d163390df23bc93cf811327b992af458d82a?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d10d1ec9bb71bf54d94c6b56ff9697fa3425ffbb052beab15bba89db10868c6?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8",
    },
    {
      quote:
        "LightBeam is taking data privacy and compliance to the next level with deep data intelligence.",
      author: "Amit Sinha",
      company: "Company Name",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d3b8176e70fdb0705823a3048a8a6f107487694b43a3a5c09be78772091cc424?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/d062d6dcceca771b45e14c90b45d20041e946c9e06c7220a84d44ca7a08a1084?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8",
    },
    {
      quote:
        "LightBeam is taking data privacy and compliance to the next level with deep data intelligence.",
      author: "Amit Sinha",
      company: "Company Name",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/779604e69214996b8b32d29c390fcc8d1f56c7fe05d8f4c3b9b9f01f87dc820f?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/202601ae6c04b4ebce7b3ef091202fcb1a7fedcf060e5774351aa14460e8427b?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8",
    },
    {
      quote:
        "LightBeam is taking data privacy and compliance to the next level with deep data intelligence.",
      author: "Amit Sinha",
      company: "Company Name",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/062683c53a348f163ffdc728774c558ac4250c2fae7213f56bef97913d157dab?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ffc1b38f97b5a02d976bf9ef1c1d768f8d908f5392473360d1e2bb37e8c1a10?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8",
    },
    {
      quote:
        "LightBeam is taking data privacy and compliance to the next level with deep data intelligence.",
      author: "Amit Sinha",
      company: "Company Name",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/672f35405465a1b3e6fb1ad391e7851c1ed591fe5695721918c41e95f8a0b22e?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d8aa91a979cd263eeac22507ce8347485d8e9f04ea8e904288265328e5280bf?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8",
    },
  ];

  return (
    <section className=" overflow-hidden px-16 w-full max-md:px-3 max-md:mt-10 max-md:max-w-full bg-[url('/images/home/experience_bg.svg')]">
      <div className="flex gap-5 max-xl:flex-col">
        <div className="flex flex-col w-[45%] max-md:ml-0 max-xl:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col md:pl-2.5 max-md:max-w-full">
              <h2 className="text-[48px] leading-[61px] font-sora font-semibold capitalize gradient_heading max-md:max-w-full max-md:text-center max-md:text-[30px] max-md:leading-[38px] max-md:font-bold">
                Customer <br className="block md:hidden" /> Experiences{" "}
                <br className="hidden md:block" /> That{" "}
                <br className="block md:hidden" /> Speak Volumes
              </h2>
              <p className="self-start mt-6 text-xl max-md:text-center  leading-7 text-[#D9D9D9] font-urbanist max-md:max-w-full">
                We&apos;ve worked with hundreds of incredible people on ventures
                across all industries. One thing they all have in common is that
                they love our service.
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
              <Link href={"/contact"}>
                <BorderButton
                  content={"Book Demo"}
                  className={
                    "max-md:text-[16px] max-md:leading-[20px] px-8 py-3 md:px-10  md:py-5 rounded-[52px] text-white bg-black font-semibold leading-none text-center"
                  }
                  onClick={() => {}}
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
              <div className="max-w-[300px] absolute xl:right-[600px] 2xl:right-[670px]">
                {/* <div className="max-w-[300px] absolute xl:right-[550px] 2xl:right-[750px]"> */}
                <Marquee
                  direction="down"
                  className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full overflow-visible"
                  gradient={false}
                  style={{ overflow: "visible" }}
                >
                  {testimonials.map((testimonial, index) => (
                    <Testimonial key={index} {...testimonial} />
                  ))}
                </Marquee>
              </div>
              <div
                className="max-w-[300px]
               absolute xl:right-[290px] 2xl:right-[350px]"
              >
                <Marquee
                  direction="up"
                  className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"
                  gradient={false}
                  style={{ overflow: "visible" }}
                >
                  {testimonials.map((testimonial, index) => (
                    <Testimonial key={index} {...testimonial} />
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Marquee */}

        <div className="block xl:hidden pb-[44px] ">
          <Marquee>
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </Marquee>
          <Marquee direction="right">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default CustomerExperiencesSection;
