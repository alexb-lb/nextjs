import Image from "next/image";

const Nist = ({ sectionData }) => {
  return (
    <section className="pt-[43px] lg:pb-[93px] max-lg:text-center">
      <h2 className="title2 font-sora text-[#020103] mb-[24px] lg:w-[1280px] w-full mx-auto">
        {/* NIST Compliance */}
        {sectionData?.title}
      </h2>
      <div className="p-[14px] lg:pl-[59px] flex lg:flex-row flex-col-reverse items-center lg:gap-[62px] gap-6 bg-white rounded-[16px] lg:w-[1280px] w-full mx-auto">
        <p className="para2 font-urbanist text-[#444444] font-normal ">
          {sectionData?.content?.description}
        </p>
        {sectionData?.images?.data[0]?.attributes?.url && (
          <Image
            loading="lazy"
            src={sectionData?.images?.data[0]?.attributes?.url}
            height={250}
            width={300}
            alt=""
            className="lg:w-[667px] w-full lg:h-[338px] min-h-[268px] object-cover rounded-[6px]"
          />
        )}
      </div>
    </section>
  );
};
export default Nist;
