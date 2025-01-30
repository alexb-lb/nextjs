"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Tabs = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const router = useRouter();
  return (
    <div className="mt-10 px-4 z-[999] relative">
      <div className="md:w-min w-full m-auto flex items-center max-md:justify-between no-scrollbar overflow-hidden md:gap-4 gap-[13px] p-2 text-primary_black font-urbanist para3B border border-solid border-zinc-300 rounded-[60px] max-md:max-w-full">
        <button
          type="button"
          className={`md:gap-2.5 md:self-stretch md:py-4 py-2 max-md:px-[9.5px]  rounded-[60px] md:w-[200px] max-md:w-[100px]  max-md:text-[14px] max-md:leading-[16.8px] ${
            tabIndex === 1 && "bg-primary_green font-semibold"
          }`}
          onClick={() => router.push("/resource/blogs")}
        >
          Blog
        </button>
        <button
          type="button"
          className={`md:gap-2.5 md:self-stretch md:py-4 py-2  rounded-[60px] md:w-[200px] w-[100px] ${
            tabIndex === 2 && "bg-primary_green font-semibold"
          }`}
          onClick={() => router.push("/resource/news-room")}
        >
          Newsroom
        </button>
        <button
          type="button"
          className={`md:gap-2.5 md:self-stretch md:py-4 py-2  rounded-[60px] md:w-[200px] w-[100px] ${
            tabIndex === 3 && "bg-primary_green font-semibold"
          }`}
          onClick={() => router.push("/resource/white-papers")}
        >
          White papers
        </button>
        <button
          type="button"
          className={`md:gap-2.5 md:self-stretch md:py-4 py-2  rounded-[60px] md:w-[200px] w-[100px] ${
            tabIndex === 4 && "bg-primary_green font-semibold"
          }`}
          onClick={() => router.push("/resource/e-books")}
        >
          E-Books
        </button>
      </div>
    </div>
  );
};

export default Tabs;
