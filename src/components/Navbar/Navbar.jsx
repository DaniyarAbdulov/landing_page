import React, { useState } from 'react';
import CustomMenuBig from './CustomBigMenu/CustomMenuBig';
import { NavLink } from 'react-router-dom';
import CustomMiniMenu from './CustomMiniMenu/CustomMiniMenu';



const Navbar = () => {
  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'Services', href: '#services' },
    { title: 'Portfolio', href: '#portfolio' },
    { title: 'Pricing', href: '#pricing' },
    { title: 'Team', href: '#team' },
    { title: 'Contact', href: '#contact' },
  ];

  const [activeLink, setActiveLink] = useState('#home');
  const [menu, setMenu] = useState(false);
  const [miniMenu, setMiniMenu] = useState(false);

  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  return (
    <nav className=' w-full h-full bg-[#155bd5]  text-white pt-9 pb-9 sticky top-0'>
      <div className='flex flex-row justify-center md:justify-evenly  gap-20 mx-10 md:gap-10'>
        <div className='flex flex-row gap-16'>
          <div>
            <NavLink className="  font-serif text-2xl" to="/">
              Logo!
            </NavLink>
          </div>
          <div>
            <ul className='hidden md:flex md:flex-row md:gap-10 text-[17px]'>
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className={activeLink === link.href ? 'text-white font-bold' : 'text-gray-300'}
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.title}
                </a>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div>
            <button className='hover:bg-white hover:text-[#155bd5] rounded-xl hidden md:flex' onClick={() => setMenu((prev) => !prev)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
              </svg>
            </button>
          </div>
          <div>
            <button className='hover:bg-white hover:text-[#155bd5] rounded-xl flex md:hidden' onClick={() => setMiniMenu((prev) => !prev)} >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
              </svg>
            </button>
          </div>
        </div>

      </div>
      {menu && <CustomMenuBig setMenu={setMenu} />}
      {miniMenu && <CustomMiniMenu />}
    </nav>
  );
};

export default Navbar;
