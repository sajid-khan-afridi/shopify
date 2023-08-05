// import React, { useState } from "react";
// import Circle from "@/components/Circle";

// const SubComponent3 = () => {
//   const [show, setShow] = useState(false);
//   const [show2, setShow2] = useState(false);
//   function handleClick() {
//     setShow(!show);
//   }
//   const divStyles = {
//     cursor: "pointer",
//     fontSize: "2rem",
//     transform: show ? "rotate(0deg)" : "rotate(180deg)",
//     transition: "all 0.3s ease",
//   };

//   const dropdownStyles = {
//     transform: show ? "scaleY(1)" : "scaleY(0)",
//     opacity: show ? "1" : "0",
//     transformOrigin: "top",
//     transition: "transform 0.3s ease, opacity 0.3s ease", // Include both transform and opacity properties in the transition
//   };

//   return (
//     <div className="flex flex-col">
//       <div className="flex justify-between">
//         <div className="mt-3">heading</div>
//         <div
//           onClick={handleClick}
//           className="cursor-pointer text-3xl focus:rotate-180 delay-300 transition-all ease-in-out duration-500"
//           style={divStyles}
//         >
//           {show ? "-" : "+"}
//         </div>
//       </div>

//       <div
//         className={`${
//           show
//             ? "flex flex-col ml-2 mt-1" //drop down content
//             : "hidden"
//         }`}
//         style={dropdownStyles}
//       >
//         <span>sub heading</span>
//       </div>
//     </div>
//   );
// };

// export default SubComponent3;

import React, { useState } from "react";
import Circle from "@/components/Circle";

const SubComponent3 = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
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
        <div className="mt-3">heading</div>
        <div
          onClick={handleClick}
          className="cursor-pointer text-3xl focus:rotate-180 delay-300 transition-all ease-in-out duration-500"
          style={divStyles}
        >
          {show ? "-" : "+"}
        </div>
      </div>

      <div className="ml-2 mt-1" style={dropdownStyles}>
        <span>sub heading</span>
      </div>
    </div>
  );
};

export default SubComponent3;
