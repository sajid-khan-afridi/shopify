"use client";
import React, { useState } from "react";
import Filter from "../../Filter";
import CollectionGrid from "../../hira";
import "./app.css";
import Wrapper2 from "../../Wrapper2";
import Hero from "../../hero";

const Main = () => {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }

  const filterbutton = show ? "CLOSE FILTERS" : "SHOW FILTERS";
  return (
    <Wrapper2>
      <div className="col-span-2">
        <Hero />
      </div>
      <div className="min-h-screen grid grid-cols-[1fr,3fr] gap-5 mt-10 relative">
        <div className="p-5 max-h-[800px] max-md:hidden">
          <Filter />
        </div>
        <div
          className="p-5 max-h-[800px] overflow-scroll no-scrollbar max-md:w-screen"
          style={{ scrollbarWidth: "none" }}
        >
          <CollectionGrid />
        </div>
      </div>
      <div
        className={`${
          show ? "block" : "hidden"
        } absolute bg-white w-full h-full top-0 md:hidden `}
      >
        <div className="fixed h-screen overflow-scroll pb-36 bg-white ">
          <Filter />
        </div>
      </div>
      <div
        className="w-screen h-20 bg-black text-white bottom-0 text-sm fixed flex justify-center items-center md:hidden"
        onClick={handleClick}
      >
        {filterbutton}
      </div>
    </Wrapper2>
  );
};

export default Main;
