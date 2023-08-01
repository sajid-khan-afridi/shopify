import React, { useState } from "react";
import Circle from "@/components/Circle";

interface MyProps {
  heading: string;
  subHeading: string[];
}

const SubComponent = (props: MyProps) => {
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
    cursor: "pointer",
    opacity: 1,
    transform: show ? "translateY(0)" : "",
    transition: "0.5s ease-out",
    transitionProperty: "transform",
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

      <div
        className={`${
          show
            ? "flex flex-col ml-2 mt-1 transition-all delay-1000 duration-700" //drop content
            : "hidden"
        } `}
        style={dropdownStyles}
      >
        {props.subHeading.map((item) => (
          <div className="flex mb-2" key={item}>
            <Circle /> <span className="pl-3">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubComponent;
