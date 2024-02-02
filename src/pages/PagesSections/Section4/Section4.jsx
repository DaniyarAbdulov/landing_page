import React from 'react'

const Section4 = () => {
    return (
        <section id='video' className='h-full bg-[#eae9e9] scroll-m-20'>
            <div className='flex flex-col justify-center items-center pt-10 mx-10 gap-10'>
                <div className=' flex flex-col gap-2 items-center justify-center'>
                    <div className=' border-blue-700 border-2 rounded-full px-8 py-2'>
                        <p className=' text-sm text-blue-700 font-semibold'>
                            Our Intro Video
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h1 className='text-[35px] font-bold capitalize'>
                            Watch Our Promo Video
                        </h1>
                        <p className=' whitespace-normal text-gray-400 text-xs sm:text-sm md:text-base'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                        </p>
                    </div>
                </div>
                <div className='aspect-auto mb-10'>
                    <iframe
                        className=' w-96 h-96 md:w-[776px] md:h-[388px] lg:w-[876px] lg:h-[488px]'
                        src="https://www.youtube.com/embed/Pelrr__9qx8?si=MWPRRUs9J7AVlT1y"
                        title="YouTube video player"
                        frameborder="10"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                        loading='lazy'
                    >
                    </iframe>
                </div>
            </div>
        </section>
    )
}

export default Section4;