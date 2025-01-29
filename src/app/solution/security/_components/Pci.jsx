"use client";
import BorderButton from "@/components/Animation/Button";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Pci = () => {
  const router = useRouter();
  return (
    <section className="lg:mt-[108px] mt-12 flex flex-col items-center pb-[76px]">
      <div className="flex lg:flex-row flex-col-reverse">
        <div className="lg:w-[542px] w-full">
          <div className="lg:w-[433px] w-full lg:h-[386px] rounded-2xl overflow-hidden lg:block hidden">
            <img
              loading="lazy"
              src="/images/solution/security/pci1.svg"
              alt=""
            />
          </div>
          <div className="lg:mt-[72px] mt-9 flex flex-col gap-[42px]">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center gap-[26px]">
                <p className="min-w-[35px] h-[35px] md:min-w-[52px] md:h-[52px] flex items-center justify-center text-white bg-gradient-to-r from-[#3A379C] to-[#141336] rounded-[50px]">
                  {item}
                </p>
                <p className=" max-md:text-[14px] max-md:leading-[18px]  font-urbanist font-normal para2 text-[#444444]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
              </div>
            ))}
          </div>
          <div className="mt-11 lg:w-[433px] w-full lg:h-[386px] rounded-2xl overflow-hidden lg:hidden">
            <img
              loading="lazy"
              src="/images/solution/security/pci1.svg"
              alt=""
              className=" min-h-[315px] min-w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:w-[760px] w-full max-lg:text-center ">
          <div className="lg:mb-[180px]">
            <h2 className="text-[28px] md:title2 font-sora font-semibold ">
              PCI Compliance
            </h2>
            <p className="font-urbanist text-[14px] leading-[20px] md:text-[20px] md:leading-[28px] text-[#444444] lg:my-[32px] my-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut dolor sit amet, consectetur adipiscing.
            </p>
            <div className="lg:block hidden relative lg:absolute ">
              {/* <BorderButton
              content={"Know More"}
              className={
                "lg:py-[20px] py-[11px] lg:px-[40px] px-[29px] bg-primary_white"
              }
              onClick={()=>router.push("/template/template2")}
            /> */}
              <Link href={"template/template2"}>
                <HoverBorderGradientDemo
                  className={"lg:py-[20px] py-[11px] lg:px-[40px] px-[29px] "}
                  content={"Know More"}
                />
              </Link>
            </div>
          </div>
          <div className="lg:mt-[63px] lg:ml-[88px] lg:w-[650px] w-full lg:h-[398px] rounded-2xl overflow-hidden">
            <img
              loading="lazy"
              src="/images/solution/security/pci2.svg"
              alt=""
              className=" min-h-[315px] min-w-full object-cover "
            />
          </div>
          <div className="lg:hidden mt-6 ">
            <BorderButton
              content={"Know More"}
              className={
                "lg:py-[20px] py-[11px] lg:px-[40px] px-[29px] bg-primary_white"
              }
              onClick={() => router.push("/template/template2")}
            />
          </div>
        </div>
      </div>
      {/* <div className="lg:hidden mt-6">
        <BorderButton
          content={"Know More"}
          className={
            "lg:py-[20px] py-[11px] lg:px-[40px] px-[29px] bg-primary_white"
          }
        />
      </div> */}
    </section>
  );
};
export default Pci;
