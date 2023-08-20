// import Image from "next/image";
// import Link from "next/link";
// import { data } from "@/components/productList/data";

// export default async function Home() {
//   return (
//     <div className="grid sm:grid-cols-1 md:grid-cols-2 mdl:grid-cols-3 justify-center items-center gap-y-8 mt-24">
//       {data.map((item) => (
//         <div key={item.id} className="flex flex-col gap-y-2 mx-auto">
//           <Link href={`/collections/${item.name}`}>
//             <Image
//               src={item.bgPic}
//               alt="item.alt"
//               width={250}
//               height={300}
//               className="max-h-[250px] object-cover object-top"
//             />
//             <div className="pdh">{item.name}</div>
//             <div className="pdp">{item.heading}</div>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HowerColorButton from "@/components/HowerColorButton";
// import HowerColorButton from './HowerColorButton';
import { data } from "@/components/productList/data";

// const gridImages = [
//   {
//     src: "/2.jpg",
//     alt: "image-1",
//     text: {
//       heading: "Carrie",
//       quantity: 1,
//     },
//   },
//   {
//     src: "/3.jpg",
//     alt: "image-2",
//     text: {
//       heading: "Clearance",
//       quantity: 4,
//     },
//   },
//   {
//     src: "/4.jpg",
//     alt: "image-3",
//     text: {
//       heading: "LL Chelsea",
//       quantity: 6,
//     },
//   },
//   {
//     src: "/5.jpg",
//     alt: "image-4",
//     text: {
//       heading: "Chelsea",
//       quantity: 11,
//     },
//   },
//   {
//     src: "/6.jpg",
//     alt: "image-5",
//     text: {
//       heading: "New Arrivals",
//       quantity: 3,
//     },
//   },
//   {
//     src: "/7.jpg",
//     alt: "image-4",
//     text: {
//       heading: "Cosmopolitan",
//       quantity: 11,
//     },
//   },
//   {
//     src: "/fbag15.jpg",
//     alt: "image-5",
//     text: {
//       heading: "LL City",
//       quantity: 12,
//     },
//   },
//   {
//     src: "/hbag1.jpg",
//     alt: "image-6",
//     text: {
//       heading: "Chelsea Straps",
//       quantity: 8,
//     },
//   },
//   {
//     src: "/hbag3.jpg",
//     alt: "image-7",
//     text: {
//       heading: "Leather Like Collection",
//       quantity: 9,
//     },
//   },
// ];
const CollectionSection = () => {
  return (
    <section className="p-20 overflow-hidden">
      <div className="flex flex-col items-center text-center">
        <h3 className="mb-1 text-[45px] font-[350] text-slate-900 ">
          Collections
        </h3>
        <div className="h-[3px] w-8 bg-black rounded-full mb-10"></div>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-6 mx-auto max-lg2:grid-cols-2 max-md:grid-cols-1">
        {data.map((gridImage, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center cursor-pointer group group-hover:opacity-100 "
          >
            <div className="relative h-[540px] w-[520px] flex-wrap ">
              <Image
                src={gridImage.bgPic}
                alt={gridImage.name}
                width={800}
                height={500}
                className="object-cover h-[540px] w-[520px]"
              />

              <div className="absolute inset-0 bg-black opacity-20" />
            </div>

            {/* Overlay Content */}

            <div className="absolute top-[100px] bottom-0 left-0 right-0 z-10 text-white items-center justify-center flex flex-col transition-all group-hover:translate-x-0 group-hover:-translate-y-7 duration-2000">
              <h2 className="text-[28px] font-normal ">{gridImage.heading}</h2>
              <div className="opacity-0 flex flex-col items-center gap-1 transition ease-in group-hover:opacity-100">
                <Link
                  href={`/collections/${gridImage.name}`}
                  className="text-white text-[14px] lowercase flex flex-col items-center"
                >
                  {gridImage.quantity} Products
                  <HowerColorButton text="VIEW" />
                </Link>
              </div>
            </div>
            {/* Responsive Div */}
            {/* <div className="xl:hidden">
              <h3>{gridImage.text.heading}</h3>
              <p> {gridImage.text.quantity} products</p>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollectionSection;
