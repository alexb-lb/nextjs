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
        className=" w-full lg:max-h-[644px] h-[500px]"
      >
        <div className="w-[801px] text-center ">
          <h1 className="title1 text-center mb-[12px] font-sora gradient_heading">
            {strapiData?.sections[0]?.content?.title || "About Us"}
          </h1>
          <p className="para3A text-primary_white font-poppins md:text-[24px] w-[80%] m-auto">
            {strapiData?.sections[0]?.content?.description ||
              "Embark on a transformative journey, unlocking opportunities, fostering innovation, and building lasting partnerships"}
          </p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default Hero;
