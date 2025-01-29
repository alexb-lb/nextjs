import React from "react";

function TestimonialSection({ value, pt }) {
  return (
    <section
      // style={{ backgroundPositionY: `${value}`, paddingTop: `${pt}` }}
      className=" flex overflow-hidden relative flex-col self-stretch mt-0 w-full max-md:max-w-full bg-[url('/images/company/Quote_bgMob.svg')] sm:bg-[url('/images/home/Quote_bg.png')]  bg-center bg-cover md:bg-cover bg-no-repeat  lg:pt-20"
    >
      <div className="flex relative flex-col lg:pt-[80px] pt-0 w-full  max-md:pt-0 max-md:max-w-full ">
        <div className="flex relative flex-col items-center px-16  pb-32 w-full  max-lg:px-5 max-md:pb-[4rem] max-md:max-w-full ">
          <div className="flex relative flex-wrap gap-5 justify-between mb-0 w-full max-w-[1175px] max-md:mb-2.5 max-md:max-w-full ">
            <div className="flex  relative flex-col   rounded-[347px] max-md:max-w-full">
              <h2 className="relative self-center title2 font-sora capitalize gradient_heading bg-clip-text max-md:max-w-full max-md:text-[30px] text-center max-lg:mt-[130px]">
                Our Global Quote
              </h2>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bf8a028c1fe27218ccb24d36ff34f62152074aa38e93d4b45760cd1f366f40e?placeholderIfAbsent=true&apiKey=faedc40a57794e3a93ca0ce63a18da4b"
                alt="Quotation marks"
                className="object-contain self-center lg:mt-[86px] mt-[52px] max-w-full aspect-[3.3] w-[132px] "
              />
              <div className="relative">
                <div className="absolute top-4 left-[-10px] md:left-[-100px] md:top-[50px]">
                  <img
                    loading="lazy"
                    src="/images/home/quote.svg"
                    className="max-md:w-[70px]"
                  />
                </div>
                <blockquote className="relative self-start lg:mt-16 mt-[75px] font-urbanist tracking-wide para2 text-[#EAEAEA] w-[95%] mx-auto max-md:max-w-full md:text-center">
                  The explosion of data, hybrid work, and risk has left
                  organizations struggling to effectively manage their data from
                  a risk and privacy compliance perspective. Unfortunately,
                  businesses find themselves having to adhere to disparate
                  regulations, which is confusing, manual and often expensive, A
                  data discovery and governance first approach can help
                  businesses lay the foundation of data privacy management. This
                  approach also enables automation and helps them adhere to
                  current and future regulations efficiently.
                </blockquote>
                <div className="absolute  right-0 md:right-[-100px] md:bottom-[0px] rotate-180">
                  <img
                    loading="lazy"
                    src="/images/home/quote.svg"
                    className="max-md:w-[70px]"
                  />
                </div>
              </div>
              <p className="text-center lg:mt-16 mt-[102px] max-sm:mb-0 max-lg:mb-4 mr-0 para1 font-urbanist font-bold text-[#D9D9D9]  max-md:max-w-full ">
                Ryan O&apos;Leary, Research Manager, Privacy and Legal
                Technology <br /> International Data Corporation (IDC).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
