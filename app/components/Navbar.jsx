import Image from 'next/image'
import { assets } from '@/assets/assets'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from "motion/react"

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
   <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-500
                    ${isDarkMode
      ? isScroll
        ? " text-white    border-cosmic-pink/20"
        : " text-lightHover"
      : isScroll
        ? " text-black  border-gray-200"
        : " text-black"
    }`}>
    <motion.a href="#top" 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cosmic-hover">
        <Image src={isDarkMode? assets.logo_dark : assets.logo} alt='#' className='w-28 cursor-pointer mr-14' />
    </motion.a>
    <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-500
         ${isDarkMode ? isScroll 
           ? "bg-space-black/80 text-white border border-cosmic-pink/30 shadow-cosmic" 
           : "bg-space-black/60 text-lightHover border border-star-gold/30 shadow-cosmic"
        : isScroll
          ? "bg-white shadow-lg border border-gray-200"
          : "bg-white shadow-md border border-gray-100"
      } `}>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a className='font-Ovo cosmic-hover px-4 py-2 rounded-full transition-all duration-300 hover:text-star-gold' href="#top"> Home</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a className='font-Ovo cosmic-hover px-4 py-2 rounded-full transition-all duration-300 hover:text-star-gold' href="#about">About me</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a className='font-Ovo cosmic-hover px-4 py-2 rounded-full transition-all duration-300 hover:text-star-gold' href="#services">Services</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a className='font-Ovo cosmic-hover px-4 py-2 rounded-full transition-all duration-300 hover:text-star-gold' href="#works">My work</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a className='font-Ovo cosmic-hover px-4 py-2 rounded-full transition-all duration-300 hover:text-star-gold' href="#contact">Contact me</a>
        </motion.li>
    </ul>
    <div className='flex items-center gap-4'>
        
        <motion.button 
            onClick={()=>setIsDarkMode(prev=> !prev )}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            className="cosmic-hover p-2 rounded-full"
        >
            <Image  src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
        </motion.button>

        <motion.a 
            href="#contact" 
            className={`hidden md:flex items-center gap-3 px-10 py-2 border rounded-full ml-4 font-Ovo cosmic-hover transition-all duration-300
                ${isDarkMode 
                    ? 'border-cosmic-pink/50 text-cosmic-pink hover:bg-cosmic-pink/10 hover:border-cosmic-pink' 
                    : 'border-gray-500 text-gray-700 hover:bg-gray-100 hover:border-gray-600'
                }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            Contact
            <Image src={isDarkMode ? assets.arrow_icon_dark:assets.arrow_icon}  alt='#' className='w-3'/>
        </motion.a>

        <motion.button 
            className='block md:hidden ml-3 cosmic-hover p-2 rounded-full' 
            onClick={openMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <Image  src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
        </motion.button>
    </div>


    {/* ..............................mobile menu........................ */}
    
    {/* Side Menu */}
      <motion.ul 
       className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 right-0 w-64 h-screen shadow-nebula transition duration-500 ease-in-out z-50 backdrop-blur-xl
        ${isDarkMode? 'bg-space-black/95 text-white border-l border-cosmic-pink/30' : 'bg-white/95 text-black border-l border-gray-200'} ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div 
            className="absolute right-6 top-6 cosmic-hover p-2 rounded-full" 
            onClick={closeMenu}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
        >
            <Image src={isDarkMode ? assets.close_white :assets.close_black} alt=' ' className='w-5 cursor-pointer' />
        </motion.div>

        <motion.li 
            whileHover={{ scale: 1.05, x: -10 }}
            whileTap={{ scale: 0.95 }}
        > 
            <a className='font-Ovo cosmic-hover px-4 py-2 rounded-full transition-all duration-300 hover:text-star-gold' onClick={closeMenu} href="#top"> Home</a> 
        </motion.li>
        <motion.li 
            whileHover={{ scale: 1.05, x: -10 }}
            whileTap={{ scale: 0.95 }}
        > 
            <a className='font-Ovo cosmic-hover px-4 py-2 rounded-full transition-all duration-300 hover:text-star-gold' onClick={closeMenu} href="#about">About me</a> 
        </motion.li>
        <motion.li 
            whileHover={{ scale: 1.05, x: -10 }}
            whileTap={{ scale: 0.95 }}
        > 
            <a className='font-Ovo cosmic-hover px-4 py-2 rounded-full transition-all duration-300 hover:text-star-gold' onClick={closeMenu} href="#services">Services</a> 
        </motion.li>
        <motion.li 
            whileHover={{ scale: 1.05, x: -10 }}
            whileTap={{ scale: 0.95 }}
        > 
            <a className='font-Ovo cosmic-hover px-4 py-2 rounded-full transition-all duration-300 hover:text-star-gold' onClick={closeMenu} href="#works">My work</a> 
        </motion.li>
        <motion.li 
            whileHover={{ scale: 1.05, x: -10 }}
            whileTap={{ scale: 0.95 }}
        > 
            <a className='font-Ovo cosmic-hover px-4 py-2 rounded-full transition-all duration-300 hover:text-star-gold' onClick={closeMenu} href="#contact">Contact me</a> 
        </motion.li>
    </motion.ul>

   </nav>
   </>
  )
}

export default Navbar