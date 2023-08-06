import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const RangeSlider = () => {
  const [rangeValues, setRangeValues] = useState({
    min: 0,
    max: 100,
  });

  const handleRangeChange = (values:any) => {
    setRangeValues(values);
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Minimum Value
      </label>
      <input
        type="number"
        value={rangeValues.min}
        onChange={(e) =>
          handleRangeChange({ ...rangeValues, min: parseInt(e.target.value) })
        }
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />

      <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
        Maximum Value
      </label>
      <input
        type="number"
        value={rangeValues.max}
        onChange={(e) =>
          handleRangeChange({ ...rangeValues, max: parseInt(e.target.value) })
        }
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />

      <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
        Range Slider
      </label>
      <InputRange
        minValue={0}
        maxValue={100}
        value={rangeValues}
        onChange={handleRangeChange}
      />
    </div>
  );
};

export default RangeSlider;
