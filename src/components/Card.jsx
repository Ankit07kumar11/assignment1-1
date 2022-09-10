import React from "react";
import Img from "../assets/HeaderImg.png";
import { BiLinkExternal } from "react-icons/bi";

const Card = () => {
  return (
    <div className="shadow-lg">
      <div className="border rounded-lg overflow-hidden group cursor-pointer bg-white h-full">
        <img
          src={Img}
          alt=""
          className="h-60 w-full object-fill sm:object-cover md:object-fill sm:h-64 group-hover:scale-105 transition-transform duration-200 ease-in-out overflow-hidden"
        />
        <div className="flex flex-col justify-between p-5 bg-white  ">
          <div className="w-full">
            <p className="text-lg font-bold">Project 1</p>
            <div className="flex gap-4">
              <p className="text-xs text-gray-700 mb-3 flex-[8]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci repellat sit beatae aut officiis?
              </p>
              <BiLinkExternal size={40} className="flex-1" color="gray" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
