const BorderButton = ({
  content,
  className,
  onClick,
  href,
  download = false,
}) => {
  const handleClick = (e) => {
    // If there's a custom onClick, run it.
    if (onClick) {
      onClick(e);
    }

  };


  return (
    <>
      <a
        className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1"
        onClick={handleClick} // Handle custom onClick
        style={{ width: "max-content" }}
        href={href} // URL of the PDF file
        download={download ? true : undefined} // Only add download if `download` is true
        target="_blank"
      >
        <span
          className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#545CF6_0%,#FFFFFF_15%,#545CF6_50%)]"
          style={{
            border: "1.5px solid",
            borderImageSource:
              "conic-gradient(66.11deg, #3A379C 4.5%, #8C70D2 43.63%, #E4D5F4 91.54%)",
            borderImageSlice: 1,
          }}
        />
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full py-1 text-[20px] leading-[20px] font-medium text-[#020103] font-urbanist backdrop-blur-3xl max-md:text-[16px] max-md:leading-[20px] max-md:py-[11px] max-md:px-[30px] ${className}`}
        >
          {content || "Download PDF"}
        </span>
      </a>
    </>
  );
};

export default BorderButton;
