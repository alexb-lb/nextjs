import React from "react";
import "./index.css";

const BackedUp = () => {
  return (
    <div className="p-4 lg:p-[79px] md:mb-[82px] mb-[52px]">
      <h3 className="text-[#020103] font-sora text-[48px] max-md:text-[30px] max-md:leading-[37.8px] leading-[60px] max-md:text-center font-semibold mb-[82px] max-md:mb-8">
        Backed Up By
      </h3>
      <section className="flex justify-between  max-md:justify-center items-center gap-[25px] py-6 max-md:gap-3 flex-wrap md:bg-[url('/images/company/backBg.png')] bg-cover bg-center backedUpImageSec">
        <img
          src="/images/company/back1.png"
          alt=""
          className="max-md:w-[107.39px] object-contain"
        />
        <img
          src="/images/company/back2.png"
          alt=""
          className="max-md:w-[107.39px] object-contain"
        />
        <img
          src="/images/company/back3.png"
          alt=""
          className="max-md:w-[107.39px] object-contain"
        />
        <img
          src="/images/company/back4.png"
          alt=""
          className="max-md:w-[107.39px] object-contain"
        />
        <img
          src="/images/company/back5.png"
          alt=""
          className="max-md:w-[107.39px] object-contain"
        />
      </section>
    </div>
  );
};

export default BackedUp;
