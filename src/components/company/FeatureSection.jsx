import React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/92c9819f336bcc27e34ec0299926b392bc03cd47751b3dbd59074079e8c35780?placeholderIfAbsent=true&apiKey=faedc40a57794e3a93ca0ce63a18da4b",
    title: "Customer across different verticals",
    description: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a067d977325d1484262a5e0c5db1332152934ff4a9efef264b095f6d515fb526?placeholderIfAbsent=true&apiKey=faedc40a57794e3a93ca0ce63a18da4b",
    title: "Growing Partner Ecosystem across Globe",
    description: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7ee2e8ec38ad07aca45d80bff86a5e71e8765a1d36eac0d1578380964d9ba313?placeholderIfAbsent=true&apiKey=faedc40a57794e3a93ca0ce63a18da4b",
    title: "Employees across 6 countries",
    description: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fb26463089ae5e160bb5f5ec1ace053abc736571aedb82bedfd4f07a4ec92e78?placeholderIfAbsent=true&apiKey=faedc40a57794e3a93ca0ce63a18da4b",
    title: "Patented technology for Entity Resolution",
    description: "Lorem ipsum dolor sit amet, consectetur",
  },
];

function FeatureSection() {
  return (
    <section className="overflow-hidden relative lg:px-px px-[16px] lg:mt-9 mt-[44px] lg:ml-0 max-md:max-w-full ">
      <div className="flex md:gap-5 flex-wrap max-lg:justify-between lg:w-[1280px] mx-auto max-md:justify-center max-md:gap-[7px]">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
