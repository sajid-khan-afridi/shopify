import Image from "next/image";

const About = () => {
  return (
    <div className=" min-h-screen relative text-gray-900 bg-[url('/images/bg.png')] bg-cover overflow-hidden bg-fixed max-h-screen">
      <div className="px-12 md:px-24 max-w-[45vw]">
        <div className="h-screen flex flex-col justify-center">
          <h2 className="font-light mb-5 text-sm">PROTECTION</h2>
          <h1 className="text-3xl font-extralight mb-1">
            Wipe clean & drama-free
          </h1>
          <div className="bg-gray-900 h-[3px] w-9 mb-10"></div>
          <p className="font-light mb-10 text-sm tracking-wider">
            Our bags are made from soft, velvety & non-toxic silicone. They are
            highly resistant to stains and scratches. Absolutely no hassle. No
            matter what you spill on it - coffee, oil, cranberry juice, nail
            polish, you can easily wipe it clean with just soap and water.
          </p>
          <button className="bg-gray-900 border border-transparent text-gray-50 py-4 px-8 text-xs rounded-sm w-fit hover:bg-transparent hover:border-gray-900  transition-all duration-500 hover:text-gray-900">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
