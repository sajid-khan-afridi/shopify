import Image from "next/image";
import React from "react";
import CollectionItem from "./CollectionItem";
import SwiperImages from "@/components/SwiperImages";
import { slideImages } from "@/components/data";

const Collection = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="grid sm:grid-cols-5 grid-cols-1 text-gray-50 ">
          <div className="grid col-span-2">
            <CollectionItem obj={slideImages[0]} />
          </div>
          <div className="sm:grid col-span-3 hidden ">
            <CollectionItem obj={slideImages[1]} />
          </div>
          <div className="sm:grid col-span-3 hidden ">
            <CollectionItem obj={slideImages[2]} />
          </div>
          <div className="sm:grid col-span-2 hidden ">
            <CollectionItem obj={slideImages[3]} />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <SwiperImages />
      </div>
    </>
  );
};

export default Collection;
