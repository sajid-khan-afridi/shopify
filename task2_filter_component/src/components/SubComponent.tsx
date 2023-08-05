import React, { useState } from "react";
import Circle from "@/components/Circle";

interface MyProps {
  heading: string;
  subHeading: string[];
}

const SubComponent5 = (props: MyProps) => {
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow(!show);
  }
  const divStyles = {
    cursor: "pointer",
    fontSize: "2rem",
    transform: show ? "rotate(0deg)" : "rotate(180deg)",
    transition: "all 0.3s ease",
  };
  const dropdownStyles = {
    transform: show ? "scaleY(1)" : "scaleY(0)",
    opacity: show ? "1" : "0",
    height: show ? "auto" : "0",
    overflow: "hidden",
    transformOrigin: "top",
    transition: "transform 0.3s ease, opacity 0.3s ease, height 0.3s ease", // Include both transform, opacity, and height properties in the transition
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="mt-3">{props.heading}</div>
        <div
          onClick={handleClick}
          className="cursor-pointer text-3xl focus:rotate-180 delay-300 transition-all ease-in-out duration-500"
          style={divStyles}
        >
          {show ? "-" : "+"}
        </div>
      </div>

      <div className="ml-2 mt-1" style={dropdownStyles}>
        {props.subHeading.map((item) => (
          <div className="flex mb-2" key={item}>
            <Circle /> <span className="pl-3">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubComponent5;
