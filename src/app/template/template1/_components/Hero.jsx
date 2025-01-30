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
        className=" w-full lg:max-h-[644px] h-[469px]"
      >
        <div className="w-[903px] text-center ">
          <h1 className="title1 text-center mb-[12px] font-sora gradient_heading">
            {strapiData[0]?.content[0]?.title}
          </h1>
          <p className="para3A md:text-[24px] text-primary_white font-poppins w-[100%] m-auto max-md:px-4">
            {strapiData[0]?.content[0]?.description}
          </p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default Hero;
