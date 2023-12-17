import React from 'react'
import HonorfmImg from '../assets/image-folder/hfm.svg';
import BeatImg from '../assets/image-folder/beat.svg';
import PuncImg from '../assets/image-folder/punc.svg';
import AwaImg from '../assets/image-folder/awa.svg';
import TribaImg from '../assets/image-folder/trib.svg';
import InclusionaImg from '../assets/image-folder/inclu.svg';
import PotImg from '../assets/image-folder/pot.svg';
import BuncImg from '../assets/image-folder/bunc.svg';
import MarinImg from '../assets/image-folder/marin.svg';
const MediaPartners = () => {
  return (
    <>
      <div className='sponsors'>
        <div  className="p-20 ">
        <h1 className=' font-extrabold text-blue-800  sm:text-![35px] md:text-![35px] lg:text-[35px]'>Media Partners</h1>
        </div>
        <div className='marquee-container overflow-hidden'>
          <div className=' flex'>
          <div className=' flex'>
                <marquee behavior="slow" direction="left">
                <div className='mediaPartners mt-10 flex gap-8'>
                <img src={HonorfmImg} alt='' className=' w-36'/>
                 <img src={BeatImg} alt='' className=' w-36'/>
                <img src={PuncImg} alt='' className=' w-36'/>
                <img src={AwaImg} alt='' className=' w-36'/>
                <img src={TribaImg} alt='' className=' w-36'/>
                <img src={InclusionaImg} alt='' className=' w-36'/>
                <img src={PotImg} alt='' className=' w-36'/>
                <img src={BuncImg} alt='' className=' w-36'/>
                <img src={MarinImg} alt='' className=' w-36'/>
              </div>
                </marquee>
            </div>
          <div className=' flex'>
                <marquee behavior="slow" direction="left">
                <div className='mediaPartners mt-10 flex gap-8'>
                <img src={HonorfmImg} alt='' className=' w-36'/>
                 <img src={BeatImg} alt='' className=' w-36'/>
                <img src={PuncImg} alt='' className=' w-36'/>
                <img src={AwaImg} alt='' className=' w-36'/>
                <img src={TribaImg} alt='' className=' w-36'/>
                <img src={InclusionaImg} alt='' className=' w-36'/>
                <img src={PotImg} alt='' className=' w-36'/>
                <img src={BuncImg} alt='' className=' w-36'/>
                <img src={MarinImg} alt='' className=' w-36'/>
              </div>
                </marquee>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default MediaPartners