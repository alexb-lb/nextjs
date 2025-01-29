import BorderButton from "../Animation/Button";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import HoverBorderGradientDemo from "../common/HoverBorderGradientDemo";

const CaseStudy = () => {
  return (
    <section>
      <h2 className=" title2 text-center font-sora font-bold mb-[61px]">
        Case Studies
      </h2>
      <div className="flex justify-center items-stretch gap-[20px] ">
        <div className="rounded-[24px] w-[630px] pt-[66px] pl-[32px] pr-[40px] pb-[38px] bg-gradient-to-br from-[#231C40] via-[#4B298B] to-[#9987CA]">
          <h3 className="text-white text-[40px] leading-[50.4px] font-semibold font-sora mb-[25px]">
            LightBeam ai pioneers zero-trust
          </h3>
          <p className="text-white para2 font-urbanist">
            <span className="font-semibold">Challenge: </span>LightBeam ai
            pioneers zero-trust data protection, merging data security, privacy,
            and AI governance.
          </p>
          <br />
          <p className="text-white para2 font-urbanist">
            <span className="font-semibold">Goal: </span>LightBeam ai pioneers
            zero-trust data protection, merging
          </p>
          <div className="mt-[71px] flex justify-between items-center">
            <BorderButton
              content={"Download"}
              className={
                "py-[20px] px-[45px] bg-[#4B298B] text-primary_white font-semibold text-[20px] leading-[20px]"
              }
            />
            <p className="text-[22px] leading-[26.4px] text-primary_white font-semibold font-urbanist flex gap-2 items-center cursor-pointer">
              Learn More
              <FaArrowRight />
            </p>
          </div>
        </div>
        <div className="rounded-[24px] w-[630px] pt-[66px] pl-[32px] pr-[40px] pb-[38px] bg-[url('/images/customers/case_study1.svg')] bg-center bg-cover bg-no-repeat flex justify-end items-end">
          <div className="flex gap-8">
            <p className="border-2 border-primary_white text-primary_white cursor-pointer p-3 rounded-[50px]">
              <FaArrowLeft />
            </p>
            <p className="border-2 border-primary_white text-primary_white cursor-pointer p-3 rounded-[50px]">
              <FaArrowRight />
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[64px]">
        <HoverBorderGradientDemo content="View All" />
      </div>
    </section>
  );
};
export default CaseStudy;
