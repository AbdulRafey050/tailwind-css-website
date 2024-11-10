import React from "react";

const Test = () => {
  return (
    <div className="flex flex-wrap bg-[#1d1d2e] text-white p-10 rounded-lg">
      <div className="flex-1 pr-5">
        <h4 className="text-sm font-bold text-[#888]">Testimonials</h4>
        <h2 className="text-2xl font-bold my-2">
          What people say about our blog
        </h2>
        <p className="text-sm text-[#aaa]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <p className="text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex items-center mt-5">
          <img
            src="/6.png"
            alt="User"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <p className="font-bold text-sm">Jonathan Vallem</p>
            <p className="text-xs text-[#aaa]">New York, USA</p>
          </div>
        </div>
        <div className="flex justify-between w-16 mt-5">
          <button className="bg-[#ff5b5b] text-white text-lg rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
            &larr;
          </button>
          <button className="bg-[#ff5b5b] text-white text-lg rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;
