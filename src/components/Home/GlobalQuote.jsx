import React from "react";

function GlobalQuote() {
  return (
    <main className="flex overflow-hidden relative flex-col text-center min-h-[706px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8c030372f742991c6587d8b0f2dc4ea4486635b88447029af68dcaf0c6882bc?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col w-full min-h-[706px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9666ee773630bd4046418cd776f5054b73349fa151d366be7aa576dd326f7f6?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <section className="flex relative flex-col items-center px-16 pt-3 pb-32 w-full min-h-[706px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9594327af0e5da12d2401dc4450f7237cf2a833168fc84807e06c36502531aa5?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-wrap gap-5 justify-between mb-0 w-full max-w-[1175px] max-md:mb-2.5 max-md:max-w-full">
            <article className="flex overflow-hidden relative flex-col pt-24 min-h-[569px] rounded-[347px] max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/45d484503a9f0580e57f8d5ceec439f3745a594bdba0886a6cd6bbddd337dd99?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
                alt=""
                className="object-cover absolute inset-0 size-full"
              />
              <h1 className="relative self-center text-5xl font-semibold bg-clip-text bg-[linear-gradient(96deg,#FFF_19.61%,#9E9FA2_61.35%,#FFF_96.8%)] max-md:max-w-full max-md:text-4xl text-white">
                Our Global Quote
              </h1>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2391f908c86bf8c436cd97dcc864a27fb2d7f265aeabe078f796fb58efbb03c?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
                alt="Decorative quotation marks"
                className="object-contain self-center mt-20 max-w-full aspect-[3.3] w-[132px] max-md:mt-10 z-10"
              />
              <p className="relative self-start mt-16 -mr-48 text-xl tracking-wide leading-8 text-gray-200 max-md:mt-10 max-md:max-w-full">
                The explosion of data, hybrid work, and risk has left
                organizations struggling to effectively manage their data from a
                risk and privacy compliance perspective. Unfortunately,
                businesses find themselves having to adhere to disparate
                regulations, which is confusing, manual and often expensive, A
                data discovery and governance first approach can help businesses
                lay the foundation of data privacy management. This approach
                also enables automation and helps them adhere to current and
                future regulations efficiently.
              </p>
              <footer className="relative mt-16 mr-0 text-2xl font-bold text-zinc-300 max-md:mt-10 max-md:max-w-full">
                Ryan O&apos;Leary, Research Manager, Privacy and Legal
                Technology <br /> International Data Corporation (IDC).
              </footer>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}

export default GlobalQuote;
