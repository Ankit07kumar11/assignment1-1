import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="z-[999] sticky top-0 text-black ">
        <header className="flex justify-between p-4 sm:p-5 mx-auto items-center sticky md:rounded-xl shadow-md top-0 z-[99] bg-slate-100">
          <div className="flex items-center space-x-5">
            <div className="font-bold text-3xl lg:text-4xl md:ml-5 ">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="hidden md:inline-flex items-center space-x-5">
            <Link to="/">
              <h3 className="cursor-pointer hover:underline">HOME</h3>
            </Link>
            <Link to="/about">
              <h3 className="cursor-pointer hover:underline">ABOUT</h3>
            </Link>
            <Link to="/contact">
              <h3 className="cursor-pointer hover:underline">CONTACT</h3>
            </Link>

            <Link to="/contact">
              <button
                className="border py-2 px-8 md:px-10 rounded-3xl bg-[#43dde6] hover:bg-transparent hover:border-purple-600 text-black 
              cursor-pointer font-bold active:bg-purple-300 "
              >
                Get in Touch
              </button>
            </Link>
          </div>

          {/* hamburger */}
          <div
            className="flex flex-col justify-between h-6 w-8 cursor-pointer md:hidden"
            onClick={() => setOpen(!open)}
            style={{ zIndex: "99" }}
          >
            {open ? <ImCross size={35} /> : <GiHamburgerMenu size={35} />}
          </div>

          <ul
            onClick={() => setOpen(false)}
            className="fixed top-0  h-screen w-screen-1/2 bg-[#b0bdc1] font-bold text-[#b0bdc8] p-10 flex flex-col justify-around transition-all duration-500 ease-in-out"
            style={{ right: open ? "0px" : "-100vw" }}
          >
            <Link to="/">
              <h3 className="text-white bg-green-600 px-6 py-1 rounded-full cursor-pointer ">
                Home
              </h3>
            </Link>

            <Link to="/about">
              <h3 className="text-white bg-green-600 px-6 py-1 rounded-full cursor-pointer ">
                About
              </h3>
            </Link>

            <Link to="/contact">
              <h3 className="text-white bg-green-600 px-6 py-1 rounded-full cursor-pointer ">
                Contact
              </h3>
            </Link>
            <Link to="/contact">
              <h3 className="text-white bg-green-600 px-6 py-1 rounded-full cursor-pointer ">
                Get in Touch
              </h3>
            </Link>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Navbar;
