const Spectra = () => {
  return (
    <section className="flex flex-col items-center mt-[74px]">
      <div
        className="bg-white  p-[32px] flex lg:flex-row flex-col gap-[24px] items-center rounded-[16px]"
        style={{ boxShadow: "0px 12px 45px 0px #23232317" }}
      >
        <div className="lg:w-[452px] w-full">
          <h3 className="text-[28px] leading-[35px] md:text-[30px] md:leading-[37.8px] font-sora font-semibold text-[#002233]">
            What can you Discover with Spectra?
          </h3>
          <p className="font-[400] font-urbanist text-[14px] leading-[23px] md:text-[16px] md:leading-[19.2px] text-[#444444] md:mt-[30px] md:mb-[38px] mt-[21px] mb-[24px]">
            Whether sensitive information is hiding in images, text, logs,
            emails, tables, HTML, or JSON, nothing skips the eyes of the
            detective!
          </p>
          <div>
            <h4 className=" text-[20px] md:para1 font-urbanist font-semibold text-[#33405A] mb-[20px]">
              Key Advantages
            </h4>
            <div className="flex gap-[16px] md:items-center max-md:flex-col">
              <div className="flex gap-[10px] items-center">
                <img
                  loading="lazy"
                  src="/images/solution/privacy/adv1.svg"
                  alt=""
                />
                <p className="font-urbanist font-[400] text-[16px] leading-[19.2px] text-[#020103]">
                  Reduced Long-Term <br className=" max-md:hidden" />
                  Costs
                </p>
              </div>
              <div className="flex gap-[10px] items-center">
                <img
                  loading="lazy"
                  src="/images/solution/privacy/adv2.svg"
                  alt=""
                />
                <p className="font-urbanist font-[400] text-[16px] leading-[19.2px] text-[#020103]">
                  Faster Launch,
                  <br className=" max-md:hidden" />
                  Zero Risk
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[740px] w-full lg:h-[329px] rounded-[8px] overflow-hidden">
          <img
            loading="lazy"
            src="/images/solution/privacy/spectra.svg"
            alt=""
            className=" min-h-[329px] min-w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
export default Spectra;
