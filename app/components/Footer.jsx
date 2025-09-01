import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
function Footer({isDarkMode}) {
  return (
    <div className='mt-20'>
        <div className="text-center">
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/> 

            <div className="w-max flex items-center gap-2 mx-auto">
            <Image src={isDarkMode? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/> 
            mauryamithilesh1@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p> © 2025 created by Mithilesh Maurya </p>
            <ul className='flex items-center justify-center mt-4 gap-10 sm:mt-0'>
                <li>
                    <a target='_blank' href="https://github.com/mauryamithilesh2">Github</a>
                </li>
                <li>
                    <a target='_blank' href="https://www.linkedin.com/in/mithileshmaurya20/">LinkedIn</a>
                </li>
                <li>
                    <a target='_blank' href="https://www.geeksforgeeks.org/user/mauryamithilesh/">Gfg</a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Footer