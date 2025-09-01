import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from "motion/react"
function About({ isDarkMode }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            id='about' className='w-full px-[12%] py-10 scroll-mt-20'
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
                className='text-center mb-2 text-5xl font-Ovo'>About me</motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
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
                                whileHover={{ scale: 1.05 }}

                                key={index} className={`border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                          hover:-translate-y-1 transition-all duration-500 hover:shadow-black
                         dark:border-white  dark:shadow-white  ${isDarkMode ? 'dark:hover:bg-darkHover' : 'hover:bg-lightHover'} `}>
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                                <h3 className={`my-4 font-semibold ${isDarkMode ? "text-white" : "text-black"
                                    }`}>{title}</h3>
                                <p className={`my-4 font-semibold ${isDarkMode ? "text-white" : "text-black"
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
                                whileHover={{ scale: 1.1 }}
                                className='flex items-center justify-center w-12 sm:w-14 
                        aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 ' key={index}>
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