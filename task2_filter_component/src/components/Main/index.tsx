import React from "react";
import Filter from "../Filter";
import CollectionGrid from "../hira";

const Main = () => {
  return (
    <div className="min-h-screen grid grid-cols-[1fr,3fr] gap-5 mt-10">
      <div className="p-5 bg-gray-300 ">
        <Filter />
      </div>
      <div className="p-5 bg-gray-300 ">
        <CollectionGrid />
      </div>
    </div>
  );
};

export default Main;
