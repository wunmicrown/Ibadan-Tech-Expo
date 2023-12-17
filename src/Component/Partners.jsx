import React from 'react'
import DukImg from '../assets/image-folder/duk.jpg';
import Maniimg from '../assets/image-folder/mani.jpg';
import LogiImg from '../assets/image-folder/logi.jpg';
import KetImg from '../assets/image-folder/ket.jpg';
import PatchPayImg from '../assets/image-folder/patch-pay.jpg';
import CardifyImg from '../assets/image-folder/card.jpg';
import LarvaImg from '../assets/image-folder/larva.jpg';
import SageImg from '../assets/image-folder/sage.jpg';
import SanImg from '../assets/image-folder/san.jpg';
const Partners = () => {
  return (
    <>
        <div className='sponsors'>
        <div  className="pl-20 ">
        <h1 className=' font-extrabold text-blue-800 mt-10 sm:text-![35px] md:text-![35px] lg:text-[35px]'>Partners</h1>
        </div>
        <div className='marquee-container overflow-hidden'>
          <div className=' flex'>
          <div className=' flex'>
                <marquee behavior="slow" direction="left">
                <div className='mediaPartners mt-10 flex gap-8'>
                <img src={DukImg} alt='' className=' w-36'/>
                 <img src={Maniimg} alt='' className=' w-36'/>
                <img src={LogiImg} alt='' className=' w-36'/>
                <img src={KetImg} alt='' className=' w-36'/>
                <img src={PatchPayImg} alt='' className=' w-36'/>
                <img src={CardifyImg} alt='' className=' w-36'/>
                <img src={LarvaImg} alt='' className=' w-36'/>
                <img src={SageImg} alt='' className=' w-36'/>
                <img src={SanImg} alt='' className=' w-36'/>
              </div>
                </marquee>
            </div>
          <div className=' flex'>
                <marquee behavior="slow" direction="left">
                <div className='mediaPartners mt-10 flex gap-8'>
                <img src={DukImg} alt='' className=' w-36'/>
                 <img src={Maniimg} alt='' className=' w-36'/>
                <img src={LogiImg} alt='' className=' w-36'/>
                <img src={KetImg} alt='' className=' w-36'/>
                <img src={PatchPayImg} alt='' className=' w-36'/>
                <img src={CardifyImg} alt='' className=' w-36'/>
                <img src={LarvaImg} alt='' className=' w-36'/>
                <img src={SageImg} alt='' className=' w-36'/>
                <img src={SanImg} alt='' className=' w-36'/>
              </div>
                </marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Partners