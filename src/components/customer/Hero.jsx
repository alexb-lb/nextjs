const Hero = ({ sectionData }) => {
  return (
    <>
      {/* <div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className=" w-full lg:h-[644px] h-[469px] p-[16px]"
      >
        <div className="w-[627px] text-center ">
          <h1 className="title1 text-center mb-[12px] font-sora gradient_heading">
            {sectionData?.content?.title}
          </h1>
          <p className="para3A md:text-[24px] text-primary_white font-poppins max-md:font-urbanist">
            {sectionData?.content?.description}
          </p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default Hero;
