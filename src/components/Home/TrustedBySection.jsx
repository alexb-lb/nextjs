import Image from "next/image";
import Marquee from "react-fast-marquee";
const TrustedBySection = () => {
  return (
    <div className="bg-[#F5F8FF] md:px-[105px] py-[52px] md:py-[60px] ">
      <h3 className="text-[#232323] font-semibold text-[28px] md:text-[32px] leading-[35px] md:leading-[48px] text-center  md:mb-[84px] font-sora">
        Trusted by leading organisations <br className="max-md:hidden" /> around
        the world
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
                  <Image
                    loading="lazy"
                    src="/images/home/Trusted1.png"
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
                  src="/images/home/Trusted2.png"
                  alt=""
                  className=" w-[138px] h-[43px] xl:w-[169px] xl:h-[60px] my-10"
                  height={60}
                  width={169}
                />
              </div>
            </section>
          </Marquee>

          <Marquee direction="up">
            <section>
              {/* First Image Start */}
              <div className="relative">
                <div className=" pb-5 relative">
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
            </section>
          </Marquee>

          <Marquee direction="down">
            <section>
              {/* First Image Start */}
              <div className="relative">
                <div className=" pb-5 relative">
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
            </section>
          </Marquee>

          <Marquee direction="up" className="2xl:mr-[50px]">
            <section>
              {/* First Image Start */}
              <div className="relative">
                <div className=" pb-5 relative">
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
