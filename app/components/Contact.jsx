import React, { useState } from 'react'
import Image from 'next/image'
import { assets, } from '@/assets/assets'
import { motion } from "motion/react"

function Contact({ isDarkMode }) {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ffa01c3b-4b7e-495a-9c9a-0ac5d301e980");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='contact' className={`w-full px-[12%] py-10 scroll-mt-20
                bg-[url('/footer-bg-color.png')] 
                bg-no-repeat bg-center bg-[length:90%_auto] ${isDarkMode ? 'bg-none' : ''}`}>
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'>Connect with me </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center mb-2 text-5xl font-Ovo'>Get in touch</motion.h2>

      {/* <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'm Full stack developer i have built many project on django react ,django rest api
      </motion.p> */}

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5}}
        onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
          initial={{ x:-50, opacity: 0 }}
                whileInView={{x:0, opacity: 1}}
                transition={{ duration: 0.6, delay: 1.1 }}
          type="text" placeholder='Enter your Name ' required name='name'
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 placeholder-gray-400 rounded-md bg-white hover:shadow-black cursor-pointer
                 hover:bg-lightHover  duration-500 ${isDarkMode ? 'bg-darkTheme hover:bg-darkHover' : 'hover:bg-lightHover'} `} />
          <motion.input
          initial={{ x:50, opacity: 0 }}
                whileInView={{x:0, opacity: 1}}
                transition={{ duration: 0.6, delay: 1.2 }}
          type="text" placeholder='Enter your email ' required name='email'
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 placeholder-gray-400 rounded-md bg-white hover:shadow-black cursor-pointer
                 hover:bg-lightHover  duration-500 ${isDarkMode ? 'bg-darkTheme hover:bg-darkHover' : 'hover:bg-lightHover'} `} />
        </div>
        <motion.textarea
        initial={{ y:100, opacity: 0 }}
                whileInView={{y:0, opacity: 1}}
                transition={{ duration: 0.6, delay: 1.3 }}
        name="message" rows='6' placeholder='Enter your message' required
          className={`w-full p-4 outline-none border-[0.5px] border-gray-400 placeholder-gray-400 rounded-md bg-white mb-6 hover:shadow-black cursor-pointer
                 hover:bg-lightHover duration-500  ${isDarkMode ? 'bg-darkTheme hover:bg-darkHover' : 'hover:bg-lightHover'} `}></motion.textarea>

        <motion.button
        whileHover={{scale:1.05}}
        transition={{duration:0.3}}
        className={`py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 rounded-full mx-auto duration-500 
     ${isDarkMode ? 'hover:bg-darkHover text-white border border-white' : 'hover:bg-lightHover text-white hover:text-black'}`}
          type='submit'>Submit now <Image src={assets.right_arrow_white} alt='' className='w-4' /></motion.button>
        <p className='mt-4'>{result}</p>
      </motion.form>

    </motion.div>
  )
}

export default Contact