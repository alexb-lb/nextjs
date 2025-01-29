import React from "react";
import Button from "../common/Button";

const governanceItems = [
  {
    title: "AI Governance",
    description:
      "Ensure the ethical, transparent, and accountable development and use of artificial intelligence systems.",
  },
  {
    title: "EU AI Act",
    description:
      "Ensure legal framework for the development, deployment, and use of artificial intelligence, ensuring safety, transparency, and fundamental rights protection.",
  },
  {
    title: "Biden's Executive Order on AI",
    description:
      "Ensure safe, secure, and trustworthy development and deployment of artificial intelligence, focusing on innovation, national security, public trust, and ethical considerations.",
  },
  {
    title: "CA ADMT",
    description:
      "Manage and process data related to various social services programs, including eligibility determination and case management.",
  },
];

function GovernanceSection() {
  return (
    <section className="flex overflow-hidden relative flex-col self-stretch mt-8 w-full min-h-[1040px] max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a05c52a511efbe4657f8a814a149edbcc2ec65d447f631d117ca225471f5898?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col px-20 py-14 w-full min-h-[1040px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9374b0499b45dc1ea449d901ccabe6686123f56745bf368c45bc5e8b573921ed?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col items-center self-center max-w-full text-center w-[664px]">
          <div className="flex flex-col items-center w-full">
            <h2 className="flex flex-col items-center text-4xl capitalize whitespace-nowrap">
              <span className="title3 gradient_heading">Governance</span>
            </h2>
            <p className="mt-5 text-lg leading-7 text-gray-200 max-md:max-w-full">
              Manage data availability, usability, integrity, and security
              within an organization to ensure effective data management and
              compliance.
            </p>
          </div>
          <Button
            label="Know More"
            className="mt-8 bg-indigo-500 text-white rounded-[50px] px-[40px] py-5"
          />
        </div>
        <div className="relative mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col grow capitalize text-primary_white max-md:mt-10 max-md:max-w-full">
                {governanceItems.map((item, index) => (
                  <div
                    key={index}
                    className={`flex overflow-hidden flex-col justify-center px-6 py-8 ${
                      index > 0 ? "mt-2" : ""
                    } rounded-3xl ${
                      index === 0 ? "bg-slate-700" : "bg-stone-50 bg-opacity-10"
                    } max-md:px-5 max-md:max-w-full`}
                  >
                    <div className="flex flex-col w-full max-md:max-w-full">
                      <div className="flex flex-wrap gap-2.5 justify-center items-center w-full text-2xl font-semibold leading-none max-md:max-w-full">
                        <img
                          loading="lazy"
                          src={`http://b.io/ext_${
                            index === 2 || index === 3 ? "31" : "30"
                          }-`}
                          alt=""
                          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
                        />
                        <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
                          {item.title}
                        </div>
                      </div>
                      <p className="mt-6 text-sm max-md:max-w-full">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow w-full rounded-3xl bg-slate-950 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/26e185e8dd5d5fc2aeecc98851b8b5269e5040fea1f2b3cb364fd817d8de2926?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
                  alt="Governance illustration"
                  className="object-contain w-full aspect-[0.93] max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GovernanceSection;
