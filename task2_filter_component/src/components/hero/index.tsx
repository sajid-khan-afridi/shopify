import React from "react";
import Wrapper2 from "../Wrapper2";
import Image from "next/image";
import heroImage from "@/components/assets/images/hero/hero.jpg";

const Hero = () => {
  return (
    <div className="relative">
      <Image
        src={heroImage}
        height={9999}
        width={9999}
        alt="hero image"
        className="w-screen h-[450px] object-cover"
      />
      <div className="absolute top-1/3 text-gray-50 left-1/4 w-1/2 max-md:3/4">
        <h1 className="text-center text-5xl max-md:text-3xl">City</h1>
        <hr className="h-[2.5px] bg-white w-9 my-4 mx-auto max-md:mt-2" />
        <p className="text-center text-xl max-md:text-base">
          Explore the new arrivals or bestselling totes from Fablou. New
          arrivals every week. Explore the new season totes or shop bestsellers.
        </p>
      </div>
    </div>
  );
};

export default Hero;
