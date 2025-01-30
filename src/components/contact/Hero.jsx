const Hero = ({ strapiData }) => {
  return (
    <>
      {/* <div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className=" w-full lg:h-[644px] h-[469px]"
      >
        <div className="w-[560px] text-center p-[16px]">
          <h1 className="title1 text-center mb-[12px] font-sora gradient_heading">
            {strapiData?.sections[0]?.content?.title || "Get In Touch"}
          </h1>
          <p className="para3A md:text-[24px] text-primary_white font-poppins">
            {strapiData?.sections[0]?.content?.description}
          </p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default Hero;
