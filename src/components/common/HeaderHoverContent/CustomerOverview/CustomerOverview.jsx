import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CustomerOverview = ({ caseStudy }) => {
  return (
    <main className=" px-7 pt-[30px] pb-10 rounded-none bg-primary_white max-xl:w-[1000px] xl:min-w-[1219px] rounded-b-lg">
      <section>
        <div className="flex flex-col items-start  ">
          <header className="flex gap-3 text-lg font-semibold tracking-normal leading-[22px] font-sora text-[#221F20] cursor-pointer">
            <Link href={"/customer"} className="flex gap-3">
              <h1 className="grow">Customer Overview</h1>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c66db5a282615cff644cec3f5feda99ecb3e1fd7f4d1ea3b96a36285a8bc2092?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
                alt=""
                className="object-contain shrink-0 my-auto w-4 aspect-[1.14]"
              />
            </Link>
          </header>
          <p className="mt-3 text-sm font-medium font-urbanist leading-[22px] text-[#808080]">
            LightBeam.ai converges data security, privacy, and governance,
            enabling businesses to secure their data,
            <br />
            remediate access risks, and comply with regulations with a single
            sensitive data platform
          </p>
          <hr className="shrink-1 self-stretch  mt-7 h-px border border-solid border-zinc-300 border-opacity-80 " />
        </div>
        <h3 className="font-semibold mt-[18px] mb-[15px] text-[16px] font-sora text-[#221F20]">
          Case Study
        </h3>
        <div className="bg-[#EEF2FF] rounded-[20px] flex items-center md:items-stretch flex-wrap gap-[10px] p-3">
          {/* <div className="bg-white rounded-[16px] w-[181px] h-[207px] py-[24px] px-[19px]">
            <img
              loading="lazy"
              src="/images/logo/josef.svg"
              width="105px"
              height="38px"
              alt=""
            />
            <p className="py-[15px] text-[#151617] font-urbanist text-[12px] leading-4 text-wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscj elit, sed do
              eiusmod temporu uyuht ythy
            </p>
            <Link
              href={"/customer#success-stories"}
              className="flex items-center gap-3"
            >
              <p className="text-[#545CF6] text-[13.26px] font-urbanist">
                Learn more
              </p>
              <FaArrowRight className="text-[#545CF6] text-[13.26px]" />
            </Link>
          </div>
          <div className="bg-white rounded-[16px] w-[181px] h-[207px] py-[24px] px-[19px]">
            <img
              loading="lazy"
              src="/images/logo/belvo.svg"
              width="105px"
              height="38px"
              alt=""
            />
            <p className="py-[15px] font-urbanist text-[#151617] text-[12px] leading-4 text-wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscj elit, sed do
              eiusmod temporu uyuht ythy
            </p>
            <Link
              href={"/customer#success-stories"}
              className="flex items-center gap-3"
            >
              <p className="text-[#545CF6] text-[13.26px] font-urbanist">
                Learn more
              </p>
              <FaArrowRight className="text-[#545CF6] text-[13.26px]" />
            </Link>
          </div>
          <div className="bg-white rounded-[16px] w-[181px] h-[207px] py-[24px] px-[19px]">
            <img
              loading="lazy"
              src="/images/logo/chili_piper.svg"
              width="105px"
              height="38px"
              alt=""
              className="min-h-[38px]"
            />
            <p className="py-[15px] font-urbanist text-[#151617] text-[12px] leading-4 text-wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscj elit, sed do
              eiusmod temporu uyuht ythy
            </p>
            <Link
              href={"/customer#success-stories"}
              className="flex items-center gap-3"
            >
              <p className="text-[#545CF6] text-[13.26px] font-urbanist">
                Learn more
              </p>
              <FaArrowRight className="text-[#545CF6] text-[13.26px]" />
            </Link>
          </div>
          <div className="bg-white rounded-[16px] w-[181px] h-[207px] py-[24px] px-[19px]">
            <img
              loading="lazy"
              src="/images/logo/josef.svg"
              width="105px"
              height="38px"
              alt=""
            />
            <p className="py-[15px] font-urbanist text-[#151617] text-[12px] leading-4 text-wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscj elit, sed do
              eiusmod temporu uyuht ythy
            </p>
            <Link
              href={"/customer#success-stories"}
              className="flex items-center gap-3"
            >
              <p className="text-[#545CF6] text-[13.26px] font-urbanist">
                Learn more
              </p>
              <FaArrowRight className="text-[#545CF6] text-[13.26px]" />
            </Link>
          </div>
          <div className="bg-white rounded-[16px] w-[181px] h-[207px] py-[24px] px-[19px]">
            <img
              loading="lazy"
              src="/images/logo/belvo.svg"
              width="105px"
              height="38px"
              alt=""
            />
            <p className="py-[15px] font-urbanist text-[#151617] text-[12px] leading-4 text-wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscj elit, sed do
              eiusmod temporu uyuht ythy
            </p>
            <Link
              href={"/customer#success-stories"}
              className="flex items-center gap-3"
            >
              <p className="text-[#545CF6] text-[13.26px] font-urbanist">
                Learn more
              </p>
              <FaArrowRight className="text-[#545CF6] text-[13.26px]" />
            </Link>
          </div>
          <div className="bg-white rounded-[16px] w-[181px] h-[207px] py-[24px] px-[19px]">
            <img
              loading="lazy"
              src="/images/logo/chili_piper.svg"
              width="105px"
              height="38px"
              alt=""
              className="min-h-[38px]"
            />
            <p className="py-[15px] font-urbanist text-[#151617] text-[12px] leading-4 text-wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscj elit, sed do
              eiusmod temporu uyuht ythy
            </p>
            <Link
              href={"/customer#success-stories"}
              className="flex items-center gap-3"
            >
              <p className="text-[#545CF6] text-[13.26px] font-urbanist">
                Learn more
              </p>
              <FaArrowRight className="text-[#545CF6] text-[13.26px]" />
            </Link>
          </div> */}
          {caseStudy?.map((item, ind) => (
            <div
              className="bg-white rounded-[16px] w-[181px] min-h-[207px] py-[24px] px-[19px]"
              key={item?.id}
            >
              {item?.attributes?.logo?.data?.attributes?.url && (
                <Image
                  loading="lazy"
                  // src="/images/logo/chili_piper.svg"
                  src={item?.attributes?.logo?.data?.attributes?.url}
                  alt=""
                  height={38}
                  width={38}
                  className="min-h-[38px] md:max-h-[38px] w-auto"
                />
              )}

              <p className="py-[15px] font-urbanist text-[#151617] text-[12px] leading-4 text-wrap">
                {/* Lorem ipsum dolor sit amet, consectetur adipiscj elit, sed do
                eiusmod temporu uyuht ythy */}
                {item?.attributes?.title}
              </p>
              <Link
                href={"/customer#success-stories"}
                className="flex items-center gap-3"
              >
                <p className="text-[#545CF6] text-[13.26px] font-urbanist">
                  Learn more
                </p>
                <FaArrowRight className="text-[#545CF6] text-[13.26px]" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CustomerOverview;
