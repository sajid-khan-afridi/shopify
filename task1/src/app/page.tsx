import React from "react";
import Collection from "./Collection";
import About from "./About";
import NextSection from "./NextSection";

const page = () => {
  return (
    <div className="flex flex-col  overflow-hidden">
      <Collection />
      {/* <About/>
      <div className="h-[50vh] w-auto bg-white" ></div>
      <NextSection/>
      <div className="h-[50vh] w-auto bg-white" ></div> */}
    </div>
  );
};

export default page;
