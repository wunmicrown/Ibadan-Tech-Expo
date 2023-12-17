import React from 'react'

const TicketStandard = () => {
    return (
        <>
            <div className='Priceses-col-1'>
                <div className="prices-box-1">
                    <span className='mark-zuck'>MARK ZUCKERBERG</span>
                    <h1 className='reg-ticket'>
                        Regular
                        <br />
                        Ticket
                    </h1>
                    <p className='prices-span-full-access text-xs font-bold'>
                        🎟️ Full Access to Live Events. Gain entry to all the
                        <br />
                        exciting live events
                    </p>
                    <p className='prices-networking-opp text-xs font-bold'>
                        🤝 Networking Opportunities, Connect with like-
                        <br />
                        minded individuals, industry experts, and tech
                        enthusiasts.
                    </p>
                    <p className='.prices-exciting-gifts text-xs font-bold'>
                        🎁 Exciting Gifts, As a token of our appreciation,
                        <br />
                        you'll receive special gifts exclusive to 'Mark
                        <br />
                        Zuckerberg' Basic Ticket holders
                    </p>
                    <article className='price-btn-mark-zuck'>
                        <span className='price-btn-mark-zuck font-extrabold text-2xl'>N1000</span>
                    </article>
                </div>
                <div className="prices-box-2">
                    <span className='text-lg text-blue-950'>ELON MUSK</span>
                    <h1 className='font-extrabold text-2xl mb-[2em] text-blue-950'>
                        VIP
                        <br />
                        Ticket
                    </h1>
                    <p className=' text-center text-[13px] mb-[2em] text-blue-900'>
                        🌟 You get exclusive access to all areas of the Ibadan Tech Expo. Enjoy priority entry, ensuring you never miss a moment of the action and have the freedom to explore at your own pace.
                    </p>
                    <p className=' text-center text-[13px] mb-[2em] text-blue-900'>
                        🪑 A Priority Seat, in the front rows with reserved seating at keynote speeches, panel discussions, and other main stage events. Get up close and personal with industry visionaries and thought leaders.
                    </p>
                    <p className=' text-center text-[13px] mb-[2em] text-blue-900'>
                        🎁 Enjoy a range of Premium Perks exclusively available to 'Elon Musk' VIP Ticket holders. These perks may include special merchandise, exclusive
                        access to private events, and personalized assistance from our dedicated concierge team.
                    </p>
                    <p className=' text-center text-[13px] mb-[2em] text-blue-900'>
                        🍾 Relax and recharge in the VIP lounge, a luxurious haven designed for networking and relaxation.
                    </p>
                    <article className='price-btn-elon-musk'>
                    <span className='font-extrabold text-3xl mt-[10px] text-blue-900'>N20000</span>
                    <button className=' rounded-2xl bg-blue-900 p-[10px] px-[20px] text-white cursor-pointer'>Get Ticket</button>
                    </article>
                </div>
                <div className="prices-box-3 ">
                    <span className='text-[12px] font-semibold'>JEFF BEZOS</span>
                    <h3 className='font-extrabold text-3xl mb[1em]'>
                    Standard
                    <br />
                    Ticket
                    </h3>
                    <p className='font-bold text-xs text-[.75rem]'>
                    🌟 Enhanced Access, Enjoy priority entry to all areas of the Ibadan Tech Expo. Skip the lines and make the most of your time exploring the event to its fullest.
                    </p>
                    <p className='font-bold text-xs text-[.75rem] mt-10'>
                    📚 Exclusive Workshops, Participate in specialized workshops conducted by industry experts. Gain valuable insights, learn advanced techniques, opportunity to get qualify for a Tech Scholarship into Larva Academy
                    </p>
                    <p className='font-bold text-xs text-[.75rem] mt-10'>
                    🎁 Exciting Gifts, you'll receive special gifts exclusive to 'Jeff Bezos' Standard Ticket holders. These exciting gifts are carefully curated to further enhance your tech experience and provide you with valuable tech-related items.
                    </p>
                    <article className='price-btn-elon-musk mt-25'>
                    <span className='font-extrabold text-3xl mt-[10px]'>N5000</span>
                    <button className=' rounded-2xl bg-yellow-500 p-[10px] px-[20px]cursor-pointer'>Get Ticket</button>
                    </article>
                </div>
            </div>
        </>
    )
}

export default TicketStandard