import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"

function Header({ isDarkMode }) {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 relative'>
      {/* Cosmic Ring around profile */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className={`w-48 h-48 rounded-full border-2 ${
            isDarkMode 
              ? 'border-cosmic-pink/30' 
              : 'border-gray-300'
          }`}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className={`w-40 h-40 rounded-full border ${
              isDarkMode 
                ? 'border-star-gold/40' 
                : 'border-gray-400'
            }`}
            style={{ margin: '16px' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        className="relative z-10"
      >
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image src={assets.profile_img} alt='' className='rounded-full w-32 cosmic-pulse' />
          {/* Glow effect */}
          <motion.div
            className={`absolute inset-0 rounded-full ${
              isDarkMode 
                ? 'shadow-cosmic' 
                : 'shadow-lg'
            }`}
            animate={{
              boxShadow: isDarkMode 
                ? ['0 0 20px rgba(251, 191, 36, 0.3)', '0 0 40px rgba(251, 191, 36, 0.6)', '0 0 20px rgba(251, 191, 36, 0.3)']
                : ['0 0 20px rgba(0, 0, 0, 0.1)', '0 0 30px rgba(0, 0, 0, 0.2)', '0 0 20px rgba(0, 0, 0, 0.1)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
      <motion.h3 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo cosmic-hover'
      > 
        Hi! I'm Mithilesh maurya 
        <motion.div
          whileHover={{ rotate: 20, scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <Image src={assets.hand_icon} alt='' className='w-6' />
        </motion.div>
      </motion.h3>

      <motion.h1 
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`text-3xl sm:text-6xl lg:text-[66px] font-Ovo ${
          isDarkMode ? 'cosmic-text' : ''
        }`}
      >
        Software developer
      </motion.h1>

      <motion.p
        initial={{opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo text-lg"
      > 
        Entry-Level Software Developer | Django • REST APIs • PostgreSQL • React • Postman • Machine Learning
      </motion.p>

      <div className='flex flex-col sm:flex-row items-center gap-6 mt-8'>
        <motion.a 
          initial={{y:30,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:0.6,delay:1}}
          href="#contact"
          className={`px-10 py-4 border rounded-full flex items-center gap-3 font-Ovo cosmic-hover transition-all duration-300 ${
            isDarkMode 
              ? 'border-cosmic-pink bg-cosmic-pink/10 text-cosmic-pink hover:bg-cosmic-pink hover:text-white' 
              : 'border-gray-600 bg-gray-900 text-white hover:bg-gray-800'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact me 
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={assets.right_arrow_white} alt='' className='w-4' />
          </motion.div>
        </motion.a>

        <motion.a
          initial={{y:30,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:0.6,delay:1.2}}
          href="/Mithilesh_Maurya_Resume.pdf" download
          className={`px-10 py-4 border rounded-full flex items-center gap-3 font-Ovo cosmic-hover transition-all duration-300 ${
            isDarkMode 
              ? 'border-star-gold bg-star-gold/10 text-star-gold hover:bg-star-gold hover:text-black' 
              : 'border-gray-500 bg-white text-gray-700 hover:bg-gray-100'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          My Resume 
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={assets.download_icon} alt='' className='w-4' />
          </motion.div>
        </motion.a>
      </div>

      {/* Floating Tech Icons */}
      <motion.div
        className="absolute top-20 left-10 opacity-20"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-cosmic-pink' : 'bg-gray-400'} flex items-center justify-center`}>
          <span className="text-xs">⚛</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-32 right-16 opacity-20"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-aurora-green' : 'bg-gray-400'} flex items-center justify-center`}>
          <span className="text-xs">🐍</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-20 opacity-20"
        animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-star-gold' : 'bg-gray-400'} flex items-center justify-center`}>
          <span className="text-xs">⚡</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Header