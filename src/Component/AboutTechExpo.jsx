import React from 'react'
import ibdTechImg from '../assets/image-folder/about-ibd-tech.svg'
import posterImg from '../assets/image-folder/Poster.svg'
const AboutTechExpo = () => {
    return (
        <>
            <section className=''>
                <div className=' mx-auto font-primary container mt-[90px] md:mt[160px] lg:[150px] mb-10'>
                    <div className='flex flex-col md:flex-row items-center mx-3'>
                       <div className=' w-full'>
                            <img src={ibdTechImg} alt="ibdTechImg" className='border-b-2 border-yellow-500 relative w-full mb-5 md:mb-0'/>
                            <p className='text-[15px] lg:text-[18px] text-blue-700 font-medium lg:w-[600px] leading-5 md:my-6'>Welcome to Ibadan Tech Expo - a dynamic and vibrant gathering that celebrates the world of technology and innovation in Ibadan, Nigeria's largest city by landmass. The Ibadan Tech Expo aims to create an inclusive and engaging environment that brings together a diverse community of tech enthusiasts, professionals, and stakeholders. Whether you're a seasoned industry veteran or a newcomer looking to explore the exciting possibilities of the tech scene, this event is tailor-made for you.</p>
                        </div> 
                        <div>
                            <img src={posterImg} alt="" className=' w-[1728px] md:h-[734px] md:top-[1127px] mt-5'/>
                        </div>
                    </div>
                </div>
            </section>

        </>


    )
}

export default AboutTechExpo