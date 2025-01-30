import React from "react";

function LicenseCard({ title, description, image }) {
  return (
    <article className="flex flex-col w-[33%] md:h-[502px] max-md:ml-0 max-lg:w-full">
      <div className="flex flex-col grow items-center px-2.5 pt-2.5 pb-24  md:pb-[28px] w-full bg-white rounded-2xl border border-[#D9D6FB] border-solid  max-md:mt-5">
        {image && (
          <img
            loading="lazy"
            src={image}
            alt=""
            className="object-contain grow w-full rounded-3xl aspect-[1.08] shadow-[0px_4px_42px_rgba(50,50,50,0.08)] max-md:max-w-full"
          />
        )}
        <h2 className="mt-8 text-2xl font-sora font-semibold text-black">
          {title}
        </h2>
        <p className="mt-6 text-base leading-6 text-center text-[#444444] font-urbanist">
          {description}
        </p>
      </div>
    </article>
  );
}

export default LicenseCard;
