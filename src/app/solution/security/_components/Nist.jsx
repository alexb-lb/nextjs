const Nist = () => {
  return (
    <section className="pt-[43px] lg:pb-[93px] max-lg:text-center">
      <h2 className="title2 font-sora text-[#020103] mb-[24px] lg:w-[1280px] w-full mx-auto">
        NIST Compliance
      </h2>
      <div className="p-[14px] lg:pl-[59px] flex lg:flex-row flex-col-reverse items-center lg:gap-[62px] gap-6 bg-white rounded-[16px] lg:w-[1280px] w-full mx-auto">
        <p className="para2 font-urbanist text-[#444444] font-normal ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud.
        </p>
        <img
          loading="lazy"
          src="/images/solution/security/nist.svg"
          alt=""
          className="lg:w-[667px] w-full lg:h-[338px] min-h-[268px] object-cover rounded-[6px]"
        />
      </div>
    </section>
  );
};
export default Nist;
