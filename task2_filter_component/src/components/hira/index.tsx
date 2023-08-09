import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { collection } from "./constant";

const CollectionGrid = () => {
  return (
    <div className="flex flex-wrap justify-start gap-4 ">
      {collection.map((t) => (
        <Link href={t.link} key={t.title}>
          <div className="text-gray-700 flex flex-col gap-1 cursor-pointer">
            <div
              className="relative group w-fit h-fit hover:rotate-2 hover:scale-110 
            hover:transition-all hover:ease-in-out hover:duration-500 bg-[#f4f4f4]"
            >
              <Image
                src={t.img}
                alt="bag image"
                width={300}
                height={300}
                className=" h-64 object-cover "
              />
            </div>
            <h1 className="font-medium text-sm">{t.title}</h1>
            <div className="text-sm flex gap-1">
              {t.new} <p className="line-through">{t.old ? t.old : null}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CollectionGrid;
