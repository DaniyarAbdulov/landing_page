import React from 'react'

const Section1 = () => {
    return (
        <section id='home' className='h-full bg-[#155bd5]  scroll-m-20 '>
            <div className='flex flex-col mx-10 md:flex-row md:mx-10 md:justify-center lg:items-center gap-10 pt-10 md:pt-[px] md:pb-[80px]'>
                <div className='text-white flex flex-col md:mr-5 list-inside justify-around'>
                    <h1 className='text-[35px] capitalize whitespace-normal'>
                        Corporate & Business Site Template By Ayro UI.
                    </h1>
                    <p className='mt-[30px] whitespace-pre-wrap'>
                        We are a digital agency that helps brands to achieve their business outcomes. We see technology as a tool to create amazing things.
                    </p>
                    <div className='flex flex-row gap-5 mt-10'>
                        <div className=' uppercase rounded bg-white text-[#155bd5] px-4 py-2 hover:scale-105'>
                            <button className=''>
                                Get Started
                            </button>
                        </div>

                        <div className=' flex flex-row items-center gap-3'>
                            <div className=' rounded-full bg-white px-2 py-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-[#155bd5]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                </svg>

                            </div>
                            <p className=' font-bold'>
                                Watch Intro
                            </p>

                        </div>
                    </div>
                </div>
                <div>
                </div>
                <div className='mb-10 md:mb-0'>
                    <img src='hero-image.jpg' alt='Hero' className='rounded-3xl w-full h-full object-cover' />
                </div>
            </div>
        </section>
    )
}

export default Section1