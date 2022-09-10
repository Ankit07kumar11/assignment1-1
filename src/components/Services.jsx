import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon2a from "../assets/icon2a.png";
import Icon3 from "../assets/icon3.png";
import Icon4 from "../assets/icon4.png";
import { CgIfDesign } from "react-icons/cg";
import { MdDeveloperMode } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

const Services = () => {
  return (
    <div className="overflow-x-hidden flex flex-col gap-5 p-5 sm:px-10 mt-5 bg-[#364f6b]  text-white md:rounded-xl">
      <div className="flex justify-center items-center">
        <hr className="w-10 sm:border border-white bg-white mr-2" />
        <h1 className="text-center text-lg sm:text-xl lg:text-2xl">
          {" "}
          Trusted Companies{" "}
        </h1>
        <hr className="w-10 sm:border border-white bg-white ml-2" />
      </div>

      {/* slider */}
      <div className="mt-8 md:mt-10">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="flex justify-evenly items-center gap-5">
            <div className="flex justify-center items-center gap-5">
              <img src={Icon1} alt="" />
              <h2>Logoipsum</h2>
            </div>

            <div className="hidden sm:flex justify-center items-center gap-5">
              <div className="flex justify-center items-center">
                <img src={Icon2} alt="" />
                <img src={Icon2a} alt="" />
              </div>
              <h2>Logoipsum</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="sm:hidden">
            <div className="flex justify-center items-center gap-5">
              <div className="flex justify-center items-center">
                <img src={Icon2} alt="" />
                <img src={Icon2a} alt="" />
              </div>
              <h2>Logoipsum</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-evenly items-center gap-5">
            <div className="flex justify-center items-center gap-5">
              <img src={Icon3} alt="" />
              <h2>Logoipsum</h2>
            </div>

            <div className="hidden sm:flex justify-center items-center gap-5">
              <img src={Icon4} alt="" />
              <h2>Logoipsum</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="sm:hidden">
            <div className="flex justify-center items-center gap-5">
              <img src={Icon4} alt="" />
              <h2>Logoipsum</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <hr className="mt-10 w-full sm:border border-white bg-[#f0f0f0] mr-2" />

      <div className="flex flex-col gap-5 p-5 md:flex-row md:justify-evenly">
        <h2 className="text-2xl max-w-sm md:max-w-lg md:text-4xl lg:text-5xl xl:text-6xl font-semi-bold flex-[5]">
          Our services <br /> that we provide
        </h2>
        <p className="text-[#f0f0f0] text-sm flex-[7] md:px-10 max-w-md  leading-6 tracking-wide sm:tracking-wider md:tracking-widest">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
          deserunt aspernatur placeat consectetur illum maiores quo nisi
          temporibus at fuga dolorum praesentium, officiis saepe reiciendis
          perspiciatis, totam tempore qui est tenetur ad dignissimos!
        </p>
      </div>

      <div className="flex flex-col gap-8 mt-20 md:flex-row">
        <div className="flex flex-col gap-5">
          <div className="flex justify-around items-center relative">
            <CgIfDesign size={50} color="#42dde6" />
            <h2 className="text-xl text-center">Design</h2>
          </div>
          <p className="text-[#f0f0f0] text-sm flex-[7] md:px-8 lg:p-10 max-w-md mx-auto p-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
            accusantium ad dolorem voluptatem, voluptatum temporibus ab nam rem
            voluptas ipsam!
          </p>
          <div className="max-w-3xl p-5 md:hidden">
            <div className="max-w-lg h-[0.15rem] my-5 mx-auto bg-blue-500"></div>
          </div>
        </div>
        <div className="hidden md:inline-block pb-5">
          <div className="h-full my-5 border bg-gray-400"></div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-around items-center relative">
            <MdDeveloperMode size={45} color="#42dde6" />
            <h2 className="text-xl text-center">Development</h2>
          </div>
          <p className="text-[#f0f0f0] text-sm flex-[7] md:px-8 lg:p-10 max-w-md mx-auto p-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            laudantium itaque tenetur minima iusto reprehenderit accusantium
            nesciunt voluptatum architecto consectetur.
          </p>
          <div className="max-w-3xl p-5 md:hidden">
            <div className="max-w-lg h-[0.15rem] my-5 mx-auto bg-blue-500"></div>
          </div>
        </div>
        <div className="hidden md:inline-block pb-5">
          <div className="h-full my-5 border bg-gray-400"></div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex justify-around items-center relative">
            <TbBrandGoogleAnalytics size={45} color="#42dde6" />
            <h2 className="text-xl text-center">Marketing</h2>
          </div>
          <p className="text-[#f0f0f0] text-sm flex-[7] md:px-8 lg:p-10 max-w-md mx-auto p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a
            nesciunt itaque neque dolor modi unde alias accusantium, vel
            laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
