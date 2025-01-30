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
        className=" w-full lg:h-[88vh] h-[500px]"
      >
        <div className="w-[561px] text-center ">
          <h1 className="title1 text-center mb-[12px] font-sora gradient_heading">
            {sectionData?.content?.title}
          </h1>
          <p className="para3A md:text-[24px] text-primary_white font-urbanist font-normal leading-8 text-[18px] m-auto">
            {sectionData?.content?.description}
          </p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default Hero;
