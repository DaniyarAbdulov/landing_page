import React from 'react'

const pricesList = [
    {
        title: 'Starter',
        text: 'Lorem Ipsum is simply dummy text of the printing and industry.',
        price: '0',
        buttonTitle: 'Start Free Trial',
        active: false,
        goods: {
            item1: 'Cras justo odio.',
            item2: 'Dapibus ac facilisis in.',
            item3: 'Morbi leo risus.',
            item4: 'Excepteur sint occaecat velit.',
        }
    },
    {
        title: 'Exclusive',
        text: 'Lorem Ipsum is simply dummy text of the printing and industry.',
        price: '99',
        buttonTitle: 'Start Free Trial',
        active: true,
        goods: {
            item1: 'Cras justo odio.',
            item2: 'Dapibus ac facilisis in.',
            item3: 'Morbi leo risus.',
            item4: 'Excepteur sint occaecat velit.',
        }
    },
    {
        title: 'Premium',
        text: 'Lorem Ipsum is simply dummy text of the printing and industry.',
        price: '150',
        buttonTitle: 'Start Free Trial',
        active: false,
        goods: {
            item1: 'Cras justo odio.',
            item2: 'Dapibus ac facilisis in.',
            item3: 'Morbi leo risus.',
            item4: 'Excepteur sint occaecat velit.',
        }
    },
];

const Section6 = () => {
    return (
        <section id='pricing' className='h-full bg-[#eae9e9] scroll-m-20'>
            <div className='flex flex-col justify-center items-center pt-10 mx-10 gap-10 mb-10'>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <div className=' border-blue-700 border-2 rounded-full px-8 py-2'>
                        <p className=' text-sm text-blue-700 font-semibold'>
                            Pricing
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h1 className='text-[35px] font-bold capitalize'>
                            Pricing & Plans
                        </h1>
                        <p className=' whitespace-normal text-gray-400 text-xs sm:text-sm md:text-base'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col md:flex md:flex-row justify-center items-center w-full gap-8 mb-10'>
                    {pricesList.map((p) => (
                        <div className={`${p.active === true ? 'hover:scale-110 hover:-translate-y-3 duration-300' : 'hover:scale-110 hover:-translate-y-3  duration-300'} `}>
                            <div className={`rounded-lg  bg-white px-2 py-2 hover:shadow-2xl shadow-gray-300`}>
                                <div className='flex flex-col gap-2 items-center justify-center px-4 py-4'>
                                    <div className=' border-blue-700 border-2 rounded-full px-8 py-2'>
                                        <p className=' text-sm text-blue-700 font-semibold'>
                                            {p.title}
                                        </p>
                                    </div>
                                    <div className='flex flex-col justify-center items-center gap-5'>
                                        <p className=' text-gray-400 text-[10px] sm:flex sm:text-xs md:text-xs whitespace-pre-wrap'>
                                            {p.text}
                                        </p>
                                        <h1 className='text-[35px] font-bold capitalize flex flex-row'>
                                            <p className=' text-sm text-gray-400'>
                                                $
                                            </p>
                                            {p.price}
                                            <p className=' text-sm self-end text-gray-400'>
                                                /mo
                                            </p>
                                        </h1>
                                        <button className={` bg-${p.active === true ? '[#155bd5] text-white hover:bg-white hover:border-blue-700 hover:text-blue-700 duration-300' : ' hover:bg-[#155bd5] hover:text-white duration-300'} px-2 py-2  border rounded-md border-blue-700 text-blue-700 uppercase font-bold`}>
                                            {p.buttonTitle}
                                        </button>
                                        <ul className='list-disc'>
                                            {Object.values(p.goods).map((item, index) => (
                                                <li
                                                    className=' text-gray-400 text-[10px] sm:text-xs md:text-xs whitespace-pre-wrap'
                                                    key={index}>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Section6;