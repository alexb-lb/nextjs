import React from "react";

const Tags = ({ tags = [] }) => {
  return (
    <div className="w-full flex items-center justify-center  px-4  mt-[50px]">
      <div className="w-full flex items-center  border-t border-b border-[#B7B7B7] gap-2 md:gap-4 py-6 overflow-x-auto flex-nowrap md:flex-wrap no-scrollbar">
        {tags.map(
          (tag, index) =>
            tag.title !== "Navigation" && (
              <div
                key={index}
                className="flex-shrink-0 text-center p-2 md:p-0 md:px-8 md:py-4 bg-[#545CF6] text-[14px] md:text-[16px] font-semibold text-white rounded-full whitespace-nowrap"
              >
                {tag?.title}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Tags;
