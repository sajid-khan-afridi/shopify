import React from "react";
import Filter from "../Filter";
import CollectionGrid from "../hira";
import "./app.css";

const Main = () => {
  return (
    <div className="min-h-screen grid grid-cols-[1fr,3fr] gap-5 mt-10">
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
  );
};

export default Main;
