import React from 'react'
import TwitterIconImg from '../assets/image-folder/tit.svg'
import FacebookIconImg from '../assets/image-folder/face.svg'
import LinkdinIconImg from '../assets/image-folder/link.svg'
const Footer = () => {
  return (
    <>
      <footer className=' bg-blue-950 mt-14'>
        <div className='container mx-auto py-4 font-bold'>
          <div className='flex flex-col gap-y-5 lg:flex-row lg:justify-between items-center'>
            <div className='flex flex-col md:flex-row gap-x-6'>
              <h1 className='md:text-[20px] text-white font-bold pb-2'>Follow us on</h1>
              <div className='flex items-center gap-x-5 cursor-pointer'>
               <a href="#">
                <img src={TwitterIconImg} alt="" className='w-5 md:w-6'/>
               </a>
               <a href="#">
                <img src={FacebookIconImg} alt="" className='w-5 md:w-6'/>
               </a>
               <a href="#">
                <img src={LinkdinIconImg} alt="" className='w-5 md:w-6'/>
               </a>
              </div>

            </div>
            <ul className='flex gap-y-3 gap-x-5  md:flow-row md:gap-x-16 items-center'>
              <li className='text-white md:text-[20px] font-normal capitalize'>
                <a href="#">speakers</a>
              </li>
              <li className='text-white md:text-[20px] font-normal capitalize'>
                <a href="#">contact</a>
              </li>
              <li className='text-white md:text-[20px] font-normal capitalize'>
                <a href="#">venue</a>
              </li>
              <li className='text-white md:text-[20px] font-normal capitalize'>
                <a href="#">partners</a>
              </li>
              
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer