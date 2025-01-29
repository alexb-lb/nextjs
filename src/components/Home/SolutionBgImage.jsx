import React from "react";

function SolutionBgImage({ src }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt=""
      className="object-cover absolute inset-0 size-full"
    />
  );
}

export default SolutionBgImage;
