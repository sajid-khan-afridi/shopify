import React, { useState } from "react";

const RangeSlider2 = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  const handleMinChange = (event: any) => {
    setMinValue(parseInt(event.target.value));
  };

  const handleMaxChange = (event: any) => {
    setMaxValue(parseInt(event.target.value));
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Min Value
      </label>
      <input
        type="number"
        value={minValue}
        onChange={handleMinChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />

      <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
        Max Value
      </label>
      <input
        type="number"
        value={maxValue}
        onChange={handleMaxChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />

      <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
        Range Slider
      </label>
      <input
        type="range"
        min="0"
        max="100"
        value={minValue}
        onChange={handleMinChange}
        className="w-full"
      />

      <input
        type="range"
        min="0"
        max="100"
        value={maxValue}
        onChange={handleMaxChange}
        className="w-full mt-2"
      />
    </div>
  );
};

export default RangeSlider2;
