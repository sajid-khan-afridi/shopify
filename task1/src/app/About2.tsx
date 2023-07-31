import React from "react";

const About2 = () => {
  return (
    <div className=" min-h-screen md:relative text-gray-900 md:bg-[url('/images/bg.png')] bg-cover overflow-hidden bg-fixed max-h-screen">
      <div className=" md:px-24 md:max-w-[45vw] ">
        <div className="h-screen grid grid-cols-1 grid-rows-2">
          <div className="md:order-first md:object-top md:hidden block">
            <img
              className="h-full w-full object-cover"
              src="/images/bg.png"
              alt="Background image"
            />
          </div>
          <div className="p-8">
            <h2 className="font-light mb-5 text-sm">PROTECTION</h2>
            <h1 className="text-3xl font-extralight mb-1">
              Wipe clean & drama-free
            </h1>
            <div className="bg-gray-900 h-[3px] w-9 mb-10"></div>
            <p className="font-light mb-10 text-sm tracking-wider">
              Our bags are made from soft, velvety & non-toxic silicone. They
              are highly resistant to stains and scratches. Absolutely no
              hassle. No matter what you spill on it - coffee, oil, cranberry
              juice, nail polish, you can easily wipe it clean with just soap
              and water.
            </p>
            <button className="bg-gray-900 border border-transparent text-gray-50 py-4 px-8 text-xs rounded-sm w-fit hover:bg-transparent hover:border-gray-900  transition-all duration-500 hover:text-gray-900">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
