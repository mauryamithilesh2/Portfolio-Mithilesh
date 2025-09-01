import Image from 'next/image'
import { assets } from '@/assets/assets'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode , setIsDarkMode})=> {

    const[isScroll,setIsScroll]=useState(false)
    const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

useEffect(()=>{
    window.addEventListener('scroll',()=>{
        if(scrollY > 50)
        {
            setIsScroll(true)
        }
        else{
            setIsScroll(false)
        }
    })
})

  return (
   <>
   {/* for background image */}
   <div className="fixed top-0 right-0 w-11/12  -z-10 translate-y-[-80%]  dark:hidden">
    <Image src={assets.header_bg_color} alt='' className='w-full' />
   </div>
   <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
                    ${isDarkMode
      ? isScroll
        ? "bg-darkTheme/90 text-white shadow-white/10 backdrop-blur-lg"
        : "bg-darkTheme text-lightHover"
      : isScroll
        ? "bg-white/50 text-black shadow-sm backdrop-blur-lg"
        : " text-black"
    }`}>
    <a href="#top" >
        <Image src={isDarkMode? assets.logo_dark : assets.logo} alt='#' className='w-28 cursor-pointer mr-14' />
    </a>
    <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full  text-black px-12 py-3
         ${isDarkMode ? isScroll ? "bg-darkTheme/100  text-white ": "bg-darkTheme text-white border border-white"
        : isScroll
          ? "bg-white/50 shadow-sm"
          : "bg-white shadow-sm"
      } `}>
        <li> <a className='font-Ovo' href="#top"> Home</a> </li>
        <li> <a className='font-Ovo' href="#about">About me</a> </li>
        <li> <a className='font-Ovo' href="#services">Services</a> </li>
        <li> <a className='font-Ovo' href="#works">My work</a> </li>
        <li> <a className='font-Ovo' href="#contact">Contact me</a> </li>
    </ul>
    <div className='flex items-center gap-4'>
        
        <button onClick={()=>setIsDarkMode(prev=> !prev )}>
            <Image  src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
        </button>

        <a href="#contact" className='hidden md:flex items-center gap-3 px-10 py-2 border  border-gray-500 rounded-full ml-4 font-Ovo 
        dark:border-white/50' >Contact
         <Image src={isDarkMode ? assets.arrow_icon_dark:assets.arrow_icon}  alt='#' className='w-3'/></a>

        <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image  src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
        </button>
    </div>


    {/* ..............................mobile menu........................ */}
    
    {/* Side Menu */}
      <ul 
       className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 right-0 w-64 h-screen bg-lightHover  shadow-lg transition duration-500 ease-in-out z-50 
        ${isDarkMode? 'dark:bg-darkHover' : 'dark:bg-lightHover'} dark:text-white ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
<div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white :assets.close_black} alt=' ' className='w-5 cursor-pointer' />
        </div>

        <li> <a className='font-Ovo' onClick={closeMenu} href="#top"> Home</a> </li>
        <li> <a className='font-Ovo' onClick={closeMenu} href="#about">About me</a> </li>
        <li> <a className='font-Ovo' onClick={closeMenu} href="#services">Services</a> </li>
        <li> <a className='font-Ovo' onClick={closeMenu} href="#works">My work</a> </li>
        <li> <a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a> </li>
    </ul>

   </nav>
   </>
  )
}

export default Navbar