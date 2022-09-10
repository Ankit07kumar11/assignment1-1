import React from "react";
import Card from "./Card";

const Works = () => {
  return (
    <div className="mt-14 min-h-[90vh] p-5">
      <h2 className="text-center text-[#364f6b] text-5xl my-8">Our Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mt-3 md:p-6">
        <Card />
        <Card />
        <Card />
      </div>

      <div className="flex justify-center items-center">
        <button
          className="border py-2 px-10 md:px-12 lg:px-14 rounded-3xl bg-[#43dde6] hover:bg-transparent hover:border-purple-600 text-black mt-10 
          mx-auto shadow drop-shadow-2xl cursor-pointer font-bold active:bg-purple-300 "
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Works;
