import BorderButton from "@/components/Animation/Button";
import Image from "next/image";

const contentDetails = [
  { title: "Discover", value: "discover" },
  { title: "Classify", value: "classify" },
  { title: "Label", value: "label" },
];

const ContentSection = ({ content }) => (
  <div className="w-fulls relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-white ">
    <div className="overflow-hidden lg:py-12 max-md:mt-6 lg:pl-12 px-6 max-w-full bg-white rounded-xl shadow-[0px_12px_80px_rgba(50,50,50,0.08)] w-full   mx-auto">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto font-semibold max-md:mt-10 max-md:max-w-full">
            <h3 className="text-4xl text-black font-sora">{content.title}</h3>
            <div className="flex flex-col mt-6 max-w-full text-lg leading-7 text-neutral-700 w-[495px] mb-10">
              {/* {featureList.map((feature, index) => (
                  <Feature feature={feature} index={index} key={index} />
                ))} */}
            </div>
            <div className="w-[183px]">
              <BorderButton
                content={"Learn More"}
                className={
                  "bg-white  font-semibold text-[#232323] text-[20px] leading-[20px] py-[20px] px-[40px] font-urbanist"
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          {sharedContentImage && (
            <Image
              src={sharedContentImage}
              alt=""
              width={500}
              height={462}
              className="object-contain grow w-full rounded-3xl aspect-[1.08] shadow-[0px_4px_42px_rgba(50,50,50,0.08)] max-md:mt-10 max-md:max-w-full"
              layout="responsive"
            />
          )}
        </div>
      </div>
    </div>
  </div>
);

const TabsDemo = () => {
  const securityTabs = contentDetails.map((item) => ({
    title: item.title,
    value: item.value,
    content: <ContentSection content={item} />,
  }));

  const containerClassName =
    "border-b border-[#A877FF] pb-0 flex flex-row justify-between pt-2 " +
    tabClass;
  const tabClassName = "text-[#23232399]/[.60]";
  const activeTabClassName = "border-b-2 border-[#545CF6] text-[#232323]";
  return (
    <div className="max-md:h-[74rem] md:min-h-[40rem] [perspective:1000px] bg-primary_white relative  flex flex-col  mx-auto w-full  items-center justify-start lg:my-[48px] my-[13px] ">
      {/* <Tabs
        tabs={securityTabs}
        containerClassName={containerClassName}
        tabClassName={tabClassName}
        activeTabClassName={activeTabClassName}
        activeTab={activeTab}
      /> */}
    </div>
  );
};
export default TabsDemo;
