const BorderButton = ({ content, className, onClick }) => {
  return (
    <>
      <button
        className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2"
        onClick={onClick}
        style={{ width: "max-content" }}
      >
        <span
          className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite]"
          style={{
            border: "1.5px solid",
          }}
        />
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full py-1 text-[20px] leading-[20px] font-medium text-[#020103] font-urbanist ${className}`}
          style={{
            backgroundColor: 'transparent', // Set the background to transparent
            backdropBlur: 'none' // Remove the blur if it's not needed
          }}
        >
          {content || "Border Magic"}
        </span>
      </button>
    </>
  );
};

export default BorderButton;
