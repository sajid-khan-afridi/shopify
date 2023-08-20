import React, { FC } from "react";

const HowerColorButton: FC<{ text: string }> = ({ text }) => {
  text;
  return (
    <button className="h-14 px-10 text-[14px] rounded-[4px] font-normal bg-white mt-4 text-black/80 shadow-xl hover opacity-0 group-hover:opacity-100">
      {text}
    </button>
  );
};

export default HowerColorButton;
