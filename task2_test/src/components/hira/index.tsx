import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { collection } from "./constant";
import { iconComponent } from "@/components/hira/constant";
import "./styles.css";

const CollectionGrid = () => {
  return (
    <div className="grid grid-cols-3 max-md:grid-cols-2 justify-center gap-8 max-md:pb-24">
      {/* <div className="flex flex-wrap justify-center gap-4 "> */}
      {collection.map((t) => (
        <Link href={t.link} key={t.title}>
          <div className="bg-[#f4f4f4] shadow-lg">
            <div className="relative overflow-hidden group">
              <div className="relative group w-fit h-fit group-hover:rotate-2 group-hover:scale-110 group-hover:transition group-hover:ease-in-out group-hover:duration-500 bg-[#f4f4f4]">
                <Image
                  src={t.img}
                  alt="bag image"
                  width={280}
                  height={280}
                  className=" object-cover h-[350px] max-md:h-[200px]"
                />
              </div>
              {/* <h1 className="font-medium text-sm">{t.title}</h1>
              <div className="text-sm flex gap-1">
                {t.new} <p className="line-through">{t.old ? t.old : null}</p>
              </div> */}

              <div className="flex flex-col gap-1 mt-4 ml-4 pb-3 text-[#5e5c5c]">
                <h2 className="md:text-2xl text-[16px] text-gray-700">
                  {t.title}
                </h2>
                <p className="flex gap-5 ml-[1px] text-lg">
                  <del
                    className={`text-[#EF9A9A] ${
                      t.disPrice ? "block" : "hidden"
                    } pr-10`}
                  >
                    ${t.disPrice}
                  </del>
                  <span className={`text-gray-800`}>${t.price}</span>
                </p>
                <p className={`flex items-center text-[${t.color}]`}>
                  {t.icon?.map((iconName: string, ind: number) => {
                    const IconObj = iconComponent[iconName];
                    if (!IconObj) {
                      return null;
                    }
                    return <IconObj key={ind} />;
                  })}
                  <span
                    className={`ml-4 text-gray-800 mediaQuery text-sm ${
                      t.review ? "block" : "hidden"
                    }`}
                  >
                    {t.review} review
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CollectionGrid;
