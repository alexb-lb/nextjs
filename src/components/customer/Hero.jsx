const Hero = () => {
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
            Customer Stories and Experiences
          </h1>
          <p className="para3A text-primary_white font-poppins max-md:font-urbanist">
            Immerse in captivating client stories, sharing transformative
            experiences that resonate profoundly.
          </p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default Hero;
