import Link from "next/link";
import { MobileNavheader } from "../../Header";

const CoustmerMenu = ({ changeNavMenu }) => {
  return (
    <>
      <MobileNavheader
        title={"CUSTOMER"}
        changeNavMenu={changeNavMenu}
        link={"/customer"}
      />

      <div className="bg-[#EEF2FF] rounded-[16px] p-[16px] mb-[53px]">
        <h3 className="font-sora font-semibold text-[18px] leading-[22.68px] mb-[22px]">
          Case Studies
        </h3>
        <div className="bg-white rounded-[16px] p-[12px] px-[19.29px] gap-[12px] mb-[22px]">
          <img
            loading="lazy"
            src="/images/navbar/josef.svg"
            alt=""
            className="w-[105.48px] h-[38.57px] mb-[12px] "
          />
          <div>
            <p className="font-urbanist font-normal text-[12.05px] leading-[16px] text-[#151617] mb-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscj elit, sed do
              eiusmod temporu uyuht
            </p>
            <div className="flex items-center gap-[4px] pb-[4.8px]">
              <Link href={"/customer#success-stories"}>
                <p className="font-urbanist font-semibold text-[12px] leading-[14.4px] text-[#545CF6]">
                  Learn More
                </p>
              </Link>
              <img
                loading="lazy"
                src="/images/navbar/arrow_right_color.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[16px] p-[12px] px-[19.29px] gap-[12px] mb-[22px]">
          <img
            loading="lazy"
            src="/images/navbar/josef.svg"
            alt=""
            className="w-[105.48px] h-[38.57px] mb-[12px] "
          />
          <div>
            <p className="font-urbanist font-normal text-[12.05px] leading-[16px] text-[#151617] mb-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscj elit, sed do
              eiusmod temporu uyuht
            </p>
            <div className="flex items-center gap-[4px] pb-[4.8px]">
              <Link href={"/customer#success-stories"}>
                <p className="font-urbanist font-semibold text-[12px] leading-[14.4px] text-[#545CF6]">
                  Learn More
                </p>
              </Link>
              <img
                loading="lazy"
                src="/images/navbar/arrow_right_color.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[16px] p-[12px] px-[19.29px] gap-[12px] ">
          <img
            loading="lazy"
            src="/images/navbar/josef.svg"
            alt=""
            className="w-[105.48px] h-[38.57px] mb-[12px] "
          />
          <div>
            <p className="font-urbanist font-normal text-[12.05px] leading-[16px] text-[#151617] mb-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscj elit, sed do
              eiusmod temporu uyuht
            </p>
            <div className="flex items-center gap-[4px] pb-[4.8px]">
              <Link href={"/customer#success-stories"}>
                <p className="font-urbanist font-semibold text-[12px] leading-[14.4px] text-[#545CF6]">
                  Learn More
                </p>
              </Link>
              <img
                loading="lazy"
                src="/images/navbar/arrow_right_color.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CoustmerMenu;
