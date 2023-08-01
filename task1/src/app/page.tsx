import React from "react";
import Collection from "./Collection";
import About2 from "./About2";
import NextSection from "./NextSection";

const page = () => {
  return (
    <div className="flex flex-col  overflow-hidden">
      <Collection />
      {/* <About2 /> */}
      {/* <div className="h-[50vh] w-auto bg-white"></div> */}
      {/* <NextSection />
      <div className="h-[50vh] w-auto bg-white"></div> */}
    </div>
  );
};

export default page;
