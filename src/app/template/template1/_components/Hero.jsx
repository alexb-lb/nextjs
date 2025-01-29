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
        className=" w-full lg:max-h-[644px] h-[469px]"
      >
        <div className="w-[903px] text-center ">
          <h1 className="title1 text-center mb-[12px] font-sora gradient_heading">
            Automate <br className="md:hidden" /> Quebec&apos;s Law 25{" "}
            <br className="md:hidden" />
            Compliance
          </h1>
          <p className="para3A text-primary_white font-poppins w-[100%] m-auto max-md:px-4">
            LightBeam automates compliance with Quebec&apos;s Law 25 through its
            Zero Trust Data Protection platform, streamlining data subject
            requests, privacy notices, and risk assessments.
          </p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default Hero;
