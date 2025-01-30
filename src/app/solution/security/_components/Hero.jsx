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
        <div className="w-[664px] text-center max-sm:px-2">
          <h1 className="title1 text-center mb-[12px] font-sora gradient_heading">
            {/* Security Solutions */}
            {sectionData?.content?.title}
          </h1>
          <p className="para3A md:text-[24px] text-primary_white font-normal leading-8 font-poppins text-[18px] w-[80%] m-auto">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. */}
            {sectionData?.content?.description}
          </p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default Hero;
