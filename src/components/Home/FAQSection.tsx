import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div
      className={`flex flex-col ${
        isOpen ? "pt-2 pb-6" : ""
      } mt-8 w-full rounded-3xl bg-zinc-900 transition-all duration-[800ms] ease-out`}
    >
      <div
        className="flex  gap-10 justify-between items-center px-8 py-6 w-full text-2xl font-semibold tracking-tight text-white rounded-3xl bg-zinc-900 cursor-pointer"
        onClick={onClick}
      >
        <div className="self-stretch my-auto w-full font-urbanist font-semibold para1">
          {question}
        </div>
        <img
          loading="lazy"
          src={
            isOpen
              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/f0188458c80652bf411890f9e3ab9ec9795b7294a9ebaedc3d15cf2c65d0b606?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
              : "https://cdn.builder.io/api/v1/image/assets/TEMP/1154bc39c403385ff6d8e031790d8e73d852a0a137c609d1b712574c410e489b?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
          }
          alt={isOpen ? "Close" : "Open"}
          className={`object-contain shrink-0 self-stretch my-auto aspect-square w-[42px] transition-transform duration-[800ms] ease-out transform ${
            isOpen ? "rotate-0" : "rotate-0"
          }`}
        />
      </div>
      <div
        className={`transition-all duration-[800ms] ease-out overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex-1 shrink gap-2.5 px-6 mt-2 w-full link_text font-urbanist text-[#D2CCE8]">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [openIndex, setOpenIndex] = useState<any>(null);

  const tabs = [
    "All",
    "Platform",
    "Solutions",
    "Product Trial",
    "Integrations",
  ];

  const faqs = [
    {
      question:
        "How does LightBeam handle data privacy regulations that have different requirements (e.g., GDPR vs. CCPA)?",
      answer:
        "LightBeam is designed to be flexible and adaptable to various data privacy regulations. It provides a comprehensive framework that can be configured to meet the specific requirements of different regulations such as GDPR, CCPA, and others. The platform allows for customizable data discovery, classification, and protection policies that can be tailored to comply with the nuances of each regulation.",
    },
    {
      question:
        "How does LightBeam ensure the accuracy of its data discovery process, for unstructured data sources?",
      answer:
        "LightBeam employs advanced machine learning algorithms and natural language processing techniques to accurately discover and classify unstructured data. The system uses context-aware scanning, pattern recognition, and semantic analysis to identify sensitive information within documents, emails, and other unstructured data sources. Regular updates and continuous learning improve the accuracy over time.",
    },
    {
      question:
        "What are the limitations of LightBeam's AI-powered data classification capabilities?",
      answer:
        "While LightBeam's AI-powered classification is highly advanced, it may face challenges with very specialized or industry-specific data types that it hasn't been trained on. Additionally, extremely ambiguous or context-dependent data might require human verification. LightBeam addresses these limitations by allowing for manual classification overrides and continuous model training based on user feedback.",
    },
    {
      question:
        "How can LightBeam be integrated with existing data security and governance tools?",
      answer:
        "LightBeam offers a range of integration options including APIs, pre-built connectors, and custom integration services. It can be seamlessly integrated with popular data security tools, SIEM systems, identity management solutions, and data governance platforms. This allows organizations to enhance their existing security infrastructure rather than replace it.",
    },
  ];

  const handleItemClick = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex overflow-hidden relative flex-col w-full min-h-[918px] max-md:mt-10 bg-[url('/images/home/FAQ_bg.svg')] bg-center bg-cover bg-no-repeat">
      <div className="flex relative flex-col pb-8 w-full min-h-[918px]">
        <div className="flex relative flex-col justify-center items-center px-20 py-12 w-full min-h-[886px] max-md:px-5">
          <div className="flex relative flex-col items-center w-full max-w-[1099px]">
            <div className="flex gap-2.5 justify-center items-center px-3 py-1 text-base font-semibold leading-7 text-center text-white whitespace-nowrap bg-gray-800 rounded-lg tracking-[2.56px]">
              <div className="flex shrink-0 self-stretch my-auto w-3 h-3 bg-indigo-300 rounded-full" />
              <div className="self-stretch font-urbanist my-auto">FAQs</div>
            </div>
            <h2 className="mt-4 text-5xl font-semibold text-center capitalize bg-clip-text gradient_heading max-md:text-[30px] font-sora">
              We&apos;ve all the answers
            </h2>
            <div className="w-full md:justify-center flex overflow-hidden overflow-x-auto gap-5 items-start mt-8 text-lg font-medium text-center text-primary_white max-md:max-w-full scrollbar-none">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`gap-2.5 self-stretch min-w-[141px] sm:w-auto px-3 lg:px-[40px]  h-[45px] sm:h-[60px] whitespace-nowrap font-urbanist rounded-[40px] scrollbar-none ${
                    activeTab === tab
                      ? "bg-primary_white text-neutral-800"
                      : "border border-solid border-primary_white"
                  } max-md:px-5`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex flex-col self-stretch mt-12 w-full max-md:mt-10">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => handleItemClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
