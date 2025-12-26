import React from 'react'
import Logo from "../assets/logo.png";
import Footerimg from '../assets/footerimg.svg'
import { footer_data } from '../constants/ProgramData';


const Footer = () => {
  return (
    <div className='flex flex-col bg-gradient-to-r from-[#D80303] to-[#000000] gap-6 p-4 md:p-6'>
        <div className='max-w-7xl w-full mx-auto flex flex-col font-light font-raleway gap-3'>
            <p className='font-light font-raleway text-[32px] md:text-[42px] text-white max-w-xl leading-snug'>Let’s Build the Future of Your Business — Together.</p>
            <p className='text-[14px] md:text-[16px] text-white'> do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
            <button className='bg-white text-[12px] font-bold text-[#D80303] px-3 md:px-4 py-2 md:py-3 rounded-full w-fit'>Discover more</button>
        </div>

        <div className="flex flex-col md:flex-row max-w-7xl mx-auto w-full items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        <div>
          <img src={Logo} alt="" className="w-32 sm:w-38" />
          <p className="max-w-[410px] mt-6 font-raleway font-light text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full md:w-[45%] gap-5">
          {footer_data.map((section, index) => (
            <div key={index}>
                <h3 className="font-bold text-base text-white mb:mb-5 mb-2 font-raleway">
                    {section.title}
                </h3>
              <ul className="text-sm space-y-3">
                {section.links.map((link, i) => (
                  <li key={i} className='max-w-xs'>
                    <a href="#" className="hover:underline transition font-raleway font-light text-white">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-center gap-2 md:gap-0 items-center md:justify-between text-white font-light max-w-7xl mx-auto w-full'>
          <p className='text-[14px] md:text-[16px]'>© copyright 2020 by xxxx.com</p>

          <div className='flex gap-1'>
            <p className='text-[12px] md:text-[16px]'>Powered by</p>
            <img src={Footerimg} alt="" className='w-12 md:w-18' />
          </div>

          <ul className='hidden md:flex gap-3 text-[12px] md:text-[16px]'>
            <li>Content Privacy</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>

      </div>
    </div>
  )
}

export default Footer