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
        className=" w-full lg:h-[88vh] h-[500px]"
      >
        <div className="w-[80%] text-center ">
          <h1 className="title1 text-center mb-[12px] font-sora gradient_heading">
            Privacy Lorem Ipsum
          </h1>
          <p className="para3A text-primary_white font-poppins w-auto m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default Hero;
