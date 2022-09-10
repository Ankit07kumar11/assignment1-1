import { Link } from "react-router-dom";
import Img from "../assets/HeaderImg.png";

const Abouts = () => {
  return (
    <>
      <div className="overflow-x-hidden flex flex-col gap-5 md:gap-10 lg:gap-16 p-5 sm:px-10 md:px-12  justify-around items-center md:flex-row md:[h-88vh] mt-5 md:mt-0">
        {/* left side  */}
        <div className=" flex flex-col justify-center">
          <div className="text-5xl font-serif ">
            <span className="myName font-semi-bold text-[#364f8b]">
              Let's create <br /> something great <br /> together
            </span>
          </div>

          <div>
            <p className="max-w-md md:max-w-lg mt-5 font-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              quia. Eaque quod laudantium dolores laborum?
            </p>

            <Link to="/contact">
              <button
                className="border py-2 px-8 md:px-10 rounded-3xl bg-[#43dde6] hover:bg-transparent hover:border-purple-600 text-black mt-10 mx-0 
              shadow drop-shadow-2xl cursor-pointer font-bold active:bg-purple-300 "
              >
                Let's Talk
              </button>
            </Link>
          </div>
        </div>

        {/* right side  */}
        <div className="my-0">
          <img
            src={Img}
            alt=""
            className=" mx-auto h-80 sm:h-96 mt-10 mb-10 rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

export default Abouts;
