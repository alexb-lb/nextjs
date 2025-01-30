"use client";
import React, { useEffect, useRef, useState } from "react";
import SolutionCard from "./SolutionCard";

import BorderButton from "../Animation/Button";
import Link from "next/link";

const solutions = [
  {
    title: "Healthcare",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8ae6ed95d24abae86dc1844980ae333fe02e44edd4d2659cf4870839f30ec715?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/94b84a7a6c1e93d67a935d6b4a1c6c003a4eeafc602a68b94cad3b9cc8e2c63e?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
  },
  {
    title: "Healthcare",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1685306b25f5e2809293b407fd848c61caf53b7d8e6a066f392a880c0eea753c?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1bdee325cf0aec51a68b1203497f1a58c97b5cec32e9afe13b7821f12e5c1a8a?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
  },
  {
    title: "Retail",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/41fcdfc9c4f8cc5e2ccc6ac5e057703405e7886e4845fd92c453d3b76af41d5d?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/65e6f4e024ac0d7f0752c35b8b534e17ec8d2e8fe1a87248b3ba9a7eed58b78f?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
  },
  {
    title: "Manufacturing",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/38956f1e1468170419b566810c60bb700effaa13e9c41de8d19e3d91a69b2f02?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3417bc2114ff86adb4bb7c9156505f0ad65bd47908a8e81c84737f063cf0ed84?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
  },
  {
    title: "Pharmaceuticals",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/391a17a55c03b470951e3d44749a46852c15cfae32c74d4f28ee4c4d2ecaecfa?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc81d6632ad37663cddd85e568d19f273bb62bd7630194638b0417efa2f5cf60?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
  },
  {
    title: "Education",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e359d0fe3bf7c234f30a83bc8f044c98a2135a61ac48320b6f475095769b7ddf?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f943d8378890802e27f0e3ca7625f82efdadbf5d32f572eac9f9670fc2b9aed0?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
  },
  {
    title: "Technology",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/35f1f850d316ea2cd75d7972a1f97d89b185bde2e1f5ea7eef5d5282a8d5d256?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/926785ee2d953d31efc77bad87e6bebf65e13ee09d0440b5ccd254d758e9c516?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
  },
  {
    title: "Startups",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/82a96a37db527d0f9658b5a1da5b3f6b244a8654651eb61cd5074c4536f3f636?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/12189522ca7a5198276029ae6bed4182a38d1edc9f07c65daae89cb2473e7fab?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
  },
  {
    title: "Credit Union",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/621c90db876a0e23ad7fd5b913812fd5db389f2a1f38eedaf68312cd4cd5c42e?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e4726cfe07544b12db4abcf924342b104c87a40793794868a39ce6e0f41fac7?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
  },
  {
    title: "Healthcare",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8ae6ed95d24abae86dc1844980ae333fe02e44edd4d2659cf4870839f30ec715?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/94b84a7a6c1e93d67a935d6b4a1c6c003a4eeafc602a68b94cad3b9cc8e2c63e?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
  },
  {
    title: "Healthcare",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1685306b25f5e2809293b407fd848c61caf53b7d8e6a066f392a880c0eea753c?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1bdee325cf0aec51a68b1203497f1a58c97b5cec32e9afe13b7821f12e5c1a8a?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
  },
  {
    title: "Retail",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/41fcdfc9c4f8cc5e2ccc6ac5e057703405e7886e4845fd92c453d3b76af41d5d?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/65e6f4e024ac0d7f0752c35b8b534e17ec8d2e8fe1a87248b3ba9a7eed58b78f?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
  },
];

function SolutionSection({
  name,
  setCurrentSection,
  sectionRefs,
  sectionData,
  imagesData = [],
}) {
  const [viewAll, setViewAll] = useState(false);
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
    <section className="md:mt-[128px] mt-[47px] px-2" id="Solution" ref={ref}>
      <h2 className="text-[30px] leading-[37px] md:text-[48px] font-sora md:leading-[60px] font-semibold text-center text-[#020103] capitalize max-md:max-w-full ">
        {/* Solution by Industry Verticals */}
        {sectionData[0]?.title}
      </h2>
      <div className="mt-12 w-full  max-md:mt-[45px]  md:px-[80px]">
        <div className="flex flex-wrap gap-2 md:gap-5 justify-center">
          {sectionData &&
            sectionData[1]?.cards
              .filter((item, ind) =>
                viewAll ? ind < solutions.length : ind < 9
              )
              .map((solution, index) => (
                <SolutionCard
                  key={index}
                  icon={solution?.icon_url || solutions[index].icon}
                  title={solution?.description}
                  head={solution?.title}
                  image={
                    (imagesData &&
                      imagesData[index]?.image?.data?.attributes?.url) ||
                    solution.image
                  }
                  link={imagesData && imagesData[index]?.cta_url}
                />
              ))}
        </div>
        {/* {viewAll ? (
          <div className="mt-8 w-full  justify-center hidden lg:flex">
            <BorderButton
              label="View All"
              className="mt-14 font-urbanist text-black border border-[#8C70D2] rounded-[50px] px-[40px] py-5 "
              onClick={() => setViewAll(false)}
            />
          </div>
        ) : (
          <div className="mt-8 w-full  justify-center hidden lg:flex">
            <Button
              label="View All"
              className="mt-14 font-urbanist text-black border border-[#8C70D2] rounded-[50px] px-[40px] py-5 "
              onClick={() => setViewAll(true)}
            />
          </div>
        )} */}

        {viewAll ? (
          <div className="mt-8 w-full  justify-center  flex">
            <BorderButton
              content={"View Less"}
              className={
                "text-xl font-semibold leading-none text-center text-[#020103] px-[54.88px]  py-[10px] md:py-[20px] rounded-[52px] max-md:px-5 bg-primary_white max-md:min-w-[140px]"
              }
              onClick={() => setViewAll(false)}
            />
          </div>
        ) : (
          <div className="mt-8 w-full  justify-center flex">
            <Link href={sectionData[0]?.cta[0]?.url || "#"}>
              {" "}
              <BorderButton
                content={sectionData[0]?.cta[0]?.text}
                className={
                  "text-xl leading-[20px] font-semibold text-center text-[#020103] px-[54.88px] py-[10px] md:py-[20px] rounded-[52px] max-md:px-5 bg-primary_white max-md:min-w-[140px]"
                }
                // onClick={() => setViewAll(true)}
              />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default SolutionSection;
