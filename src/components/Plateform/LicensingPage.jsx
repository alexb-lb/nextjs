import React, { useEffect, useRef } from "react";
import LicenseCard from "./LicenseCard";

import "../Home/home.css";



function LicensingPage({
  name,
  setCurrentSection,
  sectionRefs,
  sectionData,
  imageData,
}) {
  const ref = useRef(null);
  useEffect(() => {
    // Add each section ref to the sectionRefs array
    sectionRefs.current.push(ref);
  }, [ref, sectionRefs]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(name);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [name, setCurrentSection, ref]);
  return (
    <main className="flex flex-col" id="Licensing" ref={ref}>
      <section
        className="flex relative flex-col items-center px-20 pt-[100px] pb-0 w-full min-h-[900px] max-md:px-5 max-md:py-24 max-md:max-w-full"
        style={{
          backgroundImage: "url('/images/platform/requestBg.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex relative flex-col items-start lg:-mb-16  w-full  max-md:mb-2.5 max-md:max-w-full">
          {/* max-w-[1282px] ml-14 */}
          <h3 className="text-5xl font-semibold font-sora text-center text-black capitalize max-md:text-4xl max-md:text-center max-md:mx-auto">
            {/* Licensing */}
            {sectionData[0]?.content?.title}
          </h3>
          <p className="mt-8 text-2xl leading-7 font-urbanist text-black w-[738px] max-md:max-w-full">
            {/* LightBeam ai pioneers zero-trust data protection, merging data
            security, privacy, and AI governance. It ensures compliance with
            regulations like PCI, GLBA, GDPR, and HIPAA for businesses&apos;
            growth. */}
            {sectionData[0]?.content?.description ||
              " LightBeam ai pioneers zero-trust data protection, merging data security, privacy, and AI governance. It ensures compliance with regulations like PCI, GLBA, GDPR, and HIPAA for businesses' growth."}
          </p>
          <div className="self-stretch mt-16 max-md:mt-10  max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-lg:flex-wrap md:justify-center lg:justify-normal ">
              {sectionData[1]?.cards.map((license, index) => (
                <LicenseCard
                  key={index}
                  title={license.title}
                  description={license.description}
                  image={
                    imageData?.cards &&
                    imageData?.cards[index]?.image?.data?.attributes?.url
                  }
                />
              ))}
            </div>
            {/* <div className="block sm:hidden flex-wrap gap-5 items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
              <Slider {...settings} className="trendBlogMob">
                {licenseData.map((license, index) => (
                  <LicenseCard
                    key={index}
                    title={license.title}
                    description={license.description}
                  />
                ))}
              </Slider>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}

export default LicensingPage;
