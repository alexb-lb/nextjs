const Hero = ({strapiData}) => {
  return (
    <>
      {/* <div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className=" w-full lg:max-h-[472px] h-[469px]"
      >
        <div className="w-full text-center ">
          <h1 className="title1 text-center mb-[12px] font-sora gradient_heading">
            {strapiData[0]?.content[0]?.title}
          </h1>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default Hero;
