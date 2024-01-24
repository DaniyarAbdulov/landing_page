import React, { useState } from 'react';

const Section2 = () => {
    const buttons = [
        {
            title: 'Who We Are', text: 'Text accodring to the first button. Lorem ipsum, dolor sit amet consectetur adipisicing elit. '
        },
        { title: 'Our Vision', text: 'Text accodring to the second button. Lorem ipsum, dolor sit amet consectetur adipisicing elit. ' },
        { title: 'Our History', text: 'Text accodring to the third button. Lorem ipsum, dolor sit amet consectetur adipisicing elit. ' },
    ];

    const [activeButton, setActiveButton] = useState('Who We Are');

    const handleButtonClick = (title) => {
        setActiveButton(title);
    };

    return (
        <section id='our story' className='h-full bg-[#fff] scroll-m-20'>
            <div className='flex flex-col mx-10 md:flex-row md:mx-10 md:justify-center lg:items-center md:gap-10 pt-10 md:pt-[px] md:pb-[80px]'>
                <div className=' mb-10 md:mb-0'>
                    <img src="about-img1.jpg" alt="about" className='rounded-3xl w-full h-full object-cover' />
                </div>
                <div className='text-black flex flex-col md:mr-5 list-inside justify-center gap-5'>
                    <div className='flex flex-row items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                        </svg>
                        <h1 className='capitalize whitespace-pre-wrap text-xl font-bold'>
                            <p>our story</p>
                        </h1>
                    </div>
                    <div className='flex flex-col md:mr-5 list-inside justify-around'>
                        <h1 className='text-[30px] whitespace-break-spaces'>
                            Our team comes with the experience and knowledge
                        </h1>
                    </div>
                    <div className='bg-gray-200 rounded px-2 py-2 justify-center'>
                        <div className='flex flex-col md:flex-row gap-5 justify-center'>
                            {buttons.map((b) => (
                                <div clas>
                                    <button
                                    key={b.title}
                                    className={`bg-${activeButton === b.title ? '[#155bd5] transition duration-700' : 'white'} text-${activeButton === b.title ? 'white' : 'black'} hover:${activeButton === b.title ? '' : 'text-[#155bd5]'} rounded-sm px-2 py-2`}
                                    onClick={() => handleButtonClick(b.title)}
                                >
                                    {b.title}
                                </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        {buttons.map((t) => (
                            <div key={t.title} className={`${activeButton === t.title ? 'flex' : 'hidden'}`}>
                                <p>{t.text}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Section2;
