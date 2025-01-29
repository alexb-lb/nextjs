import { url } from "inspector";
import Image from "next/image";
import React from "react";

const NewsletterForm = () => {
  return (
    <section className="flex overflow-hidden flex-col items-center pb-20 w-full max-md:max-w-full">
      <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-20 py-16 w-full min-h-[360px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="/images/contact/newsletter_bg.svg"
          alt=""
          // height={auto}
          // width={auto}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col items-center max-w-full w-[717px]">
          <div className="flex flex-col pr-px pl-2 w-full">
            <h2 className="text-5xl font-semibold text-white capitalize max-md:max-w-full max-md:text-4xl">
              Subscribe to Our Newsletter
            </h2>
            <p className="self-center mt-6 text-lg text-white max-md:max-w-full">
              Stay in the loop and keep up with all our news and updates!
            </p>
          </div>
          <form className="flex overflow-hidden flex-wrap gap-2.5 justify-center items-center py-2 pr-3 pl-6 mt-14 text-white rounded-[50px] max-md:pl-5 max-md:mt-10 max-md:max-w-full">
            <label htmlFor="emailInput" className="sr-only">
              Enter your email
            </label>
            <input
              type="email"
              id="emailInput"
              className="self-stretch my-auto text-lg w-[300px]"
              placeholder="Enter Email Address"
              aria-label="Enter your email"
            />
            <button className="flex flex-col self-stretch my-auto text-xl font-semibold leading-none text-center whitespace-nowrap bg-indigo-500 rounded-[50px] w-[184px]">
              <div className="flex flex-col rounded-[52px]">
                <div className="px-12 py-5 rounded-[52px] max-md:px-5">
                  Subscribe
                </div>
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterForm;
