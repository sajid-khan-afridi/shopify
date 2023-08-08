import React, { useState } from "react";

const Circle = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="rounded-full w-6 h-6 bg-gray-300 flex justify-center items-center cursor-pointer"
      onClick={() => setShow(!show)}
    >
      {show ? "✔" :  ""}
    </div>
  );
};

export default Circle;
