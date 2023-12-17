import React from 'react';
import MtnImg from '../assets/image-folder/mtn.svg';
import Sekiapimg from '../assets/image-folder/sek.png';
import Dniimg from '../assets/image-folder/dni.jpg';
import OhImg from '../assets/image-folder/oh.jpg';
import KarImg from '../assets/image-folder/kar.png';

const GoldSponsors = () => {
  return (
    <>
      <div className='sponsors'>
        <h1 className='font-bold text-blue-800 text-3xl md:text-2xl mx-14 mt-20'>Gold Sponsors</h1>
        <div className='marquee-container overflow-hidden'>
          <div className=' flex'>
          <div className=' flex'>
                <marquee behavior="slow" direction="left">
                <div className='mediaPartners mt-10 flex gap-8'>
                <img src={MtnImg} alt='' className=' w-36'/>
                <img src={Sekiapimg} alt='' className=' w-36'/>
                <img src={Dniimg} alt='' className=' w-36'/>
                <img src={OhImg} alt='' className=' w-36'/>
                <img src={KarImg} alt='' className=' w-36'/>
                <img src={MtnImg} alt='' className=' w-36'/>
                <img src={Sekiapimg} alt='' className=' w-36'/>
              </div>
                </marquee>
            </div>
            <div className=' flex'>
                <marquee behavior="slow" direction="left">
                <div className='mediaPartners mt-10 flex  gap-8'>
                <img src={MtnImg} alt='' className=' w-36'/>
                <img src={Sekiapimg} alt='' className=' w-36'/>
                <img src={Dniimg} alt='' className=' w-36'/>
                <img src={OhImg} alt='' className=' w-36'/>
                <img src={KarImg} alt='' className=' w-36'/>
                <img src={MtnImg} alt='' className=' w-36'/>
                <img src={Sekiapimg} alt='' className=' w-36'/>
              </div>
                </marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoldSponsors;
