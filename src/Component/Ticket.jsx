import React from 'react';
import TicketCard from '../assets/image-folder/ticket.svg';

const Ticket = () => {
  return (
    <>
      <section className='flex justify-between pt-3 font-bold text-blue-900 items-center border-b-2 border-yellow-500 mx-3'>
        <h1 className='text-7xl md:text-center lg:text-start sm:text-start'>Tickets</h1>
      </section>
      <div className='flex flex-col md:flex-row mt-[3em]'>
        <div className='md:w-1/2 p-4'>
          <p className='md:w-full lg:w-2/3 xl:w-1/2 text-lg md:text-[18px]  lg:text-2xl ticket-para'>
            Secure your preferred ticket now and immerse yourself in the world of tech innovation, networking with industry experts, and the chance to win exciting tech gadgets.
          </p>
        </div>
        <div className='md:w-1/2 p-4'>
          <img src={TicketCard} alt='ticket-img' className='w-full md:w-4/5 lg:w-3/4 xl:w-4/5 mx-auto' />
        </div>
      </div>
      <div className='prices mx-auto text-center mt-7'>
  <span className='prices-span text-center ml-7 sm:ml-0 text-blue-800 lg:text-6xl sm:text-4xl md:text-2xl font-bold'>Ticket prices that suit every tech enthusiast</span>
</div>


    </>
  );
};

export default Ticket;
