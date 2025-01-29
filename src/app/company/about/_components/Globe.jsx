import React from "react";

const Globe = () => {
  return (
    <div
      className="h-[509px] max-md:h-[559px] bg-no-repeat px-8"
      style={{
        backgroundImage: "url('/images/company/bgGlobe.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-center mb-[52px] text-[48px] max-md:text-[30px] leading-[60px] max-md:leading-[38px] font-sora gradient_heading pt-[250px] lg:max-w-[982px] mx-auto">
        We&apos;re here to put a dent in the universe. Otherwise, why else even
        be here?
      </h2>
      <p className="text-center text-[#FAFAFA]  text-[24px] max-md:text-[18px] leading-[28px] max-md:leading-[22px] font-urbanist   ">
        -Steve Jobs
      </p>
    </div>
  );
};

export default Globe;
