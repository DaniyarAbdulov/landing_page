import React from 'react';
import "./CustomMiniMenuModule.css"

const CustomMiniMenu = () => {
    const navLinks = [
        { title: 'Home', href: '#home' },
        { title: 'Services', href: '#services' },
        { title: 'Portfolio', href: '#portfolio' },
        { title: 'Pricing', href: '#pricing' },
        { title: 'Team', href: '#team' },
        { title: 'Contact', href: '#contact' },
    ];
    

    return (
        <div className=" flex justify-center md:hidden">
            <div className=' bg-[#155bd5] flex absolute w-[95%] pl-5 slide-down z-10 h-auto mt-5'>
                <div className=''>
                    <div className=' flex flex-col gap-4 pt-[10px] pb-[10px] pr-[16px] pl-[16px]'>
                        {navLinks.map((link) => (
                            <a className=' hover:opacity-100 opacity-70'
                                key={link.title}
                                href={link.href}
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CustomMiniMenu;
