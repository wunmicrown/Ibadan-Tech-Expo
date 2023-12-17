import React from 'react'
import VenueImg from '../assets/image-folder/Venue.png'
import LineImg from '../assets/image-folder/line-venue.png'
const ConferenceCenter = () => {
    return (
        <>
            <div className='pt-2 lg:pt-12 w-[100%]'>
                <div className=' overflow-hidden relative w-[90%] mx-auto'>
                    <div className=' flex transition-transform ease-out duration-500 transform translate-x-0'>
                        <img src={VenueImg} alt="" className='min-w[100%] min-h-[250px] object-cover rounded-lg h-[100%] w-[100%]' />
                    </div>
                    <div className='text-xl tracking-tighter absolute top-[23%] left-1.5 inset-0 md:leading-8 md:text-4xl md:top-8 md:left-20 text-white'>
                        <h2 className='font-bold md:py-4'>International Conference Center</h2>
                        <h2 className='font-bold'>University Of Ibadan (ICC)</h2>
                    </div>
                    <div className=' absolute inset-0 flex items-center justify-between p-4'>
                        <div className=' invisible md:visible h-full lg:pl-10 relative'>
                            <div className="-rotate-90 text-white">
                                <span className=' absolute -left-14 bottom-0 text-lg'>Venue</span>
                            </div>
                            <img src={LineImg} alt="" className=' h-full w-0.5' />
                            <div className="rotate-90 text-white">
                                <span className="absolute text-lg -left-4">*</span>
                            </div> 
                        </div>

                        <div className=' h-full lg:pl-10 relative'>
                            <div className="-rotate-90 text-white">
                                <span className="absolute text-lg -left-4">*</span>
                            </div>
                            <img src={LineImg} alt="" className=' h-full w-0.5' />
                            <div className="rotate-90 text-white">
                                <span className=' absolute -left-14 bottom-0 text-lg'>Venue</span>
                            </div> 
                        </div>
            
                    </div>  
                </div>
            </div>

            <section className='flex justify-between pt-16 text-blue-900 text-xl items-center border-b-2 border-yellow-500 mx-5'>
                <h1 className='sm:text-4xl lg:text-7xl font-extrabold'>SPEAKERS</h1>
                <p className='text-xs font-medium'>VIEW ALL SPEAKERS</p>
            </section>
        </>
    )
}

export default ConferenceCenter