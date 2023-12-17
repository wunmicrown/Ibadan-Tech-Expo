import React from 'react'
import TechgdcImg from '../assets/image-folder/techgdc.jpg';
import WdefImg from '../assets/image-folder/wdef.jpg';
import AmazingImg from '../assets/image-folder/amazing.jpg';
import PolyImg from '../assets/image-folder/poly.jpg';
import FigImg from '../assets/image-folder/fig.jpg';
import TabImg from '../assets/image-folder/tab.jpg';
const CommunityPartners = () => {
  return (
    <>
     <div className='sponsors'>
        <div  className="p-20 ">
        <h1 className=' font-extrabold text-blue-800  sm:text-![35px] md:text-![35px] lg:text-[35px]'>Community Partners</h1>
        </div>
        <div className='marquee-container overflow-hidden'>
          <div className=' flex'>
          <div className=' flex'>
                <marquee behavior="slow" direction="left">
                <div className='mediaPartners mt-10 flex gap-8'>
                <img src={TechgdcImg} alt='' className=' w-36'/>
                <img src={WdefImg} alt='' className=' w-36'/>
                <img src={AmazingImg} alt='' className=' w-36'/>
                <img src={PolyImg} alt='' className=' w-36'/>
                <img src={FigImg} alt='' className=' w-36'/>
                <img src={TabImg} alt='' className=' w-36'/>
                <img src={TechgdcImg} alt='' className=' w-36'/>
                <img src={WdefImg} alt='' className=' w-36'/>
                <img src={AmazingImg} alt='' className=' w-36'/>
                <img src={PolyImg} alt='' className=' w-36'/>
                <img src={FigImg} alt='' className=' w-36'/>
              </div>
                </marquee>
            </div>
          <div className=' flex'>
                <marquee behavior="slow" direction="left">
                <div className='mediaPartners mt-10 flex gap-8'>
                <img src={TechgdcImg} alt='' className=' w-36'/>
                <img src={WdefImg} alt='' className=' w-36'/>
                <img src={AmazingImg} alt='' className=' w-36'/>
                <img src={PolyImg} alt='' className=' w-36'/>
                <img src={FigImg} alt='' className=' w-36'/>
                <img src={TabImg} alt='' className=' w-36'/>
                <img src={TechgdcImg} alt='' className=' w-36'/>
                <img src={WdefImg} alt='' className=' w-36'/>
                <img src={AmazingImg} alt='' className=' w-36'/>
                <img src={PolyImg} alt='' className=' w-36'/>
                <img src={FigImg} alt='' className=' w-36'/>
              </div>
                </marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommunityPartners
