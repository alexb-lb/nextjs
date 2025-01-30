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
          <h2 className="title1 text-center mb-[12px] font-sora gradient_heading">
            {strapiData.sections[0].content.title || "Partner With Us"}
          </h2>
          <p className="para3A md:text-[24px] text-primary_white font-urbanist w-[80%] m-auto ">
            {strapiData.sections[0].content.description ||
              " Embark on a transformative journey, unlocking opportunities, fostering innovation, and building lasting partnerships"}
          </p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default Hero;
