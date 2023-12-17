import React from 'react';
import LaptopImg from '../assets/image-folder/Laptop.png';
import ImgGirlie from '../assets/image-folder/Girlie.png';
import WatchImg from '../assets/image-folder/watch.png';

const TechPrice = () => {
  return (
    <>
      <div className='prizes mt-20 w-full flex flex-col md:flex-row rounded p-[5   0px] overflow-x-hidden md:overflow-x-hidden'>
        <div className='prizes-col-1 text-white mt-[8em] md:mt-0 md:pl-[10px] w-full md:w-[50%]'>
          <h1 className='font-extrabold text-[40px] tech-text'>Tech Prizes Galore</h1>
          <p className='text-[16px] text-left prizes-text'>
            By obtaining a ticket for the Ibadan Tech Expo event,
            <br />
            you enter the chance to win incredible tech prizes,
            <br />
            including laptops, phones, AirPods,
            <br />
            smartwatches, 5G internet mifis, headsets, VR sets, wireless mice, and televisions.
          </p>
        </div>
        <div className='flex  md:flex prizes-img w-full md:w-full '>
          <img
            src={LaptopImg}
            alt=""
            className=' img-laptop w-[150px] h-[150px] mt-40 md:mt-40 transition-transform ease-in-out hover:scale-90'
          />
          <img src={ImgGirlie} alt="img-girlie" className='img-girlie w-full lg:w-[400px] lg:h-[400px] md:w-[400px] md:mt-20 h-[400px] sm:w-[300px] sm:h-[300px]' />
          <img
            src={WatchImg}
            alt="img-watch"
            className='img-watch lg:w-[120px] lg:h-[120px] sm:w-[50px] sm:h-[50px] md:w-[100px] md:h-[100px] mt-6 md:mt-0 transition-transform ease-in-out hover:scale-110'
          />
        </div>
      </div>
    </>
  );
};

export default TechPrice;
