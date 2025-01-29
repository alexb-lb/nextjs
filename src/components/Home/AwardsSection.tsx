import React from "react";

interface AwardProps {
  year: string;
  image: string;
  title: string;
}

const Award: React.FC<AwardProps> = ({ year, image, title }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-24 max-md:mt-10">
      <img
        loading="lazy"
        src={image}
        alt={`${title} Award`}
        className="object-contain max-w-full rounded-none aspect-[0.79] w-[101px]"
      />
      <div className="flex flex-col px-2.5 mt-5 max-w-full w-[111px]">
        <div className="self-center text-base font-bold leading-none text-black">
          {year}
        </div>
        <div className="mt-2 text-xs font-medium tracking-tight leading-5 text-gray-500">
          {title}
        </div>
      </div>
    </div>
  );
};

const AwardsSection: React.FC = () => {
  const awards = [
    {
      year: "2023",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c739163e0082d36eb31f221ae7747cf856bc35fda1cd5f8b301aaf56cd944ef6?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8",
      title: "Excellence Awards Winner",
    },
    {
      year: "2023",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f3b9ffdc39cbc5855408714f249b1be5635ec57c749f5cfc8a27a4f479946c24?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8",
      title: "Excellence Awards Winner",
    },
    {
      year: "2023",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7b057e0db7801b1285bb9162eeab7f52e4837c2f4aed780a415699ae032acab4?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8",
      title: "Excellence Awards Winner",
    },
    {
      year: "2023",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2be8508bf6b3a8b7388cd86818a8680399d166393847e1932561f573e3a0b6c5?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8",
      title: "Excellence Awards Winner",
    },
    {
      year: "2023",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c739163e0082d36eb31f221ae7747cf856bc35fda1cd5f8b301aaf56cd944ef6?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8",
      title: "Excellence Awards Winner",
    },
  ];

  return (
    <section className="flex flex-wrap gap-5 justify-between items-end self-center mt-1.5 w-full text-center max-w-[1313px] max-md:max-w-full">
      <div className="flex mt-24 min-h-[210px] max-md:mt-10" />
      {awards.map((award, index) => (
        <Award key={index} {...award} />
      ))}
      <div className="flex mt-24 min-h-[210px] max-md:mt-10" />
    </section>
  );
};

export default AwardsSection;
