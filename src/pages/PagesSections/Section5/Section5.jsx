import React, { useState } from 'react';
import data from '../../../data/data';


const PortfolioButtons = [
    { title: 'all work', },
    { title: 'branding', },
    { title: 'marketing', },
    { title: 'planning', },
    { title: 'research', },
];

const Section5 = () => {
    const [activeButton, setActiveButton] = useState('all work');
    const handleButtonClick = (title) => {
        setActiveButton(title);
    };
    return (
        <section id='portfolio' className='h-full bg-white scroll-m-20'>
            <div className='flex flex-col justify-center items-center pt-10 mx-10 gap-10 mb-10'>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <div className=' border-blue-700 border-2 rounded-full px-8 py-2'>
                        <p className=' text-sm text-blue-700 font-semibold'>
                            Our Portfolio
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h1 className='text-[35px] font-bold capitalize'>
                            Our Recent Works
                        </h1>
                        <p className=' whitespace-normal text-gray-400 text-xs sm:text-sm md:text-base'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                        </p>
                    </div>
                </div>
                <div className=' flex flex-wrap gap-10 mb-10'>
                    {PortfolioButtons.map((b) => (
                        <button
                            className={`text-${activeButton === b.title ? 'blue-700 underline underline-offset-8 decoration-4 -translate-y-2' : 'gray-600  hover:text-blue-700  hover:underline hover:underline-offset-8 hover:decoration-4'} whitespace-nowrap transition-all ease-in-out duration-300 delay-100 uppercase font-extrabold text-sm sm:text-base md:text-lg`}
                            key={b.title}
                            onClick={() => handleButtonClick(b.title)}
                        >
                            {b.title}
                        </button>
                    ))}
                </div>
                <div className=' flex flex-col gap-4 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3'>
                    {data
                        .filter((d) => activeButton === 'all work' || d.category === activeButton)
                        .map((d) => (
                            <div key={d.id} className="relative">
                                <div>
                                    <img
                                        className='rounded-md w-full h-full object-cover relative'
                                        src={d.src} alt={d.id} loading='lazy'
                                    />
                                </div>
                                <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-1'>
                                    <div className="text-black bg-slate-400 shadow-sm shadow-slate-400 rounded-md opacity-0 bg-opacity-25 backdrop-blur-md hover:opacity-100 box-border min-h-full flex flex-col justify-around gap-4 items-center transition-all ease-in-out duration-700 delay-100 px-2 py-2">
                                        <h1 className="font-bold md:text-[20px] sm:text-base text-[15px]">
                                            {d.header}
                                        </h1>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="border bg-blue-700 rounded-full px-2 py-2 w-[40px] md:w-[50px] object-cover">
                                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className=" text-center text-[10px] sm:flex sm:text-xs md:text-xs whitespace-pre-wrap">
                                            {d.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Section5