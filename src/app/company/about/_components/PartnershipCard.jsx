"use client";
import Image from "next/image";
import BorderButton from "../../../../components/Animation/Button";
import { useRouter } from "next/navigation";
import "./index.css";
const PartnershipCard = ({ strapiData }) => {
  const router = useRouter();

  return (
    <section
      className={`relative bg-[#F5F8FF] w-fit mx-[16px] lg:mx-0  sm:mx-auto  sm:w-full  mt-[131px] max-md:mt-[70px]  rounded-2xl xl:pr-[98px] pr-[11px] xl:pt-[58px] pt-[45px] xl:pl-[58px] pl-[15px] xl:pb-[64px] pb-[168px] flex xl:flex-row flex-col justify-between max-md:justify-normal max-md:h-[534px] max-md:overflow-hidden bg-center max-md:bg-[center_top] bg-cover  bg-no-repeat cardButton`}
      style={{
        backgroundImage: `url('${strapiData?.sections?.[14]?.images?.data?.[0]?.attributes?.url}')`,
      }}
    >
      <div className=" w-full xl:text-left text-center ">
        <h1 className="gradient_heading text-[28px] md:text-[32px] leading-[40px] font-sora font-semibold mb-[16px]">
          {strapiData?.sections?.[14]?.title || "Partnership With LightBeam.ai"}
        </h1>
        <p className="text-[#D9D9D9] font-poppins para3B xl:max-w-[574px]">
          {strapiData?.sections?.[14]?.content?.description}
        </p>
      </div>
      <div className="flex justify-center items-center max-md:items-start xl:justify-normal max-md:mt-8 ">
        <BorderButton
          content={
            strapiData?.sections?.[14]?.cta?.[0]?.text || "Become A Partner"
          }
          className={
            " py-5 rounded-[52px] text-white bg-black font-semibold leading-none text-center  md:min-w-[229px] "
          }
          onClick={() => router.push("/contact")}
          href={""}
        />
      </div>
      {/* <div className="absolute bottom-0 right-0 md:hidden">
        <Image
          src={"/images/company/partner_icon.png"}
          height={200}
          width={200}
          alt=""
        />
      </div> */}
    </section>
  );
};
export default PartnershipCard;
