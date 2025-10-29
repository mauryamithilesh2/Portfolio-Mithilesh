import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from "motion/react"
import { useParallax } from '../hooks/useScrollAnimation'
function About({ isDarkMode }) {
    const parallaxOffset = useParallax(0.3)
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            id='about' className='w-full px-[12%] py-10 scroll-mt-20 relative'
        >
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`text-center mb-2 text-5xl font-Ovo ${
                    isDarkMode ? 'cosmic-text' : ''
                }`}>About me</motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-64 sm:w-80 rounded-3xl max-w-none relative'
                    style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
                >
                    <Image src={assets.user_image} alt='user' className='w-full rounded-3xl cosmic-hover' />
                    {/* Cosmic glow effect */}
                    {isDarkMode && (
                        <motion.div
                            className="absolute inset-0 rounded-3xl shadow-cosmic"
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(251, 191, 36, 0.3)',
                                    '0 0 40px rgba(236, 72, 153, 0.4)',
                                    '0 0 20px rgba(251, 191, 36, 0.3)'
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                    )}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex-1">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className='mb-10 max-w-2xl font-Ovo'>
                        Experienced in full-stack web development, I specialize in Django, REST APIs, PostgreSQL,
                        and React, with practical knowledge of Postman API testing and machine learning. I have built
                        scalable, secure, and interactive web applications, including dynamic dashboards, authentication
                        systems, and real-time data features. My work emphasizes creating efficient,
                        user-friendly, and innovative software solutions using modern web and AI technologies.
                    </motion.p>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0. }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ 
                                    scale: 1.05,
                                    y: -5,
                                    boxShadow: isDarkMode ? '0 10px 30px rgba(251, 191, 36, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.1)'
                                }}
                                key={index} className={`border-[0.5px] rounded-xl p-6 cursor-pointer cosmic-hover transition-all duration-500
                                    ${isDarkMode 
                                        ? 'border-cosmic-pink/30 hover:border-cosmic-pink hover:bg-cosmic-pink/5' 
                                        : 'border-gray-400 hover:border-gray-600 hover:bg-gray-50'
                                    }`}>
                                <motion.div
                                    whileHover={{ rotate: 10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                                </motion.div>
                                <h3 className={`my-4 font-semibold ${
                                    isDarkMode ? "text-white" : "text-black"
                                }`}>{title}</h3>
                                <p className={`my-4 font-semibold ${
                                    isDarkMode ? "text-gray-300" : "text-gray-600"
                                }`}>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.h4
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.6 }}
                        className={`my-6  font-Ovo ${isDarkMode ? "text-white" : "text-black"
                            }`}>Tools I use</motion.h4>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.6 }}
                        className="flex items-center gap-3 sm:gap-5">
                        {toolsData.map((tool, index) => (
                            <motion.li
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{ 
                                    scale: 1.2,
                                    rotate: 5,
                                    boxShadow: isDarkMode ? '0 5px 20px rgba(251, 191, 36, 0.4)' : '0 5px 20px rgba(0, 0, 0, 0.2)'
                                }}
                                className={`flex items-center justify-center w-12 sm:w-14 aspect-square rounded-lg cosmic-hover transition-all duration-300 ${
                                    isDarkMode 
                                        ? 'border border-cosmic-pink/30 hover:border-cosmic-pink bg-cosmic-pink/5' 
                                        : 'border border-gray-400 hover:border-gray-600 bg-gray-50'
                                }`} 
                                key={index}
                            >
                                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>

        </motion.div>
    )
}

export default About