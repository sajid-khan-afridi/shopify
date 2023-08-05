import React, { useState } from "react";
import Circle from "@/components/Circle";

const SubComponent4 = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  function handleClick() {
    setShow(!show);
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="mt-3">heading</div>
        <div
          onClick={handleClick}
          className="cursor-pointer text-3xl focus:rotate-180 delay-300 transition-all ease-in-out duration-500"
          style={{
            transform: show ? "rotate(0deg)" : "rotate(180deg)",
            transition: "all 0.3s ease",
          }}
        >
          {show ? "-" : "+"}
        </div>
      </div>

      <div
        className={`${
          show
            ? "flex flex-col ml-2 mt-1 scaleY(1) transition-all ease-in-out duration-500" //drop down content
            : "hidden transform scaleY(0) opacity-0 transition-all ease-in-out duration-500"
        }`}
        style={{
          transformOrigin: "top",
        }}
      >
        <span>sub heading</span>
      </div>
    </div>
  );
};

export default SubComponent4;
