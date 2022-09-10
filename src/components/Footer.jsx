import React from "react";
import Logo1 from "../assets/Logo (1).png";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" text-white w-full">
      <div className="flex p-4 sm:p-5 justify-center items-center md:rounded-xl w-full bg-[#364f6b]">
        <footer className="md:py-5 lg:pt-10">
          <div className="md:flex gap-10 justify-between my-5">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl flex-[2]">
              Let's work <br className="hidden md:flex" /> together
            </h2>
            <div className="flex-[1]">
              <p className="text-gray-200 text-xs mt-2 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                suscipit velit iste doloremque ex alias! suscipit velit iste
                doloremque ex alias!
              </p>
              <Link to="/contact">
                <button className="hidden md:flex border py-1 px-5 rounded-3xl bg-[#43dde6] hover:bg-transparent hover:text-white hover:border-purple-600 text-black mt-4 shadow drop-shadow-2xl cursor-pointer text-sm active:bg-purple-300 ">
                  Let's Talk
                </button>
              </Link>
            </div>
          </div>

          <div className="md:flex justify-between items-center">
            <div className="flex justify-between items-center my-6 gap-6 md:flex-col md:items-start flex-[2]">
              <div className="">
                <Link to="/">
                  <img
                    src={Logo1}
                    alt=""
                    className="h-11 md:h-12 cursor-pointer"
                  />
                </Link>
              </div>

              <div className="flex gap-2">
                <AiFillInstagram
                  size={45}
                  className="hover:bg-[#43dde6] rounded-full p-1 cursor-pointer"
                />
                <AiFillTwitterCircle
                  size={45}
                  className="hover:bg-[#43dde6] rounded-full p-1 cursor-pointer"
                />
                <AiFillFacebook
                  size={45}
                  className="hover:bg-[#43dde6] rounded-full p-1 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-between gap-4 flex-[4]">
              <div>
                <h4 className="mb-2">Address</h4>
                <p className="text-gray-200 text-xs">
                  0199 Taylor Park, <br /> North Dakota, <br /> USA
                </p>
              </div>
              <div>
                <h4 className="mb-2">Call us on</h4>
                <p className="text-gray-200 text-xs">
                  + 123456789 <br /> info@gmail.com
                </p>
              </div>
              <div>
                <h4 className="mb-2">Our Policies</h4>
                <p className="text-gray-200 text-xs">
                  Privacy Policy <br /> Terms of Use <br /> Refund Policy
                </p>
              </div>
            </div>
          </div>

          <hr className="mt-10 w-full sm:border border-white bg-[#f0f0f0]" />
          <div className="my-2 text-center">
            Copyright &copy; Webalar All Rights Reserved
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
