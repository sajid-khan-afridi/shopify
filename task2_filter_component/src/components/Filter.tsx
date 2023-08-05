"use client";

import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";
import Circle from "@/components/Circle";
import SubComponent2 from "@/components/SubComponent2";
import SubComponent3 from "./subComponent3";

const Filter = () => {
  return (
    <Wrapper>
      {/* <SubComponent2
        heading="Availability"
        subHeading={["In stock", "Out of stock"]}
      /> */}
      {/* <SubComponent heading="Size" subHeading={["COMPACT", "GRANDE", "MIDI"]} />
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
      /> */}
      <SubComponent3 />
    </Wrapper>
  );
};

export default Filter;
