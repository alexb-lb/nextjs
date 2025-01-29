import React from "react";
import Button from "../common/Button";

const privacyLaws = [
  "GDPR",
  "Québec's Law 25",
  "US Privacy Laws",
  "India DPDP",
  "FERPA",
  "HIPAA",
];

function PrivacySection() {
  return (
    <section className="flex overflow-hidden flex-col items-center self-stretch px-20 pt-11 pb-16 mt-28 w-full bg-primary_white max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-4xl text-black">Privacy</h2>
      <p className="mt-10 text-xl leading-7 text-center text-neutral-700 w-[886px] max-md:max-w-full">
        Manage and protect personal information to ensure individuals&apos; data
        is collected, stored, and shared in accordance with legal and ethical
        standards.
      </p>
      <Button
        label="Know More"
        className="mt-3.5 bg-indigo-500 text-white rounded-[50px] px-[40px] py-5"
      />
      <div className="flex flex-wrap gap-10 justify-between items-center self-stretch mt-10 w-full text-2xl font-semibold leading-none border-b border-violet-400 text-neutral-700 text-opacity-60 max-md:max-w-full">
        {privacyLaws.map((law, index) => (
          <div
            key={index}
            className={`gap-2.5 self-stretch px-6 pb-8 my-auto ${
              index === 0
                ? "font-bold border-indigo-500 border-b-[3px] text-neutral-700"
                : ""
            } max-md:px-5`}
          >
            {law}
          </div>
        ))}
      </div>
      <div className="overflow-hidden py-12 pl-12 mt-12 max-w-full bg-white rounded-xl shadow-[0px_12px_80px_rgba(50,50,50,0.08)] w-[1102px] max-md:pl-5 max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto font-semibold max-md:mt-10 max-md:max-w-full">
              <h3 className="text-4xl text-black">GDPR</h3>
              <p className="mt-6 max-w-full text-lg leading-7 text-neutral-700 w-[495px] max-md:max-w-full">
                Continuing from where we left off: Comply with The General Data
                Protection Regulation (GDPR) is a legal framework that sets
                guidelines for the collection and processing of personal
                information from individuals who live and outside of the
                European Union (EU).
              </p>
              <Button
                label="Learn More"
                className="mt-6 text-neutral-800 w-[183px] rounded-[50px] px-[40px] py-5 border border-[#E4D5F4]"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ef64d4272857ca0395d4ffd891c77414f09ce200b835b63bb299bf31970e746?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
              alt="GDPR illustration"
              className="object-contain grow w-full rounded-3xl aspect-[1.08] shadow-[0px_4px_42px_rgba(50,50,50,0.08)] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacySection;
