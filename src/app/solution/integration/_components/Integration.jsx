const IntegrationCard = ({ imageSrc, name }) => {
  return (
    <div className="flex overflow-hidden flex-col lg:flex-1 shrink justify-center  sm:pb-6 my-auto bg-white rounded-2xl basis-0 lg:min-w-[240px] min-w-[150px] lg:w-[150px] w-[48%]">
      <div className="flex overflow-hidden flex-col justify-center items-center lg:px-20 px-[35px] lg:py-10 py-[32px] w-full bg-white max-lg:shadow-md bg-blend-normal ">
        <img
          loading="lazy"
          src={imageSrc}
          alt={`${name} logo`}
          className="object-contain max-w-full rounded-3xl aspect-[1.07] w-[149px]"
        />
      </div>
      <h3 className="self-center hidden sm:block font-sora mt-6 lg:text-3xl text-lg font-semibold text-[#151617]">
        {name}
      </h3>
    </div>
  );
};

const Integration = () => {
  const integrations = [
    {
      imageSrc: "/images/solution/integration/teams.svg",
      name: "Microsoft Teams",
    },
    {
      imageSrc: "/images/solution/integration/slack.svg",
      name: "Slack",
    },
    {
      imageSrc: "/images/solution/integration/dropbox.svg",
      name: "Dropbox",
    },
  ];
  return (
    <section className="flex mt-[57px] sm:mt-0 overflow-hidden z-10 flex-col items-center lg:px-20 lg:pt-20 pb-[20px]  w-full bg-primary_white max-md:max-w-full">
      <h2 className="text-5xl font-semibold font-sora text-center text-black max-md:max-w-full max-md:text-[30px] max-md:leading-[37px]">
        Featured <br className="md:hidden" /> Integrations
      </h2>
      <div className="flex flex-wrap gap-5 items-center lg:justify-normal justify-center self-stretch mt-10">
        {integrations.map((integration, index) => (
          <IntegrationCard
            key={index}
            imageSrc={integration.imageSrc}
            name={integration.name}
          />
        ))}
      </div>
    </section>
  );
};
export default Integration;
