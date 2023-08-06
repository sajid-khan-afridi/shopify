"use client";

import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";
import Circle from "@/components/Circle";
import SubComponent from "@/components/SubComponent";
import RangeSlider2 from "./RangeSlider2";

// import SubComponent3 from "./subComponent3";

const Filter = () => {
  return (
    <Wrapper>
      <SubComponent
        heading="Availability"
        subHeading={["In stock", "Out of stock"]}
      />
      <SubComponent heading="Size" subHeading={["COMPACT", "GRANDE", "MIDI"]} />
      <SubComponent heading="Product type" subHeading={["Tote Bag"]} />
      <SubComponent
        heading="Sort by"
        subHeading={[
          "Best selling",
          "Alphabetically, A-Z",
          "Alphabetically, Z-A",
          "Price, low to high",
          "Price, high to low",
          "Date, old to new",
          "Date, new to old",
        ]}
      />
      <RangeSlider2 />
    </Wrapper>
  );
};

export default Filter;
