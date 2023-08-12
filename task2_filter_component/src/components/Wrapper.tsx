import React, { FC } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    // <div className="max-w-screen-2xl w-full mx-auto mdl:px-20 sm:px-5 overflow-y-hidden">
    <div className="max-w-[250px] w-full mx-auto  text-gray-600 max-md:w-screen max-md:max-w-full max-md:px-6">
      {children}
    </div>
  );
};

export default Wrapper;
