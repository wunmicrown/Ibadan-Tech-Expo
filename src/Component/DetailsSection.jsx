import React from "react";
import image from "../assets/image-folder/ibadan-img.svg";
import line from "../assets/image-folder/line-img1.svg";
import star from "../assets/image-folder/star.svg";
const DetailsSection = () => {
  return (
    <>
      <div className=" lg:px-5 md:px-4 sm:px-3 px-2 w-full">
        <div>
          <img src={image} alt="" className="w-full h-85 px-2 mt-10" />
        </div>
        <div className="flex flex-wrap px-3 gap-3 mt-8 justify-center">
          <div className=" flex">
            <h4 className=" text-blue-700 font-bold text-center mt-7 pr-2">
              MAIDEN EDITION
            </h4>
            <img src={line} alt="line-img" className=" px-2 w-40" />
          </div>
          <div>
            <img src={star} alt="star-img" className=" w-20 min-w-max animate-spin !duration-[5m] ease-in-out border border-green-500 p-3 rounded-full" />
          </div>
          <div className=" flex">
            <img src={line} alt="line-img" className=" px-2 w-40" />
            <p className=" text-blue-700 font-medium text-center mt-7 pl-2 ">
              September 9, 2023
            </p>
          </div>
        </div>
        <div className="text flex justify-center w-full mx-auto ">
        <div className="container flex-wrap flex lg:justify-between w-full justify-center lg: gap-6 mx-auto lg:mt-16 md:mt-16 mt-5 ">
          <div className="lg:w-[48%] md:w-[45%] sm:full w-full  p-3 text-center font-bold text-lg text-blue-700 bg-yellow-500 cursor-pointer">
            {" "}
            BUY TICKETS
          </div>
          <div className="lg:w-[48%] md:w-[45%] sm:full w-full font-bold text-xl p-3 text-center text-blue-800 border border-blue-800 cursor-pointer">
            BECOME A SPONSOR
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default DetailsSection;
