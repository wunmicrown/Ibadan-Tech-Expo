import React from 'react';

const VenueInfo=()=> {
  return (
    <>
      <div className='w-[100%]border border-red-500 mt-16'>
        <div className=' w-[90%] mx-auto h-auto lg:mt-24 bg-gradient-to-r from-yellow-500 via-blue-400 to-blue-600 text-center text-white font-bold rounded md:px-1'>
          <h1 className='font-extrabold text-4xl md:text-6xl lg:text-7xl '>Venue:</h1>
          <p className='text-xl md:text-![10px] lg:text-4xl'>The International Conference Center, Agbowo, Ibadan.</p>
          <div className='mt-10'>
            <h1 className='font-extrabold text-4xl md:text-6xl lg:text-7xl'>Date:</h1>
            <p className='text-xl md:text-3xl lg:text-4xl'>Saturday, September 9th, 2023.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default VenueInfo;
