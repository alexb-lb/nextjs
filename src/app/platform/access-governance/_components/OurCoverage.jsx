import Image from "next/image";

const OurCoverage = ({ sectionData }) => {
  return (
    <section className="py-8">
      {/* <h1>{sectionData?.title}</h1> */}
      {sectionData?.images?.data?.[0]?.attributes?.url && (
        <Image
          src={
            sectionData?.images?.data &&
            sectionData?.images?.data[0]?.attributes?.url
          }
          alt=""
          width={500}
          height={300}
          className="w-full"
          layout="responsive"
        />
      )}
    </section>
  );
};
export default OurCoverage;
