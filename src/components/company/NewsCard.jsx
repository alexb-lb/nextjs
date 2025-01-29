import React from "react";

function NewsCard({ title, description, imageSrc }) {
  return (
    <div className="flex overflow-hidden lg:flex-wrap gap-8 justify-center lg:justify-evenly items-center py-4 max-lg:p-4  mt-6 rounded-3xl bg-zinc-50 bg-opacity-10 min-h-[203px]">
      <img
        loading="lazy"
        src={imageSrc}
        alt=""
        className=" lg:w-[215px] w-[139.5px] max-lg:min-h-[124px] "
      />
      <div className="flex flex-col justify-center my-auto lg:min-w-[240px] lg:w-[352px] min-w-[139.5px]">
        <h3 className="flex-1 shrink lg:gap-2.5 font-sora self-stretch w-full title4 text-primary_white">
          {title}
        </h3>
        <p className="mt-4 small_text font-urbanist">{description}</p>
      </div>
    </div>
  );
}

export default NewsCard;
