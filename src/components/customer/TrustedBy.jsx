import Image from "next/image";
import Marquee from "react-fast-marquee";
const TrustedBySection = ({ sectionData }) => {
  return (
    <div className="bg-[#F5F8FF] md:px-[105px] py-[52px] md:py-[60px] ">
      <h3 className="text-[#232323] font-semibold text-[28px] md:text-[32px] leading-[35px] md:leading-[48px] text-center  md:mb-[84px] font-sora">
        {sectionData?.content?.title}
      </h3>
      <div className="w-full max-h-[262px] hidden xl:block relative 2xl:max-w-[1300px] 2xl:mx-auto">
        <div
          className="flex bg-auto bg-bottom bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/home/trBg.svg")',
            backgroundPositionY: "-200px",
          }}
        >
          <Marquee direction="down" className="2xl:ml-[50px]">
            <section>
              {/* First Image Start */}
              <div className="relative">
                <div className=" pb-5 relative">
                  {sectionData?.images?.data?.[0]?.attributes?.url && (
                    <Image
                      loading="lazy"
                      src={sectionData?.images?.data?.[0]?.attributes?.url}
                      alt=""
                      className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px]  my-10  "
                      height={60}
                      width={169}
                    />
                  )}
                </div>
              </div>
              {/* End First Image  */}

              <div className="relative">
                {sectionData?.images?.data?.[1]?.attributes?.url && (
                  <Image
                    loading="lazy"
                    src={sectionData?.images?.data?.[1]?.attributes?.url}
                    alt=""
                    className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px] my-10"
                    height={60}
                    width={169}
                  />
                )}
              </div>
            </section>
          </Marquee>

          <Marquee direction="up">
            <section>
              {/* First Image Start */}
              <div className="relative">
                <div className=" pb-5 relative">
                  {sectionData?.images?.data?.[2]?.attributes?.url && (
                    <Image
                      loading="lazy"
                      src={sectionData?.images?.data?.[2]?.attributes?.url}
                      alt=""
                      className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px]  my-10  "
                      height={60}
                      width={169}
                    />
                  )}
                </div>
              </div>
              {/* End First Image  */}

              <div className="relative">
                {sectionData?.images?.data?.[3]?.attributes?.url && (
                  <Image
                    loading="lazy"
                    src={sectionData?.images?.data?.[3]?.attributes?.url}
                    alt=""
                    className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px] my-10"
                    height={60}
                    width={169}
                  />
                )}
              </div>
            </section>
          </Marquee>

          <Marquee direction="down">
            <section>
              {/* First Image Start */}
              <div className="relative">
                <div className=" pb-5 relative">
                  {sectionData?.images?.data?.[4]?.attributes?.url && (
                    <Image
                      loading="lazy"
                      src={sectionData?.images?.data?.[4]?.attributes?.url}
                      alt=""
                      className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px]  my-10  "
                      height={60}
                      width={169}
                    />
                  )}
                </div>
              </div>
              {/* End First Image  */}

              <div className="relative">
                {sectionData?.images?.data?.[5]?.attributes?.url && (
                  <Image
                    loading="lazy"
                    src={sectionData?.images?.data?.[5]?.attributes?.url}
                    alt=""
                    className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px] my-10"
                    height={60}
                    width={169}
                  />
                )}
              </div>
            </section>
          </Marquee>

          <Marquee direction="up" className="2xl:mr-[50px]">
            <section>
              {/* First Image Start */}
              <div className="relative">
                <div className=" pb-5 relative">
                  {sectionData?.images?.data?.[6]?.attributes?.url && (
                    <Image
                      loading="lazy"
                      src={sectionData?.images?.data?.[6]?.attributes?.url}
                      alt=""
                      className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px]  my-10  "
                      height={60}
                      width={169}
                    />
                  )}
                </div>
              </div>
              {/* End First Image  */}

              <div className="relative">
                {sectionData?.images?.data?.[7]?.attributes?.url && (
                  <Image
                    loading="lazy"
                    src={sectionData?.images?.data?.[7]?.attributes?.url}
                    alt=""
                    className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px] my-10"
                    height={60}
                    width={169}
                  />
                )}
              </div>
            </section>
          </Marquee>
        </div>
      </div>

      <div className="block mt-[80px] relative xl:hidden">
        <div className="absolute top-[-30px] left-0">
          <Image
            loading="lazy"
            src="/images/home/mobLine.svg"
            alt=""
            className="  w-[35px] "
            height={325}
            width={27}
          />
        </div>
        <div className="absolute top-[-30px] right-0">
          <Image
            loading="lazy"
            src="/images/home/mobLine.svg"
            alt=""
            className="  w-[35px] "
            height={325}
            width={27}
          />
        </div>
        <div className="absolute top-[-30px] left-[50%] transform translate-x-[-50%]">
          <Image
            loading="lazy"
            src="/images/home/mobLine.svg"
            alt=""
            className="  w-[35px] "
            height={325}
            width={27}
          />
        </div>
        <Marquee className="overflow-hidden">
          <section className="flex gap-[80px] mt-[-30px] ">
            {/* First Image Start */}
            <div className="relative">
              <div className=" relative">
                <Image
                  loading="lazy"
                  src="/images/home/Trusted1.png"
                  alt=""
                  className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px] my-10  "
                  height={60}
                  width={169}
                />
              </div>
            </div>
            {/* End First Image  */}

            <div className="relative">
              <Image
                loading="lazy"
                src="/images/home/Trusted2.png"
                alt=""
                className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px] my-10 "
                height={60}
                width={169}
              />
            </div>
            <div className="relative">
              <Image
                loading="lazy"
                src="/images/home/Trusted1.png"
                alt=""
                className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px] my-10 "
                height={60}
                width={169}
              />
            </div>
            <div className="relative">
              <Image
                loading="lazy"
                src="/images/home/Trusted2.png"
                alt=""
                className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px] my-10 "
                height={60}
                width={169}
              />
            </div>
          </section>
        </Marquee>
        <Marquee direction="right" className="overflow-hidden">
          <section className="flex gap-[80px] mt-[-25px] ">
            {/* First Image Start */}
            <div className="relative">
              <div className="  relative">
                <Image
                  loading="lazy"
                  src="/images/home/Trusted3.png"
                  alt=""
                  className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px]  my-10  "
                  height={60}
                  width={169}
                />
              </div>
            </div>
            {/* End First Image  */}

            <div className="relative">
              <Image
                loading="lazy"
                src="/images/home/Trusted4.png"
                alt=""
                className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px] my-10"
                height={60}
                width={169}
              />
            </div>
            <div className="relative">
              <Image
                loading="lazy"
                src="/images/home/Trusted3.png"
                alt=""
                className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px] my-10"
                height={60}
                width={169}
              />
            </div>
            <div className="relative">
              <Image
                loading="lazy"
                src="/images/home/Trusted4.png"
                alt=""
                className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px] my-10"
                height={60}
                width={169}
              />
            </div>
          </section>
        </Marquee>

        <Marquee className="overflow-hidden">
          <section className="flex gap-[80px] mt-[-20px]">
            {/* First Image Start */}
            <div className="relative">
              <div className="  relative">
                <Image
                  loading="lazy"
                  src="/images/home/Trusted5.png"
                  alt=""
                  className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px]  my-10  "
                  height={60}
                  width={169}
                />
              </div>
            </div>
            {/* End First Image  */}

            <div className="relative">
              <Image
                loading="lazy"
                src="/images/home/Trusted6.png"
                alt=""
                className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px] my-10"
                height={60}
                width={169}
              />
            </div>
            <div className="relative">
              <Image
                loading="lazy"
                src="/images/home/Trusted5.png"
                alt=""
                className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px] my-10"
                height={60}
                width={169}
              />
            </div>
            <div className="relative">
              <Image
                loading="lazy"
                src="/images/home/Trusted6.png"
                alt=""
                className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px] my-10"
                height={60}
                width={169}
              />
            </div>
          </section>
        </Marquee>

        <Marquee direction="right" className="overflow-hidden">
          <section className="flex gap-[80px] mt-[-25px]">
            {/* First Image Start */}
            <div className="relative">
              <div className="  relative">
                <Image
                  loading="lazy"
                  src="/images/home/Trusted7.png"
                  alt=""
                  className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px]  my-10  "
                  height={60}
                  width={169}
                />
              </div>
            </div>
            {/* End First Image  */}

            <div className="relative">
              <Image
                loading="lazy"
                src="/images/home/Trusted8.png"
                alt=""
                className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px] my-10"
                height={60}
                width={169}
              />
            </div>
            <div className="relative">
              <Image
                loading="lazy"
                src="/images/home/Trusted7.png"
                alt=""
                className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px] my-10"
                height={60}
                width={169}
              />
            </div>
            <div className="relative">
              <Image
                loading="lazy"
                src="/images/home/Trusted8.png"
                alt=""
                className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px] my-10"
                height={60}
                width={169}
              />
            </div>
          </section>
        </Marquee>
      </div>
    </div>
  );
};

export default TrustedBySection;
